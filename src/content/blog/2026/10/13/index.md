---
title: "欧州スーパーのサイバー攻撃、Anthropicの蒸留対策、SQLiteのベクトル検索拡張などまとめ"
description: "2026年10月13日の技術ニュース。欧州スーパーの冷蔵庫へのサイバー攻撃、Anthropicの蒸留攻撃対策、Intel D270、SQLiteのvec1拡張、GitHubのシークレット保護など10件を紹介。"
pubDate: 2026-10-13
tags: ["ニュース", "セキュリティ", "AI", "ハードウェア", "SQLite", "GitHub"]
author: "grasshopper"
---

本日は、セキュリティ、AI、ハードウェア、開発ツールにまたがるトピックが目立った。Hacker News では欧州のスーパーマーケットの冷蔵設備を狙ったサイバー攻撃や、Anthropic による蒸留攻撃への防御強化が話題になっている。Intel の新しい AI アクセラレータや中国の研究開発費に関する報道も注目を集めた。Zenn では SQLite のベクトル検索拡張が、GitHub Blog ではシークレット保護の拡張が取り上げられている。なお、各トピックの要約は取得できたタイトルや概要の範囲に基づいており、詳細は元記事で確認してほしい。

## 欧州のスーパーの冷蔵庫がサイバー攻撃を受ける

Tom's Hardware は、欧州各地のスーパーマーケットの冷蔵庫で、攻撃者が自動霜取り機能を作動させたと報じている。タイトルによれば、配送や店舗の価格にも影響が出たインシデントとされる。店舗設備や物流のような OT/IoT 領域が攻撃対象になり、物理的な被害に直結しうる点で重要である。

詳細は [Hackers activate automatic defrosting in supermarket fridges across Europe](https://www.tomshardware.com/tech-industry/cyber-security/unprecedented-cyberattack-cripples-supermarket-fridges-across-europe-as-hackers-activate-automatic-defrosting-delivery-and-store-prices-also-impacted-by-incident) を参照。

## Anthropic、蒸留攻撃への防御を強化

Anthropic は研究記事「Strengthening our defenses against distillation attacks」を公開した。蒸留攻撃とは、モデルの出力を大量に収集して別のモデルの学習に使う行為を指す。API 提供事業者にとって、モデルの知的財産を守る観点で重要なテーマである。

詳細は [Strengthening our defenses against distillation attacks](https://www.anthropic.com/research/distillation-defenses) を参照。

## Intel D270：最大480GBのLPDDR5Xを搭載したAIアクセラレータ

Intel のデータセンター向け GPU の D シリーズとして、最大 480GB の LPDDR5X を搭載する D270 が掲載された。大容量メモリは、大規模モデルの推論でメモリ容量がボトルネックになる場面で有効と考えられる。

詳細は [Intel D270 GPU AI Accelerator–Up to 480 GB LPDDR5X](https://www.intel.com/content/www/us/en/products/details/discrete-gpus/data-center-gpu/d-series.html) を参照。

## GLM-Legal

Z.ai が法務分野向けのモデルとみられる「GLM-Legal」のブログを公開した。ドメイン特化型モデルの展開が続いていることがうかがえる。

詳細は [GLM-Legal](https://z.ai/blog/glm-legal) を参照。

## 単細胞生物の驚くべき知性（大腸菌の走化性）

jsomers.net の記事は、大腸菌の走化性を題材に、単一細胞が示す情報処理の巧みさを論じている。2024年の記事が再び注目された。

詳細は [The baffling intelligence of a single cell (2024)](https://jsomers.net/e-coli-chemotaxis/) を参照。

## C言語でモダンなWebアプリを作る

prophitt.me は C 言語で Web アプリケーションを構築する試みを紹介している。メモリ安全性などの課題はあるが、低レベル言語で Web を書く試みとして関心を集めた。

詳細は [A Modern Web App in C](https://prophitt.me/writing/a-modern-web-app-in-c) を参照。

## SQLite 本体にベクトル検索拡張 vec1

Zenn のトレンドでは、mattn 氏による SQLite のベクトル検索拡張 vec1 の記事が上位に入った。組み込み DB で類似検索を扱えるようになると、ローカルでの RAG などの構成が簡素になる可能性がある。

詳細は [SQLite 本体にベクトル検索拡張 vec1 がやってきた](https://zenn.dev/mattn/articles/6e9996319ac099) を参照。

## Haiku 5.5 を機にサブエージェントの役割を見直す

Zenn では、Haiku 5.5 の登場をきっかけに、Sonnet 以下で動かしていたサブエージェントの割り当てを見直した記事が注目された。モデルの性能とコストのバランスに応じた役割分担を考える際の参考になる。

詳細は [Haiku 5.5 を機に Sonnet 以下で動かしていたサブエージェントを見直した](https://zenn.dev/genda_jp/articles/haiku-5-5-subagent-roles) を参照。

## GitHub Blog：シークレット保護のスケールとCopilotへの文脈提供

GitHub Blog では、AI によるコード生成の増加に合わせてシークレット保護も拡張すべきだとする記事が公開された。非構造化シークレットを検出する分類器も紹介されている。また、カスタム指示、スキル、カスタムエージェント、MCP サーバーを使って Copilot にコードベースの文脈を教える初心者向け記事も掲載された。

詳細は [Secret protection must scale with software](https://github.blog/ai-and-ml/github-copilot/secret-protection-must-scale-with-software/) と [GitHub Copilot app for Beginners: How to teach Copilot about your codebase](https://github.blog/ai-and-ml/github-copilot/github-copilot-app-for-beginners-how-to-teach-copilot-about-your-codebase/) を参照。

## CSSのtext-boxで文字を上下中央に揃える

Zenn では、CSS の `text-box` プロパティを使って文字を上下中央に揃える方法を解説した記事も人気を集めた。フォントの余白に悩まされがちなレイアウト調整の手がかりになる。

詳細は [CSSの`text-box`で文字を上下中央に揃えたい](https://zenn.dev/chot/articles/be424332489e7a) を参照。
