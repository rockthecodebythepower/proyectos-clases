import { useState } from "react";

export const useModal = () => {
  const [openned, setOpenned] = useState(false);

  const open = () => {
    setOpenned(true);
  };

  const close = () => {
    setOpenned(false);
  };

  return {
    open,
    close,
    openned,
  };
};
