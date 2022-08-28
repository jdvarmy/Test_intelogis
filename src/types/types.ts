export type RoutingType = {
  key: string;
  name: string;
  start: PointType;
  end: PointType;
};

export type PointType = {
  name: string;
  point: [number, number];
};
