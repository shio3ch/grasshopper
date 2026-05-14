---
title: "2026-05-14 技術ニュースまとめ"
description: "Apple M5カーネルエクスプロイト初公開、OpenAI CodexがChatGPTモバイルアプリに統合、Nginx新脆弱性公開、Tesla Wall Connector攻撃手法解説、arXivが幻覚参照に1年間禁止ポリシー導入など、セキュリティ・AI・ハードウェアにわたる注目ニュースを紹介。"
pubDate: 2026-05-14
tags: ["セキュリティ", "AI", "ハードウェア", "オープンソース", "開発ツール"]
author: "grasshopper"
---

本日は、Apple Silicon向け初のmacOSカーネルエクスプロイト公開とNginxの新脆弱性という重大なセキュリティ情報、OpenAI CodexのChatGPTモバイル統合やarXivの幻覚参照禁止ポリシーといったAI関連の動き、Tesla Wall ConnectorやRAV4のハードウェアハッキング、そしてRISC-VルーターやClaude Codeワークショップなど開発者向けトピックが充実した一日だった。

## Apple M5でmacOSカーネルメモリ破壊エクスプロイトが初公開

Apple Silicon（M5チップ搭載Mac）を対象とした、macOSカーネルのメモリ破壊脆弱性を悪用するエクスプロイトが初めて公開された。これはApple Siliconアーキテクチャ上でのカーネルレベル攻撃の実現可能性を示す重要な事例であり、セキュリティ研究コミュニティの注目を集めている。

Appleの独自チップはセキュリティ機能が強化されていると認識されていたが、今回の公開によってカーネルの攻撃面が依然として存在することが改めて確認された。macOSのセキュリティアップデートへの対応を急ぐ必要がある。

