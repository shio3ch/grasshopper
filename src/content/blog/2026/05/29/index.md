---
title: "2026-05-29 技術ニュースまとめ"
description: "MCPの限界論争、Liquid AI新モデル発表、SQLiteによるワークフロー耐久性、GitHubのAIコーディングエージェントリーダー認定、カリフォルニア州ゲーム保護法案など、本日の主要技術トピックを厳選してお届けします。"
pubDate: 2026-05-29
tags: ["AI", "LLM", "セキュリティ", "OSS", "GitHub", "Web開発", "ゲーム"]
author: "grasshopper"
---

本日の技術ニュースは、AIコーディングエージェントの成熟とその課題、新しいLLMモデルのリリース、Webセキュリティのベストプラクティス再考、そして予想外のゲーム業界の動向など多岐にわたる。特にMCP（Model Context Protocol）の批判的考察とLiquid AIの新モデル発表が注目を集めている。またGitHub EnterpriseでのSigning Key漏洩事件は企業ユーザーへの影響が大きく、セキュリティ対応が急がれる。日本のZennコミュニティでもAIコーディングツール比較やJWTセキュリティに関する高品質な技術記事が話題を呼んでいる。

## MCP Is Dead — MCPへの批判的考察

Quandriエンジニアリングチームが「MCPはもう死んでいる」と題した論考を公開した。Model Context Protocol（MCP）はAnthropicが提唱したAIツール連携の標準規格だが、実装の複雑さ、セキュリティモデルの不明確さ、そして実際のユースケースにおける限界が次第に明らかになってきているという。記事では、MCPを採用して開発した結果、シンプルなAPI呼び出しで済む処理をMCPレイヤー経由にする煩雑さが顕在化したことを指摘している。「仕様が悪いのではなく、現時点での実装エコシステムが未成熟」という見解も示され、HNでは賛否両論の議論が展開している。AIツール連携標準の方向性を考えるうえで重要な一石を投じる内容だ。

