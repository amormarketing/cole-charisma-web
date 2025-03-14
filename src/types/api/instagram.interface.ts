export interface InstagramPost {
  id: string;
  caption: string;
  mediaUrl: string;
  mediaType: string;
  permalink: string;
  likeCount: number;
  commentCount: number;
}

export interface InstagramPostsGraphResponse {
  data: Data[];
  paging: Paging;
}

interface Data {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  permalink: string;
  like_count: number;
  comments_count: number;
}

interface Paging {
  cursors: Cursors;
}

interface Cursors {
  before: string;
  after: string;
}
