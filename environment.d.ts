export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      POSTGRES_USERNAME: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DATABASE: string;
      JWT_SECRET: string;
    }
  }
}