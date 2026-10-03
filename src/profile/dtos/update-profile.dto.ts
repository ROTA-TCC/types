export interface HideoutZoneDto {
  latitude: number;
  longitude: number;
  radiusMetres: number;
}

export interface UpdateProfileDto {
  peso?: number;
  altura?: number;
  idade?: number;
  nivelDificuldade?: string;
  mapaOcultacao?: HideoutZoneDto;
}
