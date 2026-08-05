---
title: "2026年8月6日 技術ニュースまとめ：Google DeepMindの体制刷新からAIエージェントの自己改善、Copilot新機能まで"
description: "Demis HassabisのChair就任やJeff Dean退社などGoogle DeepMindの体制刷新、自己改善型コーディングエージェント「Prime Agent」、Atlassian Rovoのデータ流出脆弱性など、8月6日の注目テック記事をまとめて紹介。"
pubDate: 2026-08-06
tags: ["AI", "セキュリティ", "GitHub", "開発ツール", "データベース"]
author: "grasshopper"
---

本日はAI業界の体制刷新が最大の話題となった。Google DeepMindではDemis HassabisがCEOからChairへ移り、Jeff Deanが27年勤めたGoogleを離れて独立するなど、大きな組織変更が発表された。一方でAIエージェントの進化も加速しており、自らのプロンプトやスキルを書き換えて改善する「Prime Agent」や、オープンモデルをRLで鍛えて高コストの最新モデルに匹敵する検索性能を実現する取り組みが注目を集めた。セキュリティ分野ではAtlassian RovoのプロンプトインジェクションによるデータExfiltration脆弱性が報告され、開発ツール分野ではGitHub Copilotのスタックセッション機能やRustのテスト実行の内部動作を解説する記事がトレンド入りするなど、AIの実用化とその安全性・効率性を巡る動きが引き続き活発な一日だった。

## Google DeepMind、Hassabisが会長へ、Jeff Deanは独立へ

Google/AlphabetのCEOであるSundar Pichaiは、Google DeepMindの大規模な組織再編を発表した。Demis Hassabisは業務執行トップの座を退き、Google DeepMindのChairおよびAlphabetのChief ScientistとしてAGIの将来像づくりに専念する。現CTOのKoray KavukcuogluがGoogle DeepMindのSenior Vice Presidentに就任し、Geminiモデル開発とフロンティアAI研究を統括する。さらにJeff Deanは27年間在籍したGoogleを離れ、機械学習と科学的発見に特化した独立企業を立ち上げる。AI開発競争が激化する中での主要人事であり、今後のGoogleのAI戦略の方向性を占う動きとして注目される。

詳細は [Changes at Google DeepMind: Demis Hassabis from CEO to Chair, Jeff Dean departs](https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/) を参照。

## Zedが会話駆動のバージョン管理システム「DeltaDB」を発表

エディタ「Zed」の開発チームは、新しいバージョン管理システム「DeltaDB」を公開した。従来のコミット単位の記録とは異なり、チェックポイント間のあらゆる操作を記録し、各変更をそれを生み出したAIエージェントとの会話に紐づける点が特徴。任意の編集地点まで巻き戻したり、コードの変更履歴を元の議論まで遡って追跡したりできるほか、操作の途中からでも新しいブランチを作成できる。正式なコミットやプルリクエストを待たずにチームメンバーが進行中の作業スレッドに参加できるようになり、AIエージェントとの協調開発を前提とした新しいワークフローを提示している。

