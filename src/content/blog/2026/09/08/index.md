---
title: "2026年9月8日 技術ニュースまとめ：D2のレイアウトエンジンTALAがOSS化、NixOSを狙うTrusting-Trust攻撃、BroadcomのVDDK提供停止"
description: "図解ツールD2のレイアウトエンジンTALAのOSS公開、ビルドツールを踏み台にしたNixOS向けTrusting-Trust攻撃の実証、BroadcomによるVMware移行ツールの生命線VDDK配布停止に加え、Zennで話題のRed-Green Stacked PRなど開発プラクティス系記事を紹介。"
pubDate: 2026-09-08
tags: ["OSS", "セキュリティ", "AI開発ツール", "インフラ", "開発プラクティス"]
author: "grasshopper"
---

今日は図解ツール D2 の自動レイアウトエンジン「TALA」がオープンソース化されたことが目を引いた。セキュリティ分野では、コンパイラではなくビルドユーティリティ `strip` を踏み台にした Trusting-Trust 攻撃を NixOS の nixpkgs 上で実証した論文と、Stuxnet の再構成ソースコードを公開した研究プロジェクトが話題になった。インフラ分野では Broadcom が VMware 移行ツールの生命線である VDDK の配布を停止したというニュースが波紋を呼んでいる。国内では Zenn を中心に、CI 上でバグ修正テストの妥当性を機械的に検証する「Red-Green Stacked PR」や、Claude Code のコメント過多をルールではなく skill で解決する事例など、開発プラクティスに関する記事がトレンド入りしている。

## D2のレイアウトエンジン「TALA」がオープンソース化

テキストベースの図解言語 D2 を開発する Terrastruct 社が、自動レイアウトアルゴリズム「TALA（Terrastruct's AutoLayout Algorithm）」をオープンソース化した。TALA はホワイトボードのスケッチに近い見た目を目指した直交レイアウトエンジンで、ノード配置と接続線のルーティングを担う。対称性・ノード間の中央値距離・フローの向き・クラスタリングなど複数の図研究論文の知見を統合し、独自の最適化目標を組み合わせている点が特徴で、一部のノードを固定しつつ他は自動配置する「ハイブリッド配置」にも対応する。これは AI がルーティングの生成を苦手とする中で、AI 支援による図生成にも有用な機能だという。ライセンスは D2 本体と同じ MPL-2.0。Terrastruct が非営利団体化した流れを受けたコミュニティ貢献の呼び水としての公開であり、大規模図でのスケーリング性能や複数シードによる結果のばらつきが今後の改善課題として挙げられている。

