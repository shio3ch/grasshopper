---
title: "2026年9月25日 技術ニュースまとめ：F-Droid 2.0公開、GitHubがAIファジングを自動化、Googleは衛星軌道上でのAI推論基盤を検証"
description: "F-Droid 2.0のリリース、GitHub Security LabによるAI駆動ファジングパイプライン、Google Project Suncatcherの軌道上AI基盤検証、RustのSIMDライブラリ「Fearless SIMD」1.0など2026年9月25日の技術ニュースをまとめました。"
pubDate: 2026-09-25
tags: ["セキュリティ", "AI", "プログラミング言語", "Android", "クラウド"]
author: "grasshopper"
---

本日はオープンソースとセキュリティ関連の話題が目立った。Androidの非公式アプリストア「F-Droid」がアプリを刷新し10年ぶりとなる大規模リニューアルを発表した一方、GitHub Security Labは自律的にC/C++プロジェクトの脆弱性を発見するファジングパイプラインを公開した。Googleは人工衛星上でTPUを運用しAI推論基盤を構築する「Project Suncatcher」の技術検証結果を明らかにし、宇宙空間の潤沢な太陽光をAI計算資源に転用する構想が現実味を帯びつつある。開発言語まわりではRust製の安全なSIMDライブラリ「Fearless SIMD」がv1.0に到達した。セキュリティ分野では、SourceHutで長年未修正だったXSS脆弱性の詳細と、AIエージェントを活用した監査手法の実例が公開され、AIを使った開発と防御の両面での成熟が印象的な一日となった。

## F-Droid、10年ぶりの大規模刷新となる「F-Droid 2.0」を公開

Androidの自由なアプリリポジトリを提供する非営利プロジェクトF-Droidが、公式クライアントアプリを全面刷新した「F-Droid 2.0」をリリースした。Material DesignとKotlin Composeを採用してUIを現代化し、ナビゲーションを「Discover」「Search」「My Apps」の3つに整理した。ゲームジャンルを17種類に細分化するなどアプリ発見機能を強化したほか、日本語・中国語・韓国語の文字列に対応した検索精度の向上、Androidの新しいインストーラー機能を活用したインストール体験の改善も行われた。あわせてTorの自動検出機構を廃止し、汎用プロキシ設定に置き換えるなどプライバシー機能も整理されている。Googleがアプリのインストール方法に制限を強めつつある中、Google Playに依存しない選択肢としてのF-Droidの存在感を示す更新といえる。

