---
title: "Claude Opus 5登場とPostgres LISTEN/NOTIFYの真実、セキュリティカメラのトークン漏洩など注目の技術ニュース"
description: "Anthropicの新モデルClaude Opus 5、Postgres LISTEN/NOTIFYのスケーラビリティ検証、Hanwha製カメラのGitHubトークン漏洩、GitHubのDependabot改善やバグバウンティ再編など本日の技術トピックをまとめた。"
pubDate: 2026-07-25
tags: ["AI", "Postgres", "セキュリティ", "GitHub", "Go", "OpenTelemetry"]
author: "grasshopper"
---

本日はAnthropicの新モデル「Claude Opus 5」のリリースが大きな話題となった。データベース分野ではPostgresのLISTEN/NOTIFYが実は高いスループットを出せるという検証結果が注目を集め、セキュリティ面ではHanwha製ネットワークカメラのファームウェアからGitHub管理者トークンが流出していた事例が報告された。GitHubからはDependabotのアップデート方式変更やバグバウンティプログラムの再編が発表され、Go言語やOpenTelemetryなど開発者向けの技術動向も活発だった。以下、主要トピックを紹介する。

## Anthropic、新モデル「Claude Opus 5」を発表

AnthropicはAI言語モデルの新版「Claude Opus 5」を発表した。前モデルのOpus 4.8と比較して約半分のコストで、ソフトウェアエンジニアリングや知識労働、科学研究などのタスクにおいて近フロンティア級の性能を発揮するという。Frontier-BenchやCursorBenchといったベンチマークで高いスコアを記録しつつ、安全性のアラインメントも維持しているとされる。関連して、第三者ベンチマークサイトのArtificial Analysis Intelligence Leaderboardでも同モデルが1位に位置づけられており、独立した評価でも高い性能が裏付けられた形だ。開発コストの低下は、AIをコーディング支援や日常的な分析業務に組み込む敷居をさらに下げる可能性がある。

