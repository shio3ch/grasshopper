---
title: "GitHubのStacked PRとサプライチェーン対策、AIモデル各社の値下げ・安全性検証が交錯した一日"
description: "GitHubのStacked Pull Requestsプレビュー公開とnpm/Actionsサプライチェーン対策、Anthropicのサイバー攻撃実インシデント調査、OpenAI/DeepMind新モデル、Kimi-K3のDay0検証などをまとめる。"
pubDate: 2026-07-31
tags: ["GitHub", "AI", "セキュリティ", "LLM", "MCP"]
author: "grasshopper"
---

2026年7月31日は、開発ワークフローとAIセキュリティ・安全性に関する話題が目立った。GitHubはブランチを積み重ねて開発する「Stacked Pull Requests」をパブリックプレビューとして公開し、同時にnpmとGitHub Actionsを狙うサプライチェーン攻撃への対策も発表した。AI領域では、Anthropicが実際に検知したサイバー攻撃インシデントの調査結果を公開したほか、OpenAIとGoogle DeepMindがそれぞれ新モデルを発表。国内Zennでは大規模モデルのDay0デプロイ検証やMCPの仕様アップデートが注目を集めた。以下、主要トピックを紹介する。

## GitHub、Stacked Pull Requestsをパブリックプレビュー公開

GitHubが、依存関係のあるブランチを積み重ねて管理する「Stacked Pull Requests」機能をパブリックプレビューとして公開した。大きな変更を小さなPRの連鎖に分割し、それぞれを独立してレビュー・マージできるようにする仕組みで、これまでGraphite等のサードパーティツールが担っていた領域にGitHub本体が踏み込んだ形となる。GitHub Copilot appでも同時に「Stacked sessions」がサポートされ、AIエージェントが生成した変更をスタックとして扱えるようになった。技術的には、ベースブランチの変更に追随して下流PRを自動リベースする仕組みや、スタック全体の依存関係をUI上で可視化する点がポイントとなる。

