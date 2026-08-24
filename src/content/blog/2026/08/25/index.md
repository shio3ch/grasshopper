---
title: "2026年8月25日 技術ニュースまとめ：MS Paintの隠しウォーターマーク発覚、IPFS Shipyard終了、GitHub発OSSセキュリティ知見"
description: "Microsoft PaintがAI生成画像にGUIDを隠しウォーターマークとして埋め込んでいた逆解析報告、IPFS Shipyardの終了、GitHubの50プロジェクト調査によるAI時代のOSSセキュリティ知見、TypeScriptコンパイラの内部構造など本日の主要テックニュースをまとめました。"
pubDate: 2026-08-25
tags: ["セキュリティ", "AI", "GitHub", "プロトコル", "プログラミング言語", "OSS"]
author: "grasshopper"
---

本日は、Microsoft PaintとPhotosがローカル生成のAI画像にサーバー発行のGUIDを不可視ウォーターマークとして埋め込んでいたことを明らかにした逆解析報告がHacker Newsで注目を集めた。インフラ関連では、Protocol Labsの資金打ち切りによりIPFS Shipyardがエンジニアリング・保守業務を終了するという発表、そしてJabber/XMPPが25年にわたり開放標準としての「デジタル独立性」を保ち続けてきた歩みが話題になった。GitHub Blogからは、50のオープンソースプロジェクトを支援した知見からAI時代のセキュリティ課題を整理した記事や、GitHub上で外部ツールと連携する「agent apps」、Copilotアプリの作業管理機能に関する解説が公開されている。Zennのトレンドでは、TypeScriptコンパイラの内部処理、Goのポインタ、Ctrl+Cのシグナル処理、コンシューマGPUでの大規模MoEモデル推論など、開発者の理解を深める技術解説記事が支持を集めた。

## MS PaintとPhotos、AI生成画像に見えないGUIDウォーターマークを埋め込みと判明

Hacker Newsで注目されたセキュリティ研究者の逆解析報告によると、Microsoft PaintとPhotosアプリはローカルで生成したAI画像に、サーバーから発行されたGUIDを不可視のウォーターマークとして埋め込んでいることが判明した。研究者はPaintのインストールディレクトリから`.onnxe`形式のモデルファイルを特定し、「Microsoft_2023」という鍵でXOR暗号化されていることを発見、`Watermarker.dll`の呼び出し階層を逆追跡してデータフロー全体をマッピングした。仕組みとしては、ユーザーのプロンプトがMicrosoftのモデレーションエンドポイントへ送信され、サーバーが修正済みプロンプトとともに一意のGUID（`watermarkId`）を返却、`WmkWriteWatermark`関数がこの16バイトのペイロードを画像ピクセルに埋め込む。埋め込みに失敗すると画像生成自体が失敗扱いになるという。MicrosoftはC2PAメタデータの存在は開示しているが、サーバー発行GUIDの詳細やプロンプトモデレーションとの連動については説明がなく、「ローカル生成」を謳いながら実際にはリモートサービスに依存した設計が明らかになった点が議論を呼んだ。