詳細は [TALA Is Open-Source](https://d2lang.com/blog/tala-is-open-source/) を参照。

## ビルドユーティリティ`strip`を狙ったTrusting-Trust攻撃をNixOSで実証

Ken Thompson の古典的な Trusting-Trust 攻撃（コンパイラを汚染し、自分自身の再ビルドにもバックドアを継承させる手法）はコンパイラに限られないことを示す論文が公開された。今回のターゲットは NixOS のパッケージ管理システム nixpkgs のブートストラッププロセスで、攻撃対象はソースコードを解釈も生成もしない「ただの ELF バイナリ操作ツール」である GNU strip という点が技術的に興味深い。論文によれば、シードに仕込まれた単一の汚染済み strip バイナリが世代を超えて自己複製し、元の汚染バイナリが依存関係から除去された後も最終的な標準環境に汚染が残存することを実証したという。実際の nixpkgs リビジョン上でグラフィカルインストーラを完全にビルドしつつ、サブバートされたパッケージ内のほぼ全バイナリにバックドアを仕込むことに成功しており、脅威モデルをコンパイラから基盤的なビルドツール全般へ拡張する内容だ。

詳細は [Trusting-Trust Attack against an Entire Linux Distribution](https://arxiv.org/abs/2607.24888) を参照。

## Show HN: Stuxnetのリバースエンジニアリングによる再構成ソースコードを公開

2010年に発見されたマルウェア Stuxnet について、バイナリのリバースエンジニアリングを通じて可読性の高いソースコードへ再構成したプロジェクトが Show HN に投稿された。Symantec・Kaspersky・ESET など主要セキュリティベンダーの脅威インテリジェンスを参照しつつ、オリジナルの攻撃ロジックを保持したままコード構造を整理したという。リポジトリには特権昇格を行うローダー/ドロッパーモジュール、PLC 通信を傍受する S7 フックライブラリ、ファイルシステムとネットワーク通信を隠蔽するルートキットドライバ、周波数改ざんによるペイロードロジックが含まれる。作者は「教育・研究目的に限定され、悪用や展開可能なマルウェアではない」と明記しており、AGPL-3.0 でライセンスされ Windows XP/7 のみを対象とする。産業制御システムを狙った歴史的サイバー兵器の内部構造を学術的に学ぶ教材として位置づけられている。

詳細は [Show HN: Stuxnet – A reconstructed source code of the infamous cyber-weapon](https://github.com/Sadpainy/Stuxnet) を参照。

## Broadcom、VMware移行の生命線VDDKの配布を停止

Broadcom が VMware Virtual Disk Development Kit（VDDK）の一般公開ダウンロードを停止したことが報じられた。従来のダウンロードページは 404 を返すようになり、サポート担当者は「使用・ダウンロードとも提供終了」と回答したという。VDDK は Microsoft Azure Migrate（エージェントレス移行）、Red Hat Migration Toolkit for Virtualization、Nutanix Move、OSS の virt-v2v や nbdkit など、VMware から他プラットフォームへの移行ツールの多くがディスクアクセス機能として依存する中核ライブラリだ。Microsoft や Red Hat も VDDK アクセス制限に関する注意喚起をガイダンスに追加し、Broadcom への問い合わせを案内している。この変更が vSphere Standard Edition の再導入とほぼ同時期であったことから、VMware から離脱しようとする顧客を狙ったロックイン戦略ではないかという疑念が広がっている。

詳細は [Leaving VMware just got harder after Broadcom pulled VDDK downloads](https://www.virtualizationhowto.com/2026/09/leaving-vmware-just-got-harder-after-broadcom-pulled-vddk-downloads/) を参照。

## GitHub、複数AIモデルを動的に組み合わせる「Project HydraFusion」を研究プレビュー公開

GitHub は単一モデルに頼らず、タスクごとに複数の AI モデルを動的に組み合わせて実行するオーケストレーション機能「Project HydraFusion」の研究プレビューを発表した。タスクの難易度に応じて「Single（単一モデルで直接解決）」「Cascade（軽量モデルがまず試み、品質基準を満たさなければ強力なモデルへエスカレーション）」「Critique（あるモデルが下書きし、別モデルがレビュー・改訂）」の3パターンから実行方式を選ぶ仕組みで、複数プロバイダのモデルを横断して利用する。ベンチマークでは Claude Opus 5 と同等以上の品質を保ちながら、ワークフローによっては推定コストを36〜67%削減できたとしている。現時点では GitHub Copilot CLI の `/experimental` コマンドから利用可能で、単発の初回プロンプトによるコーディングタスクに最も適した設計だという。

詳細は [Project HydraFusion: Frontier quality via multi-model orchestration](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/) を参照。

## AIエージェント向けの一時ファイル共有ツール「aispace」

AI エージェントと人間の両方が使いやすい一時ファイル共有 CLI「aispace」が公開された。チャットインターフェース越しにはやり取りしづらい大きなファイルや機微なファイルを、有効期限付きリンクと age（X25519）によるローカル暗号化を組み合わせて安全に受け渡すことを狙う。暗号化する場合は復号用の鍵をサーバーへ送らずローカルに保持できる点がポイントだ。ディスクからサーバーへ直接ストリーミングするアップロード、機械可読な JSON 出力、非対話的な実行（stdin 対応・確認プロンプトなし・安定した終了コード）など、AI エージェントによる自動運用を強く意識した設計になっている。ファイルは非公開・アカウント共有・公開リンクのいずれかのモードを選べ、最大30日の有効期限やダウンロード回数上限、即時失効の機能も備える。macOS・Linux・Windows でシェルインストーラ、npm、Homebrew から導入可能。

詳細は [Secure temporary file sharing for AI agents and humans](https://github.com/aispace-sh/aispace-client) を参照。

## Zenn注目記事：バグ修正テストの妥当性をCI上で機械的に証明する「Red-Green Stacked PR」

バグ修正 PR のレビューでは「追加されたテストが本当に修正前のコードで失敗するか」をレビュアーが手元でブランチをチェックアウトし修正を戻して確認する必要があり、記録も残らないという課題を指摘する記事がトレンド入りした。提案手法「Red-Green Stacked PR」では、Vitest の `test.fails` のような「失敗すればテスト成功とみなす」修飾子を使い、スタックした2本の PR に分割する。1本目（Red）は `test.fails` 付きの再現テストのみを含み、未修正コードでは失敗するため CI は期待通りグリーンになる。2本目（Green）で `test.fails` を外し実際の修正を加えると、修正後のコードでテストが通り CI がグリーンになる。この Red→Green の遷移が CI 履歴として恒久的に残ることで、「このテストは修正前は本当に失敗していた」という主張を人力ではなく CI が検証した事実に変える。`gh stack` でスタック PR の作成・マージを簡略化できる点や、squash マージしても各 PR のコミットが main に個別に残る点も紹介されている。

詳細は [不具合はCIに刻もう。「Red-Green Stacked PR」のすすめ](https://zenn.dev/bmth/articles/red-green-stacked-pr) を参照。

## Zenn注目記事：ルールでなくskillに書くことでClaude Codeの冗長コメントを削減

Claude Code が設定項目1つに対して18行ものコメントを書いてしまうなど、コメント過多に悩んでいた著者が、`.claude/rules/` や `~/.claude/CLAUDE.md` にルールを書いても改善が見られなかった（コメント比率18.5〜21%のまま）ことを報告する記事が注目を集めた。解決策として、コメント削減のロジックを `/pr` skill のワークフローに組み込み、`git diff | grep` で新規コードのコメント行を機械的に抽出し、決定表に基づいて残す/消すを判定、非自明な情報を含むかを文脈的に評価する仕組みを導入した。ルールが「実装しながら記憶しておく」必要があり毎セッションでリセットされてしまうのに対し、skill 方式は判定タイミングを実装時ではなく実装後のレビュー工程に移す点が効いたという。結果として PR あたりのコメント行数の中央値が27行から21行に減少し、長いコメントブロックを含む PR の割合は77%から65%に、タスクID参照は1000行あたり23.5行から8.0行まで減少した。一方で「旧実装は〜だった」といった主観的なコメントは機械的抽出になじまず、改善が見られなかったとしている。

詳細は [ルールではなくskillに指示を書くことで、Claudeのコメントを減らせた](https://zenn.dev/uzu_tech/articles/58a84a9346b910) を参照。

## Zenn注目記事：AGENTS.mdの更新に`request_user_input`を使う運用術

新しいモデル（GPT-6 Astra）のリリースに合わせて AGENTS.md を更新する際、Codex の `request_user_input` 機能を活用することで対話的にプロンプトを磨き込めるという記事が紹介されている。ワークフローは3段階で構成され、まず公式のモデルガイダンスドキュメントを提示して AGENTS.md への変更案を出させ、次に提案された各変更について理由を説明させて認識をすり合わせ、最後に `request_user_input` を使って AI 側から自分の要件について確認質問をさせ、その回答を最終ドキュメントに反映させる。著者によれば、新しい Astra モデルは以前より確認質問をする傾向が強くなっており、これが `request_user_input` のワークフローとの相性を高めているという。選択式・自由記述式のどちらの回答にも対応し、じっくり考える時間も確保されている点が体験として評価されている。

詳細は [Astraのリリースに合わせてAGENTS.mdを修正するなら「request_user_input」も使って体験良くチューニングしよう](https://zenn.dev/cureapp/articles/9dd3298ce84b47) を参照。

## Zenn注目記事：ルービックキューブを一撃で解く専用LLMを作った

汎用の大規模言語モデルではなく、ルービックキューブを解くことに特化した専用 LLM を構築した事例が Zenn のトレンドに入った。一般的な LLM はルービックキューブのような3次元的な状態遷移を要する問題を苦手とすることが知られており、この記事ではキューブの状態表現や手順（アルゴリズム）をモデルが学習しやすい形式にエンコードすることで、探索や試行錯誤を経ずに一撃で解を出力できる専用モデルを構築したアプローチが紹介されている。汎用モデルに万能を求めるのではなく、特定タスクに最適化したモデル設計を行うという、実務でのモデル活用における一つの方向性を示す事例といえる。

詳細は [ルービックキューブを一撃で解く専用LLMを作った](https://zenn.dev/turing_motors/articles/4178a603322b8e) を参照。
