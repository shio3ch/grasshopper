---
title: "Mojoが1.0到達、NVIDIAはエージェント向けモデルルーティング基盤を発表——2026年8月12日のテックニュース"
description: "Mojo言語が正式に1.0へ到達、NVIDIAのNemotron 3.5 LightningとNeMo Switchyard、pg_clickhouseの大幅高速化、GitHubの開発者ロール論とサプライチェーン対策など、8月12日の注目トピックをまとめた。"
pubDate: 2026-08-12
tags: ["AI", "LLM", "プログラミング言語", "データベース", "GitHub", "セキュリティ"]
author: "grasshopper"
---

本日はプログラミング言語とAIインフラ関連の発表が目立った一日だった。Hacker News では Modular の「Mojo」が正式に1.0へ到達したほか、NVIDIA がエージェント向けの新モデルとルーティング基盤を発表、ClickHouse は PostgreSQL 連携の大幅な高速化を報告した。GitHub Blog ではAIエージェント時代の開発者の役割論やサプライチェーンセキュリティの拡充が語られ、Zenn では Claude Code や Codex を使いこなす実践的なノウハウがトレンド入りしている。以下、注目トピックを紹介する。

## Mojo言語が正式に1.0へ到達

Modular は汎用システムプログラミング言語「Mojo」が正式に1.0に到達したと発表した。2023年の初リリース以来目指してきたマイルストーンで、今後は破壊的変更を慎重に扱いながら追加的な進化を重ねる方針だという。約200人のコントリビューターによる1,100件超のプルリクエスト、20万行超のコード変更を経て到達した節目であり、C++のような成熟言語の歩みを参考にした安定志向の運用に移行する。26.5リリースでは `var` によるシンプルな変数宣言への統一、クロージャ構文とポインタ型の整理、Pythonライクなラムダのサポート、メモリ安全性診断の強化、LSPサーバーの安定性向上、GPUプログラミング向けAIスキルの追加などが行われた。