詳細は [MCP Is Dead](https://www.quandri.io/engineering-blog/mcp-is-dead) を参照。

## Liquid AI、8B-A1Bのスパース MoEモデルを38Tトークンで学習して公開

Liquid AIが新モデル「LFM2.5-8B-A1B」を発表した。アクティブパラメータ数は10億（1B）と小さいが、8Bの全パラメータを持つMixture of Experts（MoE）アーキテクチャを採用しており、38兆（38T）トークンで事前学習されている。Liquid AIは独自のLiquid Neural Network（LNN）技術をベースに持ち、Transformerに依存しない新世代モデルの開発で知られている。今回のリリースは推論コストを大幅に抑えながら高品質な出力を実現することを目標としており、エッジデバイスや低リソース環境での展開に適している。オープンなウェイト公開も予定されており、研究コミュニティへの貢献が期待される。

詳細は [Liquid AI reveals 8B-A1B MoE trained on 38T](https://www.liquid.ai/blog/lfm2-5-8b-a1b) を参照。

## SQLite だけで耐久性のあるワークフローを実現する

「SQLite is all you need for durable workflows」と題されたブログ記事が話題を呼んでいる。分散システムにおけるワークフロー耐久性（durable workflow）は通常、専用のメッセージキューやワークフローエンジン（Temporal、Conductor など）を必要とするが、著者はSQLiteのWAL（Write-Ahead Logging）モードと適切なトランザクション設計により、単一プロセスでの耐久性のある処理を十分実現できると主張する。マイクロサービスや外部依存を減らしたシンプルなシステム設計の観点から、SQLiteを「最小要件を満たすデータストア」として積極的に評価する論調は近年増加しており、本記事もその流れを汲む内容だ。小〜中規模システムへの実践的な示唆を含んでいる。

詳細は [SQLite is all you need for durable workflows](https://obeli.sk/blog/sqlite-is-all-you-need-for-durable-workflows/) を参照。

## Tiny-vLLM: C++とCUDAで実装した高性能LLM推論エンジン

「Show HN」として投稿された `tiny-vllm` は、Pythonに依存せずC++とCUDAのみで実装したLLM推論エンジンだ。vLLMはPythonベースの高性能推論フレームワークとして広く使われているが、Python環境のセットアップコストや起動オーバーヘッドが課題になる場面も多い。Tiny-vLLMはその名の通り、最小限の実装でvLLM相当の推論性能を目指すプロジェクトで、学習目的にも適した読みやすいコードベースが特徴とされている。自前のGPU環境でLLMを動かしたいエンジニアや、推論エンジン内部を学習したい開発者にとって参考になるリポジトリだ。

詳細は [Show HN: Tiny-vLLM – high performance LLM inference engine in C++ and CUDA](https://github.com/jmaczan/tiny-vllm) を参照。

## GitHub、GartnerのAIコーディングエージェントMagic Quadrantで3年連続リーダー認定

GitHub CopilotがGartner Magic Quadrant for Enterprise AI Coding Agentsにおいて3年連続でリーダーに選出された。GitHub Copilotはコード補完にとどまらず、PRレビュー支援、バグ修正、テスト生成、チャットベースのコーディング支援と機能が大幅に拡張されており、エンタープライズ向けの管理・監査機能の充実も評価を高めている。競合するCursor、Windsurf、Amazon Q、JetBrains AIなど多数のプレーヤーが台頭する中でのリーダー維持は、GitHubのエコシステム統合力とMicrosoft Azureとの連携が強みとなっている。

詳細は [GitHub recognized as a Leader in the Gartner® Magic Quadrant™ for Enterprise AI Coding Agents](https://github.blog/ai-and-ml/github-copilot/github-recognized-as-a-leader-in-the-gartner-magic-quadrant-for-enterprise-ai-coding-agents-for-the-third-year-in-a-row/) を参照。

## GitHub Enterprise Serverの署名鍵漏洩インシデント調査アップデート

GitHubは、GitHub Enterprise Serverの内部リポジトリへの不正アクセスに関する調査の続報を公開した。今回のインシデントでは、コード署名鍵（signing key）のローテーションが必要になった経緯と、影響範囲の調査状況が報告されている。企業向けGitHub Enterprise Serverを利用している組織は、サプライチェーンセキュリティの観点からこのインシデントを無視できない。GitHubは署名鍵の即時ローテーション対応と、今後の再発防止策についても言及している。セルフホスト型GitHubを利用している組織の担当者は速やかに公式ブログの詳細を確認することを推奨する。

詳細は [Investigation update: GitHub Enterprise Server signing key rotation](https://github.blog/security/investigating-unauthorized-access-to-githubs-internal-repositories/) を参照。

## JWTをlocalStorageに置くべきでない理由 ─ Cookie回帰までの経緯（Zenn）

Zennでトレンド入りした記事「『JWT を localStorage に置くな』はなぜ言われるのか、Cookie 回帰までの時系列整理」が多くの開発者から反響を得ている。JWTをlocalStorageに保存するとXSS攻撃でトークンが盗まれるリスクがあること、一方でCookieにはCSRF攻撃のリスクがあることなど、両者のトレードオフが歴史的な経緯を追いながら丁寧に解説されている。`HttpOnly` Cookieと`SameSite=Strict`属性の組み合わせが現在のベストプラクティスとされる背景、そしてOAuthのBFF（Backend for Frontend）パターンへの移行トレンドについても詳述されており、Webアプリケーション開発者にとって復習に最適な一本だ。

詳細は [「JWT を localStorage に置くな」はなぜ言われるのか、Cookie 回帰までの時系列整理](https://zenn.dev/khale/articles/web-session-jwt-cookie-history) を参照。

## Claude CodeとCodexを2ヶ月使い比べて分かった選び方（Zenn）

「Claude CodeとCodexを2ヶ月使い比べて分かった選び方 — settings.jsonを育てた側が速い」と題したZenn記事が注目を集めている。著者はAnthropicのClaude CodeとOpenAIのCodexをともに実務で2ヶ月間並行して利用し、具体的なユースケースごとの使い分けを提案している。特に「settings.jsonをいかに育てるか」という観点からClaude Codeの設定チューニングが生産性に直結することを強調しており、コンテキスト長やツール連携の設定方法など実践的なTipsが多く含まれている。AIコーディングエージェントの選定・運用に迷っている開発者にとって参考になる内容だ。

詳細は [Claude CodeとCodexを2ヶ月使い比べて分かった選び方](https://zenn.dev/playpark/articles/claude-code-vs-codex-comparison) を参照。

## AIはフロントエンドの「失われた10年」を繰り返すか

Hacker Newsで議論を呼んでいる記事「Is AI causing a repeat of frontend's lost decade?」は、AIツールによるコード生成の普及がかつてのjQueryから脱却できなかった時代の停滞を再現しつつあるという懸念を論じている。AIが生成するコードはとりあえず動くが、長期的な保守性・アーキテクチャの整合性を欠きやすく、「理解せずに使う」開発文化を加速させる危険性があるという主張だ。コピー&ペーストプログラミングの現代版としてのAI生成コードへの批判は根強く、教育・レビュープロセスの再設計が求められているとの論点は、特にチームリーダーやエンジニアリングマネージャーに響く内容となっている。

詳細は [Is AI causing a repeat of frontend's lost decade?](https://mastrojs.github.io/blog/2026-05-23-is-ai-causing-a-repeat-of-frontends-lost-decade/) を参照。

## カリフォルニア州議会、「Protect Our Games Act」を可決

カリフォルニア州議会がゲーム保護法案「Protect Our Games Act」を可決した。この法案は、ゲームパブリッシャーがオンラインゲームのサービスを終了（いわゆる「サービス終了」）する際に、プレイヤーがゲームを引き続き実行できる手段を提供することを義務付けるものだ。「Stop Killing Games」運動の流れを汲む本法案は、特にオンライン認証必須のゲームがサービス終了後に完全に起動不能になる問題を規制対象としており、ゲーム業界への大きな影響が予想される。ゲームの文化的・歴史的保存という観点でも重要な立法の動向として注目されている。

詳細は [The California state assembly has passed the 'Protect Our Games Act'](https://www.invenglobal.com/articles/22330/stop-killing-games-movement-gains-momentum-california-assembly-passes-game-protection-bill) を参照。
