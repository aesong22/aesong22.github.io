import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { STAGES, SHARES } from './lib/meta';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    order: z.number(),
    color: z.string(),
    // hidden 항목(만드는 방식)은 홈 카드와 프로젝트 홈이 없으므로 아래 값이 없어도 된다.
    hidden: z.boolean().default(false),
    platform: z.string().optional(),
    tagline: z.string().optional(),
    why: z.string().optional(),
    tech: z.array(z.string()).optional(),
    stage: z.enum(STAGES).optional(),
    share: z.enum(SHARES).optional(),
    note: z.string().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    project: reference('projects'),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    status: z.enum(['published', 'draft']),
    order: z.number(),
    madeBy: z.string().optional(),
    external: z.string().optional(),
  }),
});

export const collections = { projects, articles };