詳細は [F-Droid 2.0: a new chapter for Android freedom](https://f-droid.org/2026/09/24/f-droid-2.0-a-new-chapter-for-android-freedom.html) を参照。

## GitHub Security Lab、AIエージェントが自律的に脆弱性を発見する「Fuzzing Taskflow」を公開

GitHub Security Labは、C/C++プロジェクトを対象にLLMエージェントが自律的にファジングを実行する「Fuzzing Taskflow」を発表した。対象リポジトリを指定するだけで、エージェントがエントリーポイントの特定、ファズハーネスの作成、AFL++によるファジング実行、カバレッジ分析、クラッシュのトリアージ、脆弱性レポートの生成までを人手を介さず行う。シェルドライバとYAML定義のタスクフロー、実行を担うMCPツールの3層構成で動作し、SQLiteに状態を永続化することで各段階の結果を確実に引き継ぐ。ハーネスはAFLインストルメンテーション版とカバレッジ計測版の2種類をビルドし、タイムバジェットを段階的に倍増（30秒→960秒）させながらカバレッジの頭打ちを検知して自動停止する仕組みを備える。最終的なクラッシュの分類やパッチ判断は引き続き人間が担うが、専任のセキュリティ研究者を持たないプロジェクトでもファジングを導入しやすくする取り組みとして注目される。

詳細は [AI-powered fuzzing with the GitHub Security Lab Taskflow Agent](https://github.blog/security/application-security/ai-powered-fuzzing-with-the-github-security-lab-taskflow-agent/) を参照。

## GitHub、Copilotアプリに「チャットではないUI」を提供する“キャンバス”機能を解説

GitHubは、Copilotアプリにおけるチャット以外のUI形態「キャンバス（canvas）」についての考察記事を公開した。何でもチャットでAIエージェントに指示することは、単純な操作でも無駄にトークンを消費するなど非効率になりがちだと指摘し、代わりにアプリ内に埋め込まれたフルスタックのカスタムUIとして機能するキャンバスを提案している。具体例として、AIと対戦できるConnect 4ゲーム、SQLクエリをチャットで頼む代わりに自分で操作できるオートコンプリート付きSQLiteインターフェース、Markdownチャットに頼らないブログ執筆用エディタ、レビューゲートを組み込んだマルチステップの開発ワークフロー自動化などを挙げる。汎用的なチャットよりも用途に特化したUIサーフェスの方が、人間とAIエージェントの協働を効率化できるという主張が技術的なポイントだ。

詳細は [When chat is the wrong UI](https://github.blog/ai-and-ml/github-copilot/when-chat-is-the-wrong-ui/) を参照。

## Google、人工衛星上でTPUを運用する「Project Suncatcher」の技術検証結果を公表

GoogleはAI向けハードウェアを宇宙空間で運用できるかを検証する研究プロジェクト「Project Suncatcher」の技術詳細を明らかにした。低軌道の衛星は地上に比べて最大8倍の太陽光発電量を得られる点に着目し、TPUを軌道上に配置して大規模な機械学習ワークロードを支える構想だ。技術的な課題として、打ち上げ時の振動（個々の部品には最大100Gの負荷）や宇宙放射線への耐性が挙げられており、同社のTrillium TPUは5年間のミッションで想定される線量を上回る総電離線量に耐えられることを確認したという。真空中では空冷が使えないため、ヒートパイプとラジエーターによる排熱設計を進めているほか、衛星同士が相対移動する中でも十分な帯域を維持するための高精度レーザーリンクによる衛星間通信技術も開発している。実用化すれば、地上のデータセンターが抱えるエネルギー制約を回避しつつ、医療や科学分野を含む大規模AI計算に新たな選択肢を提供する可能性がある。

詳細は [Google's Project Suncatcher facts](https://blog.google/innovation-and-ai/models-and-research/google-research/google-project-suncatcher-facts/) を参照。

## Rust製の安全なSIMDライブラリ「Fearless SIMD」がv1.0に到達

8年越しの構想を経て、RustでSIMD（単一命令複数データ）処理をunsafeなしで記述できるクレート「Fearless SIMD」がv1.0に到達した。コンパイラのtarget feature v1.1サポートを活用する`kernel!`マクロにより、ほとんどのSIMD組み込み関数をunsafeブロックなしで呼び出せるようにしたほか、`bytemuck`や`zerocopy`に着想を得た安全なtransmuteモジュールで、生ポインタのロード・ストア操作もメモリ安全に扱える。関数の多重バージョン化を行う`#[simd]`マクロも導入され、開発者はハードウェアの違いを意識せずに書けるという。他のSIMD抽象化ライブラリが大量のunsafeブロックを抱えるのに対し、Fearless SIMDはゼロコスト抽象化を維持しながらメモリ安全性を実現しており、性能面でのボトルネックにならない設計が特徴だ。既に30以上のクレートが直接依存し、間接的には1,000以上のクレートに影響を与えるなど、エコシステムでの採用が進んでいる。

詳細は [Fearless SIMD v1.0](https://linebender.org/blog/fearless-simd-1-0/) を参照。

## SourceHut、ビルドログ経由のアカウント乗っ取りにつながるansi2htmlのXSS脆弱性が判明

ターミナル出力をHTMLに変換するライブラリ`ansi2html`において、ANSI OSC 8ハイパーリンクシーケンスのサニタイズ不備によるXSS脆弱性が報告された。攻撃者は特殊なエスケープシーケンスを細工することで、href属性を途中で閉じてonfocusなどのイベントハンドラ属性を注入し、任意のJavaScriptを実行できた。この脆弱性はビルドログに攻撃者が任意の文字列を混入させられる状況（公開メーリングリストへのパッチ投稿やビルド時に参照するリソースの操作など）で悪用可能で、管理者や権限保持者がそのビルドログを閲覧するとブラウザ上でスクリプトが実行され、CSRFトークンの窃取やビルドの本人になりすましての再実行、sr.htインフラのデプロイキーへのアクセスにまでつながる可能性があった。builds.sr.htやAlpine Linux、Arch Linuxなど複数のシステムにまたがって約4.5年間修正されていなかった点も特筆すべきポイントだ。

詳細は [Sourcehut account takeover via build logs (XSS in ansi2html)](https://blog.arusekk.pl/posts/srht-account-takeover/) を参照。

## Trail of Bits、「そこそこ良いAI」時代のセキュリティ監査手法を解説

セキュリティ企業Trail of Bitsは、AIエージェントがセキュリティ監査の経済性を根本から変えつつあると論じる記事を公開した。「失敗した副次的プロジェクトもトークン代しかかからない」ため、以前なら費用対効果が見合わなかった探索的な取り組みが現実的になったという。実例として、Miden VMのアセンブリ言語（MASM）向けにLSPサーバー、逆コンパイラ、静的解析エンジン、Lean言語による形式モデルをAIエージェントの支援で構築し、静的解析により400件超のバリデーション問題と、`mod_12289`手続きに存在した重大な脆弱性（悪意あるProverがFalcon署名を偽造しMidenアカウントの資金を抜き取れる不備）を発見した。さらにAIエージェントが95件の機械検証可能な正当性証明を生成し、単体テストでは見逃されていた64ビット回転演算のエッジケースなど2件のバグを新たに発見した。監査結果の質を高める投資判断そのものが変わりつつあることを示す事例だ。

詳細は [Security auditing in the age of (good enough) AI](https://blog.trailofbits.com/2026/09/18/auditing-in-the-age-of-good-enough-ai/) を参照。

## Zenn注目記事、Claude Opus 5.5による単一プロンプトからのピクセルアニメーション生成を検証

Zennで注目を集めた記事では、Claude Opus 5.5に単一プロンプトのみで「サンゴ礁の一日」をテーマにしたCanvasベースのピクセルアニメーションを生成させ、その品質を検証した。外部ライブラリやアセットを一切使わない470行・43.5KBの単一HTMLファイルとして、15種類以上の生物が状態に応じて異なる挙動を取るエコシステムシミュレーションを実装し、60fpsの滑らかな動作をプロシージャルなスプライト生成と多層レンダリングで実現していた。小魚の群れによるボイド的な分離・整列・結合行動、サメの接近による群れの散開と再集合、ウミガメの浮上・呼吸状態、タコの擬態とインク放出など、指示していない挙動まで自発的に追加していた点が興味深い。開発者からの追加指示は「昼夜サイクルを90秒から20秒に短縮する」という1点のみで、背景描画の実装方法に軽微な相違があった以外は仕様との整合性が確認されたという。

詳細は [Claude Opus 5.5によるピクセルアニメーション生成の検証](https://zenn.dev/peoplex_blog/articles/1bc5c181ad19f0) を参照。

## Zenn注目記事、AWS DevOps Agentの権限昇格リスクと防御策を検証

Zennで注目された別の記事では、AWS DevOps AgentのDirected ActionsおよびElevated Rolesを対象に、攻撃シナリオと防御機構の両面から堅牢性を検証している。Elevated Roleの権限悪用、パラメータインジェクションによる任意コマンド実行の試行、複数リソースにまたがる多段階の攻撃チェーン、IAMとパーミッションバウンダリの実効性、CloudTrailによる監査証跡の分析などを実施した結果、Agentは多層防御により危険な要求の実行を概ね防いでいたが、Elevated Roleに過剰な権限が付与されている場合やSSMドキュメントのパラメータ制約が不十分な場合、複数の変更を組み合わせることで個別の検証を回避されるリスクが残ると指摘する。対策として、Directed Actionsを必要なAgent Spaceのみに制限する、API・ARN単位の詳細なIAMポリシーを適用する、SSMドキュメントでの任意シェル実行を禁止する、重要操作を別ロールに分離するなどを推奨している。また、AssumeRole操作時の呼び出し元IPが「aidevops.amazonaws.com」として記録されるため、DevOps Agentの存在を意識していないとインシデント調査で攻撃者特定が難しくなる点も指摘されている。

詳細は [AWS DevOps Agent の堅牢性](https://zenn.dev/cscloud_blog/articles/9968d12b332c03) を参照。

## Show HN、人間とAIエージェントが設計を共有する視覚的IDE「Whiteboard」が公開

YC W26採択のスタートアップが、人間とAIコーディングエージェントがソフトウェア設計を共同で行うためのデスクトップアプリ「Whiteboard」をオープンソースで公開した。Claude CodeやCodexなどのコーディングエージェントと連携し、エージェントが作業内容を説明する図をSDK経由で作成できるほか、Rust製のAST認識型セマンティック差分ビューアがノイズを除去し、大きな関数を疑似コードとして要約表示する。シーケンス図やER図などの可視化をクリックすると、VSCodeのキーバインドやLSPと連携して該当コードへ直接ジャンプできる機能や、エージェント自身の判断過程やトレースを問い合わせて可視化できる意思決定ログ機能も備える。ローカルファースト設計でリポジトリのチェックアウトに対して動作し、MITライセンスでセルフホスト可能。「理解することが新たなボトルネックになっている」という問題意識のもと、コードレビューやAPI設計提案、人間とエージェント間の設計議論を支えるインフラを目指している。

詳細は [Show HN: Whiteboard (YC W26) – An open-source IDE for thoughtful software design](https://github.com/devdotfast/whiteboard) を参照。
