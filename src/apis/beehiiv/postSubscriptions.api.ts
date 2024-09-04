import { httpsClient } from "~/clients";

type TSubscription = {
  id: string;
  email: string;
  status: string;
  created: number;
  subscription_tier: string;
  utm_source?: string;
  utm_medium?: string;
  utm_channel?: string;
  utm_campaign?: string;
  referring_site?: string;
  referral_code: string;
  stripe_customer_id?: string;
};

type TPostSubscriptionsResponse = {
  data: TSubscription;
};

type TProps = {
  body: Omit<
    TSubscription,
    "id" | "status" | "created" | "subscription_tier" | "referral_code"
  >;
};

export const postSubscriptions = async ({
  body,
}: TProps): Promise<TPostSubscriptionsResponse> => {
  const { data } = await httpsClient.post(`/nortech/subscription`, body);
  return data;
};
