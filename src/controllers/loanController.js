import { supabase } from "../config/supabaseClient.js";

// GET /api/loans - Retrieve all loans (with optional status filter)
export const getLoans = async (req, res) => {
  try {
    const { status } = req.query;
    let query = supabase.from("loans").select("*").order("created_at", { ascending: false });

    if (status) {
      query = query.eq("status", status);
    }

    const { data, error } = await query;
    if (error) throw error;

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/loans/:id - Retrieve a specific loan
export const getLoanById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase.from("loans").select("*").eq("id", id).single();

    if (error) throw error;
    if (!data) return res.status(404).json({ success: false, message: "Loan not found" });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/loans - Create a new loan record
export const createLoan = async (req, res) => {
  try {
    const { book_title, member_name, borrow_date, return_date, status } = req.body;
    
    const { data, error } = await supabase
      .from("loans")
      .insert([{ book_title, member_name, borrow_date, return_date, status: status || "Dipinjam" }])
      .select();

    if (error) throw error;

    res.status(201).json({ success: true, data: data[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PUT /api/loans/:id - Update a loan record
export const updateLoan = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const { data, error } = await supabase
      .from("loans")
      .update(updates)
      .eq("id", id)
      .select();

    if (error) throw error;
    if (!data || data.length === 0) return res.status(404).json({ success: false, message: "Loan not found" });

    res.status(200).json({ success: true, data: data[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE /api/loans/:id - Delete a loan record
export const deleteLoan = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("loans")
      .delete()
      .eq("id", id)
      .select();

    if (error) throw error;
    if (!data || data.length === 0) return res.status(404).json({ success: false, message: "Loan not found" });

    res.status(200).json({ success: true, message: "Loan record deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
