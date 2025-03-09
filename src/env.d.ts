interface ImportMetaEnv {
  readonly INSTAGRAM_ACCESS_TOKEN: string;
  readonly YOUTUBE_CHANNEL_ID: string;
  readonly YOUTUBE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
