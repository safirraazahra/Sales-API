import { supabase } from "../config/supabaseClient.js";

export const ProductModel = {
  async getAll() {
    const { data, error } = await supabase.from("products").select("*");
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(productData) {
    const { data, error } = await supabase
      .from("products")
      .insert([productData])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, productData) {
    const { data, error } = await supabase
      .from("products")
      .update(productData)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) throw error;
    return { message: "Product deleted" };
  },
};
