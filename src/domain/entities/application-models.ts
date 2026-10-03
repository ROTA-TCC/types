import { Plan, TransactionType } from '../shared.types';

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
