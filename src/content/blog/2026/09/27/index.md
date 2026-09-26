---
title: "2026-09-27 技術ニュースまとめ: Google Playと決別したConversationsからLoongson CPUの深刻な不具合まで"
description: "XMPPクライアントConversationsのGoogle Play離脱、Loongson CPUのアトミック命令不具合、DeepSeekの大規模サンドボックス基盤DSecなど、開発者向けの注目トピックをまとめました。"
pubDate: 2026-09-27
tags: ["OSS", "セキュリティ", "AI", "ハードウェア", "Claude", "プログラミング"]
author: "grasshopper"
---

本日は、OSS 開発者がプラットフォームの支配から距離を置く動きが目立った。XMPP クライアント「Conversations」が Google Play を離脱した経緯や、YouTube クライアント「PipePipe」の独自進化が話題を集めている。技術面では Loongson 製 CPU のアトミック命令に潜む深刻な不具合や、DeepSeek が公開した大規模サンドボックス基盤 DSec など、インフラ・ハードウェアレイヤーの発表も注目された。AI 関連では、数学者育成の必要性を説く Terry Tao 門下の論考や、LLM 時代にプログラミングを楽しみ続けるための実践的な助言も紹介する。以下、注目のトピックをまとめた。

## XMPPクライアント「Conversations」、Google Playから離脱し無料化

オープンソースの XMPP クライアント「Conversations」の開発者 Daniel Gultsch 氏が、Google Play での有料販売をやめ、アプリを無料化すると発表した。背景には技術的な理由ではなく、Google との「有害な関係」がある。年間 1,000 ユーロ以上を手数料として支払っていたにもかかわらず、アプリの不可解な却下や 2 度のストア削除、セキュリティ更新の審査に 2 週間以上かかるといった問題が続いていたという。NLnet と欧州委員会からの助成金が 2029 年まで確保されたことで Google Play の売上に依存する必要がなくなり、すでに F-Droid で再現可能ビルドと自身の署名鍵による配布体制が整っていたことも後押しした。プラットフォームのゲートキーピングに対する開発者側の対抗策として注目される。

