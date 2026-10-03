export interface AuthUserResponse {
  id: string;
  email: string;
  alias: string;
}

export interface AuthResponse {
  accessToken: string;
  user: AuthUserResponse;
}

export interface AuthLoginResponse extends AuthResponse {
  message: string;
}

export interface AuthRefreshResponse extends AuthResponse {
  message: string;
}

export interface AuthVerify2faResponse extends AuthResponse {
  message: string;
}

export interface TwoFactorRequiredResponse {
  requires2fa: true;
  partialToken: string;
}

export interface SecurityStatusResponse {
  isVerified: boolean;
  is2faEnabled: boolean;
  plan: string;
}
