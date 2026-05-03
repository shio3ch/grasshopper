# 技術ニュース記事生成プロンプト

## タスク

今日の日付（環境変数 `TODAY` に `YYYY-MM-DD` 形式で設定済み）のテックニュースまとめ記事を1本生成し、リポジトリにコミットしてください。

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
  2. 各トピック（3〜5本）を `## セクション見出し` で区切る
  3. 各トピックに「何が起きたか・なぜ重要か・技術的なポイント」を含める

## 参照するニュースソース

**必ず Bash ツールで `curl` を使い、以下のソースから実際のコンテンツを取得してください。**
情報を捏造してはいけません。取得できた記事のみを扱い、各記事には必ず元の URL をリンクとして貼ってください。

### 取得手順

1. **Hacker News トップストーリー**（JSON API で取得可能）
   ```bash
   # トップ記事 ID 一覧を取得（python3 で解析）
   TOP_IDS=$(curl -s "https://hacker-news.firebaseio.com/v0/topstories.json" \
     | python3 -c "import sys,json; ids=json.load(sys.stdin)[:20]; print(' '.join(map(str,ids)))")
   # 各 ID の詳細を取得
   for id in $TOP_IDS; do
     curl -s "https://hacker-news.firebaseio.com/v0/item/${id}.json"
   done
   ```
   → 各アイテムの `title` と `url` フィールドを記事に使用する。

2. **Zenn トレンド**
   ```bash
   curl -s "https://zenn.dev/api/articles?order=trending&count=10" \
     | python3 -c "
import sys, json
data = json.load(sys.stdin)
for a in data.get('articles', []):
    print(a.get('title',''), 'https://zenn.dev' + a.get('path',''))
"
   ```
   → タイトルと URL を使用する。

3. **GitHub Blog**
   ```bash
   curl -s "https://github.blog/feed/" \
     | python3 -c "
import sys
from xml.etree import ElementTree as ET
root = ET.fromstring(sys.stdin.read())
for entry in root.findall('channel/item'):
    title = entry.findtext('title') or ''
    link  = entry.findtext('link') or ''
    print(title, link)
"
   ```
   → 記事タイトルと URL を抽出する。

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
