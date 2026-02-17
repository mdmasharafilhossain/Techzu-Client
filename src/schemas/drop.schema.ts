import { z } from "zod";

export const dropSchema = z.object({
  name: z.string().min(2, "Name required"),
  price: z.number().int("Price required"),
  totalStock: z.number().int("Stock required"),
  startsAt: z.string().min(1, "Start date required"),
});

export type DropInput = z.infer<typeof dropSchema>;
