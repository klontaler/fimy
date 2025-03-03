import { supabase } from './supabaseClient';

export async function getBudget() {
    const { data, error } = await supabase
        .from('budget')
        .select()
        .eq('user_id', 1)
        .single()
    return data;
}

export async function addBudget(newBudget) {
    const { data, error } = await supabase
        .from('budget')
        .insert([newBudget])
        .select()
        .single()
    return data;
}

export async function updateBudget(amount) {
    const { data, error } = await supabase
        .from('budget')
        .update({ amount: amount })
        .eq('id', 1)
        .select()
        .single()
    return data;
}