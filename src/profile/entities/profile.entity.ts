import { HideoutZoneDto } from '../dtos/update-profile.dto';

export interface UserProfile {
  id: string;
  userId: string;
  peso?: number | null;
  altura?: number | null;
  idade?: number | null;
  nivelDificuldade?: string | null;
  mapaOcultacao?: HideoutZoneDto | null;
}
