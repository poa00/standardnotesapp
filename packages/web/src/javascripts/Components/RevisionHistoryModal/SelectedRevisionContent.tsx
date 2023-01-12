import { WebApplication } from '@/Application/Application'
import { ContentType, NoteType, SNNote } from '@standardnotes/snjs'
import { observer } from 'mobx-react-lite'
import { FunctionComponent, useEffect, useMemo } from 'react'
import ComponentView from '@/Components/ComponentView/ComponentView'
import { NotesController } from '@/Controllers/NotesController/NotesController'
import { NoteHistoryController } from '@/Controllers/NoteHistory/NoteHistoryController'
import { ErrorBoundary } from '@/Utils/ErrorBoundary'
import { BlocksEditorComposer, BlocksEditor } from '@standardnotes/blocks-editor'
import { FileNode } from '../NoteView/SuperEditor/Plugins/EncryptedFilePlugin/Nodes/FileNode'
import { BubbleNode } from '../NoteView/SuperEditor/Plugins/ItemBubblePlugin/Nodes/BubbleNode'

const ABSOLUTE_CENTER_CLASSNAME = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'

type SelectedRevisionContentProps = {
  application: WebApplication
  noteHistoryController: NoteHistoryController
  notesController: NotesController
}

const SelectedRevisionContent: FunctionComponent<SelectedRevisionContentProps> = ({
  application,
  noteHistoryController,
  notesController,
}) => {
  const note = notesController.firstSelectedNote
  const { selectedRevision } = noteHistoryController

  const componentViewer = useMemo(() => {
    const editorForCurrentNote = note ? application.componentManager.editorForNote(note) : undefined

    if (!editorForCurrentNote) {
      return undefined
    }

    const templateNoteForRevision = application.mutator.createTemplateItem(
      ContentType.Note,
      selectedRevision?.payload.content,
    ) as SNNote

    const componentViewer = application.componentManager.createComponentViewer(editorForCurrentNote)
    componentViewer.setReadonly(true)
    componentViewer.lockReadonly = true
    componentViewer.overrideContextItem = templateNoteForRevision
    return componentViewer
  }, [application.componentManager, application.mutator, note, selectedRevision?.payload.content])

  useEffect(() => {
    return () => {
      if (componentViewer) {
        application.componentManager.destroyComponentViewer(componentViewer)
      }
    }
  }, [application, componentViewer])

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="w-full p-4 text-base font-bold">
        <div className="title">{selectedRevision?.payload.content.title}</div>
      </div>
      {componentViewer ? (
        <div className="component-view">
          <ComponentView key={componentViewer.identifier} componentViewer={componentViewer} application={application} />
        </div>
      ) : note?.noteType === NoteType.Super ? (
        <ErrorBoundary>
          <div className="blocks-editor w-full flex-grow overflow-hidden overflow-y-auto p-4">
            <BlocksEditorComposer
              readonly
              initialValue={selectedRevision?.payload.content.text}
              nodes={[FileNode, BubbleNode]}
            >
              <BlocksEditor
                readonly
                className="relative resize-none text-base focus:shadow-none focus:outline-none"
                spellcheck={note.spellcheck}
              ></BlocksEditor>
            </BlocksEditorComposer>
          </div>
        </ErrorBoundary>
      ) : (
        <div className="relative min-h-0 flex-grow overflow-hidden">
          {selectedRevision?.payload.content.text.length ? (
            <textarea
              readOnly={true}
              className="font-editor h-full w-full resize-none border-0 bg-default p-4 pt-0 text-editor text-text"
              value={selectedRevision?.payload.content.text}
            />
          ) : (
            <div className={`text-passive-0 ${ABSOLUTE_CENTER_CLASSNAME}`}>Empty note.</div>
          )}
        </div>
      )}
    </div>
  )
}

export default observer(SelectedRevisionContent)