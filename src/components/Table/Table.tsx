import React, { Key, memo, useCallback } from 'react';
import { Table as AntTable } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { routingSelector } from '../../store/selectors/selectors';
import { RoutingType } from '../../types/types';
import { RowSelectionType } from 'antd/lib/table/interface';
import { changeSelectedRouting } from '../../store/actions/routing/routingActions';
import { columns } from './columns';

const Table = () => {
  const dispatch = useDispatch();
  const { routing, selected } = useSelector(routingSelector);

  const onSelectChange = useCallback(
    (selectedKeys: Key[], selectedItems: RoutingType[]) => dispatch(changeSelectedRouting(selectedItems[0])),
    [dispatch],
  );

  const rowSelection = { type: 'radio' as RowSelectionType, selected: selected?.key, onChange: onSelectChange };

  return (
    <div>
      <AntTable columns={columns} dataSource={routing} rowSelection={rowSelection} scroll={{ x: 400 }} />
    </div>
  );
};

export default memo(Table);
