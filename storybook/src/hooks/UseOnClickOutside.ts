import { RefObject, useEffect, MutableRefObject } from "react"

function useOnClickOutside<T extends HTMLElement = HTMLDivElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;

      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event)
    }

    document.addEventListener('click', listener);
    document.addEventListener('touchleave', listener);

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchleave', listener);
    }
  }, [ref as MutableRefObject<T>, handler])
}

export default useOnClickOutside;