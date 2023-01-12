import { RefCallback, useEffect, useState } from 'react'
import { AnimationConfig } from '../Constants/AnimationConfigs'
import { useStateRef } from './useStateRef'

type Options = {
  open: boolean
  enter: AnimationConfig
  enterCallback?: (element: HTMLElement) => void
  exit: AnimationConfig
  exitCallback?: (element: HTMLElement) => void
}

/**
 * A hook that animates an element when it mounts and unmounts.
 * Does not handle DOM insertion/removal. Use the `isMounted` return value to conditionally render the element.
 * @param open Whether the element is open or not
 * @param enter The animation to play when the element mounts
 * @param enterCallback A callback to run after the enter animation finishes
 * @param exit The animation to play when the element unmounts
 * @param exitCallback A callback to run after the exit animation finishes
 * @returns A tuple containing whether the element can be mounted and a ref callback to set the element
 */
export const useLifecycleAnimation = ({
  open,
  enter,
  enterCallback,
  exit,
  exitCallback,
}: Options): [boolean, RefCallback<HTMLElement | null>] => {
  const [element, setElement] = useState<HTMLElement | null>(null)

  const [isMounted, setIsMounted] = useState(() => open)
  useEffect(() => {
    if (open) {
      setIsMounted(open)
    }
  }, [open])

  // Using "state ref"s to prevent changes from re-running the effect below
  // We only want changes to `open` and `element` to re-run the effect
  const enterRef = useStateRef(enter)
  const enterCallbackRef = useStateRef(enterCallback)
  const exitRef = useStateRef(exit)
  const exitCallbackRef = useStateRef(exitCallback)

  useEffect(() => {
    if (!element) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setIsMounted(open)
      return
    }

    const enter = enterRef.current
    const enterCallback = enterCallbackRef.current
    const exit = exitRef.current
    const exitCallback = exitCallbackRef.current

    if (open) {
      if (enter.initialStyle) {
        Object.assign(element.style, enter.initialStyle)
      }
      const animation = element.animate(enter.keyframes, {
        ...enter.options,
        fill: 'forwards',
      })
      animation.finished
        .then(() => {
          enterCallback?.(element)
        })
        .catch(console.error)
    } else {
      if (exit.initialStyle) {
        Object.assign(element.style, exit.initialStyle)
      }
      const animation = element.animate(exit.keyframes, {
        ...exit.options,
        fill: 'forwards',
      })
      animation.finished
        .then(() => {
          setIsMounted(false)
          exitCallback?.(element)
        })
        .catch(console.error)
    }
  }, [open, element, enterRef, enterCallbackRef, exitRef, exitCallbackRef])

  return [isMounted, setElement]
}
