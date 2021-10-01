import { useState, useMemo } from 'react';

export const useHover = () => {
  const [hovered, setHovered] = useState(false);

  const eventHandlers = useMemo(
    () => ({
      onMouseEnter() {
        setHovered(true);
      },
      onMouseLeave() {
        setHovered(false);
      },
    }),
    []
  );

  return { hovered, eventHandlers };
};
