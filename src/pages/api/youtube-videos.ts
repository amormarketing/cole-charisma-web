import type { APIRoute } from 'astro';

import { internalErrorParser } from '@/utils/internal-error-parser';
import type { YoutubeVideosGoogleResponse } from '@/types/api/youtube.interface';

const YOUTUBE_API_KEY = import.meta.env.YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.YOUTUBE_CHANNEL_ID;

export const GET: APIRoute = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4&type=video`
    );

    if (!response.ok) {
      throw new Error('failed to fetch Instagram posts');
    }

    const { items }: YoutubeVideosGoogleResponse = await response.json();

    const youtubeVideos = items.map((video) => ({
      id: video.id.videoId,
    }));

    return new Response(JSON.stringify(youtubeVideos));
  } catch (e) {
    const error = internalErrorParser(e);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
