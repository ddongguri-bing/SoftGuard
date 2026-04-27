import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://dataservice.accuweather.com";

export async function GET(req: NextRequest) {
  try {
    const lat = req.nextUrl.searchParams.get("lat");
    const lng = req.nextUrl.searchParams.get("lng");

    if (!lat || !lng) {
      return NextResponse.json(
        { message: "lat, lng query가 필요합니다." },
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

    const url = `${BASE_URL}/locations/v1/cities/geoposition/search?q=${encodeURIComponent(
      `${lat},${lng}`,
    )}&language=ko-kr`;

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
        { message: "AccuWeather location API 실패", details: data },
        { status: response.status },
      );
    }

    const location = {
      key: Number(data?.ParentCity?.Key ?? data?.Key),
      city: data?.AdministrativeArea?.LocalizedName ?? "",
      localizedName:
        data?.ParentCity?.LocalizedName ?? data?.LocalizedName ?? "",
    };

    return NextResponse.json(location);
  } catch (error) {
    return NextResponse.json(
      {
        message: "위치 정보 조회 중 서버 오류",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
