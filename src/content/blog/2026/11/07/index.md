---
title: "Libghostty 1.0 公開、Firecracker VM エスケープ、GitHub の新 Git ストレージ構成など"
description: "Libghostty 1.0、Firecracker の VM エスケープ解説、FAA の ATC フロッピー廃止計画、GitHub の新 Git ストレージ構成、Zenn の話題記事をまとめた 2026-11-07 の技術ニュース。"
pubDate: 2026-11-07
tags: ["Hacker News", "Zenn", "GitHub", "セキュリティ", "AI"]
author: "grasshopper"
---

本日は、Hacker News では Libghostty 1.0 の公開、Firecracker の VM エスケープ解説、米 FAA による航空管制でのフロッピーディスク廃止計画が上位に並びました。GitHub Blog では、多数のエージェントが同時に push できる新しい Git ストレージ構成と、エージェント型開発のガイドが公開されています。Zenn では ISUCON2026 の優勝記や、元号の開始日変更によるテスト失敗の事例が注目を集めています。なお、各項目の要約は取得できたタイトルとフィード上の概要に基づいています。

## Libghostty 1.0

Mitchell Hashimoto 氏のブログで Libghostty 1.0 が告知されました。Libghostty は、ターミナルエミュレータ Ghostty のコア機能をライブラリとして切り出したものです。ターミナル機能を自分のアプリケーションに組み込みたい開発者にとって、1.0 は API の安定性を判断する一つの節目になります。具体的な API や対応言語は、原文で確認してください。

詳細は [Libghostty 1.0](https://mitchellh.com/writing/libghostty-1-0) を参照。

## Firecracker VM エスケープ: PwnEscape Part 2

軽量仮想化技術 Firecracker のゲストからホストへのエスケープを扱うシリーズの第2回です。Firecracker は、サーバーレス基盤などでマルチテナント分離に使われています。そのため、VM 境界の破れはクラウド事業者と利用者の双方に影響します。分離境界を前提にしたサンドボックスを運用している場合は、攻略手法と対策の詳細を確認する価値があります。

詳細は [Firecracker VM Escape: PwnEscape Part 2](https://pwn.ai/blog/firecracker-escape) を参照。

## FAA、航空管制のフロッピーディスクを 2028 年までに廃止へ

Reuters によると、米連邦航空局（FAA）は航空管制システムで使われているフロッピーディスクを 2028 年までに段階的に廃止する方針です。重要インフラに残る古い記録媒体とレガシーシステムの更新は、多くの組織に共通する課題です。移行にはデータ互換性と運用の継続性の両立が求められます。

詳細は [US FAA says it will phase out floppy disks from air traffic control by 2028](https://www.reuters.com/world/us/us-faa-says-it-will-phase-out-floppy-disks-air-traffic-control-by-2028-2026-11-05/) を参照。

## Tesla、Cybertruck の生産を縮小へ

NBC News は、Tesla が Cybertruck の生産を縮小する方向だと報じています。見出しでは、販売不振が背景にあるとされています。

詳細は [Tesla to wind down Cybertruck production](https://www.nbcnews.com/tech/tech-news/tesla-wind-cybertruck-production-years-poor-sales-markets-rcna607817) を参照。

## LLM ジャッジによるアイデンティティ解決のコスト削減

Hightouch のブログ記事です。タイトルによれば、Opus に助けを求められる「Jev」（LLM ジャッジ）を使うと、Opus 単体と同等の精度を約4分の1のコストで得られるとされています。安価なモデルを一次判定に使い、難しいケースだけ高性能モデルへ回す構成は、LLM を使った大規模データ処理でコストを抑える際の有力な考え方です。

詳細は [A Jev that can ask Opus for help gives Opus accuracy at 4x lower cost](https://hightouch.com/blog/llm-judges-identity-resolution) を参照。

## Unitree の工場見学記

中国のロボットメーカー Unitree の工場を見学した筆者が、その経験を踏まえて西側諸国の将来性に前向きな見方を示した記事です。ロボティクスの製造競争を、現場視点で捉える内容です。

詳細は [I Toured Unitree's Factory. I'm More Bullish on the West](https://josef.cn/blog/unitree) を参照。

## GitHub の新しい Git ストレージアーキテクチャ

GitHub は、数千のエージェントが単一リポジトリへ同時に push できるよう、ストレージ、配信（serving）、メンテナンスを分離した新しい設計を紹介しています。AI エージェントによるコミットが増えると、従来の Git ホスティングの前提が変わります。その変化に対するインフラ側の回答として注目できます。

詳細は [Inside GitHub's new Git storage architecture](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/) を参照。

## エージェント型エンジニアリングの開発者ガイド

GitHub Copilot を、コード生成だけでなく計画、実装、検証、本番障害の調査まで通して使う方法を解説したガイドです。開発工程全体にエージェントを組み込む際の指針として読めます。

詳細は [Beyond code generation: A developer's guide to agentic engineering](https://github.blog/ai-and-ml/github-copilot/beyond-code-generation-a-developers-guide-to-agentic-engineering/) を参照。

## Zenn: ISUCON2026 優勝記（当日編）

Zenn のトレンド首位は、ISUCON2026 で優勝したチームの当日編レポートです。性能改善コンテストでの進め方や判断の記録は、実務のパフォーマンスチューニングにも参考になります。

詳細は [ISUCON2026 で優勝しました（当日編）](https://zenn.dev/luvtechno/articles/isucon2026-competition-day) を参照。

## Zenn: 明治の開始日変更で単体テストが失敗

.NET 環境で、明治時代の開始日が変更されたことにより単体テストが失敗した事例の記事です。日付や暦のデータは OS やランタイムの更新で変わり得るため、環境依存のテストの落とし穴として押さえておきたい話題です。

詳細は [[破壊的変更] 明治時代の開始日が変更になって単体テストが失敗した件](https://zenn.dev/xin9le/articles/9a1cf8e10494d6) を参照。
