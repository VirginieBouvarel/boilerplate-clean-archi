import { z } from "zod";

// DTO de sortie -> ce que les routes vont pouvoir renvoyer
// L'objet book devra correspondre à ce qui est déclaré ici
export const BookOutputDto = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  summary: z.string().min(5),
  author: z.string().min(1),
  totalPages: z.number().min(1),
})