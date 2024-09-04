import { PostgrestSingleResponse } from "@supabase/postgrest-js/src/types";
import { supabase } from "~/clients/http/supabase.client";

type TProps = {
  email: string;
};

export const postNewsletter = async ({
  email,
}: TProps): Promise<PostgrestSingleResponse<null>> => {
  const response = await supabase.from("newsletter").insert({
    email: email,
  });
  return response;
};
