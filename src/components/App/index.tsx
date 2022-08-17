import React, { memo, useState } from 'react';
import cn from 'classnames';
import ClickAwayListener from '@Components/Layer/ClickAwayListener';
import scopedStyle from './index.module.css';

function App(): React.ReactElement {
  /* States */
  const [open, setOpen] = useState<boolean>(false);

  /* Function */
  const toggleBox = (): void => {
    setOpen(!open);
  };
  const closeBox = (): void => {
    setOpen(false);
  };

  /* Main */
  return (
    <div className={cn(scopedStyle.mainApp)}>
      <ClickAwayListener onClickAway={closeBox}>
        <div className={cn(scopedStyle.menuWrapper)}>
          <button onClick={toggleBox}>click me</button>
          {open && (
            <div className={cn(scopedStyle.menu)}>a box attach to button</div>
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
}

export default memo(App);
