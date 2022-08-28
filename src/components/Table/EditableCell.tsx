import React from 'react';
import css from './Table.module.css';
import routingPointsMock from '../../store/mock/routingPointsMock';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { changePoint } from '../../store/actions/routing/routingActions';
import { PointType, RoutingType } from '../../types/types';

type Props = {
  item: PointType;
  record: RoutingType;
  type: 'start' | 'end';
};

const EditableCell = ({ item, record, type }: Props) => {
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    dispatch(changePoint(JSON.parse(value)));
  };

  return (
    <Select defaultValue={JSON.stringify({ ...record, [type]: item })} className={css.select} onChange={handleChange}>
      {routingPointsMock.map((i) => (
        <Select.Option key={i.name} value={JSON.stringify({ ...record, [type]: i })}>
          {i.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default EditableCell;
