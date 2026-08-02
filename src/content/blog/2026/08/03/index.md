---
title: "2026年8月3日 技術ニュースまとめ：MCPステートレス化、Kimi-K3のB300デプロイ、GitHubのスタック型PR"
description: "MCPの大型アップデートによるステートレス化、2.8TパラメータのKimi-K3をNVIDIA B300 x8で動かす挑戦、GitHub公式のスタック型PR機能、AIフレンドリーなCLI設計術、npm/GitHub Actionsのサプライチェーン対策などをまとめた。"
pubDate: 2026-08-03
tags: ["MCP", "AI", "GitHub", "セキュリティ", "CLI"]
author: "grasshopper"
---

2026年8月3日の技術系トピックをまとめる。AI関連ではMCP（Model Context Protocol）の大型アップデートによるステートレス化と、超大規模MoEモデル「Kimi-K3」をNVIDIA B300 x8で動かす検証が話題になった。開発者向けツールの分野では、GitHub公式のスタック型プルリクエスト機能とAIエージェントに配慮したCLI設計のテクニックが注目を集めている。セキュリティ面ではnpmとGitHub Actionsを狙うサプライチェーン攻撃への対策強化、GitHubのコードサーチエンジンにおける文字列処理の高速化事例も報告された。さらにHacker Newsでは、8ビットCPU上で言語モデルを動かすという挑戦的な取り組みや、macOSバイナリをLinux ARM環境で実行するプロジェクトが人気を集めた。

## MCPが大型アップデート、ステートレス設計へ転換

MCP（Model Context Protocol）の仕様が2026年7月28日に大きく更新された。最大の変更点は、従来の「initialize」ハンドシェイクと「Mcp-Session-Id」によるセッション管理を廃止し、各リクエストが独立して完結するステートレス設計への転換だ。サーバーが過去のやり取りを記憶する前提から、サーバーが状態を表すハンドルを返しクライアントが次回呼び出し時にそれを引数として渡す方式へと変わった。

これにより、サーバーの水平分散が容易になり、セッション固定（スティッキーセッション）やストア共有の必要がなくなる。ユーザー確認が必要な処理では、SSEストリームの代わりに署名済みの「requestState」をクライアントがリトライ時に添える仕組み（Multi Round-Trip Requests）が導入された。ヘッダーベースルーティングの必須化やOAuth関連の認可強化（RFC 9207準拠）も行われている。TypeScript SDK v2は旧クライアントとの互換性を保ちながら新仕様に対応しており、12ヶ月の移行期間が設けられている。