詳細は [First public macOS kernel memory corruption exploit on Apple M5](https://blog.calif.io/p/first-public-kernel-memory-corruption) を参照。

## OpenAI CodexがChatGPTモバイルアプリに統合

OpenAIは、コーディングエージェント「Codex」をChatGPTのモバイルアプリ（iOS / Android）から直接利用できるようにしたと発表した。これによりスマートフォンからコードの生成・レビュー・デバッグをChatGPTの会話インターフェースで行えるようになる。

移動中や手元にPCがない状況でもコーディング作業を継続できる点が実務上の利点で、AIコーディングアシスタントの利用シーンをさらに広げる取り組みといえる。

詳細は [Codex is now in the ChatGPT mobile app](https://openai.com/index/work-with-codex-from-anywhere/) を参照。

## Nginxに新たな脆弱性「Nginx Rift」が公開

GitHubリポジトリ「DepthFirstDisclosures/Nginx-Rift」にてNginxを対象とした新しいエクスプロイトが公開された。Nginxは世界中のWebサーバーやリバースプロキシとして広く使われており、影響を受けるバージョンを運用中の場合は速やかなパッチ適用やワークアラウンドの確認が推奨される。

内容の精査と公式からのセキュリティアドバイザリ発行を注視する必要がある。

詳細は [New Nginx Exploit](https://github.com/DepthFirstDisclosures/Nginx-Rift) を参照。

## Tesla Wall ConnectorのブートローダーでファームウェアDowngradeラチェットが回避される

セキュリティ研究グループSynacktivがTesla Wall Connector（EV充電器）の充電ポートコネクタ経由でのブートローダー攻撃手法を公開した。本手法ではファームウェアのダウングレード防止機構（ラチェット）を回避し、古い脆弱なファームウェアに書き戻せることが示された。

EV充電インフラへの物理アクセスを持つ攻撃者がファームウェアを改ざんできる可能性があり、IoT/組み込みデバイスのセキュリティ設計における新たな課題を提起している。

詳細は [Tesla Wall Connector bootloader bypasses the firmware downgrade ratchet](https://www.synacktiv.com/en/publications/exploiting-the-tesla-wall-connector-from-its-charge-port-connector-part-2-bypassing) を参照。

## 2024年型RAV4ハイブリッドからモデムとGPSを取り外す

プライバシーを重視するエンジニアが、2024年型トヨタRAV4ハイブリッドに内蔵された通信モジュール（モデム）とGPS機器を物理的に取り外す手順を詳細なブログ記事として公開した。車両の常時追跡や遠隔データ送信を嫌うユーザー向けに、ハードウェアレベルでの対処法が示されている。

自動車メーカーが収集する走行データや位置情報への懸念が高まる中、DIYでプライバシーを守る手法として注目されている。法的・保証上のリスクには留意が必要だ。

詳細は [Removing the modem and GPS from my 2024 RAV4 hybrid](https://arkadiyt.com/2026/05/13/removing-the-modem-and-gps-from-my-rav4/) を参照。

## AmazonbotがついにRobots.txtを尊重するように

Amazonのウェブクローラー「Amazonbot」が`robots.txt`の`Disallow`指定を正しく守るようになったことがレポートされた。これまでAmazonbotはrobots.txtを無視してクロールするケースが報告されており、サイトオーナーから不満の声が上がっていた。

AIモデルの学習データ収集を目的とするクローラーのrobots.txt遵守は業界全体での課題となっており、今回の変化は一歩前進といえる。他のAIクローラーへの波及効果も期待される。

詳細は [Amazonbot is finally respecting robots.txt](https://xeiaso.net/notes/2026/amazonbot-respecting-robots-txt/) を参照。

## RISC-Vを搭載したプライバシー重視のルーター

Start9が開発するRISC-Vアーキテクチャベースのルーターが公開された。x86やARMではなくRISC-Vを採用することで、ハードウェアレベルから透明性を担保しつつプライバシーと自律性を重視した設計になっている。

オープンソースのISAであるRISC-Vを使ったネットワーク機器はまだ珍しく、ハードウェアバックドアを避けたい用途での需要が見込まれる。

詳細は [RISC-V Router](https://router.start9.com/) を参照。

## arXivが幻覚参照に対して1年間投稿禁止ポリシーを導入

AI研究プレプリントサーバーarXivが、AIによって生成された存在しない参考文献（幻覚/ハルシネーション参照）を論文に含めた著者に対し、最長1年間の投稿禁止処分を科す新ポリシーを発表した。

LLMを使った論文執筆支援が普及するにつれ、存在しない論文を引用してしまうケースが増加している。学術的な信頼性を守るため、プラットフォーム側が明確なペナルティを設けた点は重要な前例となる。

詳細は [New arXiv policy: 1-year ban for hallucinated references](https://twitter.com/tdietterich/status/2055000956144935055) を参照。

## AWS Japanが「Claude Code 入門ワークショップ」を公開

AWS JapanがAnthropic製コーディングエージェント「Claude Code」を手を動かして学べるワークショップ資料をZennに公開した。環境構築からプロジェクトへの実践的な活用まで日本語でまとめられており、Claude Codeの導入を検討しているエンジニアにとって有用なリソースとなっている。

詳細は [手を動かして学ぶ Claude Code 入門ワークショップを公開しました](https://zenn.dev/aws_japan/articles/introduction-to-claude-code-workshop) を参照。

## GitHub Issuesのナビゲーション性能をレイテンシゼロに近づける改善

GitHubエンジニアリングブログが、GitHub Issuesの画面遷移をほぼ瞬時にするために行ったアーキテクチャの最適化について詳説する記事を公開した。従来のページロードモデルから脱却し、クライアントサイドのルーティングとプリフェッチを組み合わせることで体感速度を大幅に向上させた手法が解説されている。

大規模なRailsアプリケーションにおけるフロントエンド性能改善の実例として参考になる内容だ。

詳細は [From latency to instant: Modernizing GitHub Issues navigation performance](https://github.blog/engineering/architecture-optimization/from-latency-to-instant-modernizing-github-issues-navigation-performance/) を参照。
