import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Control as LeafControl, LatLng, Map as LeafletMap } from 'leaflet';
import RoutineMachineLayer from '../RoutineMachine/RoutineMachineLayer';
import { useSelector } from 'react-redux';
import { routingSelector } from '../../store/selectors/selectors';
import css from './Map.module.css';
import 'leaflet/dist/leaflet.css';

interface Control extends LeafControl {
  setWaypoints: (waypoints: LatLng[]) => Control;
}

const Map = () => {
  const { selected } = useSelector(routingSelector);
  const mapRef = useRef<LeafletMap>(null);
  const machineRef = useRef<Control>(null);

  useEffect(() => {
    mapRef.current?.invalidateSize();
  });

  useEffect(() => {
    machineRef.current?.setWaypoints([selected.start.point, selected.end.point]);
  }, [machineRef, selected]);

  return (
    <MapContainer ref={mapRef} className={css.wrapper} center={[59.93848, 30.312481]} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {selected && <RoutineMachineLayer ref={machineRef} start={selected.start.point} end={selected.end.point} />}
    </MapContainer>
  );
};

export default Map;