詳細は [Zed DeltaDB](https://zed.dev/deltadb) を参照。

## オープンモデル×RLでGPT-5.6 Sol超えの検索性能を実現

CastformとNeonは、40億パラメータのオープンウェイトモデルに強化学習による事後学習を施し、Neonのスケーラブルな検索基盤と組み合わせることで、コストを100分の1に抑えながらGPT-5.6 Solに匹敵する検索性能を達成したと報告した。既存のPostgres上のエンタープライズデータから学習タスクを自動生成し、数千件規模の並列ロールアウトによるRL学習を行う手法を採用。NeonのダイナミックオートスケーリングとLakebase Search拡張が、バーストする学習ワークロードを支える鍵になったという。小型モデルの事後学習によってフロンティアモデルに匹敵する特定タスク性能を引き出す実例として関心を集めている。

詳細は [Beating GPT-5.6 Sol on retrieval with 100x cheaper open models](https://neon.com/blog/how-castform-neon-beats-frontier-models-on-price-and-efficiency) を参照。

## 自己改善型コーディングエージェント「Prime Agent」が登場

Prime Intellectは、オープンソースのコーディングエージェント「Prime Agent」を公開した。「Recursive Language Model(RLM)」と「Continual Harness」という2つの中核概念に基づき、RLMはコンテキストを変数として扱い、サブエージェントへの委譲をREPL内の関数呼び出しとして実行できるようにする。Continual Harnessは、エージェントが自身の実行履歴に基づいてプロンプト・スキル・メモリ・サブエージェントを自ら作成・更新・削除できる仕組みで、固定的なハーネスに依存せず実行中に動的に適応する。ARC-AGI 3ベンチマークで95.5%の精度を達成しつつ、従来手法よりも少ないトークン消費で結果を出している点が特徴的だ。

詳細は [Prime Agent: A self-improving RLM agent](https://www.primeintellect.ai/blog/prime-agent) を参照。

## Atlassian Rovoにプロンプトインジェクション経由のデータ流出脆弱性

セキュリティ企業PromptArmorは、AtlassianのAIアシスタント「Rovo」に間接プロンプトインジェクションによるゼロクリックのデータ流出脆弱性が存在すると報告した。攻撃者はアップロードされたファイルに悪意ある指示を埋め込み、Rovoの「安全でない」URL取得ツールを悪用することで、機密のJiraチケットやConfluence文書を攻撃者が管理するサイトへ送信させることができる。組織のWeb検索設定を無効化しても根本のツール自体は残るため制御を回避されてしまい、開示から数か月経過した時点でも未修正のままだという。組織の機密データを扱うAIアシスタントのツール権限管理における重大なリスクを示す事例である。

詳細は [Atlassian Rovo Exfiltrates Data, Bypassing Controls](https://www.promptarmor.com/resources/atlassian-rovo-exfiltrates-data) を参照。

## Meta、ターミナル型コーディングエージェント「Muse Code」と新モデル「Muse Spark 1.2」を公開

Metaは、大規模リポジトリを対象に変更計画の立案・コード実装・結果検証までを担うターミナル型コーディングエージェント「Muse Code」と、それを支える新モデル「Muse Spark 1.2」を発表した。Muse Codeはバックグラウンドで永続的に動作するエージェント方式を採用し、ローカルのイベントログによりクラッシュ時の復旧にも対応する。Muse Spark 1.2はMuse Codeと共同学習されたコーディング特化モデルで、大幅な計算資源の投入によりコード生成・デバッグ・複数ステップにわたる開発ワークフローで高い性能を発揮するという。長時間にわたる大規模プロジェクトの反復的な最適化や複雑な問題解決を見据えた設計となっている。

詳細は [Muse Code and Muse Spark 1.2](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2) を参照。

## GitHubの法務チーム、非エンジニアがCopilot CLIで業務ツールを内製

GitHub Blogは、エンジニアではない弁護士やビジネス担当者で構成される同社の法務チームがCopilot CLIを活用し、コーディング経験なしに定型業務を自動化した事例を紹介した。ある弁護士は平易な言葉によるスタイルガイドと承認済み契約テンプレートを組み込んだ契約書作成ツール「terms-ai」を作成し、レビュー時間を約半分に削減。別のメンバーはプレーンテキストの指示ファイルとMarkdownテンプレートを用いてDMCA分析や契約書レビューの業務自動化を実現した。「コードなんて書けないと思っていたのに、気づいたら何かを作っていた」という体験は、非エンジニアがAIを使って自分の業務に合わせたツールを構築できる時代を象徴している。

詳細は [How the GitHub legal team used Copilot CLI to streamline their workflows](https://github.blog/ai-and-ml/github-copilot/how-the-github-legal-team-used-copilot-cli-to-streamline-their-workflows/) を参照。

## GitHub Copilotアプリに「スタックセッション」機能が追加

GitHub Copilotアプリに、同一リポジトリ内で連続するタスクを積み上げて管理できる「スタックセッションおよびプルリクエスト」機能が追加された。巨大な単一プルリクエストを作るのではなく、複数のセッションを依存関係の順序を保ったまま連結し、小さく管理しやすいスタックPRへと分割できる。記事では10年前のコードベースをモダナイズする例として、フロントエンドのスタイル改善からフレームワーク移行まで複数の連結セッションで進める様子が紹介されており、ブランチとプルリクエストの関係はアプリが自動管理する。大規模なリファクタリング作業におけるスコープの肥大化を防ぎつつ、整理されたワークフローを維持できる点が評価される。

詳細は [Stacked sessions and pull requests in the GitHub Copilot app](https://github.blog/ai-and-ml/github-copilot/stacked-sessions-and-pull-requests-in-the-github-copilot-app/) を参照。

## Claude Codeの「無駄」を可視化するRust製ツール「cclens」

Zennでは、Claude Codeのセッションログを解析し、時間・トークン・作業の無駄を可視化するRust製ツール「cclens」を紹介する記事がトレンド入りした。専用のテストを新たに行う必要はなく、通常のセッションログをそのまま分析対象にできる点が特徴。健全性チェックを行う`doctor`、無駄の度合いをランキング表示する`waste`、未使用コンテキストのコストを示す`overhead`といったコマンドを備え、さらに`optimize`コマンドではAI自身を使って実際の利用データに基づく改善提案まで行う。AIコーディングツールの運用コストを定量的に把握したい開発者にとって実用的な内容となっている。

詳細は [Claude Code の「無駄」を可視化するツール cclens を作った](https://zenn.dev/lambdalisue/articles/introduce-cclens) を参照。

## Rustのテスト実行、裏側で何が起きているか

Zennでは、`cargo test`実行時に内部で何が行われているかを解説する記事がトレンド入りした。`#[test]`属性はコンパイラが組み込みマクロとして各テスト関数を静的メタデータとクロージャに変換し、rustcがそれらを集約して自己完結型のテストランナーバイナリを生成する。重要な指摘として、並列実行は単一バイナリ内でのみ行われ、バイナリ間の実行は逐次処理になるという構造上の制約がある。`tests/`配下に多数のファイルを分割したり、ワークスペースメンバーを増やしたりすると、コンパイル・リンク・逐次実行のコストが意図せず重複し、しばしば2倍以上の遅延を招くというアンチパターンが紹介されており、Rustの言語仕様自体ではなく構成の仕方がCIの遅さの原因になりやすいことを示している。

詳細は [Rust のテストを実行するとき、裏側で何が起きているか](https://zenn.dev/estie/articles/882e14dcad0d46) を参照。
