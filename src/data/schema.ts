import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const ticketSchema = z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  email: z.string(),
  whatsapp: z.string(),
  verified: z.boolean()
})

export type Ticket = z.infer<typeof ticketSchema>
