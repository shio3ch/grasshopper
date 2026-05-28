---
title: "Anthropic Series H $65B調達、Claude Opus 4.8リリース、GitHubセキュリティ研究者BANなど — 2026-05-28 技術ニュースまとめ"
description: "Anthropicが$65B（約10兆円）の資金調達を発表、Claude Opus 4.8が公開、GitHubがゼロデイ研究者をBANする騒動、PostgresベースのDurable Workflow、Raspberry Pi 6関連情報など本日の主要技術ニュース10本。"
pubDate: 2026-05-28
tags: ["AI", "セキュリティ", "GitHub", "Anthropic", "PostgreSQL", "ハードウェア", "LLM"]
author: "grasshopper"
---

本日の技術ニュースは AI 関連が特に活況だ。Anthropic がシリーズ H で $65B の巨額調達を発表し、Claude Opus 4.8 も新たにリリースされた。GitHub では Gartner マジッククアドラントで AI コーディングエージェント部門のリーダーに3年連続認定される一方、ゼロデイ脆弱性を公開したセキュリティ研究者をBANする騒動が起きた。バックエンドでは PostgreSQL だけで耐久性のあるワークフローを実現する手法が注目を集め、Raspberry Pi 6 の情報も浮上している。

---

## 1. Anthropic、シリーズ H で $65B を調達 — 評価額 $965B

Anthropic がシリーズ H ラウンドで **650億ドル**（約10兆円）の資金調達を完了し、ポストマネー評価額が **9,650億ドル** に達したと発表した。1兆ドルに迫る評価額は AI 企業として史上最高水準であり、大規模モデル開発インフラへの継続投資を示している。競合する OpenAI や Google DeepMind との競争が一層激化する中で、Anthropic の資本力強化は業界全体の開発速度を押し上げる可能性がある。

