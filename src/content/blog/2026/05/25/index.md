---
title: "2026-05-25 技術ニュースまとめ"
description: "Microsoft CopilotのAIデータ漏洩問題、GitHubリポジトリへの不正アクセス調査、Linuxを年齢確認法から除外するカリフォルニア州の動き、Claude CodeやAIエージェント設計の最新動向など、本日の主要技術ニュースを解説。"
pubDate: 2026-05-25
tags: ["AI", "セキュリティ", "GitHub", "Claude Code", "Linux", "クラウド"]
author: "grasshopper"
---

本日の技術ニュースは、AIツールのセキュリティリスクと各社の対応が大きな焦点となった。Microsoft CopilotによるファイルのExfiltration問題が明らかになった一方で、GitHubの社内リポジトリへの不正アクセス調査も進行中だ。国内ではZennを中心にClaude CodeやAIエージェント設計に関する実践知見が注目を集めており、AIを活用した開発ワークフローの成熟が着実に進んでいる。セキュリティ面では、GitHub Actionsの認証情報管理やサプライチェーン攻撃への対策も引き続き議論が活発だ。

## Microsoft Copilotがファイルを外部送信する脆弱性が報告される

セキュリティ研究者がMicrosoft Copilotの「Cowork」機能においてファイルをExfiltration（外部流出）できる問題を発見した。ユーザーが認識しないうちに、プロンプトインジェクション攻撃によって機密ファイルが第三者のエンドポイントへ送信される可能性があるという。AIアシスタントがファイルシステムやクラウドストレージへのアクセス権を持つ企業環境では、こうした攻撃経路への対策が急務だ。プロンプトインジェクション対策・出力フィルタリング・最小権限原則の徹底が改めて重要な設計課題として浮上している。

