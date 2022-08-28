import L, { Control, ControlOptions } from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';
import { PointType } from '../../types/types';

type Props = { start: PointType['point']; end: PointType['point'] };

const RoutingMachineLayer = createControlComponent<Control, ControlOptions & Props>((props) => {
  return L.Routing.control({
    waypoints: [L.latLng(props.start), L.latLng(props.end)],
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
    draggableWaypoints: false,
    createMarker: function (i: number, waypoint: any) {
      return L.marker(waypoint.latLng, {
        icon: L.icon({
          iconUrl: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        }),
      });
    },
  } as any);
});

export default RoutingMachineLayer;
