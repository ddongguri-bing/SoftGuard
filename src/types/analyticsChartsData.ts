export interface nearMissByHourRow {
  bucket: string;
  count: number;
}

export interface incidentTypeRatioRow {
  label: string;
  value: number;
}

export interface incidentsByWeekdayRow {
  label: string;
  value: number;
}

export interface analyticsChartsData {
  nearMissByHour: nearMissByHourRow[];
  incidentTypeRatio: incidentTypeRatioRow[];
  incidentsByWeekday: incidentsByWeekdayRow[];
}
