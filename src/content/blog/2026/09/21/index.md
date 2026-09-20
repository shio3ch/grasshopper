---
title: "2026年9月21日 技術ニュースまとめ：GoogleのAIエージェント実行基盤「AX」、SamsungがHBM4増産、OSS維持費を巡る新提案など"
description: "GoogleがAIエージェントを大規模実行するオープンソース基盤「AX」を公開。SamsungのHBM4/HBM4E増産計画、パッケージレジストリ課金によるOSS維持費調達案、Amazon Bedrock AgentCore Runtime V2など2026年9月21日のニュースをまとめました。"
pubDate: 2026-09-21
tags: ["AI", "AWS", "オープンソース", "セキュリティ", "ハードウェア"]
author: "grasshopper"
---

本日はGoogleが、大量のAIエージェントタスクを大規模に実行するためのオープンソース基盤「AX」を公開し、Hacker Newsで注目を集めた。ハードウェア分野ではSamsungがHBM4/HBM4E DRAMの生産能力を倍増させる計画が報じられ、AI需要の高まりを裏付ける動きとなった。オープンソースの持続可能性を巡っては、パッケージレジストリが企業ユーザーに課金しメンテナーへ自動分配すべきだという提案が話題に。Zennでは新モデル「Jev」を巡る考察やAWS・Anthropicの新機能アップデートがトレンド入りしている。

## Google、AIエージェントを大規模実行するOSS基盤「AX」を公開

Googleは、AIエージェントのタスクを大規模に宣言・実行するためのオープンソースランタイム基盤「AX」（Agent Executor）を公開した。Task・Workspace・Gateway・Modelという4つの基本プリミティブを提供し、エージェントコードのサンドボックス化、依存関係の管理、ネットワークポリシーの適用、設定の一元管理を担う。社内基盤「Agent Substrate」の上に構築されており、1クラスタあたり「数十億タスク」規模を捌けるとし、サブ秒単位でのサスペンド・レジュームに対応する点が特徴。AIエージェントは計算実行中とモデル・ツールの応答待ちを繰り返す特性を持つため、こうした待機状態を効率よく扱える実行基盤への需要が高まっている。

