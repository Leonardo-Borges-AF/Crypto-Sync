import { supabase } from "~/clients/http/supabase.client";

export const getNewsletterByEmail = async (email: string) => {
  const response = await supabase
    .from("newsletter")
    .select("*")
    .eq("email", email);

  return response;
};
