---
title: "2026-06-24 技術ニュースまとめ"
description: "OpenAIが初の自社カスタムチップを発表、QualcommがAIスタートアップModularを買収、Gemini 3.5 FlashにPC操作機能追加など、AIハードウェア・モデル分野で動きが集中した一日。国内ではClaude Codeを活用したQA自動化手法が注目を集めた。"
pubDate: 2026-06-24
tags: ["AI", "OpenAI", "Qualcomm", "Gemini", "PostgreSQL", "オープンソース"]
author: "grasshopper"
---

本日は、AIハードウェアからモデル、開発ツール、クラウドインフラまで幅広いニュースが揃った。最大の話題はOpenAIによる初の自社カスタムチップ発表で、Broadcomとの協業による独自シリコン戦略が明らかになった。QualcommはAIスタートアップModularを買収し、AIコンパイラ・ランタイム領域を強化する。AIモデルではGemini 3.5 FlashのPC操作機能（Computer Use）公開と、オープンウェイトエージェントモデルGLM-5.2の登場が注目される。国内Zennでは、Claude Codeを活用したテスト自動化手法が大きな反響を呼んでいる。

## OpenAIが初の自社カスタムチップを発表——Broadcom製

OpenAIは同社初となる独自AIアクセラレータチップを発表した。設計はOpenAIが主導し、製造・パートナリングにはBroadcomを起用している。これまでNVIDIA GPUへの依存が指摘されてきたOpenAIが、独自シリコン路線を明確にした節目だ。推論コストの削減と計算資源の自社管理が主な狙いとみられ、クラウドAI企業間の「脱NVIDIA」競争が加速しそうだ。

詳細は [OpenAI unveils its first custom chip, built by Broadcom – TechCrunch](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/) を参照。

## Qualcomm、AIスタートアップModularを買収

QualcommはAIスタートアップModularの買収を発表した。ModularはMojo言語やMaxエンジンで知られるAIコンパイラ・ランタイム企業で、元AppleやGoogleのエンジニアが設立した。QualcommはEdge AIとオンデバイス推論に注力しており、Modularの技術を統合することでソフトウェアスタックを強化する。AIアクセラレータのハードとソフトを一体提供する戦略が鮮明になった。

