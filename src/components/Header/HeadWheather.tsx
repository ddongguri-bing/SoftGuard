"use client";

import { getLocation, getWeather, type Weather } from "@/utils/weatherApi";
import { useEffect, useState } from "react";

interface GeoLocation {
  latitude: number | null;
  longitude: number | null;
}
interface LocationData {
  key: number;
  city: string;
  localizedName: string;
}

export default function HeadWheather() {
  const [location, setLocation] = useState<GeoLocation>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("이 브라우저는 Geolocation을 지원하지 않습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (e) => setError(e.message),
    );
  }, []);

  useEffect(() => {
    async function run() {
      if (location.latitude === null || location.longitude === null) return;

      setLoading(true);
      setError(null);

      try {
        const loc = await getLocation(location.latitude, location.longitude);
        setLocationData(loc);

        const weather = await getWeather(loc.key);
        setWeatherData(weather);
      } catch (e) {
        setError(
          e instanceof Error
            ? e.message
            : "날씨 정보를 가져오는 중 오류가 발생했습니다.",
        );
      } finally {
        setLoading(false);
      }
    }

    run();
  }, [location]);

  if (loading) return <div>날씨 정보를 불러오는 중...</div>;
  if (error) return <div>오류: {error}</div>;

  return (
    <div className="text-body-medium flex gap-2.5">
      {locationData && (
        <div className="text-body-medium-bold">
          {locationData.localizedName}
        </div>
      )}
      {weatherData && <div>{weatherData.temperature}°C</div>}
    </div>
  );
}
