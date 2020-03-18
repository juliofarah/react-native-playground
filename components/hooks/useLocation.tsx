import { useState, useEffect } from "react";
import { Region } from "react-native-maps";

export default () => {
  const [location, setLocation] = useState<Region | undefined>(undefined);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: Position) => {
      const region: Region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.011,
        longitudeDelta: 0.011
      };

      setLocation(region);
    });
  });

  return [location];
};
