# 技術ニュース記事生成プロンプト

## タスク

今日の日付（環境変数 `TODAY` に `YYYY-MM-DD` 形式で設定済み）のテックニュースを調べて、各ニュースに遷移するリンクをまとめた記事を1本生成し、リポジトリにコミットしてください。

## ファイル出力先

```
src/content/blog/YYYY/MM/DD/index.md
```

例: `TODAY=2026-05-03` の場合 → `src/content/blog/2026/05/03/index.md`

ディレクトリが存在しない場合は作成してください。

## フロントマター形式

```yaml
---
title: "<見出しとなる記事タイトル（日本語）>"
description: "<150字以内の要約（日本語）>"
pubDate: YYYY-MM-DD
tags: ["タグ1", "タグ2", "タグ3"]
author: "grasshopper"
---
```

- `pubDate` は環境変数 `TODAY` の値をそのまま使用する
- `tags` は記事内容に合わせて3〜6個程度

## 記事スタイル

- **言語**: 日本語
- **文字数**: 本文 1,500〜3,000字程度
- **トーン**: 技術者向け、簡潔・客観的
- **構成**:
  1. 冒頭サマリー（3〜5文で当日の主要トピックを概観）
  2. 各トピック（最大10件）を `## セクション見出し` で区切る
  3. 各トピックに「何が起きたか・なぜ重要か・技術的なポイント」の要約を含める
  4. 各トピックには要約の後にリンクを挿入する

## 参照するニュースソース

**必ず WebFetch ツールを使い、以下のソースから実際のコンテンツを取得してください。**
情報を捏造してはいけません。取得できた記事のみを扱い、各記事には必ず元の URL をリンクとして貼ってください。

### 取得手順

1. **Hacker News トップストーリー**（JSON API）
   - `https://hacker-news.firebaseio.com/v0/topstories.json` を WebFetch で取得し、先頭 20 件の ID を得る
   - 各 ID に対して `https://hacker-news.firebaseio.com/v0/item/{id}.json` を WebFetch で取得する
   - 各アイテムの `title` と `url` フィールドを記事に使用する

2. **Zenn トレンド**
   - `https://zenn.dev/api/articles?order=trending&count=10` を WebFetch で取得する
   - `articles` 配列の各要素から `title` と `path`（`https://zenn.dev` を prefix に付ける）を使用する

3. **GitHub Blog**
   - `https://github.blog/feed/` を WebFetch で取得する（RSS/Atom フィード）
   - 各エントリの `title` と `link` を抽出する

取得に失敗したソースはスキップしてよい。
**取得できた記事が 1 本もない場合のみ**「本日は主要なニュースの取得ができませんでした」と記載する。

### リンクの記載形式

各トピックセクションには、参照した元記事への Markdown リンクを必ず含めること:

```markdown
詳細は [記事タイトル](https://example.com/article) を参照。
```

## コミット手順

1. 上記パスにファイルを作成
2. `git add` でファイルをステージ
3. 以下のメッセージでコミット:
   ```
   feat: {TODAY} 技術ニュースまとめを追加
   ```

コミットのみ行い、プッシュは不要です（ワークフローが行います）。
