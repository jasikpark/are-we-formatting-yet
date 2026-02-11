import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const formatters = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/formatters" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    website: z.string().url().optional(),
    github: z.string().url().optional(),
    docs: z.string().url().optional(),
    languages: z.array(z.string()),
    license: z.string(),
    category: z.enum(["formatter", "linter-with-formatting", "pretty-printer"]),
    status: z.enum(["active", "maintained", "deprecated"]),
    writtenIn: z.string().optional(),
    pluginFor: z.string().optional(),
    npm: z.string().optional(),
    official: z.boolean().optional(),
  }),
});

export const collections = { formatters };