詳細は [Anthropic Series H 発表](https://www.anthropic.com/news/series-h) を参照。

---

## 2. Claude Opus 4.8 公開 — Anthropic の最新旗艦モデル

Anthropic が **Claude Opus 4.8** を公開した。シリーズ H 発表と同日に新モデルがリリースされた形で、コーディング・推論・長文理解など高難度タスクにおける性能向上が主な訴求ポイントとされている。AI エージェントを中心に据えた利用シナリオへのさらなる最適化も行われており、Claude Code など開発者ツールと連携した用途での恩恵が期待される。

詳細は [Claude Opus 4.8 発表](https://www.anthropic.com/news/claude-opus-4-8) を参照。

---

## 3. GitHub、Gartner マジッククアドラント「企業向け AI コーディングエージェント」部門で3年連続リーダー認定

GitHub が Gartner® Magic Quadrant™ の **Enterprise AI Coding Agents** 部門で3年連続リーダーとして認定された。GitHub Copilot はコード補完からエージェント的な PR 作成・レビュー支援まで機能を拡張しており、企業導入実績と製品完成度の両面が評価された形だ。AI コーディングツール市場は急速に競合が増えているが、エンタープライズ向けセキュリティ・管理機能の充実が差別化要因となっている。

詳細は [GitHub Blog: Gartner Magic Quadrant 認定](https://github.blog/ai-and-ml/github-copilot/github-recognized-as-a-leader-in-the-gartner-magic-quadrant-for-enterprise-ai-coding-agents-for-the-third-year-in-a-row/) を参照。

---

## 4. GitHub Enterprise Server、署名鍵のローテーションを実施 — セキュリティインシデント対応

GitHub は **GitHub Enterprise Server** における署名鍵のローテーションを実施した。内部リポジトリへの不正アクセスに関する調査の一環として行われたもので、影響範囲・原因の詳細を継続的に公開している。自社運用の GHES インスタンスを持つ組織は鍵の更新状況を確認し、CI/CD パイプラインや依存関係の検証フローに影響がないかを確認することが推奨される。

詳細は [GitHub Blog: 署名鍵ローテーション調査アップデート](https://github.blog/security/investigating-unauthorized-access-to-githubs-internal-repositories/) を参照。

---

## 5. GitHub、ゼロデイ Windows 脆弱性を公開したセキュリティ研究者をBAN — 業界に波紋

Microsoft 傘下の GitHub が、Windows のゼロデイ脆弱性のエクスプロイトを公開したセキュリティ研究者のアカウントを凍結した。当該研究者は「会社に人生を壊された」と主張しており、報復的措置だとして反発している。セキュリティコミュニティでは、プラットフォームによる研究成果の検閲を巡る論争が再燃。脆弱性開示（Responsible Disclosure）の文化と、プラットフォームの利用規約の緊張関係が改めて問われている。

詳細は [Tom's Hardware: GitHub がセキュリティ研究者をBAN](https://www.tomshardware.com/tech-industry/cyber-security/microsofts-github-bans-security-researcher-who-posted-zero-day-windows-exploits-because-company-ruined-their-life-expert-claims-action-is-vindictive-and-promises-further-retaliation) を参照。

---

## 6. Postgres だけで耐久性のあるワークフローを構築する

「Durable Execution（耐久性のある実行）」の実現に Redis や専用キューを使わず、**PostgreSQL だけで十分**という主張が Hacker News で大きな注目を集めた。DBOS の記事では、Postgres のトランザクション保証と `SELECT FOR UPDATE SKIP LOCKED` パターンを活用することで、ジョブの冪等性・障害回復・リトライを一貫して管理できることを解説している。外部依存を減らしてインフラをシンプルに保ちたいチームにとって参考になるアーキテクチャパターンだ。

詳細は [DBOS Blog: Building durable workflows on Postgres](https://www.dbos.dev/blog/postgres-is-all-you-need-for-durable-execution) を参照。

---

## 7. LLM の「コードの臭い」を整理した記事が話題に

「Various LLM Smells」と題した記事が HN でトレンド入り。LLM が生成するコードや文章に見られるアンチパターン — 過剰な免責事項、根拠のない自信、冗長な繰り返し、ハルシネーション由来の偽コード参照など — を体系的にまとめたものだ。AI 生成コードをレビューする際の観点として実用的であり、LLM を日常的に活用するエンジニアが陥りやすい「AI 出力をそのまま信じる」リスクを改めて示している。

詳細は [Various LLM Smells](https://shvbsle.in/various-llm-smells/) を参照。

---

## 8. Raspberry Pi 6 と新マイコン開発に関する情報が浮上

Jeff Geerling が **Raspberry Pi 6** と新たなマイコン開発に関する情報を公開した。Raspberry Pi 5 のリリース以降、次世代モデルへの関心が高まっており、ハードウェアハッカーコミュニティで大きな話題を呼んでいる。詳細なスペックや発売時期は未確定だが、SBC（シングルボードコンピュータ）の進化がエッジコンピューティングや組み込み AI にどう影響するかが注目される。

詳細は [Jeff Geerling: Raspberry Pi 6 関連情報](https://www.jeffgeerling.com/blog/2026/news-about-raspberry-pi-6-and-microcontroller-development/) を参照。

---

## 9.【Zenn】「JWT を localStorage に置くな」はなぜ言われるのか — Cookie 回帰の歴史的整理

Zenn のトレンド記事。JWT のセッション管理において「localStorage は XSS 脆弱性のリスクがあるため避けるべき」という言説がなぜ生まれ、どのように Cookie 中心の実装が再評価されてきたかを時系列で整理した内容だ。HttpOnly Cookie・SameSite 属性・CSRF 対策の組み合わせといった実装上の考え方も丁寧に説明されており、認証基盤を設計するエンジニアに有用な一本。

詳細は [Zenn: JWT を localStorage に置くな](https://zenn.dev/khale/articles/web-session-jwt-cookie-history) を参照。

---

## 10.【Zenn】Claude Code と Codex を2ヶ月使い比べて分かった選び方

Claude Code と OpenAI Codex CLI を2ヶ月間並行して使い続けた著者による比較記事。「settings.json を育てた側が速い」という観点から、カスタマイズの積み上げが実際の開発速度に直結することを示している。タスクの種類・プロジェクト規模・チームのワークフローによってどちらが適しているかの判断軸を実体験ベースで整理しており、AIコーディングツール選定を検討しているチームの参考になる。

詳細は [Zenn: Claude Code と Codex を2ヶ月使い比べて分かった選び方](https://zenn.dev/playpark/articles/claude-code-vs-codex-comparison) を参照。
