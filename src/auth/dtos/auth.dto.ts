import { z } from 'zod';

export const RegisterSchema = z.object({
  alias: z.string().min(3, 'Mínimo 3 caracteres').max(30, 'Máximo 30 caracteres'),
  email: z.string().email('Formato de e-mail inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export type RegisterDto = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z.string().email('Formato de e-mail inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
  rememberMe: z.boolean().optional(),
});

export type LoginDto = z.infer<typeof LoginSchema>;

export const ResetPasswordSchema = z.object({
  token: z.string().min(1, 'Token é obrigatório'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export type ResetPasswordDto = z.infer<typeof ResetPasswordSchema>;

export const TwoFactorVerifySchema = z.object({
  code: z.string().length(6, 'O código deve ter 6 dígitos'),
  partialToken: z.string().min(1, 'Token parcial é obrigatório'),
});

export type TwoFactorVerifyDto = z.infer<typeof TwoFactorVerifySchema>;

export const VerifyEmailSchema = z.object({
  token: z.string().min(1, 'Token é obrigatório'),
});

export type VerifyEmailDto = z.infer<typeof VerifyEmailSchema>;
