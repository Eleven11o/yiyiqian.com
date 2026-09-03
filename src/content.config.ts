import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectCategories = [
  "Cinematic VR",
  "Interactive Media",
  "Research Projects",
  "Curatorial",
] as const;

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    subtitle: z.string().optional(),
    year: z.union([z.number(), z.string()]),
    category: z.enum(projectCategories),
    role: z.array(z.string()).default([]),
    medium: z.array(z.string()).default([]),
    researchAreas: z.array(z.string()).default([]),
    cover: z.string(),
    coverAlt: z.string(),
    coverWidth: z.number().default(1600),
    coverHeight: z.number().default(1000),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(999),
    experience: z.string(),
    context: z.string().optional(),
    personalContribution: z.array(z.string()).default([]),
    personalContributionSource: z
      .object({
        label: z.string(),
        url: z.url(),
      })
      .optional(),
    researchQuestion: z.string().optional(),
    creativeProcess: z.string().optional(),
    designProduction: z.string().optional(),
    researchMethod: z.string().optional(),
    reflection: z.string().optional(),
    outcome: z.string().optional(),
    featuredVideo: z
      .object({
        provider: z.literal("Vimeo"),
        id: z.string().regex(/^\d+$/),
        title: z.string(),
        watchUrl: z.url(),
        caption: z.string().optional(),
      })
      .optional(),
    trailer: z
      .object({
        src: z.string(),
        title: z.string(),
        poster: z.string().optional(),
        caption: z.string().optional(),
      })
      .optional(),
    legacyTheme: z.enum(["wix-laksana", "wix-zhuangzhou"]).optional(),
    sourceUrl: z.url().optional(),
    storyMode: z.enum(["research-editorial"]).optional(),
    chapterSynopsis: z
      .array(
        z.object({
          number: z.string(),
          titleZh: z.string(),
          titleEn: z.string(),
          summaryZh: z.array(z.string()),
          summaryEn: z.array(z.string()),
          directorZh: z.string().optional(),
          directorEn: z.string().optional(),
          imageSlots: z.number().int().min(0).max(4).default(2),
          images: z
            .array(
              z.object({
                src: z.string(),
                alt: z.string(),
                caption: z.string().optional(),
                width: z.number().default(1600),
                height: z.number().default(1000),
              }),
            )
            .default([]),
        }),
      )
      .default([]),
    exhibitions: z.array(z.string()).optional(),
    awards: z.array(z.string()).optional(),
    publications: z.array(z.string()).optional(),
    credits: z.array(z.string()).optional(),
    laurels: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          width: z.number().default(1200),
          height: z.number().default(800),
        }),
      )
      .default([]),
    team: z
      .array(
        z.object({
          role: z.string(),
          members: z.array(z.string()),
        }),
      )
      .default([]),
    externalMedia: z
      .array(
        z.object({
          label: z.string(),
          url: z.url(),
        }),
      )
      .optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
          layout: z.enum(["wide", "portrait", "grid"]).default("wide"),
          width: z.number().default(1600),
          height: z.number().default(1000),
        }),
      )
      .default([]),
  }),
});

const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/*.md" }),
  schema: z.discriminatedUnion("pageType", [
    z.object({
      pageType: z.literal("home"),
      eyebrow: z.string(),
      title: z.string(),
      position: z.string(),
      practiceLine: z.string(),
      researchStatement: z.string(),
      introduction: z.string(),
    }),
    z.object({
      pageType: z.literal("about"),
      eyebrow: z.string(),
      title: z.string(),
      biography: z.string(),
      education: z.array(z.string()).default([]),
      awards: z.array(z.string()).default([]),
      exhibitions: z.array(z.string()).default([]),
      experience: z.array(z.string()).default([]),
      skills: z.array(z.string()).default([]),
      researchInterests: z.array(z.string()).default([]),
    }),
  ]),
});

export const collections = { pages, projects };
