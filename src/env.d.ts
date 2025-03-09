interface ImportMetaEnv {
  readonly EMAIL_SERVICE: string;
  readonly EMAIL_ACCOUNT: string;
  readonly EMAIL_PASSWORD: string;
  readonly EMAIL_RECEPTOR: string;
  readonly YOUTUBE_API_KEY: string;
  readonly YOUTUBE_CHANNEL_ID: string;
  readonly INSTAGRAM_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
