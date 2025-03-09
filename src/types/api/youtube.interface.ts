export interface YoutubeVideosGoogleResponse {
  items: YoutubeVideos[];
}

interface YoutubeVideos {
  id: ID;
}

interface ID {
  videoId: string;
}
