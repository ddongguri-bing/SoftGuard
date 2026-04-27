import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://dataservice.accuweather.com";

export async function GET(req: NextRequest) {
  try {
    const key = req.nextUrl.searchParams.get("key");

    if (!key) {
      return NextResponse.json(
        { message: "key query가 필요합니다." },
        { status: 400 },
      );
    }

    const apiKey = process.env.ACCUWEATHER_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { message: "서버 환경변수 ACCUWEATHER_KEY가 없습니다." },
        { status: 500 },
      );
    }

    const url = `${BASE_URL}/currentconditions/v1/${encodeURIComponent(
      key,
    )}?language=ko-kr`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Accept-Encoding": "gzip,deflate",
      },
      next: { revalidate: 300 },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: "AccuWeather current API 실패", details: data },
        { status: response.status },
      );
    }

    const item = Array.isArray(data) ? data[0] : null;
    if (!item) {
      return NextResponse.json(
        { message: "현재 날씨 데이터가 비어 있습니다." },
        { status: 502 },
      );
    }

    const weather = {
      weatherText: item.WeatherText,
      weatherIcon: item.WeatherIcon,
      temperature: item.Temperature?.Metric?.Value,
    };

    return NextResponse.json(weather);
  } catch (error) {
    return NextResponse.json(
      {
        message: "현재 날씨 조회 중 서버 오류",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
