import { useState } from "react";

export default function useShowable(shown, baseClassName = "") {
  const [isShown, setIsShown] = useState(shown);
  const className = `${baseClassName}${isShown ? "" : " hidden"}`;

  return {
    isShown,
    toggleShown: () => setIsShown(!isShown),
    setIsShown,
    className,
  };
}