/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import './index.css'

import { $isCodeHighlightNode } from '@lexical/code'
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { mergeRegister, $findMatchingParent, $getNearestNodeOfType } from '@lexical/utils'
import {
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  COMMAND_PRIORITY_LOW,
  FORMAT_TEXT_COMMAND,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND,
  $isRootOrShadowRoot,
  COMMAND_PRIORITY_CRITICAL,
} from 'lexical'
import { $isHeadingNode } from '@lexical/rich-text'
import {
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode,
  INSERT_ORDERED_LIST_COMMAND,
} from '@lexical/list'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { getDOMRangeRect } from '../../Utils/getDOMRangeRect'
import { getSelectedNode } from '../../Utils/getSelectedNode'
import { setFloatingElemPosition } from '../../Utils/setFloatingElemPosition'
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  CodeIcon,
  LinkIcon,
  SuperscriptIcon,
  SubscriptIcon,
  ListBulleted,
  ListNumbered,
} from '@standardnotes/icons'
import { IconComponent } from '../../Theme/IconComponent'
import { sanitizeUrl } from '../../Utils/sanitizeUrl'

const blockTypeToBlockName = {
  bullet: 'Bulleted List',
  check: 'Check List',
  code: 'Code Block',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6',
  number: 'Numbered List',
  paragraph: 'Normal',
  quote: 'Quote',
}

const IconSize = 15

function TextFormatFloatingToolbar({
  editor,
  anchorElem,
  isLink,
  isBold,
  isItalic,
  isUnderline,
  isCode,
  isStrikethrough,
  isSubscript,
  isSuperscript,
  isBulletedList,
  isNumberedList,
}: {
  editor: LexicalEditor
  anchorElem: HTMLElement
  isBold: boolean
  isCode: boolean
  isItalic: boolean
  isLink: boolean
  isStrikethrough: boolean
  isSubscript: boolean
  isSuperscript: boolean
  isUnderline: boolean
  isBulletedList: boolean
  isNumberedList: boolean
}): JSX.Element {
  const popupCharStylesEditorRef = useRef<HTMLDivElement | null>(null)

  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.update(() => {
        const selection = $getSelection()
        const textContent = selection?.getTextContent()
        if (!textContent) {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://')
          return
        }
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl(textContent))
      })
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null)
    }
  }, [editor, isLink])

  const formatBulletList = useCallback(() => {
    if (!isBulletedList) {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined)
    }
  }, [editor, isBulletedList])

  const formatNumberedList = useCallback(() => {
    if (!isNumberedList) {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined)
    }
  }, [editor, isNumberedList])

  const updateTextFormatFloatingToolbar = useCallback(() => {
    const selection = $getSelection()

    const popupCharStylesEditorElem = popupCharStylesEditorRef.current
    const nativeSelection = window.getSelection()

    if (popupCharStylesEditorElem === null) {
      return
    }

    const rootElement = editor.getRootElement()
    if (
      selection !== null &&
      nativeSelection !== null &&
      !nativeSelection.isCollapsed &&
      rootElement !== null &&
      rootElement.contains(nativeSelection.anchorNode)
    ) {
      const rangeRect = getDOMRangeRect(nativeSelection, rootElement)

      setFloatingElemPosition(rangeRect, popupCharStylesEditorElem, anchorElem)
    }
  }, [editor, anchorElem])

  useEffect(() => {
    const scrollerElem = anchorElem.parentElement

    const update = () => {
      editor.getEditorState().read(() => {
        updateTextFormatFloatingToolbar()
      })
    }

    window.addEventListener('resize', update)
    if (scrollerElem) {
      scrollerElem.addEventListener('scroll', update)
    }

    return () => {
      window.removeEventListener('resize', update)
      if (scrollerElem) {
        scrollerElem.removeEventListener('scroll', update)
      }
    }
  }, [editor, updateTextFormatFloatingToolbar, anchorElem])

  useEffect(() => {
    editor.getEditorState().read(() => {
      updateTextFormatFloatingToolbar()
    })
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateTextFormatFloatingToolbar()
        })
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateTextFormatFloatingToolbar()
          return false
        },
        COMMAND_PRIORITY_LOW,
      ),
    )
  }, [editor, updateTextFormatFloatingToolbar])

  return (
    <div ref={popupCharStylesEditorRef} className="floating-text-format-popup">
      {editor.isEditable() && (
        <>
          <button
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
            }}
            className={'popup-item spaced ' + (isBold ? 'active' : '')}
            aria-label="Format text as bold"
          >
            <IconComponent size={IconSize}>
              <BoldIcon />
            </IconComponent>
          </button>
          <button
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
            }}
            className={'popup-item spaced ' + (isItalic ? 'active' : '')}
            aria-label="Format text as italics"
          >
            <IconComponent size={IconSize}>
              <ItalicIcon />
            </IconComponent>
          </button>
          <button
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
            }}
            className={'popup-item spaced ' + (isUnderline ? 'active' : '')}
            aria-label="Format text to underlined"
          >
            <IconComponent size={IconSize + 1}>
              <UnderlineIcon />
            </IconComponent>
          </button>
          <button
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')
            }}
            className={'popup-item spaced ' + (isStrikethrough ? 'active' : '')}
            aria-label="Format text with a strikethrough"
          >
            <IconComponent size={IconSize}>
              <StrikethroughIcon />
            </IconComponent>
          </button>
          <button
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'subscript')
            }}
            className={'popup-item spaced ' + (isSubscript ? 'active' : '')}
            title="Subscript"
            aria-label="Format Subscript"
          >
            <IconComponent paddingTop={4} size={IconSize - 2}>
              <SubscriptIcon />
            </IconComponent>
          </button>
          <button
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'superscript')
            }}
            className={'popup-item spaced ' + (isSuperscript ? 'active' : '')}
            title="Superscript"
            aria-label="Format Superscript"
          >
            <IconComponent paddingTop={1} size={IconSize - 2}>
              <SuperscriptIcon />
            </IconComponent>
          </button>
          <button
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')
            }}
            className={'popup-item spaced ' + (isCode ? 'active' : '')}
            aria-label="Insert code block"
          >
            <IconComponent size={IconSize}>
              <CodeIcon />
            </IconComponent>
          </button>
          <button
            onClick={insertLink}
            className={'popup-item spaced ' + (isLink ? 'active' : '')}
            aria-label="Insert link"
          >
            <IconComponent size={IconSize}>
              <LinkIcon />
            </IconComponent>
          </button>
          <button
            onClick={formatBulletList}
            className={'popup-item spaced ' + (isBulletedList ? 'active' : '')}
            aria-label="Insert bulleted list"
          >
            <IconComponent size={IconSize}>
              <ListBulleted />
            </IconComponent>
          </button>
          <button
            onClick={formatNumberedList}
            className={'popup-item spaced ' + (isNumberedList ? 'active' : '')}
            aria-label="Insert numbered list"
          >
            <IconComponent size={IconSize}>
              <ListNumbered />
            </IconComponent>
          </button>
        </>
      )}
    </div>
  )
}