詳細は [MS Paint and Photos invisibly watermark even locally generated output with GUID](https://xusheng.dev/posts/reversing/mspaint_invisible_watermark/main/) を参照。

## IPFS Shipyard、資金打ち切りによりエンジニアリング業務を終了へ

IPFS Shipyardは、Protocol Labsから資金提供を受けられなくなったことを発表し、IPFS関連のエンジニアリング・保守・インフラ運用業務を2026年9月30日をもって終了すると明らかにした。専任メンテナーを失うプロジェクトにはKubo、Helia、Boxo、Rainbow、IPFS Desktop、IPFS Companionのほか、ipfs.ioやdweb.linkといった公開インフラも含まれる。go-libp2pやjs-libp2pへの貢献も終了する。Shipyardは9月末までサポートを継続するとしているが、ドメインとインフラの今後はProtocol Labsが決定するとしており、新たなメンテナーが確保されるかは不透明な状況だ。分散ストレージ技術の中核を支えてきたエコシステムの持続可能性に疑問符が投げかけられている。

詳細は [IPFS Maintainers Winding Down](https://ipshipyard.com/blog/2026-the-end-of-ipfs-at-shipyard/) を参照。

## Jabber/XMPP、開放標準として歩んだ「デジタル独立性」の25年

開発者ダニエル・ギュルチュ氏によるブログ記事は、Jabber/XMPPプロトコルが25年にわたり通信インフラとして機能してきた意義を論じ、Hacker Newsで議論を呼んだ。著者は、道路や水道と同じくデジタル通信も基盤インフラとして扱われるべきだと主張し、企業依存の「ウォールドガーデン」型サービス（Signal、WhatsAppなど）が支配的な現状に対し、複数の独立した実装とベンダーロックインを防ぐ開放標準こそが真の独立性を実現すると説く。技術的には、XMPPが拡張プロトコル（XEP）を通じて進化してきた点が強調され、モバイル対応やエンドツーエンド暗号化（OMEMO）も後から追加された拡張機能だという。Matrixとの対比では、単なるオープンソースの公開ではなく、標準化団体（SDO）による独立実装間の検証こそが真の相互運用性を保証すると指摘し、DinoやConversationsなど複数の実装が存在することが長期的な持続可能性の裏付けになっているとした。

詳細は [Jabber/XMPP: 25 Years of Digital Independence](https://gultsch.de/posts/25-years-of-digital-independence/) を参照。

## GitHub、50のOSSプロジェクト支援からAI時代のセキュリティ知見を報告

GitHub Blogは、Secure Open Source Fundの第4セッションとして50プロジェクト・71人のメンテナーを22カ国から支援した結果を報告し、AI時代のオープンソースセキュリティに関する知見をまとめた。中核的な教訓は「AIはメンテナーが調査・優先順位付け・対応を高速化するのに役立つが、最終的な文脈判断と責任、そして何をリリースするかの決定はメンテナー自身が担う」という点だ。今回のセッションでは50万ドル以上の非希薄化資金が提供され、92%のプロジェクトがシークレットスキャンやコードスキャンなどのGitHubセキュリティ機能を有効化した。全セッション累計では188プロジェクト・290人のメンテナーに188万ドルを配分し、533件の新規CVEを特定、1,500件以上のDependabot更新を実行、650件以上の露出シークレットを解決している。一方で、AIがプロンプトインジェクションや未信頼エージェントといった新しい攻撃面とリスクをメンテナーにもたらしている実態も明らかになった。

詳細は [What 50 open source projects taught us about security in the AI era](https://github.blog/open-source/maintainers/what-50-open-source-projects-taught-us-about-security-in-the-ai-era/) を参照。

## GitHub上で外部ツールと連携する「agent apps」、ソフトウェア配信の全工程をカバー

GitHub Blogは、開発者がGitHubを離れずに外部ツールの機能へアクセスできる「agent apps」について解説した。構想段階ではAmplitudeエージェントにプロダクト分析データを問い合わせ、開発段階ではEndor Labsエージェントが変更された依存関係を既知の脆弱性に照らして検査する。ロールアウト段階ではLaunchDarklyエージェントが機能フラグを自動作成・設定して段階的なロールアウト戦略を実装し、デプロイ前にはPagerDutyエージェントが進行中のインシデントや直近の履歴を確認してリスク評価を行うという。エージェントの起動方法はPRコメント内での`@mention`、Agentsタブからの選択、Issueへの割り当ての3パターンがあり、いずれもCopilotクラウドエージェントと同じプラットフォーム基盤を利用することで、複数ツール間を行き来する際のコンテキスト喪失を排除しているとしている。

詳細は [How to bring your software delivery workflow into GitHub with agent apps](https://github.blog/ai-and-ml/github-copilot/how-to-bring-your-software-delivery-workflow-into-github-with-agent-apps/) を参照。

## GitHub Copilotアプリ、「My work」ペインで作業を一元管理

GitHub Blogの初心者向けシリーズ第3回は、GitHub Copilotアプリの「My work」ペインによる作業管理機能を紹介した。プルリクエストとイシューを一箇所で管理できる設計で、All（すべて）、Active（オープン中）、Review requests（レビュー依頼あり）、Done（完了）の4つの標準ビューが用意されている。ユーザーは独自のフィルタを組み合わせた新しいビューを作成できるほか、リスト表示・テーブル表示を切り替え、テーブルではカラムのカスタマイズも可能だ。イシューやプルリクエストから直接新しいセッションを開始できるほか、複数アイテムを選択しての一括処理にも対応しており、分散しがちな作業を一元管理できる点を強調している。

詳細は [GitHub Copilot app for Beginners: Managing your work](https://github.blog/ai-and-ml/github-copilot/github-copilot-app-for-beginners-managing-your-work/) を参照。

## Zenn注目記事：TypeScriptコンパイラが12行のコードを処理する5段階

Zennのトレンド記事では、12行のExpress Hello WorldプログラムをもとにTypeScriptコンパイラ（tsc）の内部処理を5段階に分解して解説した。まずProgram構築でインポート解決を通じて201ファイルのプログラムグラフが生成され、`import express`の解決時には実装ではなく型定義ファイル（`@types/express/index.d.ts`）が読み込まれる。続くParserでソースコードがASTに組み上げられ、この段階では型注釈は単なる構文ノードに過ぎない。Binderがファイルごとのシンボル表を作成した後、Checkerでファイルを跨いだシンボル解決と型計算が行われ、ここに全体時間の73%が費やされるという。最後のEmitterで型情報が削除されモジュール構文がCommonJSへ変換される。著者は、型消去自体は1ファイルで完結できる一方、型検査にはプロジェクト全体の情報が必要という非対称性を指摘し、esbuildやViteが高速な理由は型検査をスキップしているためだと結論づけている。

詳細は [TypeScript が JavaScript になるまで](https://zenn.dev/onclimb/articles/ts-to-js-pipeline-onclimb) を参照。

## Zenn注目記事：Goのポインタへの抵抗感、その正体はPHPの参照渡しへの警戒だった

Zennのトレンド記事では、著者がGoのポインタに感じていた抵抗感の正体を掘り下げた体験記が支持を集めた。著者はPHPでの経験から「よく分かっていないなら参照渡しは避けるべき」という教育を受けており、その警戒感をGoのポインタにもそのまま持ち込んでいたという。しかし両者には決定的な違いがあり、Goではすべての引数が値渡しされ、ポインタそのものもコピーされるため、ポインタが指す値は変更できてもポインタ自体を別のアドレスへ変更することはできない。著者は最終的に、自身の警戒感の真の対象は参照機構そのものではなく「関数の外側にある状態を意図せず変更すること」だったと気づく。この副作用への懸念はPHPでもGoでも等しく妥当なものであり、コード生成AIが普及する時代においても、ポインタを通じて何が書き換わるのかを理解することが生成コードを検証する上で不可欠だと結んでいる。

詳細は [Goのポインタに抵抗を感じていた理由](https://zenn.dev/ncdc/articles/661804f1bb2f95) を参照。

## Zenn注目記事：Ctrl+Cでプログラムが止まるまでをLinuxカーネルのソースで追う

Zennのトレンド記事では、キーボードの「Ctrl+C」を押してからプログラムが実際に終了するまでの過程を、Linuxカーネルのソースコードを追いながら詳細に解説した。Ctrl+Cを押すとキーボードから0x03という1バイトの制御文字が送信され、tty内のラインディシプリン層がこれをシグナルへ変換する。カーネルは個別プロセスではなくフォアグラウンドプロセスグループ全体にシグナルを送るため、パイプで接続された複数コマンドがまとめて終了する。シグナルは即座には効かず、いったん「pending（保留）」として記録され、プロセスがカーネルモードからユーザーモードへ戻る直前に実際の処理が行われる。プログラムがシグナルハンドラを登録していない場合は既定動作として終了が実行され、この判定は送信時点で確定する。シェルは子プロセスがシグナルで終了したことを検出すると「128 + シグナル番号」で終了ステータスを計算し、SIGINT（番号2）の場合は128+2=130という馴染み深い値になる。

詳細は [Ctrl+C でプログラムが止まる仕組みを調べた](https://zenn.dev/wakame_atsushi/articles/05a74885eb963d) を参照。

## Zenn注目記事：RTX 5090でMoE推論エンジンFreeTokenを検証、真価はVRAM超のモデル実行

Zennのトレンド記事では、RTX 5090（32GB VRAM）と128GB RAMを用いてMoE推論エンジンFreeToken 0.1.2を検証した結果が報告された。VRAMに収まる35Bモデル（Ornith 1.5）では、llama.cppの単発296.4 tok/sやvLLMの16並列合計1,852.4 tok/sに対し、FreeTokenは単発196.9 tok/sと中間的な性能にとどまった。これはモデル全体がVRAMに収まるにもかかわらず、FreeTokenがexpertをホストRAMに置きPCIe経由で転送するコストが利点を上回るためだという。状況が逆転するのは65GB以上のMoEモデルで、gpt-oss-120b（65.2GB）では単発127.1 tok/sを記録し、全4608expertのうち約40%をGPU常駐キャッシュに保持することで、VRAMに収まらないモデルを実用速度で動作させることに成功した。一方Qwen3.5-122B-A10B（83.5GB）では、GDNの状態キャッシュがVRAM消費を増やしexpert常駐率が14.5%まで低下したことで32.0 tok/sに落ち込んだという。著者は、FreeTokenの価値は推論の高速化ではなく「コンシューマGPUで扱えるモデルサイズの上限を拡大すること」にあると結論づけている。

詳細は [RTX 5090でFreeTokenを試してみた。35Bでは不要、120B級MoEでは話が変わる](https://zenn.dev/holy_fox/articles/53b82eed45f956) を参照。
