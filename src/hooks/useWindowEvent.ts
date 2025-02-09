import { useEffect } from 'react';

export default function useWindowEvent(type: string, listener: EventListenerOrEventListenerObject, options: boolean) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options]);
}