import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const body = await readBody(event);

    const { data, error }= await client.from('Messages').insert([
        {
            email: body.email,
            message: body.message,
        }
    ])
    
    if(error) {
        alert(error.message);
        throw createError({statusCode: error.code, statusMessage: error.message})
    }

    return data
})