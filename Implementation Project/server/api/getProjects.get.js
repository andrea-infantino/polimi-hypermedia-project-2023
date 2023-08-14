import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const { count, error }= await client.from('Projects').select('*', { count: 'exact', head: true});
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return count
})

