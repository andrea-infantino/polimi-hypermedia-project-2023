import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = serverSupabaseClient(event)

    const { data, error } = await client.from('Projects').select("id, score, title, presentation_text, problem_text, foundation_year, People(id, surname, name), Areas(id, name), Participations(person_id, is_project_supervisor)").eq('id', id).limit(1).single()
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return data
})