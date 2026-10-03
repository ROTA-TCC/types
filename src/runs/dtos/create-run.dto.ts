export interface TrackpointDto {
  latitude: number;
  longitude: number;
  altitude?: number;
  speedMps?: number;
  recordedAt: string;
}

export interface CreateRunDto {
  startTime: string;
  endTime: string;
  durationSeconds: number;
  distanceMeters: number;
  calories?: number;
  trackpoints: TrackpointDto[];
}
