import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        ODOO_URL: z.string().url().optional(),
        ODOO_DB: z.string().optional(),
        ODOO_USERNAME: z.string().optional(),
        ODOO_PASSWORD: z.string().optional(),
        ODOO_CRM_TEAM_IT_ID: z.coerce.number().optional(),
        ODOO_CRM_TEAM_COSMETICS_ID: z.coerce.number().optional(),
        REVALIDATE_SECRET: z.string().optional(),
    },
    client: {},
    runtimeEnv: {
        ODOO_URL: process.env.ODOO_URL,
        ODOO_DB: process.env.ODOO_DB,
        ODOO_USERNAME: process.env.ODOO_USERNAME,
        ODOO_PASSWORD: process.env.ODOO_PASSWORD,
        ODOO_CRM_TEAM_IT_ID: process.env.ODOO_CRM_TEAM_IT_ID,
        ODOO_CRM_TEAM_COSMETICS_ID: process.env.ODOO_CRM_TEAM_COSMETICS_ID,
        REVALIDATE_SECRET: process.env.REVALIDATE_SECRET,
    },
    emptyStringAsUndefined: true,
})

export function isOdooConfigured() {
    return !!(
        env.ODOO_URL &&
        env.ODOO_DB &&
        env.ODOO_USERNAME &&
        env.ODOO_PASSWORD
    )
}