詳細は [Qualcomm to Acquire Modular – Reuters](https://www.reuters.com/business/qualcomm-buy-ai-startup-modular-2026-06-24/) を参照。

## Gemini 3.5 FlashにPC操作（Computer Use）機能が追加

GoogleはGemini 3.5 FlashモデルにComputer Use（PC操作）機能を追加した。画面のスクリーンショットを解析し、クリック・入力・スクロールなどの操作を自律的に実行できる。AnthropicのClaude Computer UseやOpenAI Operatorと同様のアプローチで、コスト効率の高いFlashモデルで提供される点が差別化ポイントだ。APIから利用可能で、エージェント型アプリの開発に活用できる。

詳細は [Introducing computer use in Gemini 3.5 Flash – Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/) を参照。

## GLM-5.2——オープンエージェントの転換点

中国・清華大学発のオープンウェイトモデルGLM-5.2が注目を集めている。エージェント向けベンチマークでの性能が大幅に向上し、ツール呼び出しや複雑なタスク実行において既存のオープンモデルを大きく上回ると評価されている。プロプライエタリモデル主導だったエージェント分野でオープンウェイトが対抗軸を形成しつつあり、自社インフラで運用したいチームにとって重要な選択肢となる。

詳細は [GLM-5.2 is a step change for open agents – Interconnects](https://www.interconnects.ai/p/glm-52-is-the-step-change-for-open) を参照。

## Krea 2——オープンウェイト12B画像生成モデルが登場

Kreaが12Bパラメータのオープンウェイト画像生成モデル「Krea 2」を公開した。テクニカルレポートによると、テキスト忠実性・画質ともに既存のSOTA水準に迫る性能を実現しているとされる。商用利用可能なオープンウェイト画像モデルとして、Stable DiffusionやFLUXに次ぐ有力な選択肢となりうる。ローカル実行や自社ファインチューニングを検討しているチームには特に注目の存在だ。

詳細は [Krea 2: SOTA open-weights 12B image model – Krea Blog](https://www.krea.ai/blog/krea-2-technical-report) を参照。

## 「PostgreSQL Is Enough」——単一DB戦略の再評価

「PostgreSQL Is Enough」と題したGistが話題になっている。Redis・Elasticsearch・Kafka・Celeryなど複数のミドルウェアを使い分けるのではなく、PostgreSQL単体で多くのユースケースをカバーできるという主張だ。pgvector（ベクトル検索）、LISTEN/NOTIFY（イベント通知）、論理レプリケーション、パーティショニングなど、近年のPostgreSQLの機能拡張がこの議論を後押しする。複雑なインフラを避けたい小規模チームには説得力のある提案だ。

詳細は [PostgreSQL Is Enough – GitHub Gist](https://gist.github.com/cpursley/c8fb81fe8a7e5df038158bdfe0f06dbb) を参照。

## Bunny DNSが完全無料化を発表

CDN・エッジサービスを提供するBunny.netが、自社DNSサービス「Bunny DNS」を完全無料化すると発表した。Geo-steeringやカスタムTTLなどのプレミアム機能も含めて無償提供される。Cloudflare DNSとの競合を意識した戦略で、エッジCDNとDNSを一体提供することでユーザー基盤を拡大する狙いがある。独自ドメインを運用するサービス事業者にとってコスト削減の選択肢が増えた。

詳細は [We're making Bunny DNS free – Bunny Blog](https://bunny.net/blog/were-making-bunny-dns-free/) を参照。

## Elasticが従業員の7%をレイオフ

Elasticsearch・Kibanaなどで知られるElasticは、従業員の約7%に相当する人員削減を実施すると発表した。CEOのAsh Kulkarni氏が社内向けに公開した声明では、AI時代への適応と事業優先順位の見直しが理由として挙げられている。検索・分析ソフトウェア市場もAIシフトの影響を強く受けており、大手ベンダーの組織再編が続いている。

詳細は [CEO announcement to Elastic employees – Elastic Blog](https://www.elastic.co/blog/ceo-ash-kulkarni-announcement-to-elastic-employees) を参照。

## GitHubが社内データ分析エージェントの構築過程を公開

GitHubはGitHub Copilotを活用した社内データ分析エージェントの開発事例をブログで公開した。データエンジニアやアナリストが自然言語でクエリを発行し、BigQueryなどのデータソースへのアクセスを自動化する仕組みだ。MCP（Model Context Protocol）とCopilotを組み合わせたエンタープライズエージェント実装の具体的な事例として、自社エージェント開発の参考になる内容だ。

詳細は [How we built an internal data analytics agent – GitHub Blog](https://github.blog/ai-and-ml/github-copilot/how-we-built-an-internal-data-analytics-agent/) を参照。

## Claude Codeに「7人の意地悪なQA」を仕込んでテスト観点漏れを解消（Zenn）

Zennのトレンド記事として、Claude Codeのシステムプロンプトに「7人の意地悪なQAエンジニア」という役割を定義し、テストケースの観点漏れを自動検出する手法が注目を集めている。セキュリティ・パフォーマンス・UXなど異なる視点を持つ複数のペルソナが協調してテスト観点を網羅的に洗い出す設計で、実際に観点漏れが大幅に減少したという。チームでのAI活用に直結するプラクティカルな手法だ。

詳細は [Claude Code に「7人の意地悪なQA」を仕込んでテストケースの観点漏れを潰した – Zenn](https://zenn.dev/nexta_/articles/be13a2395a5d2a) を参照。

## 標準CSSの進化——Tailwindは本当に不要か？（Zenn）

「標準CSSは美しくなった、もはやTailwindは不要」と題したZenn記事も大きな反響を呼んでいる。CSS Nesting・Container Queries・`:has()`・カスケードレイヤーなど近年ブラウザ標準に追加された機能を使えば、TailwindCSS的なスコープ管理やユーティリティ相当の機能を標準CSSで実現できるという主張だ。ユーティリティファーストの手法を再考する議論として、フロントエンド開発者には読み応えのある内容となっている。

詳細は [標準CSSは美しくなった、もはやTailwindは不要 – Zenn](https://zenn.dev/higakijin/articles/06276828c81546) を参照。
