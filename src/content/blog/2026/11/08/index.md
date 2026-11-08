---
title: "GitHubの新Gitストレージ、Claude Codeの設定漏えい、Microsoft Research AI Frontiers終了"
description: "2026-11-08の技術ニュース。GitHubのGitストレージ刷新とエージェント開発、コーディングエージェント経由の秘密情報漏えい、MS ResearchのAI Frontiers終了、Zennの話題記事をまとめる。"
pubDate: 2026-11-08
tags: ["GitHub", "AIエージェント", "セキュリティ", "Zenn", "Hacker News"]
author: "grasshopper"
---

本日は、AIエージェントを前提とした開発基盤の話題が目立った。GitHubはエージェントが同一リポジトリへ同時に push できるGitストレージの新設計を公開し、エージェント開発のガイドも出している。一方でコーディングエージェントの許可設定を介した秘密情報の漏えいも報告された。Zennでは明治の開始日変更による単体テスト失敗や、ADR運用の話題が伸びている。

## GitHubの新しいGitストレージアーキテクチャ

GitHubは、オブジェクトデータと参照（ref）の更新を分離したストレージ設計を紹介している。多数のエージェントが1つのリポジトリへ同時に push する状況を想定した設計で、参照更新の競合がスケールのボトルネックになりやすい点への対応と読める。エージェントによる並列作業が増えるなか、Git基盤そのものが変わりつつあることを示す記事だ。

詳細は [Inside GitHub's new Git storage architecture](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/) を参照。

## エージェント的エンジニアリングの開発者ガイド

GitHub Blogは、コード生成にとどまらず、計画・実装・検証・観測といった工程でエージェントを活用する方法をまとめた。コードを書かせるだけでなく、検証や運用監視までエージェントの守備範囲に含める考え方が中心だ。

詳細は [Beyond code generation: A developer's guide to agentic engineering](https://github.blog/ai-and-ml/github-copilot/beyond-code-generation-a-developers-guide-to-agentic-engineering/) を参照。

## GitHub Universe 2026の発表

GitHub Universe 2026では、エージェントによるソフトウェアデリバリーという方向性が示された。GitHub Copilot app、Copilot projects、Copilot code review Max といった製品が紹介されている。

詳細は [GitHub Universe 2026: Evolving every layer of the stack](https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/) を参照。

## 新しいPull Request概要ページがパブリックプレビュー

GitHubのChangelogで、新しいPull Request概要ページがパブリックプレビューになったことが告知された。Hacker Newsでも上位に入っている。本記事ではタイトルのみ確認できたため、詳細は元記事で確認してほしい。

詳細は [New pull request overview page in public preview](https://github.blog/changelog/2026-11-05-new-pull-request-overview-page-in-public-preview/) を参照。

## Claude Codeの「Don't Ask Again」が公開リポジトリで秘密情報を露出

Apiiroのブログは、コーディングエージェントの許可設定（「Don't Ask Again」）が原因で、パスワードなどが公開GitHubファイル1,122件に含まれていたと報告している。エージェントのローカル設定ファイルに許可済みコマンドとして認証情報が残り、それがそのままコミットされるという問題だ。設定ファイルを `.gitignore` で管理し、コミット前にシークレットスキャンをかける運用が重要になる。

詳細は [Claude Code's "Don't Ask Again" exposes passwords in 1,122 public GitHub files](https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again) を参照。

## Microsoft ResearchのAI Frontiersグループが終了

Hacker Newsで最上位に入ったのは、Microsoft ResearchのAI Frontiersグループの終了に関する記事だ。大手企業の研究組織の再編は、AI研究の重心が基礎研究から製品寄りへ動いていることを考える材料になる。

詳細は [The end of Microsoft Research's AI Frontiers group](https://hunch.net/?p=13764006) を参照。

## [Zenn] 明治時代の開始日変更で単体テストが失敗

Zennのトレンドでは、日付ライブラリの更新で明治時代の開始日が変更され、単体テストが失敗した件が取り上げられている。和暦を扱うコードは、ライブラリ側のデータ更新が破壊的変更になり得る。和暦の境界値を回帰テストとして固定しておくと、こうした変化に気づきやすい。

詳細は [[破壊的変更] 明治時代の開始日が変更になって単体テストが失敗した件](https://zenn.dev/xin9le/articles/9a1cf8e10494d6) を参照。

## [Zenn] ADRの書き方とlint

ADR（Architecture Decision Record）に関する記事が2本入っている。1本はAIが書くADRの読みづらさに対応するガイドライン作成、もう1本はADRをregoでlintする試みだ。AIで文書を量産すると品質のばらつきが出るため、ガイドラインと機械的な検査で担保する流れがうかがえる。

詳細は [AIが書く「読みづらいADR」に発狂しかけたので、ADRのガイドラインを作った](https://zenn.dev/tokium_dev/articles/adr-authoring-guideline) と [ADRをregoでlintする](https://zenn.dev/babarot/articles/regomark-adr-checker) を参照。

## [Zenn] AIによるペネトレーションテストとISUCON2026

OpenCode、Docker、GitHub Actionsを組み合わせたAIペネトレーションテストの自動化事例が紹介されている。あわせて、ISUCON2026の優勝体験記（当日編）も話題になっている。

詳細は [OpenCode+Docker+GitHub Actionsで全自動AIペネトレーションテストはじめました](https://zenn.dev/team_zenn/articles/opencode-docker-actions-ai-pentest) と [ISUCON2026 で優勝しました（当日編）](https://zenn.dev/luvtechno/articles/isucon2026-competition-day) を参照。
