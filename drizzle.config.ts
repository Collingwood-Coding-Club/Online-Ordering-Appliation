import "dotenv/config";
import type { Config } from "drizzle-kit";

const e = (key: string): string => {
    if (!process.env[key]) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    
    return process.env[key] as string;
}

export default {
    schema: "src/**/schema.ts",
    out: "drizzle/",
    dbCredentials: {
        uri: `${e("SECRET_DATABASE_URL")}?ssl={"rejectUnauthorized":true}`,
    },
    driver: "mysql2"
} satisfies Config;
