import React, { memo, useRef, useEffect } from 'react';
import type { ClickAwayListenerProps } from './types';

function ClickAwayListener(props: ClickAwayListenerProps): React.ReactElement {
  /* States */
  const { children, onClickAway } = props;
  const childrenRef = useRef<HTMLElement | null>(null);

  /* Functions */
  const checkClickTarget = (e: MouseEvent): void => {
    const target = e.target as Node;
    if (!childrenRef.current?.contains(target)) {
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

  /* Main */
  return React.cloneElement(children, { ref: childrenRef });
}

export default memo(ClickAwayListener);
