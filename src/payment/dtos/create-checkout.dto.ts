import { z } from 'zod';
import { Plan, TransactionType } from '../enums';

export const CreateCheckoutSchema = z.object({
  type: z.nativeEnum(TransactionType).refine((val) => val !== undefined, {
    message: 'Tipo de transação inválido',
  }),
  plan: z.nativeEnum(Plan).optional(),
  returnUrl: z.string().url().optional(),
  completionUrl: z.string().url().optional(),
  taxId: z.string().optional(),
  customerName: z.string().optional(),
});

export type CreateCheckoutDto = z.infer<typeof CreateCheckoutSchema>;
