export interface InstagramPost {
  id: string;
  mediaUrl: string;
  likeCount: number;
  commentCount: number;
}

export interface InstagramPostsGraphResponse {
  data: Data[];
  paging: Paging;
}

interface Data {
  id: string;
  media_url: string;
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