詳細は [MCPの大型アップデート（2026-07-28）で何が変わったか —— TypeScript SDK v2で試す](https://zenn.dev/komlock_lab/articles/mcp-stateless-spec-2026) を参照。

## 2.8TパラメータのKimi-K3、NVIDIA B300 x8シングルノードで実用速度を実現

Kimi-K3のウェイト公開当日、FixstarsはNVIDIA B300 x8のシングルノード環境へのデプロイとベンチマークを完了したと報告した。Kimi-K3は総パラメータ数2.8T（アクティブパラメータ104B）、896エキスパート中16がトークンごとに活性化するMoE構成のモデルだ。QAT済みのMXFP4量子化ウェイトとして約1.57TBで配布されており、追加の量子化作業なしにダウンロード後そのまま起動できる点が運用上の大きな利点となっている。

ベンチマークでは同時リクエスト数30程度が実用上限で、最大スループットは約5,400〜5,800トークン/秒。実効コンテキスト長はMLA KVキャッシュベースで約52.8万トークンに達し、中央値TTFT（初回トークンまでの時間）は600〜750msだった。一方でモデルロードに約1時間半を要するため設定変更時の試行錯誤にコストがかかること、ハイブリッドアーキテクチャ特有のパラメータチューニングが性能を大きく左右することが課題として挙げられている。

詳細は [【速報】Kimi-K3 を Day0 デプロイ。2.8T モデルは NVIDIA B300 x8 の 1 ノードで動くのか](https://zenn.dev/fixstars/articles/kimi-k3-benchmark) を参照。

## GitHub公式のスタック型プルリクエスト機能「gh stack」

GitHubが公式に提供する「スタック型プルリクエスト」機能が話題を呼んでいる。大きな変更を「土台のブランチ→その上に積んだブランチ」という階層構造で管理し、各層を個別のPRとして扱う仕組みだ。各PRのdiffが直下の層との差分のみになるためレビューが効率化され、層ごとに異なる関心事に焦点を絞ったレビューが可能になる。

`gh stack init`でスタックの起点となるブランチを作成し、`gh stack add`で新しい層を追加、`gh stack submit`で複数ブランチを一括push・PR作成、`gh stack sync`でrebase・push・GitHub同期を自動実行できる。手動での「数珠つなぎPR」管理から解放され、下位PRの変更を上位へ自動反映するなど複数ブランチの一括操作で手作業を大幅に削減できる。`gh skill install github/gh-stack`でスキルをインストールすれば、Claude CodeやCodexなどのAIエージェントから自然言語で操作することも可能だ。

詳細は [GitHubにスタック型プルリクエストが登場。gh stackでPRを分割して積み上げよう](https://zenn.dev/ubie_dev/articles/gh-stack-introduction) を参照。

## GitHub Copilotアプリにスタック型セッション機能が追加

GitHub Blogでは、GitHub Copilotアプリに「スタック型セッション」機能が追加されたことが紹介された。同じリポジトリ内で複数のセッションを連続的に実行し、各セッションが前のセッションの成果を引き継ぐ形でタスクを進められる。著者のCassidy Williams氏は、10年以上前からの技術的負債を抱えた個人プロジェクトの近代化にこの機能を活用し、段階的に課題を解消できたと述べている。

大規模な変更を一度に行うのではなく、依存関係のある複数のタスクを順序立てて自動化できる点が、AIエージェントを使った開発フローの新しい形として注目されている。前述のgh stackと合わせて、PRやセッションを「積み上げる」形の開発ワークフローがGitHubのエコシステム全体で広がりつつあることがうかがえる。

詳細は [Stacked sessions and pull requests in the GitHub Copilot app](https://github.blog/ai-and-ml/github-copilot/stacked-sessions-and-pull-requests-in-the-github-copilot-app/) を参照。

## AIエージェントに配慮したCLIツール設計の5つのテクニック

AIエージェントがCLIツールを効率的に理解・利用できるようにするための実装テクニックをまとめた記事が注目を集めた。ポイントは、ヘルプやログに「docsコマンドを使ってください」といったガイダンスを埋め込みAIが自動的にドキュメントへアクセスするよう促すこと、ドキュメントをMarkdownで`docs/`ディレクトリに集約しYAML Frontmatterで説明文を付けることだ。

さらに`docs list`・`docs show <name>`といったサブコマンドを実装し、Goの`embed`パッケージでドキュメントをバイナリに埋め込むことでバージョン管理を容易にする手法や、`--help`・`--version`・エラーメッセージなど複数の出力箇所からdocsコマンドへの導線を張る工夫が紹介されている。単一の統合Agent Skillを作成しdocsコマンド実行を促す設計にすることで、Skill自体をシンプルに保ちながらメンテナンス負担を抑えられるという。AIエージェントとの協働が前提になりつつある開発現場において、実務的な指針となる内容だ。

詳細は [AI フレンドリーな CLI を開発するテクニック](https://zenn.dev/shunsuke_suzuki/articles/make-cli-ai-friendly) を参照。

## npmとGitHub Actionsを狙うサプライチェーン攻撃への対策を強化

GitHubは、npmとGitHub Actionsを標的としたサプライチェーン攻撃に対する最新の防御策をまとめた記事を公開した。オープンソースプロジェクトを狙い、認証情報の窃取やワークフローの悪用を通じてマルウェアを拡散させる攻撃キャンペーンに対し、GitHub側で新たな検知・防止の仕組みを展開したという内容だ。

近年、正規パッケージへの不正コード混入や、CI/CDワークフローの権限昇格を悪用した攻撃が増加しており、開発チェーン全体を狙う攻撃への継続的な対策強化が求められている。オープンソースエコシステムの信頼性を維持する上で、プラットフォーム側の防御機能強化は開発者にとっても重要な情報だ。

詳細は [Disrupting supply chain attacks on npm and GitHub Actions](https://github.blog/security/supply-chain-security/disrupting-supply-chain-attacks-on-npm-and-github-actions/) を参照。

## Dependabotの更新頻度を抑えつつセキュリティ対応は維持する設定術

依存関係管理ツールDependabotの通知過多に悩む開発者向けに、設定を見直して更新をグループ化し、頻度を日次から月次に落とす手法を解説した記事が公開された。エコシステムごとに月1件のプルリクエストにまとめることで、継続的な通知に振り回されることなく依存関係を管理できるという。

一方でセキュリティ修正が必要な場合は従来通り迅速に対応できる設定を維持し、利便性とセキュリティ対応速度のバランスを取る点がポイントだ。依存関係の更新管理に疲弊しているチームにとって、実践的な改善策となる。

詳細は [Tame Dependabot: Group updates, slow cadence, keep security fast](https://github.blog/security/supply-chain-security/tame-dependabot-group-your-updates-slow-the-cadence-keep-security-fast/) を参照。

## GitHubのコード検索エンジン、文字列処理を15倍以上高速化

GitHubのエンジニアリングチームは、コード検索エンジンにおけるテキスト処理の最適化について解説する記事を公開した。大文字小文字を区別しない検索（case-folding）処理において、内側ループから分岐を排除する最適化を行った結果、15倍以上の高速化を達成し「メモリ速度」に近い処理速度を実現したという。

一見地味な最適化に見えるが、大規模なコードベースを対象とする検索基盤において、内側ループのわずかな分岐削減が全体のスループットに大きく寄与する好例として紹介されている。低レベルな最適化に関心のあるエンジニアにとって参考になる内容だ。

詳細は [Don't stop early: case-folding source code at memory speed](https://github.blog/engineering/architecture-optimization/dont-stop-early-case-folding-source-code-at-memory-speed/) を参照。

## Kakehashi：macOSバイナリをLinux ARM64で動かす翻訳レイヤー

Hacker Newsで注目を集めたプロジェクト「Kakehashi」は、macOS用のDarwin Mach-O形式バイナリをLinux aarch64環境で実行するユーザースペース翻訳レイヤーだ。Mach-Oバイナリをメモリにロードし、フリースタンディングな`libSystem`をマッピングしてBSDシステムコールを変換しながら実行する仕組みで、JITコンパイラを使わずネイティブCPU上で直接実行する点が特徴だ。

実装はMach-Oのパース・マッピング・実行、メモリ管理、トラップ処理、BSD syscall変換の各機能をRustで実装した複数のクレートで構成され、`libSystem.B.dylib`が組み込まれているため別途ダウンロードは不要となっている。7-Zipやcurl、マルチスレッド処理などの動作が確認済みで、Dockerや Linux aarch64 VM上でも動作する。ネイティブ実行と比較すると約5倍の速度低下があるものの、安価なLinux aarch64ランナー上でCI/CDにmacOSバイナリを実行できる価値が強調されている。

詳細は [Show HN: Kakehashi – Experimental userspace to run macOS binaries on Linux ARM](https://github.com/wie-project/kakehashi) を参照。

## 1975年生まれの6502プロセッサ上で言語モデルを動かす

Hacker Newsで大きな反響を呼んだのが、8ビットCPU「MOS 6502」上でBitNetベースの自己回帰言語モデルを実装・実行したブログ記事だ。舞台となったBBC MicroはRAM32KB、ユーザー領域は約25KBに限られ、推論コードに9KB、モデルの重みに13KBを使用するという極めて限られたリソースの中で実装されている。6502は乗算命令を持たないため、演算の効率化が最大の課題だった。

この課題に対し、重みを三値集合{-1, 0, 1}に量子化するBitNet方式を採用することで乗算を加減算のみで実装し、1バイトに4パラメータを格納することで52,000個のパラメータを13KBに収めることに成功した。またAttentionの代わりに固定サイズの隠れ状態を保つMambaアーキテクチャを採用し、文脈長に応じたメモリ増加を回避している。ハードウェア制約を前提としたモデル設計の工夫が詰まった事例として、レトロコンピューティングとAIの両方に関心のある層から高い評価を得ている。

詳細は [Autoregressive Language Model on the 6502 Processor](https://mattbeton.com/blog/bitnet-6502.html) を参照。