function useFloatingTextFormatToolbar(editor: LexicalEditor, anchorElem: HTMLElement): JSX.Element | null {
  const [activeEditor, setActiveEditor] = useState(editor)
  const [isText, setIsText] = useState(false)
  const [isLink, setIsLink] = useState(false)
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isStrikethrough, setIsStrikethrough] = useState(false)
  const [isSubscript, setIsSubscript] = useState(false)
  const [isSuperscript, setIsSuperscript] = useState(false)
  const [isCode, setIsCode] = useState(false)
  const [blockType, setBlockType] = useState<keyof typeof blockTypeToBlockName>('paragraph')

  const updatePopup = useCallback(() => {
    editor.getEditorState().read(() => {
      // Should not to pop up the floating toolbar when using IME input
      if (editor.isComposing()) {
        return
      }
      const selection = $getSelection()
      const nativeSelection = window.getSelection()
      const rootElement = editor.getRootElement()

      if (
        nativeSelection !== null &&
        (!$isRangeSelection(selection) || rootElement === null || !rootElement.contains(nativeSelection.anchorNode))
      ) {
        setIsText(false)
        return
      }

      if (!$isRangeSelection(selection)) {
        return
      }

      const anchorNode = selection.anchor.getNode()
      let element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : $findMatchingParent(anchorNode, (e) => {
              const parent = e.getParent()
              return parent !== null && $isRootOrShadowRoot(parent)
            })

      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow()
      }

      const elementKey = element.getKey()
      const elementDOM = activeEditor.getElementByKey(elementKey)

      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType<ListNode>(anchorNode, ListNode)
          const type = parentList ? parentList.getListType() : element.getListType()
          setBlockType(type)
        } else {
          const type = $isHeadingNode(element) ? element.getTag() : element.getType()
          if (type in blockTypeToBlockName) {
            setBlockType(type as keyof typeof blockTypeToBlockName)
          }
        }
      }

      const node = getSelectedNode(selection)

      // Update text format
      setIsBold(selection.hasFormat('bold'))
      setIsItalic(selection.hasFormat('italic'))
      setIsUnderline(selection.hasFormat('underline'))
      setIsStrikethrough(selection.hasFormat('strikethrough'))
      setIsSubscript(selection.hasFormat('subscript'))
      setIsSuperscript(selection.hasFormat('superscript'))
      setIsCode(selection.hasFormat('code'))

      // Update links
      const parent = node.getParent()
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true)
      } else {
        setIsLink(false)
      }

      if (!$isCodeHighlightNode(selection.anchor.getNode()) && selection.getTextContent() !== '') {
        setIsText($isTextNode(node))
      } else {
        setIsText(false)
      }
    })
  }, [editor, activeEditor])

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        setActiveEditor(newEditor)
        updatePopup()
        return false
      },
      COMMAND_PRIORITY_CRITICAL,
    )
  }, [editor, updatePopup])

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(() => {
        updatePopup()
      }),
      editor.registerRootListener(() => {
        if (editor.getRootElement() === null) {
          setIsText(false)
        }
      }),
    )
  }, [editor, updatePopup])

  if (!isText || isLink) {
    return null
  }

  return createPortal(
    <TextFormatFloatingToolbar
      editor={editor}
      anchorElem={anchorElem}
      isLink={isLink}
      isBold={isBold}
      isItalic={isItalic}
      isStrikethrough={isStrikethrough}
      isSubscript={isSubscript}
      isSuperscript={isSuperscript}
      isUnderline={isUnderline}
      isCode={isCode}
      isBulletedList={blockType === 'bullet'}
      isNumberedList={blockType === 'number'}
    />,
    anchorElem,
  )
}

export default function FloatingTextFormatToolbarPlugin({
  anchorElem = document.body,
}: {
  anchorElem?: HTMLElement
}): JSX.Element | null {
  const [editor] = useLexicalComposerContext()
  return useFloatingTextFormatToolbar(editor, anchorElem)
}