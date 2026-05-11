export function getApiBaseUrl(): string {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) throw new Error(`NEXT_PUBLIC_API_URL 확인 불가`);

  return baseUrl;
}
