---
title: "SQLite公式ベクトル検索vec1、OpenCode 2.0、LFM2.5-24B-A2Bなど2026-10-15の技術ニュース"
description: "SQLite本体に取り込まれたベクトル検索拡張vec1、OpenCode 2.0、Liquid AIのオンデバイス向けMoEモデル、GitHubのスター履歴再設計、パスキー論争などを紹介。"
pubDate: 2026-10-15
tags: ["SQLite", "LLM", "GitHub", "OpenTelemetry", "セキュリティ", "AIエージェント"]
author: "grasshopper"
---

本日は、SQLite公式のベクトル検索拡張 vec1 の登場、コーディングエージェント OpenCode 2.0 のリリース、Liquid AI によるオンデバイス向け MoE モデルの公開が目立った。GitHub Blog ではスター履歴取得の大幅なリクエスト削減事例が紹介され、パスキーの是非をめぐる議論も Hacker News で注目を集めている。AI のオンデバイス実行・エージェント基盤・可観測性といった実装寄りの話題が中心の一日だった。

## SQLite 本体にベクトル検索拡張 vec1 が追加

SQLite 開発チームが作成した近似最近傍探索の拡張 vec1 が、2026年9月にソースツリーへ取り込まれた。仮想テーブルとして実装され、L2距離とコサイン距離に対応する。大規模データ向けに IVFADC や OPQ、少数件向けに全件比較を選べる。検索は通常の SQL なので、元データとの JOIN や WHERE による絞り込みと組み合わせやすい。ただし amalgamation には含まれず、バージョンは 0.8 でテストも十分とは言えないため、実運用には慎重な判断が要る。

詳細は [SQLite 本体にベクトル検索拡張 vec1 がやってきた](https://zenn.dev/mattn/articles/6e9996319ac099) を参照。

## OpenCode 2.0 リリース

OpenCode 2.0 では、サーバーを単一のバックグラウンドプロセスとして動かし、ターミナル・Web・デスクトップの各クライアントが共有する構成になった。API は一から作り直され、`@opencode/client` パッケージからスクリプトで接続できる。Code Mode では、エージェントが小さな JavaScript を書いて MCP や OpenAPI のツールを1往復で連鎖させる。バックグラウンドのサブエージェントやシェルコマンド、安定した TUI プラグインも加わった。

詳細は [OpenCode 2.0](https://anoma.ly/notes/opencode-2-0/) を参照。

## LFM2.5-24B-A2B: オンデバイスエージェント向け MoE

Liquid AI が公開した LFM2.5-24B-A2B は、総パラメータ 24B・アクティブ 2B の reasoning 専用 MoE モデルである。40層、MoE ブロックごとに 64 エキスパート（top-4）で、ゲート付き短畳み込みと GQA を組み合わせる。コンテキストは 131K まで拡張された。同社は、8つのエージェント・ツール利用ベンチマークのうち5つで Qwen3.6-35B-A3B と競合し、Apple M5 Max で 184 tokens/s を出すと主張している。ベース版と後学習版の重みは Hugging Face で公開されている。

詳細は [LFM2.5-24B-A2B: Built for fast on-device agents](https://www.liquid.ai/blog/lfm2-5-24b-a2b) を参照。

## GitHub: スター履歴を 2,500 リクエストから 24 へ

GitHub はスクレイピング対策として stargazer 一覧を管理者とコラボレーターに限定し、ユーザー識別情報を含まないスター履歴用エンドポイントを新設した。全スターをグループ化してからページングする方式をやめ、インデックス付きの日付範囲で先に絞り込んでから集計する。`react/react` の全履歴取得は約 2,511 リクエストから約 24 に減った。stargazer 関連の DB リクエストは約 60%、count クエリの時間は約 80% 削減された。

詳細は [From 2,500 requests to 24: Rebuilding star history without the stargazers](https://github.blog/engineering/architecture-optimization/from-2500-requests-to-24-rebuilding-star-history-without-the-stargazers/) を参照。

## Bedrock / SageMaker の AI エージェントと OpenTelemetry 自動計装の範囲

Zenn の記事は、Bedrock、SageMaker AI、AgentCore で OpenTelemetry の自動計装が及ぶ範囲を整理している。Bedrock のモデル呼び出しはスパンとメトリクスが出るものの、属性名は旧規約のままだという。SageMaker のエンドポイントでは汎用 SDK スパンのみで、`traceparent` ヘッダーがコンテナに届かないため `CustomAttributes` での受け渡しが回避策になる。AgentCore では ADOT Collector を介さず SDK から直接送る構成が必要になる。

詳細は [Amazon BedrockとSageMakerのAIエージェントでOpenTelemetryの自動計装が行われる範囲](https://zenn.dev/ymotongpoo/articles/20261014-bedrock-sagemaker-otel) を参照。

## パスキーは罠ではない

「パスキーは罠だ」という主張への反論記事。Scott Helme は、同期型パスキーはアテステーションを返さないこと、アテステーションが特定するのは認証器の機種までであること、消費者向けサイトでは要求しないよう勧められていることを挙げる。TOTP はリアルタイムのフィッシングで奪われうるが、パスキーはドメインに紐づく。現状ではフィッシング対策として最良なので使うべき、という結論である。

詳細は [Passkeys are not a trap](https://scotthelme.co.uk/passkeys-are-not-a-trap/) を参照。

## その他の注目リンク

- Zenn トレンド: [SQLite 以外では「良いテストを書き、良いテストを見分ける」](https://zenn.dev/nexta_/articles/unit-testing-principles-essence) や [開発しながら同じPCでローカルLLMを動かしてみた話](https://zenn.dev/sumasate_tec/articles/test-local-llm) が上位に入っている。
- Hacker News: [Things to know when you get cancer – 2026 Edition](https://jjmaxwell4.com/writing/things-to-know-when-you-get-cancer/) や [Tiny Little Office](https://tinylittleoffice.com/) が話題になっている。
- GitHub Blog: [GitHub availability report: September 2026](https://github.blog/news-insights/company-news/github-availability-report-september-2026/) が公開された。
