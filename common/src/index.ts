import z from 'zod';

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional(),
})

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const createpostInput = z.object({
    title: z.string(),
    content: z.string()
})

export const updatepostInput = z.object({
    title: z.string(),
    content: z.string()
})

export type SignupType = z.infer<typeof signupInput>
export type SigninType = z.infer<typeof signinInput>
export type CreatepostType = z.infer<typeof createpostInput>
export type UpdatepostType = z.infer<typeof updatepostInput>