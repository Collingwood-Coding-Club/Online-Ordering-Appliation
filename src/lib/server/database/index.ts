import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { SECRET_DATABASE_URL } from "$env/static/private";

import * as productSchemas from "./products/schema";
import * as userSchemas from "./user/schema";

export const planetscaleConnection = connect({
    url: `${SECRET_DATABASE_URL}?sslaccept=strict`,

    // Fix for: https://github.com/cloudflare/workerd/issues/698
    fetch: (url: string, init: RequestInit | undefined) => {
        if (init) {
            delete init["cache"]; // Remove cache header
        }
        return fetch(url, init);
    }
});

export const database = drizzle(planetscaleConnection, {
    schema: { ...productSchemas, ...userSchemas },
});

