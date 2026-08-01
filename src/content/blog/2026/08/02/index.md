---
title: "2026年8月2日 技術ニュースまとめ：Lean証明系のソースネスバグ、MCP大型アップデート、npmサプライチェーン攻撃対策など"
description: "Lean定理証明系のソースネスバグ調査報告、64bitアセンブリ本の新版、MCPの大型アップデート、gh stackによるスタック型PR、GitHubのnpm/Actionsサプライチェーン攻撃対策などを紹介。"
pubDate: 2026-08-02
tags: ["Lean", "MCP", "GitHub", "セキュリティ", "AI", "ドキュメント"]
author: "grasshopper"
---

本日は、Lean定理証明系で見つかったカーネルのソースネス（健全性）バグの詳細な事後報告が話題を集めた。また開発者向けでは、Model Context Protocol（MCP）の大型アップデートやGitHubのスタック型プルリクエスト機能、npm・GitHub Actionsを狙うサプライチェーン攻撃への対策強化など、開発ワークフローとセキュリティに関する動きが目立つ。ドキュメント設計のフレームワーク「Diátaxis」や重厚な技術書の新版リリースなど、じっくり読みたいコンテンツも多い一日だった。

## Lean定理証明系のカーネルソースネスバグ、詳細な事後報告が公開

証明支援系Leanの開発者Leonardo de Moura氏が、カーネルに存在したソースネス（健全性）バグ #14576 についての詳細なポストモーテムを公開した。定理証明系のカーネルは「証明された命題は本当に真である」ことを保証する最重要コンポーネントであり、そこに論理的な穴が見つかることは形式検証コミュニティにとって重大事である。記事ではバグの発見経緯、根本原因、修正方針、再発防止のためのテスト強化策までが丁寧に解説されている。信頼できる中核（trusted kernel）を持つ設計であっても、実装上の見落としがどのように健全性を崩しうるかを学ぶ好例となっている。