詳細は [Mojo 1.0](https://www.modular.com/blog/modular-26-5-mojo-1-0-is-here) を参照。

## NVIDIA、エージェント向け新モデル「Nemotron 3.5 Lightning」とルーティング基盤「NeMo Switchyard」を発表

NVIDIA はエージェント型システムの専門タスク向けに設計された300億パラメータのオープンモデル「Nemotron 3.5 Lightning」と、複数モデルへ最適にリクエストを振り分けるオープンソースのルーティングライブラリ「NeMo Switchyard」を発表した。Nemotron 3.5 Lightning は同クラスの他モデル比で出力速度が最大4倍、エージェントタスクの完了が30%高速という。個人デバイスからデータセンターまでスケール可能で、プライバシーとデプロイの制御を組織側に残せる点が特徴だ。NeMo Switchyard はタスクの品質・レイテンシ・コストを踏まえてモデルを自動選択し、Opus 4.8単体運用と比べてタスク完了コストを約3分の1に抑えつつフロンティア級の精度を維持できるとしている。単一チャットボットから複数の専門モデルを組み合わせるマルチエージェント構成へのシフトを象徴する発表といえる。

詳細は [Nvidia Nemotron 3.5 Lightning and NeMo Switchyard](https://blogs.nvidia.com/blog/nemotron-lightning-switchyard-rtx-dgx/) を参照。

## pg_clickhouse v0.10、サブクエリプッシュダウンでTPC-Hクエリを最大900倍高速化

ClickHouse は PostgreSQL 拡張「pg_clickhouse」の v0.10.0 をリリースした。目玉機能はサブクエリプッシュダウンで、相関サブクエリをローカルで評価するのではなく ClickHouse 側にネイティブなサブクエリとして送り込み、クエリプラン全体をリモート実行できるようになった。TPC-H ベンチマークの Query 17 では、従来ローカル評価で32.7秒かかっていた処理がフルプッシュダウンにより37ミリ秒まで短縮され、約900倍の高速化を達成している。TPC-Hの22クエリ中フルプッシュダウン対応済みが12から16へ拡大したほか、C++クライアントからプレーンCクライアントへのドライバ刷新、関数・集約プッシュダウンの倍増、PostgreSQLの3値論理に整合する `NOT IN` セマンティクスの修正なども行われた。

詳細は [pg_clickhouse v0.10: Subquery pushdown and 1000x faster TPC-H queries](https://clickhouse.com/blog/pg_clickhouse-whats-new-july-2026) を参照。

## 「圧縮は予測である」——エントロピー符号化と言語モデルの数学的な等価性

ngrok のブログ記事が、データ圧縮と言語モデルが本質的に同じ数学的問題を解いていることを解説し Hacker News で注目を集めた。圧縮器は変換・モデル・エントロピー符号化の3要素からなり、モデルが各シンボルに確率を割り当て、その確率を使ってビット数（−log₂(確率)）を最小化する。言語モデルも文脈から次トークンの確率分布を予測する点で同じ構造を持ち、圧縮時は最も確率の高いトークンではなく実際に出現したトークンをその確率でエンコードする。記事ではオーダー1文脈モデルにより "Q" の後の "U" の符号化コストが5.16ビットから0.001ビットまで下がる例や、"TO BE OR NOT TO BE" の圧縮が文脈なしの47ビットから21ビットへ55%削減される例、GPT-2がディケンズの引用文を元サイズの10%（176ビット）まで圧縮し順位1モデルの434ビットを大きく上回る例を示している。

詳細は [Compression is prediction](https://ngrok.com/blog/compression-is-prediction) を参照。

## GitHub、AIエージェント時代の開発者は「コーダー」から「オーケストレーター」へ

GitHub Blog は、AIエージェントの普及により開発者の役割が「コードを書く人」から「コードの提案・検証・レビュー・出荷の仕組みを設計する人」へと変化していると論じた。エージェントが曖昧で文脈依存のタスクをこなす一方、開発者はワークフローのトリガーや境界条件を定義するオーケストレーターとしての役割を担うようになる。信頼できるAI活用には単発のプロンプトではなく、CI/CDチェックやセキュリティスキャン、コードレビュー要件を経てマージされる「決定論的な境界の中でのエージェントの柔軟性」を組み込んだワークフロー設計が必要だと指摘している。

詳細は [From coder to orchestrator: How agents shift the role of a developer](https://github.blog/developer-skills/career-growth/from-coder-to-orchestrator-how-agents-shift-the-role-of-a-developer/) を参照。

## GitHub、マルウェアアドバイザリの対象をnpm以外の8エコシステムへ拡大

GitHub は Advisory Database のマルウェア検知対象を npm 単独から PyPI・Maven・RubyGems・NuGet・Go・crates.io・PHP Composer を含む8エコシステムへ拡大したと発表した。OpenSSF の malicious-packages リポジトリのデータを活用し、エコシステムごとに個別の検知システムを構築するのではなく、OSV形式の構造化データを処理する単一のインポーターで対応する。認証情報を窃取する悪意あるパッケージに対しては「精度より速度」を優先し、人手レビューなしで自動的にアドバイザリを公開する一方、バッチ上限・出所追跡・ロールバック機能という3層の防御策で汚染されたアップストリームデータからシステムを守っている。機能はオプトインで、リポジトリのセキュリティ設定で有効化する必要がある。

詳細は [How we took malware advisories beyond npm](https://github.blog/security/supply-chain-security/how-we-took-malware-advisories-beyond-npm/) を参照。

## 巨大なAI生成プルリクエストを「スタック型PR」でレビュー可能にする手法

GitHub Blog は、AIエージェントが生成する巨大なプルリクエストをレビューしやすい単位に分解する「スタック型プルリクエスト」の手法を紹介した。mainブランチを起点に基盤となる作業を特定し、その上に依存関係を持つ変更を積み重ねる形でブランチを順序立てて作成する。記事内のショッピングアシスタント機能の例では、L1: データカタログとシードデータ、L2: 検索APIエンドポイント、L3: チャットとAPIの連携、L4: UIコンポーネントと引用表示という4層に分割している。レビュアーは「スタックマップ」で全体像を把握しながら下位層から順にレビューし、`gh stack` コマンド群が変更発生時のリベースや同期を自動的にカスケード処理する。

詳細は [Turn one giant AI-generated pull request to a reviewable stack](https://github.blog/engineering/turn-one-giant-ai-generated-pull-request-to-a-reviewable-stack/) を参照。

## Claude Codeで「ループエンジニアリング」を実践、Maker-Checkerパターンでバグ検知

Zenn のトレンド記事では、Google の Addy Osmani氏が2026年6月に提唱した「ループエンジニアリング」——「自分がエージェントにプロンプトを送る役割を担う代わりに、それを行うシステム自体を設計する」考え方——を Claude Code のサブエージェント機能で実践した事例が紹介されている。エラー検知・原因調査・修正実装を担う「incident-maker」と、独立した文脈でその判断や修正を再検証する「incident-checker」からなる Maker-Checker パターンを構築し、LLMが自らの判断を正当化してしまうリスクを防いでいる。checker には Write/Edit ツールを付与せず判定のみに限定するなど権限設計で役割を強制し、実際に全角数字がISBNバリデーションをすり抜けるバグを検知・修正することに成功したという。

詳細は [Claude Code で「ループエンジニアリング」を実践してみた](https://zenn.dev/tetsu_don/articles/e40b95dfc726ac) を参照。

## BM25による前処理でCodexのトークン消費を約30%削減

Zenn の記事では、コーディングエージェント Codex の非効率なファイル探索を補うため、BM25による前処理レイヤーを挟んでトークン消費を削減する手法が紹介されている。70MBのリポジトリを1万5,000のフラグメントに分割してインデックス化し、`getUserProfile` のような識別子を全体語と構成語（get / user / profile）の両方で検索可能にする、日本語をNグラムで部分一致させる、ディレクトリ・ファイル名の一致を優先的にランク付けするといった工夫を加えている。7,536ファイルのリポジトリでの検証では全セッションでトークン消費が29.2%減少し、質問単位では中央値28.5%減、低難易度クエリでは35.7〜40.6%の削減効果が確認された。応答品質を保ちながら、Codexの高コストな推論からBM25の効率的なインデックス検索へ計算負荷をシフトする狙いがある。

詳細は [BM25を使用してCodexのトークンの消費を30%抑える](https://zenn.dev/knowledgesense/articles/9e55a3bb67729c) を参照。

## 発行SQLを数えてN+1問題を体感的に理解する

Zenn の記事では、N+1問題を理論だけでなく実際に発行されるSQL文の数を数えることで体感的に理解する手法が紹介されている。SQLAlchemyの `@event.listens_for()` によるイベントリスナーですべてのSQL発行を捕捉し、`a.books` のような属性アクセスが遅延ロードにより親レコードごとに個別クエリを発生させ、結果として1+N件のクエリが実行される様子を可視化する。解決策として、JOINで1本のSQLに集約する `joinedload` と、2回のクエリで済ませつつ行の重複増殖を避けられる `selectinload` を対比し、データ件数に比例して増えるクエリ数を固定本数に変換することの重要性を説いている。

詳細は [N+1 問題を、発行される SQL を数えて理解する](https://zenn.dev/mtmtdack/articles/2026-08-11-n-plus-one-counting-queries) を参照。