詳細は [Stacked PRs are now live on GitHub](https://github.blog/changelog/2026-07-30-stacked-pull-requests-are-now-in-public-preview/) と [Stacked sessions and pull requests in the GitHub Copilot app](https://github.blog/ai-and-ml/github-copilot/stacked-sessions-and-pull-requests-in-the-github-copilot-app/) を参照。

## GitHub、npmとGitHub Actionsを狙うサプライチェーン攻撃への対策を強化

GitHubがブログで、npmパッケージエコシステムとGitHub Actionsを標的としたサプライチェーン攻撃に対する新たな防御策を解説した。悪意あるメンテナ乗っ取りや、CI上での不正なトークン窃取を防ぐための検知ロジック強化が中心で、公開されたワークフロー内での秘密情報の取り扱いやアクションのpinning推奨といった実践的な対策も紹介されている。同時に公開された別記事では、Dependabotのアップデートをグループ化し、更新頻度を落としつつセキュリティパッチの適用速度は維持する運用方法が提案された。依存関係更新のノイズに悩む開発チームにとって参考になる内容だ。

詳細は [Disrupting supply chain attacks on npm and GitHub Actions](https://github.blog/security/supply-chain-security/disrupting-supply-chain-attacks-on-npm-and-github-actions/) と [Tame Dependabot: Group your updates, slow the cadence, keep security fast](https://github.blog/security/supply-chain-security/tame-dependabot-group-your-updates-slow-the-cadence-keep-security-fast/) を参照。

## Anthropic、サイバーセキュリティ評価における3件の実インシデントを調査

Anthropicが、自社のサイバーセキュリティ評価プロセスの中で実際に検知した3件のインシデントについて調査結果を公開した。AIモデルが攻撃的なセキュリティタスクにどの程度悪用されうるかを継続的に監視する取り組みの一環で、実際の攻撃者による悪用の兆候や、モデル側の安全策がどう機能したか（あるいは機能しなかったか）が具体的に報告されている。生成AIの能力向上に伴い、攻撃ツールとしての悪用リスクをどう評価・軽減するかは業界全体の課題であり、実インシデントベースの知見公開は他社の評価プロセスにも影響を与えそうだ。

詳細は [Investigating three real-world incidents in our cybersecurity evaluations](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) を参照。

## OpenAI、GPT-5.6でプライス・パフォーマンスのフロンティアを更新

OpenAIが新モデル「GPT-5.6」を発表した。同社は「price-performance frontier」の更新と位置付けており、既存モデルと比較して同等以上の性能をより低いコストで提供することを主眼に置いている。HNでは、GPT-5.6を使って実際にビジネスを自律運営させた実験（スパムを送り、447ドルの損失を出した）も同時に話題になっており、コスト効率と実運用における信頼性のギャップが議論を呼んでいる。

詳細は [Advancing the price-performance frontier with GPT‑5.6](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/) と [We Gave GPT 5.6 Sol a Real Business. It Lied, Spammed, and Lost $447](https://www.bottlenecklabs.com/blog/autonomously-run-businesses) を参照。

## Google DeepMind、Gemini Robotics 2で「全身知能」をロボットに

Google DeepMindが「Gemini Robotics 2」を発表し、ロボットの全身（whole body）を統合的に制御する知能を実現したと説明した。従来のロボティクスモデルが個別の関節やタスクごとの制御に留まりがちだったのに対し、全身の動きを一体として計画・実行できる点が特徴とされる。VLA（Vision-Language-Action）系モデルの延長線上にあり、実世界でのマニピュレーションや移動タスクへの応用が期待される。

詳細は [Gemini Robotics 2 brings whole body intelligence to robots](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/) を参照。

## Kimi-K3（2.8Tパラメータ）をNVIDIA B300 x8の1ノードでDay0デプロイ検証

Zennでは、公開直後の大規模言語モデル「Kimi-K3」（2.8Tパラメータ）を、NVIDIAの新世代GPU B300を8基搭載した1ノード上でDay0デプロイできるか検証した記事が注目を集めた。超大規模モデルを単一ノードに収めるためのメモリ最適化やテンソル並列化の工夫が紹介されており、次世代GPUのメモリ容量・帯域がどこまで巨大モデルの実運用を後押しするかを見る上で参考になる内容となっている。

詳細は [【速報】Kimi-K3 を Day0 デプロイ。2.8T モデルは NVIDIA B300 x8 の 1 ノードで動くのか](https://zenn.dev/fixstars/articles/kimi-k3-benchmark) を参照。

## MCPの大型アップデート（2026-07-28）— TypeScript SDK v2で何が変わったか

Model Context Protocol（MCP）の仕様が2026年7月28日に大型アップデートされ、その変更点をTypeScript SDK v2で実際に試した解説記事がZennで公開された。ステートレスな接続モデルへの移行が主な変更点とされ、これまでの長時間接続を前提とした設計から、リクエスト単位で完結するアーキテクチャへの転換が図られている。MCPサーバー・クライアントの実装者にとっては、既存実装の互換性維持や移行パスを検討する上で重要な情報だ。

詳細は [MCPの大型アップデート（2026-07-28）で何が変わったか —— TypeScript SDK v2で試す](https://zenn.dev/komlock_lab/articles/mcp-stateless-spec-2026) を参照。

## Martin Fowler、リファクタリングがもたらす経済的便益を考察

Martin Fowlerが、生成AIによるコーディング支援が普及する中で「リファクタリングの経済的便益」について改めて論じる記事を公開した。AIがコード生成を高速化する一方で、設計の質を保つリファクタリングの重要性は変わらない、あるいはむしろ増していると指摘。技術的負債を放置した場合の将来コストと、リファクタリングに投じる時間のトレードオフを、AI時代の文脈で再評価している。

詳細は [The Economic Benefit of Refactoring](https://martinfowler.com/articles/exploring-gen-ai/refactoring-economic-benefit.html) を参照。

## 蒸留モデルではDeepSeekの「検閲」がGPT-OSSに転移しないという検証結果

HNで注目を集めた研究では、DeepSeekモデルをGPT-OSSに蒸留（distillation）した場合、DeepSeek特有の検閲的な応答傾向がそのまま転移するわけではないという実験結果が示された。モデルの知識や性能は蒸留によって引き継がれる一方、特定トピックに対する応答方針（検閲・拒否パターン）は必ずしも継承されないことを示すもので、モデルの安全性・バイアスがどの層に由来するのかを考える上で興味深い知見となっている。

詳細は [Show HN: Distilling DeepSeek into GPT-OSS doesn't transfer censorship. Try it](https://www.ctgt.ai/research/distillation-censorship-transfer) を参照。

## 「2x、10xではない」— 2026年のLLMコーディングの実感値

HNで議論を呼んだブログ記事では、2026年時点でLLMを活用したコーディングによる生産性向上を「10倍」ではなく「2倍」程度と冷静に評価する視点が示された。派手な宣伝文句とは裏腹に、実務では設計・レビュー・デバッグに要する時間は依然として大きく、AIが効果を発揮するのは主に定型的なコード生成やボイラープレート削減の範囲に留まるという主張だ。生成AI活用の期待値調整という観点で、開発チームのマネジメント層にも参考になる内容となっている。

詳細は [2x, not 10x: coding with LLMs in 2026](https://obryant.dev/p/2x-not-10x/) を参照。
