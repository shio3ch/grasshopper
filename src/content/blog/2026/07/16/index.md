---
title: "AIバブル論争とオープンウェイトモデル競争、GitHubのセキュリティ強化まで — 2026年7月16日の技術ニュースまとめ"
description: "Thinking Machinesの新モデルとxAIのGrok Build OSS化、AIバブルを巡る学術論文、GitHubのリポジトリ所有者制度、国内ではGitHub Actions高速化やClaude Codeによるレガシー刷新事例を紹介。"
pubDate: 2026-07-16
tags: ["AI", "LLM", "GitHub", "OSS", "DevOps"]
author: "grasshopper"
---

本日はAI関連の話題が引き続き中心となった。Thinking MachinesがオープンウェイトモデルとしてInklingを発表した一方、xAIはGrok Buildをオープンソース化するなど、大手プレイヤーによるオープン化の動きが目立つ。MITの研究者からはAI投資の過熱を分析する論文が公開され、投機的成長とバブルの境界を巡る議論も再燃した。金融領域ではStripeとAdventがPayPal買収を提案したとの報道があり、決済インフラの再編にも注目が集まる。国内Zennではエンジニアの実務知見として、GitHub Actionsの並列化によるCI高速化やClaude Codeを使ったレガシーシステム刷新の事例が人気を集めた。

## Thinking Machinesがオープンウェイトモデル「Inkling」を発表

Thinking Machinesが新たにオープンウェイトモデル「Inkling」を公開した。同社はこれまでクローズドな研究色が強かったが、重みを公開する形でコミュニティに提供する方針を明確にした。オープンウェイト戦略は、Metaやミストラル、そして後述のxAIも採用しており、フロンティアモデルの開発競争がクローズドとオープンの二極ではなく、各社が両方の戦略を併用する方向に向かっていることを示している。技術的には、公開されたウェイトを基にファインチューニングや量子化を行い、自前のインフラで推論を回せる点が開発者にとっての実利であり、推論コストの最適化や特定タスクへの適応が容易になる。

