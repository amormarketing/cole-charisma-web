import type { APIRoute } from 'astro';

import { internalErrorParser } from '@/utils/internal-error-parser';
import type { InstagramPost, InstagramPostsGraphResponse } from '@/types/api/instagram.interface';

const INSTAGRAM_ACCESS_TOKEN = import.meta.env.INSTAGRAM_ACCESS_TOKEN;

export const GET: APIRoute = async () => {
  try {
    const response = await fetch(
      `https://graph.instagram.com/v22.0/17841402971333969/media?fields=copy,media_url,like_count,comments_count&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );

    if (!response.ok) {
      throw new Error('failed to fetch Instagram posts');
    }

    const { data }: InstagramPostsGraphResponse = await response.json();

    const instagramPost: InstagramPost[] = data.map((post) => ({
      id: post.id,
      mediaUrl: post.media_url,
      likeCount: post.like_count,
      commentCount: post.comments_count,
    }));

    return new Response(JSON.stringify(instagramPost));
  } catch (e) {
    const error = internalErrorParser(e);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
