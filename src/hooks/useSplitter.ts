import { RefObject, useCallback, useEffect, useState } from 'react';

type GetWidthType = {
  wrapperRect: DOMRect;
  splitterRect: DOMRect;
  position: { left: number; top: number };
  offsetMouse?: boolean;
};

export function useSplitter(
  wrapper: RefObject<HTMLElement>,
  splitter: RefObject<HTMLElement>,
): { width: number; handleDown: () => void } {
  const [resizing, setResizing] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  const getWidth = useCallback(({ wrapperRect, splitterRect, position, offsetMouse = false }: GetWidthType): number => {
    const totalSize = wrapperRect.width;
    const splitterSize = splitterRect.width;
    let offset = position.left - wrapperRect.left;
    if (offsetMouse) {
      offset -= splitterSize / 2;
    }
    if (offset < 0) {
      offset = 0;
    } else if (offset > totalSize - splitterSize) {
      offset = totalSize - splitterSize;
    }

    return totalSize - splitterSize - offset;
  }, []);
  const getRects = (
    wrapper: RefObject<HTMLElement>,
    splitter: RefObject<HTMLElement>,
  ): { wrapperRect: DOMRect; splitterRect: DOMRect } | undefined => {
    const [wrap, split] = [wrapper.current, splitter.current];
    if (wrap && split) {
      const wrapperRect = wrap.getBoundingClientRect();
      const splitterRect = split.getBoundingClientRect();

      return { wrapperRect, splitterRect };
    }
  };

  const handleUp = useCallback(() => setResizing(false), []);
  const handleDown = useCallback(() => setResizing(true), []);
  const handleMove = useCallback(
    (e: MouseEvent): void => {
      if (resizing) {
        const boxes = getRects(wrapper, splitter);
        if (boxes) {
          const newWidth = getWidth({ ...boxes, position: { left: e.clientX, top: e.clientY }, offsetMouse: true });

          setWidth(newWidth);
        }
      }
    },
    [resizing, wrapper.current, splitter.current],
  );

  useEffect(() => {
    document.addEventListener('mouseup', handleUp);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleUp);
    return () => {
      document.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleUp);
    };
  }, [handleUp, handleMove]);

  useEffect(() => {
    const boxes = getRects(wrapper, splitter);
    if (boxes) {
      const { wrapperRect, splitterRect } = boxes;
      const newWidth = getWidth({
        ...boxes,
        position: {
          left: wrapperRect.left + (wrapperRect.width - splitterRect.width) / 2,
          top: wrapperRect.top + (wrapperRect.height - splitterRect.height) / 2,
        },
      });

      setWidth(newWidth);
    }
  }, [wrapper.current, splitter.current]);

  return { width, handleDown };
}
