import React, { memo, useRef, useEffect } from 'react';
import type { ClickAwayListenerProps } from './types';

function ClickAwayListener(props: ClickAwayListenerProps): React.ReactElement {
  /* States */
  const {
    children,
    onClickAway,
    keydownTrigger = false,
    awayKey = 'Escape',
  } = props;
  const childrenRef = useRef<HTMLElement | null>(null);

  /* Functions */
  const checkClickTarget = (e: MouseEvent): void => {
    const target = e.target as Node;
    if (!childrenRef.current?.contains(target)) {
      onClickAway();
    }
  };
  const checkKey = (e: KeyboardEvent): void => {
    if (e.key === awayKey) {
      onClickAway();
    }
  };

  /* Hooks */
  useEffect(() => {
    document.addEventListener('click', checkClickTarget);
    return () => {
      document.removeEventListener('click', checkClickTarget);
    };
  }, []);
  useEffect(() => {
    if (keydownTrigger) {
      document.addEventListener('keydown', checkKey);
      return () => {
        document.removeEventListener('keydown', checkKey);
      };
    }
  }, [keydownTrigger]);

  /* Main */
  return React.cloneElement(children, { ref: childrenRef });
}

export default memo(ClickAwayListener);
