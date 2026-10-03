export type Plan = 'GRATIS' | 'PRO';

export type TransactionType = 'PLAN_SUBSCRIPTION';

export type TransactionStatus =
  | 'PENDING'
  | 'PAID'
  | 'CANCELLED'
  | 'EXPIRED'
  | 'REFUNDED';

export interface User {
  id: string;
  alias: string;
  email: string;
  role: string;
  plan: Plan;
  isVerified: boolean;
  is2faEnabled: boolean;
  createdAt: Date;
}

export interface Profile {
  id: string;
  userId: string;
  peso?: number | null;
  altura?: number | null;
  idade?: number | null;
  nivelDificuldade?: string | null;
  hideoutRadius?: number | null;
  updatedAt: Date;
}

export interface Session {
  id: string;
  userId: string;
  ipAddress: string;
  userAgent: string;
  expiresAt: Date;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  externalId: string;
  userId: string;
  amount: number;
  status: TransactionStatus;
  type: TransactionType;
  createdAt: Date;
}

export interface Run {
  id: string;
  userId: string;
  startTime: Date;
  endTime: Date;
  durationSeconds: number;
  distanceMeters: number;
  calories?: number | null;
  createdAt: Date;
}
