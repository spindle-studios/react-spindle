import { useCallback, useEffect } from 'react';

export const useOnKeypress = ({
  key,
  useShift,
  useCtrl,
  useMeta,
  useAlt,
  shouldSkip,
  onPress,
}: {
  key: string;
  useShift?: boolean;
  useCtrl?: boolean;
  useMeta?: boolean;
  useAlt?: boolean;
  shouldSkip?: boolean;
  onPress: Function;
}) => {
  const handleKeyPress = useCallback(
    async (event: KeyboardEvent) => {
      if (shouldSkip) return;

      const isShiftPressed = useShift === undefined ? true : event.shiftKey === useShift;
      const isCtrlPressed = useCtrl === undefined ? true : event.ctrlKey === useCtrl;
      const isMetaPressed = useMeta === undefined ? true : event.metaKey === useMeta;
      const isAltPressed = useAlt === undefined ? true : event.altKey === useAlt;

      if (
        isShiftPressed &&
        isCtrlPressed &&
        isMetaPressed &&
        isAltPressed &&
        event.code === key &&
        event.shiftKey === !!useShift &&
        event.ctrlKey === !!useCtrl &&
        event.metaKey === !!useMeta &&
        event.altKey === !!useAlt
      ) {
        event.preventDefault();
        onPress();
      }
    },
    [key, useShift, useCtrl, useMeta, useAlt, onPress, shouldSkip],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);
};