詳細は [Claude Opus 5](https://www.anthropic.com/news/claude-opus-5) と [Opus 5 is currently #1 on Artificial Analysis Intelligence Leaderboard](https://artificialanalysis.ai/models) を参照。

## Postgres の LISTEN/NOTIFY は本当にスケールしないのか

「PostgresのLISTEN/NOTIFYはスケールしない」という通説に対し、DBOSのブログはその原因が通知機構そのものではなく、トランザクションコミットを直列化するグローバルな排他ロックにあると指摘した。通知をメモリ上でバッファリングし、バッチでフラッシュする最適化手法を用いることで、単一のPostgresサーバー上で秒間6万件の書き込みをミリ秒オーダーのレイテンシで処理できることを示し、素朴な実装と比べて約20倍の性能向上を達成したという。リアルタイム性が求められるpub/subやストリーミング用途において、追加のメッセージキュー基盤を持ち込まずにPostgresだけで実現できる可能性を示す内容であり、NOTIFYの競合を適切に制御すれば十分実用的なスループットが出せる点が技術的なポイントだ。

詳細は [Postgres LISTEN/NOTIFY actually scales](https://www.dbos.dev/blog/postgres-listen-notify-scalability) を参照。

## ネットワークカメラのファームウェアにGitHub管理者トークンが混入

セキュリティ研究者が、Hanwha Vision製ネットワークカメラのファームウェアからGitHubの管理者権限トークンを発見したと報告した。約500種類のファームウェアイメージを解析した結果、CIプロセスが`process.env`の内容をそのままフロントエンドのビルド成果物に書き込んでいたことが原因で、トークンがハードコードされる形で混入していたという。このトークンはHanwhaのGitHub組織内の数百のリポジトリに対する管理者権限を持っており、カメラの管理画面にアクセスできる者であれば誰でも取得できる状態だった。同社は通報から12時間以内にトークンを失効させて対応したが、CI/CDパイプラインでの環境変数の扱いに関する典型的な設定ミスとして教訓的な事例となっている。

詳細は [My security camera shipped a GitHub admin token in its login page](https://hhh.hn/hanwha-github-token/) を参照。

## 3ポートEthernetスイッチASICを個人で設計

エンジニアのJulia Desmazes氏が、Tiny Tapeoutのシャトルチップ向けに3ポート・100MbpsのEthernetスイッチASICをオープンソースで設計した事例が話題となった。ピン数24本、ダイ面積も限られるという厳しい制約の中、オンチップメモリ使用量を抑えるためストア&フォワード方式ではなくカットスルー方式のフォワーディングアーキテクチャを採用している。外部のMicrochip製PHYチップとはRMIIプロトコルで接続し、MACアドレスの自律学習とTTLベースのエントリのエージングも実装した。管理機能を持たない「アンマネージド」設計にすることで複雑なソフトウェアオーバーヘッドを避けており、機能拡張には本格的なチップ生産へ移行する必要があるというトレードオフを受け入れている点が興味深い。

詳細は [Designing an Ethernet Switch ASIC](https://essenceia.github.io/projects/ethernet_switch_asic/) を参照。

## Rustに書き換えずにCをメモリ安全にする「Fil-C」

Filip Pizlo氏が開発したFil-Cは、既存のC/C++コードをほぼ変更せずにメモリ安全にできるコンパイラで、capability-basedポインタとガベージコレクションによってバッファオーバーフローやuse-after-freeといった脆弱性を検出・防止する。実際に脆弱性を含むCプログラムをFil-Cでコンパイルしたところ、脆弱性の実行を防げたことが確認された。性能面ではポインタ操作が少ないワークロードではオーバーヘッドが1.05倍に留まる一方、配列操作が多いワークロードでは2.27倍まで低下するが、ポインタ集約的な処理ではガベージコレクションがむしろ有利に働く場合もあるという。OpenSSLやSQLiteのような既存のC/C++資産をほぼそのままの形で安全化できる点で、Rustへの全面書き換えに代わる現実的な選択肢として注目されている。

詳細は [Rust に書き直さなくても C 言語をメモリ安全にできる Fil-C を試した](https://zenn.dev/mattn/articles/cace8c5a00b9cc) および [Fil-C: Garbage In, Memory Safety Out](https://www.youtube.com/watch?v=5F-2Y1LPRek) を参照。

## GitHub、Dependabotのバージョン更新に「クールダウン」を導入

GitHubはDependabotによるバージョン更新のプルリクエスト作成を、新バージョン公開から3日間遅らせる「クールダウン」の仕組みを導入した。この猶予期間により、メンテナーやセキュリティ研究者が悪意あるリリース(サプライチェーン攻撃)を検知し、ユーザーのコードベースに取り込まれる前に対処する時間を確保できるという狙いがある。npmパッケージの乗っ取りなど、公開直後の悪意あるバージョンが自動更新経由で広まるサプライチェーン攻撃が近年相次いでいることを踏まえた対策であり、依存関係管理の自動化とセキュリティのバランスを取る具体的な取り組みとして参考になる。

詳細は [The case for a cooldown: Why Dependabot now waits before issuing version updates](https://github.blog/security/supply-chain-security/the-case-for-a-cooldown-why-dependabot-now-waits-before-issuing-version-updates/) を参照。

## GitHub、バグバウンティプログラムを再編

GitHubはバグバウンティプログラムの構造を見直し、実績のある研究者向けに高額報酬のVIPプログラムを新設する一方、一般向けプログラムの報酬水準を調整し、質の低い報告を減らすためのシグナル要件を導入したと発表した。脆弱性報告の量よりも質を重視する方向への転換であり、大規模なOSSプラットフォームがセキュリティリサーチコミュニティとの関係をどう最適化していくかを示す事例として注目される。

詳細は [Next chapter: Restructuring GitHub's bug bounty program](https://github.blog/security/next-chapter-restructuring-githubs-bug-bounty-program/) を参照。

## Go 1.27でUUIDが標準ライブラリ入り

Go 1.27では、RFC 9562に準拠したUUIDのバージョン4およびバージョン7の生成機能が標準ライブラリに追加される見込みだ。標準ライブラリに含めるべきかどうか、パッケージ名を`uuid`とするか`crypto/uuid`とするか、どのバージョンをサポートするか、v7のモノトニックなシーケンス処理をどう扱うかなど、400件を超えるコメントを伴う活発な議論を経て仕様が固まった。最終的な実装は、カスタムタイムスタンプや詳細なメタデータ抽出といった高度な機能を意図的に省き、安定性を優先する方針を採っている。また`database/sql`との連携はUUID型自体ではなくデータベース層で行う設計になっており、標準ライブラリに機能を追加する際のスコープの絞り方として参考になる議論だ。

詳細は [Go 1.27 から uuid 実装がサポートされる！ので個人的に気になった議論とその着地をまとめてみた](https://zenn.dev/layerx/articles/f7124d4e761c1f) を参照。

## フロントエンドに広がるOpenTelemetry Browser SDK

OpenTelemetryのBrowser SDKは2025年後半から開発が加速しており、専用リポジトリの設置によりブラウザ固有のニーズに対する意思決定が迅速化されたという。現在はユーザー操作やCore Web Vitals、リソースタイミング情報といったブラウザ特有のテレメトリを収集できるようになっているが、多くのパッケージはまだ実験的な段階にある。商用のRUM(リアルユーザーモニタリング)ソリューションと比較すると、圧縮・難読化されたエラースタックトレースを復元する「シンボリケーション」機能が組み込まれていない点や、セッションリプレイの標準的な実装方法が存在しない点など、ギャップも大きい。フロントエンド監視基盤をOpenTelemetryに全面移行するのは時期尚早であり、当面はプロジェクトの進化を注視すべきという指摘は、採用を検討するチームにとって実務的な判断材料となる。

詳細は [フロントエンドに広がりつつある OpenTelemetry：Browser SDK の現在地](https://zenn.dev/cybozu_frontend/articles/opentelemetry-browser-frontend) を参照。

## GitHub Sponsors、累計1億ドルの支援額に到達

GitHubは、OSSメンテナー支援プログラム「GitHub Sponsors」を通じた累計支援額が1億ドルに達したと発表した。企業や個人によるオープンソースへの投資が着実に拡大していることを示すマイルストーンであり、ソフトウェアサプライチェーンの持続可能性に対する関心の高まりを裏付ける数字といえる。OSSメンテナーの活動を金銭的に支える仕組みが定着しつつある中、今後さらに支援の裾野がどう広がっていくかが注目される。

詳細は [$100 million for open source: A milestone built by the community](https://github.blog/open-source/maintainers/100-million-for-open-source-a-milestone-built-by-the-community/) を参照。