詳細は [Postmortem for Kernel Soundness Bug #14576](https://leodemoura.github.io/blog/2026-8-1-postmortem-for-kernel-soundness-bug-14576/) を参照。

## 「The Art of 64-bit Assembly」第2版がNo Starch Pressから登場

低レベルプログラミングの定番書「The Art of Assembly Language」の系譜を継ぐ「The Art of 64-bit Assembly, Volume 2」がNo Starch Pressから刊行される。x86-64アーキテクチャを対象に、アセンブリ言語の基礎からOS開発やパフォーマンスチューニングに必要な知識までを網羅する内容とされる。高水準言語やAIコード生成が主流の時代においても、CPUの動作原理を理解するための骨太な教材として関心を集めている。

詳細は [The Art of 64-bit Assembly](https://nostarch.com/art-64-bit-assembly-v2) を参照。

## ByteDanceが動画生成AI「Seedance 2.5」を発表

ByteDanceが動画生成AIの新版「Seedance 2.5」を公開した。「One-Take Creation」と呼ばれる、単一の生成過程で被写体の一貫性を保ちながら柔軟に参照画像を扱える機能が特徴とされる。既存の動画生成モデルでは複数ショット間でキャラクターや背景の一貫性を保つのが難しいという課題があり、Seedance 2.5はこの点を改善することを狙っている。

詳細は [Seedance 2.5](https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5) を参照。

## ドキュメント設計フレームワーク「Diátaxis」が再注目

技術ドキュメントを「チュートリアル」「ハウツーガイド」「リファレンス」「解説」の4象限に分類して設計するフレームワーク「Diátaxis」が、Hacker Newsで再び議論を呼んでいる。ドキュメントの目的（学習か作業遂行か、実践的か理論的か）によって適切な文体・構成が異なるという考え方は、READMEやAPIドキュメントの構成に悩む開発者にとって示唆に富む。

詳細は [Diátaxis](https://diataxis.fr/) を参照。

## CISAが水道インフラのPLCを狙う攻撃について警告

CISA（米サイバーセキュリティ・インフラセキュリティ庁）が、水道セクターのPLC（プログラマブルロジックコントローラ）を標的とした攻撃キャンペーンについてアラートを発行した。Censysのブログでは、インターネットに露出した制御機器の実態調査結果とともに、当該アラートの技術的背景が解説されている。重要インフラのOT（運用技術）機器がスキャン・攻撃の対象になり続けている現状を改めて示す内容だ。

詳細は [CISA Alert: Water Sector PLC Targeting](https://censys.com/blog/cisa-alert-water-tower-plc-targeting/) を参照。

## MCPの大型アップデート（2026-07-28）、TypeScript SDK v2で何が変わったか

Model Context Protocol（MCP）の仕様が2026年7月28日に大型アップデートされ、その変更点をTypeScript SDK v2で検証したZenn記事が注目を集めている。記事ではステートレスな運用を前提とした仕様変更点を中心に、実際にSDKを触りながら挙動を確認している。LLMエージェントとツール群を接続する標準プロトコルとして採用が広がるMCPだけに、仕様変更の影響範囲を把握しておきたい開発者は多いだろう。

詳細は [MCPの大型アップデート（2026-07-28）で何が変わったか —— TypeScript SDK v2で試す](https://zenn.dev/komlock_lab/articles/mcp-stateless-spec-2026) を参照。

## GitHubにスタック型プルリクエストが登場、gh stackで分割・積み上げ

GitHubの新機能として、複数のPRを積み上げて管理できる「スタック型プルリクエスト」が紹介されている。`gh stack` コマンドを使うことで、大きな変更を小さなPR単位に分割しつつ、依存関係を保ったままレビュー・マージを進められるという。巨大なPRのレビュー負荷を下げたいチームにとって実用的なワークフロー改善策だ。

詳細は [GitHubにスタック型プルリクエストが登場。gh stackでPRを分割して積み上げよう](https://zenn.dev/ubie_dev/articles/gh-stack-introduction) を参照。

## AIフレンドリーなCLIを開発するテクニック

LLMエージェントがCLIツールを自律的に操作する機会が増える中、「AIに使いやすいCLI」を設計するためのテクニックをまとめたZenn記事が話題になっている。出力フォーマットの一貫性、エラーメッセージの分かりやすさ、`--help`の充実など、人間だけでなくAIエージェントも利用者として意識した設計指針が具体例とともに解説されている。

詳細は [AI フレンドリーな CLI を開発するテクニック](https://zenn.dev/shunsuke_suzuki/articles/make-cli-ai-friendly) を参照。

## GitHub、npmとGitHub Actionsを狙うサプライチェーン攻撃への対策を強化

GitHub Blogにて、npmパッケージエコシステムおよびGitHub Actionsのマーケットプレイスを標的としたサプライチェーン攻撃を妨害するための取り組みが紹介された。悪意あるパッケージやワークフローの検知・排除の仕組み強化について述べられており、オープンソースのビルド・配布パイプラインを狙う攻撃が引き続き深刻な脅威であることを裏付けている。

詳細は [Disrupting supply chain attacks on npm and GitHub Actions](https://github.blog/security/supply-chain-security/disrupting-supply-chain-attacks-on-npm-and-github-actions/) を参照。

## Dependabotのアップデートを手懐ける：グループ化とペース調整で安全性を保つ

GitHub Blogでは、Dependabotによる依存関係更新の運用改善についても解説された。更新をグループ化してPR数を減らしつつ、更新頻度（cadence）を調整することで、セキュリティ修正の適用速度を落とさずに開発チームの負荷を下げる方法が紹介されている。Dependabotの通知に疲弊しているチームには参考になる内容だ。

詳細は [Tame Dependabot: Group your updates, slow the cadence, keep security fast](https://github.blog/security/supply-chain-security/tame-dependabot-group-your-updates-slow-the-cadence-keep-security-fast/) を参照。
