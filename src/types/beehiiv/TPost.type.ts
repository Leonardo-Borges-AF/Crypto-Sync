type Author = {
  id: string;
  name: string;
};

type Content = {
  web: string;
  email: string;
  rss?: string;
};

type Stats = {
  recipients: number;
  opens: number;
  unique_opens: number;
  open_rate: number;
  clicks: number;
  unique_clicks: number;
  click_rate: number;
  unsubscribes: number;
  spam_reports: number;
};

type Clicks = {
  url: string;
  email: {
    clicks: number;
    unique_clicks: number;
    click_through_rate: number;
  };
  web: {
    clicks: number;
    unique_clicks: number;
    click_through_rate: number;
  };
  total_clicks: number;
  total_unique_clicks: number;
  total_click_through_rate: number;
};

export type TPost = {
  id: string;
  subtitle: string;
  title: string;
  authors: Author[];
  created: number;
  status: string;
  publish_date: number;
  displayed_date: number;
  split_tested: boolean;
  subject_line: string;
  preview_text: string;
  slug: string;
  thumbnail_url: string;
  web_url: string;
  audience: string;
  platform: string;
  content_tags: string[];
  meta_default_description?: string;
  meta_default_title?: string;
  content?: {
    free: Content;
    premium?: Content;
  };
  stats: {
    email: Stats;
    web: {
      views: number;
      clicks: number;
    };
    clicks: Clicks[];
  };
  hidden_from_feed: boolean;
};
