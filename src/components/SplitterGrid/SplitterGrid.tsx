import React, { useRef } from 'react';
import css from './SplitterGrid.module.css';
import { useSplitter } from '../../hooks/useSplitter';
import Map from '../Map/Map';
import Table from '../Table/Table';

const SplitterGrid = () => {
  const refWrapper = useRef<HTMLDivElement>(null);
  const refSplitter = useRef<HTMLDivElement>(null);

  const { width, handleDown } = useSplitter(refWrapper, refSplitter);

  return (
    <div ref={refWrapper} className={css.wrapper}>
      <div className={`${css.left} ${css.box}`}>
        <Table />
      </div>
      <div ref={refSplitter} className={css.splitter} onMouseDown={handleDown} />
      <div className={`${css.right} ${css.box}`} style={{ width }}>
        <Map />
      </div>
    </div>
  );
};

export default SplitterGrid;
