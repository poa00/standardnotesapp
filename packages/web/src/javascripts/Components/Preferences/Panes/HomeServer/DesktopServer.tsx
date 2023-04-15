import { Text, Title } from '@/Components/Preferences/PreferencesComponents/Content'
import PreferencesPane from '../../PreferencesComponents/PreferencesPane'
import PreferencesGroup from '../../PreferencesComponents/PreferencesGroup'
import PreferencesSegment from '../../PreferencesComponents/PreferencesSegment'
import { useApplication } from '@/Components/ApplicationProvider'
import Button from '@/Components/Button/Button'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import HorizontalSeparator from '@/Components/Shared/HorizontalSeparator'
import { DesktopServerStatus } from '@standardnotes/snjs'
import { Subtitle } from '@/Components/Preferences/PreferencesComponents/Content'

const DesktopServer = () => {
  const application = useApplication()
  const desktopDevice = application.desktopDevice
  const [status, setStatus] = useState<DesktopServerStatus>()
  const [showLogs, setShowLogs] = useState(false)
  const [logs, setLogs] = useState<string[]>([])
  const logsTextarea = useRef<HTMLTextAreaElement>(null)
  const [isAtBottom, setIsAtBottom] = useState(true)

  const refreshStatus = useCallback(async () => {
    if (desktopDevice) {
      const result = await desktopDevice.desktopServerStatus()
      setStatus(result)
    }
  }, [desktopDevice])

  useEffect(() => {
    void refreshStatus()
  }, [refreshStatus])

  useEffect(() => {
    if (showLogs) {
      const interval = setInterval(async () => {
        if (desktopDevice) {
          const result = await desktopDevice.desktopServerGetLogs()
          setLogs(result)
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [showLogs, desktopDevice])

  const handleShowLogs = () => {
    setShowLogs(!showLogs)
  }

  function isTextareaScrolledToBottom(textarea: HTMLTextAreaElement) {
    const { scrollHeight, scrollTop, clientHeight } = textarea
    const scrolledToBottom = scrollTop + clientHeight >= scrollHeight
    return scrolledToBottom
  }

  useLayoutEffect(() => {
    if (logsTextarea.current) {
      setIsAtBottom(isTextareaScrolledToBottom(logsTextarea.current))
    }
  }, [logs])

  useEffect(() => {
    const handleScroll = () => {
      if (logsTextarea.current) {
        setIsAtBottom(isTextareaScrolledToBottom(logsTextarea.current))
      }
    }

    const textArea = logsTextarea.current

    if (textArea) {
      textArea.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (textArea) {
        textArea.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  useEffect(() => {
    if (logsTextarea.current && isAtBottom) {
      logsTextarea.current.scrollTop = logsTextarea.current.scrollHeight
    }
  }, [logs, isAtBottom])

  const getStatusString = useCallback(() => {
    if (!status) {
      return undefined
    }

    if (status.status === 'on') {
      return (
        <Text>
          Accessible on local network via{' '}
          <a target="_blank" className="font-bold text-info" href={status.url}>
            {status.url}
          </a>
          {'.'}
        </Text>
      )
    } else if (status.status === 'error') {
      return <Text>'Error'</Text>
    } else if (status.status === 'off') {
      return <Text>'Not started'</Text>
    } else {
      return <Text>'Unknown'</Text>
    }
  }, [status])

  if (!desktopDevice) {
    return (
      <PreferencesPane>
        <PreferencesGroup>
          <PreferencesSegment>
            <Title>Home Server</Title>
            <Text>To configure your desktop server, use the Standard Notes desktop application.</Text>
            <div className="h-2 w-full" />
          </PreferencesSegment>
        </PreferencesGroup>
      </PreferencesPane>
    )
  }

  return (
    <PreferencesPane>
      <PreferencesGroup>
        <PreferencesSegment>
          <Title>Home Server</Title>
          {status ? getStatusString() : <Text>Status unavailable</Text>}
          <div className="mt-3 flex flex-row flex-wrap gap-3">
            <Button label="Install" onClick={() => desktopDevice.desktopServerInstall()} />
            <Button label="Start" onClick={() => desktopDevice.desktopServerStart()} />
            <Button label="Stop" onClick={() => desktopDevice.desktopServerStop()} />
            <Button label="Restart" onClick={() => desktopDevice.desktopServerRestart()} />
            <Button label="Open Data" onClick={() => desktopDevice.desktopServerOpenDataDirectory()} />
            <Button label="Refresh Status" onClick={() => refreshStatus()} />
            <Button label={showLogs ? 'Hide Logs' : 'Show Logs'} onClick={handleShowLogs} />
          </div>

          {showLogs && (
            <div className="flex flex-col">
              <HorizontalSeparator classes="mt-3" />
              <textarea
                ref={logsTextarea}
                disabled={true}
                className="h-[500px] overflow-y-auto whitespace-pre-wrap bg-contrast p-2"
                value={logs.join('\n')}
              />
              <HorizontalSeparator classes="mb-3" />
              <Button label="Clear" onClick={() => desktopDevice.desktopServerClearLogs()} />
            </div>
          )}
          <div className="h-2 w-full" />
        </PreferencesSegment>
      </PreferencesGroup>

      <PreferencesGroup>
        <PreferencesSegment>
          <Title>Account Transfer Tool</Title>
          <Subtitle>Migrate your data from another server to your home server.</Subtitle>
        </PreferencesSegment>
      </PreferencesGroup>
    </PreferencesPane>
  )
}

export default DesktopServer