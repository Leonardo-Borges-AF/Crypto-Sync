import { httpsClient } from "~/clients";
import { TPagedResponse } from "~/types/TPagedResponse.type";
import { TPost } from "~/types/beehiiv";

type TGetPublicationsResponse = TPagedResponse<TPost>;

export const getNortechPosts = async (): Promise<TGetPublicationsResponse> => {
  const { data } = await httpsClient.get(`/nortech/posts`);
  return data;
};
