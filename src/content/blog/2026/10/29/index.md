---
title: "Qwen内RISC-Vの実装、GitLab脆弱性の悪用試行、AIコードレビュー運用の話題"
description: "2026-10-29の技術ニュース。Qwen3.5内のRISC-V CPU、GitLab CVE-2026-97229の悪用試行、MicroZigのAI禁止方針、Android XRグラス、GitHub Universe 2026、Zennのレビュー・セキュリティ記事などを紹介。"
pubDate: 2026-10-29
tags: ["Hacker News", "セキュリティ", "AI", "GitHub", "Zenn"]
author: "grasshopper"
---

本日は Hacker News、Zenn、GitHub Blog から話題の記事を取り上げる。Hacker News では LLM の内部に CPU を構築する実験や、GitLab の脆弱性を狙った攻撃の報告が上位に入った。OSS プロジェクトが AI 利用を禁止する方針も議論を呼んでいる。Zenn では AI エージェント時代のコードレビューとセキュリティ対策、GitHub Blog ではエージェント規模の Git 基盤や Universe 2026 の話題が並んだ。なお、一部の記事は本文を取得しておらず、タイトルや取得できたメタ情報に基づいて紹介している。

## Qwen3.5 の内部に決定的な RISC-V CPU を実装

「Qwenputer」は、Qwen3.5 の内部で動作する決定的（deterministic）な RISC-V CPU を扱うブログ記事である。確率的に出力するはずの LLM を、再現性のある計算機として振る舞わせる試みとみられる。LLM の計算能力や、重みを使った論理回路の表現を考えるうえで興味深い題材だ。

詳細は [Qwenputer: A functioning, deterministic RISC-V CPU inside Qwen3.5](https://divagr.com/blog/qwenputer) を参照。

## フィンガープリントスクリプトと「バイオ兵器」をめぐる記事

「Why is this fingerprinting script creating bioweapons?」は、Hacker News で 862 ポイント、186 コメントを集めた投稿である。ブラウザのフィンガープリント用スクリプトに関する調査記事とみられるが、本文は取得できていないため、内容の詳細は元記事で確認してほしい。コメント数の多さから、Web 計測やトラッキングの挙動への関心の高さがうかがえる。

詳細は [Why is this fingerprinting script creating bioweapons?](https://nullpt.rs/fingerprinting-bioweapons) を参照。

## GitLab の脆弱性 CVE-2026-97229 に対する悪用試行

Alpine Linux が、GitLab の脆弱性 CVE-2026-97229 を狙った悪用試行に関するセキュリティインシデントを公開した。セルフホストの GitLab を運用している組織にとっては、パッチ適用状況とアクセスログの確認が必要になる話題である。自社運用のインフラが標的になりうることを示す事例でもある。

詳細は [GitLab Security Incident: Attempted Exploitation of CVE-2026-97229](https://alpinelinux.org/posts/GitLab-security-incident-CVE-2026-97229.html) を参照。

## MicroZig が厳格な「LLM／AI 不使用」方針を採用

組み込み向け Zig のプロジェクト MicroZig が、行動規範（CODE_OF_CONDUCT.md）に厳格な No LLM / No AI ポリシーを盛り込む方針を示した。OSS で AI 生成コードの扱いを明文化する動きの一例である。レビュー負荷、ライセンス、品質保証といった観点で、他のプロジェクトにも影響する可能性がある。

詳細は [MicroZig to Adopt Strict No LLM / No AI Policy](https://github.com/ZigEmbeddedGroup/microzig/blob/main/CODE_OF_CONDUCT.md) を参照。

## Android XR 搭載の有線 XR グラス

Google が、Android XR を搭載した初の有線 XR グラス「XREAL Aura」を紹介している。Android XR のハードウェアの選択肢が広がる発表であり、アプリ開発者にとっては対応デバイスの増加を意味する。

詳細は [The first wired XR glasses powered by Android XR](https://blog.google/products-and-platforms/platforms/android/xreal-aura/) を参照。

## GitHub Universe 2026 とエージェント規模の Git 基盤

GitHub Blog では、Universe 2026 の発表を扱う「Evolving every layer of the stack」、Octoverse 2026 の報告、エンジニアリング記事「The bridge to agent-scale Git infrastructure」が公開された。Octoverse の見出しでは、エージェントを活用した開発によりコミットとプッシュが過去最高水準に達したとされている。エージェントによる大量のリポジトリ操作に Git 基盤をどう対応させるかが、開発基盤側の課題になっているようだ。

詳細は [GitHub Universe 2026: Evolving every layer of the stack](https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/)、[Octoverse: Commits, pushes, reach new highs in 2026 as developers build with agents](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/)、[The bridge to agent-scale Git infrastructure](https://github.blog/engineering/architecture-optimization/the-bridge-to-agent-scale-git-infrastructure/) を参照。

## Zenn: AI 時代のレビューとセキュリティ

Zenn のトレンドでは、AI 活用の運用面を扱う記事が目立つ。「コードを読まずにマージするために必要なこと」はレビューの省力化を、「AIエージェントに設計書レビューを任せたらレビュワーは楽になった。でも現場は？？」は設計書レビューの AI 化を扱う。「Claude Codeで半年分のレビュー指摘を分類してみた」はレビュー指摘の傾向分析、「Auto mode時代のClaude Codeを守る」は Claude Code のセキュリティ対策キットを紹介する記事である。いずれも、AI にコードを書かせたあとの品質保証が主題になっている。

詳細は [コードを読まずにマージするために必要なこと](https://zenn.dev/nrs/articles/c777388530aa84)、[AIエージェントに設計書レビューを任せたらレビュワーは楽になった。でも現場は？？](https://zenn.dev/nttdata_tech/articles/6a06f484ebfab7)、[Claude Codeで半年分のレビュー指摘を分類してみた](https://zenn.dev/port_inc/articles/a4bc3b39f44459)、[Auto mode時代のClaude Codeを守る。検証済み10キットで始めるセキュリティ対策【全員・チーム・組織別】](https://zenn.dev/sonicmoov/articles/67aaeb49be69ec) を参照。

## Zenn: E2E 戦略と Flutter からネイティブへの移行

「最近の E2E 戦略（2026 年 10 月現在）」はテスト戦略の現状整理、「Flutter やめました。電話アプリを Native にした理由」は技術選定の見直しを扱う。また「eMudhraの中間CA証明書の秘密鍵を求めてみる」は、証明書の鍵に関する検証記事である。

詳細は [最近の E2E 戦略（2026 年 10 月現在）](https://zenn.dev/polyco/articles/26624b38c951b5)、[Flutter やめました。電話アプリを Native にした理由](https://zenn.dev/ivry/articles/d155267331a3ca)、[eMudhraの中間CA証明書の秘密鍵を求めてみる](https://zenn.dev/herumi/articles/search_bad_emudhra_key) を参照。
