export interface Location {
  key: number;
  city: string;
  localizedName: string;
}

export interface Weather {
  weatherText: string;
  weatherIcon: number;
  temperature: number;
}

export async function getLocation(lat: number, lng: number): Promise<Location> {
  const response = await fetch(`/api/weather/location?lat=${lat}&lng=${lng}`, {
    method: "GET",
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.message ?? "위치 정보를 가져오지 못했습니다.");
  }

  return response.json();
}

export async function getWeather(key: number): Promise<Weather> {
  const response = await fetch(`/api/weather/current?key=${key}`, {
    method: "GET",
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.message ?? "날씨 정보를 가져오지 못했습니다.");
  }

  return response.json();
}
