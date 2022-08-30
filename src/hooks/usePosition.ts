import React, { useEffect, useState } from "react";
import { GeoType } from "../ts/types";

const usePosition = () => {
  const [position, setPosition] = useState<GeoType>({ lat: null, lng: null });
  const [skip, setSkip] = useState(false);
  const geo = navigator.geolocation;

  useEffect(() => {
    if (geo)
      geo.getCurrentPosition(
        (location) => {
          setPosition({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          });
        },
        () => setSkip(true)
      );
  }, [geo]);

  return { position, skip };
};

export default usePosition;
