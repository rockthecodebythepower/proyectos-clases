import { useState } from "react";

export const useDoor = (INITIAL_STATE = false) => {
  const [openned, setOpenned] = useState(INITIAL_STATE);

  const open = () => {
    setOpenned(true);
  };

  const close = () => {
    setOpenned(false);
  };

  const alternate = () => {
    setOpenned(!openned);
  };

  return {
    open,
    close,
    alternate,
    openned,
  };
};
