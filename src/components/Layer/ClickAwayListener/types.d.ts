export interface ClickAwayListenerProps {
  children: React.ReactElement;
  onClickAway: () => void;
  keydownTrigger?: boolean;
  awayKey?: string;
}
