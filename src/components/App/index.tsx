import React, { memo, useState } from 'react';
import cn from 'classnames';
import ClickAwayListener from '@Components/Layer/ClickAwayListener';
import Portal from '@Components/Layer/Portal';
import scopedStyle from './index.module.css';

function App(): React.ReactElement {
  /* States */
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [modelOpen, setModelOpen] = useState<boolean>(false);

  /* Main */
  return (
    <div className={cn(scopedStyle.mainApp)}>
      <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
        <div className={cn(scopedStyle.menuWrapper)}>
          <button onClick={() => setMenuOpen(!menuOpen)}>open drop menu</button>
          {menuOpen && <div className={cn(scopedStyle.menu)}>a drop menu</div>}
        </div>
      </ClickAwayListener>
      <Portal>
        <div className={cn(scopedStyle.menu)}>a box render by Portal</div>
      </Portal>
      <Portal>
        <div id="modelRoot">
          <div className={cn(scopedStyle.modelWrapper)}>
            <button onClick={() => setModelOpen(!modelOpen)}>
              open model in Portal
            </button>
            {modelOpen && (
              <React.Fragment>
                <div className={cn(scopedStyle.modelBackground)} />
                <ClickAwayListener onClickAway={() => setModelOpen(false)}>
                  <div className={cn(scopedStyle.portalModel)}>
                    a box render by Portal in ClickAwayListener
                  </div>
                </ClickAwayListener>
              </React.Fragment>
            )}
          </div>
        </div>
      </Portal>
    </div>
  );
}

export default memo(App);