詳細は [Breaking Up with Google Play: Why Conversations Is Now Free](https://gultsch.de/posts/breaking-up-with-google-play/) を参照。

## NewPipeのハードフォーク「PipePipe」、SponsorBlock統合などで独自進化

2022年に NewPipe からフォークした Android 向け YouTube クライアント「PipePipe」が Hacker News で改めて注目を集めた。NewPipe の更新を追随せず独立路線を選んだことで、迅速なバグ修正や高頻度の機能追加が可能になったという。SponsorBlock によるスポンサー区間の自動スキップ、ReturnYouTubeDislike による低評価数の復元、AV1/VP9 などの高度なコーデック対応、ショート動画や有料動画のフィルタリングなど、NewPipe 本家にはない機能を多数備える。F-Droid や IzzyOnDroid から配布されている。

詳細は [PipePipe: NewPipe hard fork implementing SponsorBlock](https://github.com/InfinityLoop1308/PipePipe) を参照。

## Loongson製CPU、アトミック命令が「アトミックでなくなる」深刻な不具合

龍芯（Loongson）の LA664 コア（3A6000/3C6000/S に搭載）に、特定条件下でアトミック加算命令が本当にアトミックに実行されないという深刻な不具合が報告された。異なる物理コア上のスレッドがバリアなしのアトミック操作を同一アドレスに対して行い、かつ一方が LASX ベクトルメモリ読み込みをアトミック操作の間に挟むという3条件が揃うと発生する。Rust の `Arc` や `mpsc::Sender` を使った安全なコードでも参照カウントの増分が失われ、use-after-free や二重解放につながる可能性があるといい、ワーストケースでは失敗率100%に達するという。Loongson は報告からわずか2週間でファームウェア修正（MCSR24 レジスタのビット13を設定）を提供し、10月1日前のリリースを予定している。

詳細は [The Lost Atomic Update on Loongson CPU](https://jia.je/hardware/2026/09/24/loongson-cpu-erratum-en/) を参照。

## DeepSeek、日次38万超のサンドボックスを捌く実行基盤「DSec」を公開

DeepSeek が、大規模言語モデルのエージェント学習向けに開発した実行環境基盤「DeepSeek Elastic Compute（DSec）」の詳細を arXiv で公開した。エージェント学習では状態を保持したまま多数の隔離実行環境を用意する必要があるが、従来の単一サンドボックスランタイムでは対応できなかった。DSec は約160ノードのクラスタ上で FnCall・コンテナ・microVM・フル VM という複数のサンドボックスバックエンドを統一 SDK で抽象化し、メモリ共有や Fire-Flyer File System によるオンデマンドイメージロードで効率化を図る。強化学習フレームワークと協調設計されており、GPU 学習からステートフルなロールアウト実行を切り離しつつエージェントの状態を保持できる。本番環境では秒間5,000件超のサンドボックス作成、日次38万件超の同時実行を実現しているという。

詳細は [DeepSeek Elastic Compute (DSec)](https://arxiv.org/abs/2609.22978) を参照。

## Excalidrawキャンバス上でAIエージェントと共同編集する「Drawgent」

単一の Rust バイナリで動作するツール「Drawgent」が Hacker News の Show HN で紹介された。手元の Claude Code、Codex、opencode などのコーディングエージェントを、ライブの Excalidraw ホワイトボードに接続し、図の作成・編集を対話的に行えるようにする。チャットパネルへの入力のほか、キャンバス上に `AGENT:` という注釈を書き込むことでもエージェントに指示でき、完了したタスクには `DONE` が付与される。ACP（エージェント連携プロトコル）でエージェントと接続し、MCP ツール経由でスクリーンショットの読み取りや要素の編集、Mermaid 図の追加などを行う仕組みだ。開発環境を離れずに図解ベースの共同作業ができる点がユニークといえる。

詳細は [Drawgent: Coding agent on a live Excalidraw canvas](https://tangled.org/yanndegat.tngl.sh/drawgent) を参照。

## 「AI時代にこそ、もっと多くの数学者が必要だ」という提言

Hacker News で話題になった論考では、AI が生成する数学的発見がますます高度化する中、それを人間が理解し続けられるよう数学的素養を持つ人材を大幅に増やすべきだと主張している。筆者は、AI の理解速度に人間がついていけなくなり、研究者が理解を諦めてしまう危険性を指摘。核融合炉の比喩を用いて「定理はモデルの中でしか存在しえず、保証を理解するにはモデルを理解する必要がある」とし、人間の理解を伴わないまま変革的な技術を展開するリスクに警鐘を鳴らす。狭い専門性よりも深い理解を優先する「展開可能な知的予備軍」を育成すべきだという提案は、AI が数学・科学のブレークスルーを量産する時代における人間の役割を問い直す内容だ。

詳細は [We're gonna need a lot more mathematicians](https://terrytao.wordpress.com/2026/09/24/were-gonna-need-a-lot-more-mathematicians/) を参照。

## LLM時代にプログラミングを楽しみ続けるための実践的アドバイス

Haskell コミュニティの Discourse で、LLM を使いながらもプログラミングの楽しさを失わないための助言をまとめたスレッドが注目を集めた。要点は「コードは自分で書き続けること」で、すべてを AI に生成させると「LLM の荒れ地」と化し保守不能になると警告する。一方で計画立案やリサーチ、情報整理といった付随的な作業は AI に任せ、実装そのものは人間が担う分業を提案。生成物を無批判に受け入れず自動レビューを組み込むこと、フロンティアモデルへの依存を避け小型で安定したモデルを活用することなど、ベンダーロックインや環境負荷への配慮にも触れている。AI 生成テキストの読みすぎによる疲労を避け、人間同士のコミュニケーションを維持することも勧めている。

詳細は [How to keep enjoying programming in a world of LLMs](https://discourse.haskell.org/t/how-to-keep-enjoying-programming-in-a-world-of-llms/14705) を参照。

## Claude Codeのクラウドセッション、実務での活用ポイント

Zenn では、Claude Code のクラウドセッション機能（Anthropic のクラウドインフラ上で Claude Code を実行する機能）を実際に使った知見をまとめた記事がトレンド入りした。ローカルセッションをシームレスにクラウドへ移行できる点や、Pro/Max プランで API キーを VM に露出させずに渡せる点、送信先ドメインを制限できるネットワークフィルタリング、`TZ=Asia/Tokyo` によるタイムゾーン設定、起動前にルート権限で実行できるセットアップスクリプトなど、実務で役立つ7つの機能が紹介されている。端末を閉じてもセッションが継続する点を評価し、日々のトレンド収集や外出先からの開発に活用しているという。

詳細は [Claude Code クラウドセッション、使ってみて！](https://zenn.dev/goat_eat_any/articles/claude-code-cloud-sessions) を参照。

## 「記憶より記録」、本番DBを誤って初期化した実体験

Zenn で公開された、エンジニア歴11年の開発者が休暇明けに本番データベースへ `prisma migrate reset` を実行してしまった事故の記録がトレンド入りした。原因は、`packages/database` の `.env` にローカルと本番を区別する仕組みなしに本番用の認証情報が残っていたこと、破壊的コマンドの実行前に接続先が localhost かを検証する仕組みがなかったこと、休暇前の作業状態が記録されずに放置されていたことの3点が重なったためだという。幸いサービスが初期段階だったため影響は顧客レコード1件程度に留まり、Neon のバックアップ機能で約1日分を復旧できた。再発防止策として、localhost 以外への破壊的操作をブロックするスクリプトの導入、ローカル環境から本番URLを排除すること、AIエージェントに破壊的コマンドを実行させない制限などを挙げ、「記憶より記録」を徹底する重要性を説いている。

詳細は [11年生本番データ飛ばす](https://zenn.dev/ficilcom/articles/prod_db_reset_incident) を参照。
