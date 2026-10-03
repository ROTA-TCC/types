import { HideoutZoneDto } from '../dtos/update-profile.dto';

export interface Profile {
  id: string;
  userId: string;
  peso?: number | null;
  altura?: number | null;
  idade?: number | null;
  nivelDificuldade?: string | null;
  mapaOcultacao?: HideoutZoneDto | null;
}