詳細は [Google's Open Agentic Orchestrator](https://agentexecutor.io) を参照。

## Samsung、HBM4/HBM4E DRAMの生産能力を来年倍増へ

Samsung Electronicsが、高帯域幅メモリ（HBM）チップの生産能力を来年、現在の月産約18万枚から約25万枚へと倍増させる計画であると報じられた。先進的なHBM4・HBM4E向けに必要なガラスキャリアの調達量を2.5倍に増やしており、量産が加速する来年にはHBM4・HBM4Eが生産量全体の80%を占める見通しだという。AIアクセラレータ向け需要の急拡大を背景に、メモリメーカー各社が供給能力の拡大を急いでいる状況を示す動きといえる。

詳細は [Samsung is expected to more than double output of its HBM4 and HBM4E DRAM](https://en.sedaily.com/finance/2026/09/20/samsung-to-double-hbm4-output-next-year-sources-say) を参照。

## 「OSSにお金を払う人はいない、ならば払わせる仕組みを」という提案

Hacker Newsで話題となったブログ記事は、オープンソースのメンテナーが疲弊する一方、企業は無償のコードから莫大な価値を得ているにもかかわらず、任意の寄付やスポンサーシップといった仕組みは一貫してスケールしてこなかったと指摘する。著者は「システムは壊れているのではなく、人的コストを社会が受け入れる形で安定してしまっている」と表現し、解決策としてnpm・PyPI・Docker Hub・Maven Centralなどのパッケージレジストリが企業ユーザーに対しサブスクリプション課金を行い、依存関係ツリーに基づいて一定割合を自動的にメンテナーへ分配する仕組みを提案している。申請や助成金審査を必要とせず、既存のインフラと請求関係をそのまま活用できる点を利点として挙げている。

詳細は [Nobody pays for FOSS, we can force them to](https://seldo.com/posts/nobody-pays-for-open-source-we-can-force-them-to/) を参照。

## ソフトウェアサンドボックスの基礎、Capsicumのような能力ベース設計を推奨

Hacker Newsでは、ソフトウェアサンドボックスの設計原則を解説する記事が改めて注目を集めた。効果的なサンドボックス化には管理者権限を必要としない「任意の権限降格」が不可欠であるとし、アプリケーションをアクターモデル・メッセージパッシングで通信する別プロセスへとコンパートメント化すること、ファイルディスクリプタを偽造不可能な能力（capability）として扱うことの重要性を説く。その上で、多数のアーキテクチャにまたがる複雑なシステムコールフィルタを管理する必要があるLinux Seccompよりも、FreeBSDのCapsicumのような能力ベースのシステムの方が優れた代替手段だと主張している。

詳細は [Software Sandboxing: The Basics (2025)](https://blog.emilua.org/2025/01/12/software-sandboxing-basics/) を参照。

## iPhone 18 Pro、DXOMARKカメラスコアで僅差の2位に

DXOMARKによるApple iPhone 18 Proのカメラテストが公開され、総合172点で世界2位にランクインした。広いダイナミックレンジ、改善されたコントラストと肌の色再現、効果的な手ブレ補正に加え、動画性能の高さが評価されたが、長距離の望遠撮影性能や一部シーンでのホワイトバランスの不安定さが弱点として挙げられている。フラッグシップスマートフォンのカメラ性能競争が引き続き僅差で続いていることを示す結果となった。

詳細は [Apple iPhone 18 Pro Camera test](https://www.dxomark.com/apple-iphone-18-pro-camera-test/) を参照。

## 新モデル「Jev」が話題に、LLMの「GPU版」という比喩で説明

Hacker NewsとZennの両方で、新しいモデル「Jev」を巡る投稿がトレンド入りした。Zennの記事では、Jevは既存のLLMとは異なるアプローチで構造化データを直接出力するモデルであり、著者は「既存のLLMがCPUならJevはそのGPU版」という比喩を用いて、精度では劣るものの高速で並列処理に優れる特性を説明している。一方Hacker Newsでは、Jevを「次にどの記号が来るか」を繰り返し問い合わせることでチャットボット的な応答を生成する実験的プロジェクト「jevchat」が公開され、choice・bisect・buckets・refineといった複数のサンプリング戦略や、26文字から5,000トークンまでの語彙選択に対応しているという。

詳細は [既存の LLM が CPU なら、 Jev はその GPU 版みたいなやつ](https://zenn.dev/mizchi/articles/jev-is-gpu-for-llms) および [I turned Jev into a (lousy) chatbot](https://github.com/kyle-pena-nlp/jevchat/) を参照。

## Amazon Bedrock AgentCore Runtime V2、スナップショット方式でコールドスタートを大幅短縮

Amazon Bedrock AgentCore Runtimeの新バージョンV2が利用可能になった。従来のV1は起動のたびに環境を初期化する必要があったのに対し、V2はスナップショット技術を用いて「準備済みのスナップショットから復元する」方式を採用し、一貫して高速なコールドスタートを実現する。検証結果ではコンテナ環境における最大の起動遅延が約4.6秒から97ミリ秒へと大幅に短縮され、イメージサイズが起動時間に与える影響もなくなったという。AIエージェントを頻繁に起動・停止する運用における実用性を高める改善といえる。

詳細は [新しい Amazon Bedrock AgentCore Runtime が利用可能に!!](https://zenn.dev/aws_japan/articles/agentcore-runtime-v2-platform-version) を参照。

## Claude Docs・Slides・Designがそれぞれ独立した機能に

Anthropicは、Claude内でリアルタイムにドキュメントを共同編集できる新機能「Claude Docs」を公開した。Zennの検証記事によれば、表・チェックリスト・日付チップといったリッチテキスト機能を備え、Google Docsに近い編集体験をClaude上で提供する。同時に、従来Design機能に統合されていたプレゼンテーション作成機能が「Claude Slides」として独立し、「Claude Design」は会話の中から呼び出せる形に変更された。著者はTeamアカウントでこれら3機能を検証し、共有機能の挙動がプランによって大きく異なる点を指摘している。

詳細は [【2026/9/17最新アプデ】Claude Docs が登場！Slides・Design と合わせて触ってみた](https://zenn.dev/canly/articles/7ac8cea14c20e8) を参照。

## GitHub Blogポッドキャスト、「RAGは死んだか」「SkillsはMCPを殺したか」を検証

GitHub Blogのポッドキャストエピソードでは、AI界隈でよく語られる極端な意見が成立する条件を検証する議論が展開された。AI生成コードは人間がレビューすべきか（答えはイエスだが、リスクに応じた労力配分が必要）、企業はAI利用を義務化すべきか（採用率より判断力が重要）、SkillsはMCPに取って代わったか（両者は異なるニーズに応える）、RAGはもう不要になったか（根拠に基づく応答生成には依然として価値がある）といったテーマを扱い、コード品質が人間とモデル双方にとっての保守性を測る指標になるという指摘で締めくくられている。

詳細は [Should you read the code, is RAG dead, and did Skills kill MCP?](https://github.blog/ai-and-ml/should-you-read-the-code-is-rag-dead-and-did-skills-kill-mcp/) を参照。

## GitHub、CopilotランタイムのRust移植をAIエージェント主導で完遂

GitHubは、AIエージェントの支援を受けた1人の開発者が、Copilotランタイムの80万行超をTypeScriptから本番品質のRustへ、128件のプルリクエストを通じて数ヶ月かけて移植した事例を公開した。この移植により大幅な性能改善を達成しつつ、SDKをプロセス内に直接組み込めるようになったという。段階的な移植戦略や相互運用パターン、セッション調整の手法に加え、AIエージェントがコードの修正よりも探索に10倍多くの時間を費やしていたという計測結果も紹介されている。

詳細は [Migrating the GitHub Copilot runtime to Rust, using Copilot](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) を参照。
