import { supabase } from '../../api/supabase/supabaseClient';

export async function getTransactions(i) {
    const { data, error } = await supabase
        .from('transactions')
        .select()
        .order('date', { ascending: false })
        .order('id', { ascending: false })
        .range(i, i+9)
        return data;
}

export async function addTransaction(newTransaction) {
    const { data, error } = await supabase
        .from('transactions')
        .insert([newTransaction])
        .select()
        .single()
    return data;
}

export async function getAllTransactions(id) {
    const { data, error } = await supabase
        .from('transactions')
        .select()
        .eq("user_id", id)
    return data;
}

export async function deleteTransaction(id) {
    const {data, error} = await supabase
        .from('transactions')
        .delete()
        .eq('id', id)
        .select()
        .single()
    return data
  }

export async function getTranAmount() {
    const { count, error } = await supabase
        .from('transactions')
        .select('*', { count: 'exact', head: true })
    return count
}