import { PostgrestSingleResponse } from "@supabase/postgrest-js/src/types";
import { supabase } from "~/clients/http/supabase.client";

type TProps = {
  company: string;
  full_name: string;
  email: string;
  phone: string;
  website: string;
  message?: string;
};

export const postContact = async ({
  company,
  full_name,
  email,
  phone,
  website,
  message,
}: TProps): Promise<PostgrestSingleResponse<null>> => {
  const response = await supabase.from("contact").insert({
    company: company,
    full_name: full_name,
    email: email,
    phone: phone,
    website: website,
    message: message || "",
  });
  return response;
};
