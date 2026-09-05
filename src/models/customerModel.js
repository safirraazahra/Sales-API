import { supabase } from "../config/supabaseClient.js";

export const CustomerModel = {
  async getAll() {
    const { data, error } = await supabase.from("customers").select("*");
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("customers")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(customerData) {
    const { data, error } = await supabase
      .from("customers")
      .insert([customerData])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, customerData) {
    const { data, error } = await supabase
      .from("customers")
      .update(customerData)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("customers").delete().eq("id", id);
    if (error) throw error;
    return { message: "Customer deleted" };
  },
};
