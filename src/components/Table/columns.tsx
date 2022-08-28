import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { RoutingType } from '../../types/types';
import EditableCell from './EditableCell';

export const columns: ColumnsType<RoutingType> = [
  { title: 'Название', dataIndex: 'name', key: 'name', width: 100 },
  {
    title: 'Погрузка',
    dataIndex: 'start',
    key: 'start',
    width: 100,
    render: (item, record) => <EditableCell item={item} record={record} type='start' />,
  },
  {
    title: 'Разгрузка',
    dataIndex: 'end',
    key: 'end',
    width: 100,
    render: (item, record) => <EditableCell item={item} record={record} type='end' />,
  },
];
