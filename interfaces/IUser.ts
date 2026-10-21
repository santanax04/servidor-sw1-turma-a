import z from 'zod'

export const IUser = z.object({
    id: z.number().optional(),
    name: z.string().min(1 , "nome deve ter mais de um caractere"),
    email: z.string().email(),
    phone: z.string().min(7 , "telefone invalido"),
    age: z.number().min(1, "idade deve ser maior que zero")
})

export type IUser = z.infer<typeof IUser>