詳細は [Microsoft Copilot Cowork Exfiltrates Files](https://www.promptarmor.com/resources/microsoft-copilot-cowork-exfiltrates-files) を参照。

## GitHubが社内リポジトリへの不正アクセスを調査中

GitHubは、GitHub所有の内部リポジトリへの不正アクセスを調査していると公式ブログで発表した。現時点では顧客データやサービスの可用性への影響は確認されていないとしているが、調査は継続中だ。GitHubほどの規模・セキュリティ体制を持つプラットフォームでもこうしたインシデントが発生することは、ソフトウェアサプライチェーン全体のリスク管理を改めて考えさせる出来事だ。

詳細は [Investigating unauthorized access to GitHub-owned repositories](https://github.blog/security/investigating-unauthorized-access-to-githubs-internal-repositories/) を参照。

## カリフォルニア州がLinuxを年齢確認法から除外する修正案を提出

カリフォルニア州の年齢確認法に対して、Linux（OSレベルでの年齢情報収集を義務付ける条項）を適用除外とする修正案が提出された。当初の法案はOSベンダーにユーザーの年齢情報収集を義務付ける内容で、オープンソースコミュニティから強い反発を受けていた。修正案を提出したのは元の法案を執筆した議員自身であり、コミュニティの声が立法プロセスに影響を与えた事例として注目される。デジタルプライバシーとプラットフォーム規制のバランスは今後も議論が続く重要テーマだ。

詳細は [California moves to exempt Linux from its age-verification law after backlash](https://www.tomshardware.com/software/linux/california-moves-to-exempt-linux-from-its-upcoming-age-verification-law-after-backlash-over-forcing-operating-systems-to-collect-users-ages-amendment-proposed-by-the-same-lawmaker-who-wrote-the-original-law) を参照。

## なぜAnthropicはプロンプトにXMLタグを推奨するのか

ZennでAnthropicがClaudeのプロンプト設計においてXMLタグを推奨する理由を詳述した記事が注目を集めている。MarkdownとXMLタグの根本的な違いは「構造の明示性」にある。Markdownは人間の読みやすさのために設計された記法であり、LLMが学習データから慣習的に解釈するのに対し、XMLタグはネストした構造を明示的に定義するため、モデルがコンテキストを明確に区別しやすい。システムプロンプトとユーザー入力を分離する際に特に効果的であり、プロンプトエンジニアリングの実践的な知見として参考になる。

詳細は [なぜAnthropicはプロンプトにXMLタグを推奨するのか──Markdownとの構造的な違い](https://zenn.dev/yun_bow/articles/a339e1d31a4c43) を参照。

## Claude Codeのスキルが毎日自動改善されていく仕組みを実装

SonicGardenのエンジニアが、Claude Codeのスキル（カスタムコマンド）を毎日自動的に改善し続ける仕組みを構築したと発表した。AIエージェントが実行ログを分析し、うまくいかなかったパターンを検出してスキルのプロンプトを自動リファインするというアーキテクチャだ。人間が手動でスキルをチューニングするサイクルをAI自身が担うことで、開発支援ツールの品質が継続的に向上していく。AIを使ったAI改善というメタ的なアプローチは、ソフトウェア開発の自動化が新たな段階に入りつつあることを示している。

詳細は [Claude Codeのスキルが毎日勝手に改善されていく仕組みを作った](https://zenn.dev/sonicgarden/articles/claude-code-self-improving-loop) を参照。

## GitHub Actions: `persist-credentials: false` を設定すべき理由

GitHub Actionsで`actions/checkout`を使う際に`persist-credentials: false`を設定すべき理由を解説した記事がZennで人気を集めている。デフォルト設定ではチェックアウト後もGitHubトークンがリポジトリのgit設定に残存し、後続ステップや悪意あるアクション（サプライチェーン攻撃）によって悪用されるリスクがある。`persist-credentials: false`を指定すると、チェックアウト後に認証情報が即座に削除されるため、最小権限原則に沿ったより安全なCI/CD構成を実現できる。CIパイプラインのセキュリティ強化において即座に実践できる改善点だ。

詳細は [【GitHub Actions】actions/checkout には persist-credentials: false を設定するべき](https://zenn.dev/kou_pg_0131/articles/gha-checkout-persist-credentials) を参照。

## AIエージェントが毎回データを取りに行く設計の限界

「AIエージェントが毎回データを取りに行く設計の限界」をテーマにした記事がZennで話題になっている。多くのAIエージェント実装では、タスク実行のたびにデータソースを参照するステートレスな設計を採用しているが、これはレイテンシとコストの観点で非効率だ。記事では「メモリファースト設計」として、エージェントが必要な知識をあらかじめ内部に保持し、差分更新だけを行うアーキテクチャを提案している。RAGとエージェントメモリを組み合わせた設計パターンへの移行が、実運用AIエージェントの次の課題として浮上している。

詳細は [AIエージェントが毎回データを取りに行く設計の限界](https://zenn.dev/knowledge_graph/articles/kg-agent-memory-first-design) を参照。

## GoでBPFプログラムを書く「gobee」が公開

「BPFプログラムをCではなくGoで書く」をコンセプトにしたOSSプロジェクト「gobee」がHacker Newsで注目を集めた。eBPF（extended Berkeley Packet Filter）はLinuxカーネルのネットワーク・トレーシング・セキュリティ機能を拡張する強力な仕組みだが、従来はC言語での記述が必要だった。gobeeはGoの型安全性とシンプルなツールチェーンを活かしながらeBPFプログラムを開発できるライブラリだ。可観測性ツールやネットワークポリシー実装をGoエコシステム内で完結させたいエンジニアにとって注目のプロジェクトだ。

詳細は [Show HN: Write your BPF programs in Go, not C (gobee)](https://github.com/boratanrikulu/gobee) を参照。

## FirecrackerマイクロVMでAWS Lambda風ランタイムを自作する

FirecrackerマイクロVMを使ってAWS Lambda相当のサーバーレス実行ランタイムを自作した解説記事がHacker Newsに登場した。FirecrackerはAWSが開発した軽量VMハイパーバイザーで、コンテナに近い起動速度（数百ミリ秒）と、VMレベルの強い隔離を両立する。記事ではHTTPリクエストを受け付けてマイクロVMを動的に起動し、関数を実行してレスポンスを返すまでの実装を詳述している。クラウドインフラの内部構造を学ぶ実践的な素材として、またオンプレミスFaaS基盤の構築ノウハウとして参考になる内容だ。

詳細は [Building an AWS Lambda-Like Runtime with Firecracker MicroVMs](https://medium.com/@vivek1502/building-an-aws-lambda-like-runtime-with-firecracker-microvms-42a418c6e3d7) を参照。

## GitHubがGartner Magic Quadrant「エンタープライズAIコーディングエージェント」部門で3年連続リーダー選出

GitHub Copilotを擁するGitHubが、Gartner Magic Quadrant「エンタープライズAIコーディングエージェント」部門で3年連続してリーダーに選出された。コード補完から始まったGitHub Copilotは、現在ではPRレビュー・テスト生成・セキュリティ脆弱性検出・ドキュメント生成まで対応する総合的な開発支援プラットフォームへと進化している。AIコーディング支援ツールの競争が激化する中でも、GitHub Copilotはエンタープライズ採用において高い評価を維持していることが確認された形だ。

詳細は [GitHub recognized as a Leader in the Gartner® Magic Quadrant™ for Enterprise AI Coding Agents for the third year in a row](https://github.blog/ai-and-ml/github-copilot/github-recognized-as-a-leader-in-the-gartner-magic-quadrant-for-enterprise-ai-coding-agents-for-the-third-year-in-a-row/) を参照。
