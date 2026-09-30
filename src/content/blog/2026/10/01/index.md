---
title: "Gemini 4 Argon 登場、OpenAI DevDay 発表、Git 2.56 と AI セキュリティエージェントの成果"
description: "Google の Gemini 4 Argon、OpenAI DevDay 2026 の発表、Git 2.56 の性能改善、GitHub の AI セキュリティエージェントによる Android 脆弱性発見、Jujutsu 移行記などをまとめた技術ニュース。"
pubDate: 2026-10-01
tags: ["AI", "Git", "セキュリティ", "OpenAI", "Gemini", "OSS"]
author: "grasshopper"
---

本日は AI モデル・エージェント関連の大型発表が目立った。Google は出力トークン上限を大幅に拡張した Gemini 4 Argon を発表し、OpenAI は DevDay で常時稼働エージェント「dots」などを披露した。開発ツール面では Git 2.56 がマージベース探索や各種スケーリングを改善し、GitHub は AI セキュリティエージェントで Android アプリの脆弱性 24 件を発見した事例を公開した。Zenn では Jujutsu への移行体験記が注目を集めている。

## Google、Gemini 4 Argon を発表

Google がソフトウェアエンジニアリング、法務・金融などの企業業務、サイバーセキュリティ防御を想定したフロンティアモデル「Gemini 4 Argon」を発表した。出力上限は従来の 64K トークンから 100 万トークンへ拡張され、長い多段階タスクに対応する。脆弱性の自律的な発見・修正で高いスコアを示し、Google 社内では C/C++ から Rust への大規模移行などにも使われているという。提供は当面「Fairwind Program」の防御担当者向けで、入力 $2 / 出力 $10（100 万トークンあたり）の導入価格が示されている。

詳細は [Gemini 4 Argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) を参照。

## OpenAI DevDay 2026 の発表まとめ

Zenn の解説記事によると、OpenAI は 24 時間稼働し 4,000 以上のアプリとプラグイン連携する「dots」エージェントを発表した。GPT-6 Astra と同等の性能を 5 分の 1 のコストで提供するとされる GPT-6.1 Sol、Codex で最大 8 倍の高速生成を可能にする高速モード（月額 $500 の Pro 500）、Agents API の computer use 対応なども含まれる。エージェントの常時稼働化とコスト低下が焦点となる。

詳細は [OpenAI DevDay 2026 発表まとめ](https://zenn.dev/schroneko/articles/openai-devday-2026) を参照。

## GitHub、AI セキュリティエージェントで Android 脆弱性 24 件を発見

GitHub はオープンソースの AI セキュリティエージェントを使い、Android アプリで 24 件の脆弱性を見つけたと報告した。LLM に段階的な手順（taskflow）を踏ませる設計で、エクスポートされた Activity への任意 extras 付き Intent を悪用した位置情報追跡（OsmAnd）や Cookie 窃取（Wikipedia アプリ）などが挙げられている。一方で深刻度評価は苦手で誤検知も出るため、人間のレビューが必要とされる。taskflow は公開されており Codespaces で実行できるが、Copilot ライセンスと多くのトークンを要する。

詳細は [How we found 24 Android vulnerabilities using our open source AI security agent](https://github.blog/security/how-we-found-24-android-vulnerabilities-using-our-open-source-ai-security-agent/) を参照。

## Git 2.56 のハイライト

Git 2.56 では、コンフリクト解消済みファイルのみをステージする `git add --resolved`、除外コミットを追跡して探索を早く打ち切るマージベース検出（モノレポで最大 70 倍高速）、bitmap や delta islands と併用できる path-walk repack（パックが 71% 縮小）が入った。実験的な `git history` には `drop` が追加され、reftable 書き込みや `git diff` の二次計算的挙動も解消された。大規模リポジトリ運用者に恩恵が大きい。

詳細は [Highlights from Git 2.56](https://github.blog/open-source/git/highlights-from-git-2-56/) を参照。

## Jujutsu に移行して Git に戻れなくなった理由（Zenn）

15 年 Git を使ってきた筆者が Jujutsu（jj）に移行した体験記。作業ツリーの変更が自動でコミットされるためステージングを意識せず、`jj new` / `jj abandon` で名前なしの実験を気軽に作って捨てられる。`jj edit` で過去の変更を直接編集すると子孫が自動でリベースされる点や、全ブランチを一望できるログ表示が評価されている。

詳細は [Jujutsu と出会い、15 年使った Git にもう戻れなくなった理由](https://zenn.dev/oukayuka/articles/15years-git-then-jujutsu) を参照。

## Magnitude: エージェント向け自己最適化推論エンジン

Launch HN で公開された Magnitude（YC S25）は、ローカルで AI エージェントを動かすための Rust 製オープンソース推論エンジン。オンデバイスコンパイル、動的メモリ割り当て、ハイブリッド paged attention を備え、llama.cpp 比で Metal の decode が 92% 高速、CUDA の prefill が 23% 高速と主張している（投稿者の報告値）。

詳細は [Launch HN: Magnitude](https://github.com/magnitudedev/magnitude) を参照。

## EDG C++ フロントエンドが公開へ

C++ フロントエンドとして多くのコンパイラ・解析ツールに使われてきた EDG が公開される旨が Hacker News で話題になった。ページは取得できたが詳細な内容までは確認できていないため、詳しくは元ページを参照されたい。

詳細は [EDG C++ front-end goes public](https://edgcpp.org/#transition) を参照。

## その他の注目記事

- [Improving site performance by shipping more CSS](https://github.blog/engineering/architecture-optimization/improving-site-performance-by-shipping-more-css/) — GitHub Blog のパフォーマンス改善記事。
- [When chat is the wrong UI](https://github.blog/ai-and-ml/github-copilot/when-chat-is-the-wrong-ui/) — チャット以外の AI UI を論じる GitHub Blog の記事。
- [Claude Code / Codexで「私のlimit、減りすぎ…？」と思ったときに見る記事](https://zenn.dev/tokium_dev/articles/ai-agent-usage-limit-long-sessions) — AI エージェントの利用上限が長いセッションで減る理由を扱う Zenn 記事。
- [Rustで作った自作OS「octox」がサンフランシスコ大学の教材になっていました](https://zenn.dev/o8vm/articles/3934806424cd85) — Rust 製自作 OS が大学教材に採用された話。
