import { defineCollection, reference, z } from "astro:content";

import { file, glob } from "astro/loaders";

export const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      order: z.number().default(999),
      title: z.string(),
      description: z.string(),
      year: z.number(),
      client: z.string().optional(),
      role: z.string().optional(),
      mainImage: image(),
      category: z.string(),
      codeUrl: z.string().optional(),
      siteUrl: z.string().optional(),
      services: z.array(reference("services")),
      technologies: z.array(reference("technologies")),
    }),
});

export const snippets = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/snippets" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
    }),
});

export const technologies = defineCollection({
  loader: file("src/data/technologies.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      logo: image(),
      category: z.enum([
        "Frameworks",
        "Styling",
        "CMS",
        "Databases",
        "ORM",
        "AI",
        "Hosting",
        "Other",
      ]),
      isCore: z.boolean().default(false),
      order: z.number().default(999),
    }),
});

export const clients = defineCollection({
  loader: file("src/data/clients.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      logo: image(),
    }),
});

export const services = defineCollection({
  loader: file("src/data/services.json"),
  schema: () =>
    z.object({
      name: z.string(),
      categoryId: z.enum(["tech", "design", "growth"]),
    }),
});

export const collections = {
  projects,
  technologies,
  clients,
  services,
  snippets,
};
