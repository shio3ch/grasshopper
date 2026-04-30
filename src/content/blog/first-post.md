---
title: "TypeScriptとAstroで静的ブログを構築する"
description: "TypeScriptとAstroを使って、Cloudflare Pagesにデプロイできる技術ニュースブログを作る方法を解説します。"
pubDate: 2026-04-30
tags: ["TypeScript", "Astro", "Cloudflare Pages", "静的サイト"]
author: "grasshopper"
---

## はじめに

本記事では、[Astro](https://astro.build/) と TypeScript を使って静的ブログサイトを構築する方法を紹介します。
デプロイ先は [Cloudflare Pages](https://pages.cloudflare.com/) を想定しています。

## なぜ Astro なのか

Astro はコンテンツ重視のサイト（ブログ、ドキュメント、ポートフォリオなど）に最適化されたウェブフレームワークです。
主な特徴は以下の通りです。

- **ゼロ JavaScript by default**: 必要な部分にのみ JavaScript を配信
- **コンテンツコレクション**: Markdown/MDX ファイルを型安全に管理
- **高速ビルド**: Vite ベースの高速な開発体験
- **アダプター**: Cloudflare Pages・Vercel・Netlify など多数のホスティングサービスに対応

## セットアップ

```bash
npm create astro@latest
```

プロジェクト作成後、Cloudflare Pages 向けアダプターを追加します。

```bash
npm install @astrojs/cloudflare
```

`astro.config.mjs` を以下のように設定します。

```js
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "static",
  adapter: cloudflare(),
});
```

## コンテンツコレクション

Astro のコンテンツコレクションを使うと、Markdown ファイルを型安全に管理できます。
`src/content/config.ts` でスキーマを定義します。

```ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

## まとめ

Astro + TypeScript + Cloudflare Pages の組み合わせは、技術ブログの構築に非常に適しています。
ビルド時にすべてのページを静的 HTML として生成するため、配信コストが低く、表示速度も高速です。