詳細は [Inkling: Our Open-Weights Model](https://thinkingmachines.ai/news/introducing-inkling/) を参照。

## xAIがGrok Buildをオープンソース化

xAIは開発者向けツール「Grok Build」のソースコードを公開した。Grok Buildはアプリケーション構築を支援するツールとみられ、オープンソース化によって外部開発者がツールチェーンを検証・拡張できるようになる。近年、AIベンダー各社は基盤モデルだけでなく周辺の開発ツールもオープン化することで、エコシステムへの取り込みを図る傾向が強まっている。GitHub上でのコード公開は、コミュニティによるバグ修正やプラグイン開発を促進し、結果としてxAIのプラットフォームの採用を後押しする狙いがあると考えられる。

詳細は [Grok Build is open source](https://github.com/xai-org/grok-build) を参照。

## MIT論文「投機的成長とAIバブル」が話題に

MIT経済学部の研究者による論文「Speculative Growth and the AI "Bubble"」が公開され、AI関連投資の急拡大が過去のテクノロジーバブルとどう異なるかを分析している。論文は、設備投資の急増や企業評価額の高騰がGDP成長率や生産性指標にどう波及するかをモデル化し、投機的な期待形成がマクロ経済に与える影響を定量的に検証している点が特徴だ。技術者にとっても、AIインフラへの資本投下が持続可能かどうかは、クラウド事業者の値付けやGPU供給の中長期的な動向に直結するため無視できないテーマである。

詳細は [Speculative Growth and the AI "Bubble" [pdf]](https://economics.mit.edu/sites/default/files/2026-07/speculative_growth_AI_public.pdf) を参照。

## StripeとAdventがPayPal買収を提案と報道

Reutersの報道によると、決済大手Stripeと投資会社Adventが共同でPayPalに買収提案を行ったとされる。買収額は530億ドルを超える規模との情報筋の話も伝えられている。実現すれば決済インフラ業界における最大規模の統合の一つとなり、StripeのAPIベース決済基盤とPayPalの巨大な加盟店ネットワーク・ウォレット事業が統合される可能性がある。開発者視点では、決済APIの標準化や統合の進み方、既存のPayPal SDKやWebhook仕様が今後どう変化するかが注視点となる。

詳細は [Stripe and Advent have made a joint offer to acquire PayPal – sources](https://www.reuters.com/business/finance/stripe-advent-offer-buy-paypal-more-than-53-billion-sources-say-2026-07-15/) を参照。

## Show HN: WebAssemblyで動くFirefox

Puter Labsによる実験プロジェクトとして、Firefoxブラウザ全体をWebAssemblyにコンパイルしてブラウザ上で動作させるデモが公開された。ブラウザの中でブラウザを動かすという構成は一見冗長に見えるが、レガシーなネイティブアプリケーションをサンドボックス化したWeb環境に移植する際の技術検証として意義がある。WASMの命令セットやメモリモデルの制約下で、複雑なレンダリングエンジンやJITコンパイラをどこまで再現できるかは、今後のWeb版デスクトップアプリケーション移植の指標になり得る。

詳細は [Show HN: Firefox in WebAssembly](https://developer.puter.com/labs/firefox-wasm/) を参照。

## 13年前のXeonでGemma 4 26Bを動かす検証

NeoMind Labsのブログでは、GPUを搭載しない13年前のXeonサーバー上で、Gemma 4の26Bパラメータモデルを毎秒5トークン程度の速度で動作させた検証結果が紹介されている。量子化やCPU推論向けの最適化ライブラリを組み合わせることで、専用GPUがなくてもある程度実用的な速度でLLM推論が可能であることを示した事例だ。エッジやオンプレミス環境でのLLM活用を検討する際、ハードウェア要件のハードルがどこまで下げられるかを示す実践的なデータポイントとして参考になる。

詳細は [Running Gemma 4 26B at 5 tokens/sec on a 13-year-old Xeon with no GPU](https://www.neomindlabs.com/2026/06/08/running-gemma-4-26b-at-5-tokens-sec-on-a-13-year-old-xeon-with-no-gpu/) を参照。

## GitHub、Copilotコードレビュー機能を再改善

GitHub Blogは、Copilotのコードレビュー機能について「ツールを増やしたことで一時的に品質が低下した」経緯と、そこからどう改善したかを解説する記事を公開した。レビューの精度向上のために追加した複数のツール群が、かえってノイズの多い指摘を生む結果になった反省を踏まえ、フィードバックのシグナルを絞り込む設計に見直したという。AIコードレビューツールを導入・運用するチームにとって、ツールの数を増やすことが必ずしも品質向上に直結しないという知見は、自社のレビューパイプライン設計にも応用できる。

詳細は [Better tools made Copilot code review worse. Here's how we actually improved it.](https://github.blog/ai-and-ml/github-copilot/better-tools-made-copilot-code-review-worse-heres-how-we-actually-improved-it/) を参照。

## GitHub、全リポジトリに「恒久的なオーナー」を付与

GitHubは、全てのリポジトリに対して明確な所有者（オーナー）情報を紐づける仕組みを導入したと発表した。個人アカウントの削除や組織からの離脱によって所有者不在のリポジトリが発生する問題は、サプライチェーンセキュリティの観点で長年の課題であった。恒久的なオーナーの仕組みにより、依存関係として利用されるパッケージやアクションの出自を追跡しやすくなり、乗っ取りリスクの低減につながる。CI/CDでGitHub Actionsやサードパーティのリポジトリを参照する開発者は、この変更がサプライチェーン監査にどう影響するか把握しておく価値がある。

詳細は [How GitHub gave every repository a durable owner](https://github.blog/security/application-security/how-github-gave-every-repository-a-durable-owner/) を参照。

## Zenn: GitHub Actionsの並列化でデプロイ8分→3分、CIコスト3割減

Zennのトレンド記事では、GitHub Actionsのジョブ・ステップを並列化することで、デプロイ時間を8分から3分に短縮し、CI利用コストを3割削減した事例が紹介されている。マトリクスビルドや依存関係のないステップの並列実行、キャッシュ戦略の見直しなど、具体的なワークフロー定義の改善ポイントが解説されており、CI/CDパイプラインのボトルネックを抱えるチームにとって即座に応用可能な内容となっている。並列化によって実行時間が短縮されるだけでなく、従量課金のCI環境ではコスト削減にも直結する点が実務上の大きな利点だ。

詳細は [GitHub Actions の parallel でデプロイは8分→3分、CI はコスト3割減になった](https://zenn.dev/hatsu/articles/github-actions-steps-parallel) を参照。

## Zenn: Claude Codeでレガシーシステムの刷新を進めた事例

ナレッジセンスによる記事では、Claude Codeを活用してレガシーシステムの刷新プロジェクトを進めた実践知見がまとめられている。既存コードの理解、段階的なリファクタリング計画の策定、テストの自動生成といった各フェーズでAIエージェントをどう活用したかが具体的に述べられており、大規模な既存システムに対するAI支援開発の適用パターンとして参考になる。人手によるレビューとAIによる提案を組み合わせるワークフロー設計が、刷新プロジェクトの成功率を左右する要点として強調されている。

詳細は [Claude Codeでレガシーシステムの刷新を進めた方法](https://zenn.dev/knowledgesense/articles/67c61463d9c664) を参照。

## Zenn: ローカルLLM構築の実践記録

個人開発者によるローカルLLM構築の記録がZennトレンドにランクインしている。クラウドAPIに依存せず自前の環境でLLMを動かす際のハードウェア選定、モデル選定、推論エンジンのセットアップ手順が具体的に記されており、プライバシーやコストの観点からローカル推論環境を検討するエンジニアにとって実用的なリファレンスとなっている。上述のXeonでのGemma 4検証とあわせて、GPUに依存しないLLM運用への関心の高まりがうかがえる。

詳細は [ローカル LLM を構築した](https://zenn.dev/neet/articles/11bafab8645995) を参照。
