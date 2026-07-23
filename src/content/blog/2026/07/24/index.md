---
title: "2026-07-24 技術ニュースまとめ：サプライチェーン対策の進化とAIエージェント開発の実践知"
description: "Dependabotのクールダウン機能導入、Namecheapアカウント乗っ取り事件、Fil-Cによるメモリ安全なC言語、Claude Codeを使ったLoop Engineeringなど、本日の技術トピックをまとめました。"
pubDate: 2026-07-24
tags: ["セキュリティ", "AI", "サプライチェーン", "C言語", "開発ツール"]
author: "grasshopper"
---

本日はソフトウェアサプライチェーンのセキュリティ強化に関する動きが目立った一日でした。GitHubはDependabotに新たな「クールダウン」機能を導入し、悪意あるパッケージ公開への対策を強化しています。一方でNamecheapのアカウント乗っ取り事件は、ドメインレジストラの本人確認プロセスの脆弱性を浮き彫りにしました。AI関連では、Claude Codeを使った自律開発サイクル「Loop Engineering」の実践報告や、コストを抑えたオープンウェイトモデル「Echo」、GitHub Copilotのコードレビュー改善など、AIエージェントを実運用に組み込む知見が多数共有されています。さらに、C言語のメモリ安全化を目指す「Fil-C」やOpenTelemetryのブラウザSDK、分散SNSプロトコルATProtoに関する設計議論など、基盤技術に関する話題も充実していました。

## Dependabotに「クールダウン」機能、サプライチェーン攻撃対策を強化

GitHubはDependabotの依存関係バージョン更新に、デフォルトで3日間の「クールダウン」期間を設ける機能を導入しました。悪意あるコードが新しいリリースに紛れ込み、自動更新ツールを通じて急速に拡散するサプライチェーン攻撃への対策が背景にあります。過去の侵害パッケージを分析した結果、悪意あるコードの多くは公開から数時間以内に発見・削除されており、3日間の猶予があれば大半の高速な攻撃を除外できることが分かったとのことです。なお、このクールダウンはルーティンのバージョン更新のみが対象で、セキュリティアップデートは従来通り即時に適用されます。

詳細は [The case for a cooldown: Why Dependabot now waits before issuing version updates](https://github.blog/security/supply-chain-security/the-case-for-a-cooldown-why-dependabot-now-waits-before-issuing-version-updates/) を参照。

## Namecheapが未検証の第三者にアカウントを引き渡した事件

Hacker Newsで大きな議論を呼んだのが、ドメインレジストラのNamecheapが電話での申告のみを根拠に、あるユーザーのアカウントを未検証の第三者に引き渡したという報告です。投稿者は事前に不正アクセスの試みをサポートチケットで報告していたにもかかわらず、十分な本人確認なしにアカウント制御が第三者へ移されたと主張しています。ドメイン管理はDNSやメールなど多くのシステムの起点となるため、レジストラ側の本人確認プロセスの甘さは連鎖的なセキュリティリスクにつながる点が技術的な論点です。

詳細は [Namecheap Gave My Account to an Unverified Third Party Just Because They Asked](https://news.ycombinator.com/item?id=49028037) を参照。

## Claude Codeを2時間おきに回す「Loop Engineering」の実践

Zennでは、Claude Codeを2時間ごとに自動実行（`/loop 2h /evolve`）し、VS Code向けMarkdown WYSIWYGエディタを継続的に育てる「Loop Engineering」の実践報告が注目を集めました。各サイクルは「実装→テスト→コードレビュー→ドキュメント→コミット→プッシュ」を1機能単位で完結させ、スコープ逸脱を防ぐスキルファイルとROADMAP.md駆動のバックログ管理で運用されています。重要な知見として、AIは機械的な正確性や反復的な実装作業に強みを発揮する一方、デザインの妥当性やUXの微調整は人間が担うべきだとされ、見出しマーカーの視認性やダークモードでの太字表現など、こだわりが必要な判断は著者自身が下しています。mainブランチへの直接コミット禁止や、機能が停滞した際にループを止める仕組みなど、暴走防止のガードレール設計も参考になる内容です。

詳細は [Claude Codeを2時間おきに回してVS Code拡張mdエディタを育てるLoop Engineering実践](https://zenn.dev/green_tea/articles/e39e3726a449c9) を参照。

## DARPAと米空軍、AI操縦のF-16飛行試験を実施

DARPAと米空軍は、AIが操縦するF-16戦闘機の飛行試験を実施したと発表しました。有人機とAI制御システムを組み合わせた自律飛行技術の実証であり、軍事分野におけるAIエージェントの実運用適用が着実に進んでいることを示す事例です。自律飛行の意思決定アルゴリズムや安全性検証の枠組みは、民生分野の自律システム開発にも波及しうる技術的示唆を含んでいます。

詳細は [DARPA, U.S. Air Force fly AI-controlled F-16](https://www.darpa.mil/news/2026/darpa-us-air-force-fly-ai-controlled-f-16) を参照。

## オープンウェイトモデルで低コスト運用を実現する「Echo」

Y Combinator出身のTracerが発表した「Echo」は、複数のオープンウェイトモデルを組み合わせることで、フロンティア級モデルに匹敵する性能を約3分の1のコストで実現するというShow HN投稿です。単一の統合モデルがリサーチ・コーディング・エージェント的タスクなど用途に応じて適応し、OpenAI互換の単一エンドポイントでモード切り替え不要な運用を可能にしている点が特徴です。プロプライエタリモデルに匹敵する精度をオープンウェイト経済性で実現するアプローチとして、コスト最適化を重視する開発者から関心を集めています。

詳細は [Show HN: Echo – Fable-level results at 1/3 the cost using open-weight models](https://echo.tracerml.ai/) を参照。

## GitHub Copilotのコードレビュー、エージェント指示の再設計で約20%のコスト削減

GitHubは、Copilotのコードレビュー機能について「ツールを強化したはずが、かえって品質が落ちた」経験から、エージェントへの指示（プロンプト設計）を人間レビュアーの実際のワークフローに合わせて再構築した事例を公開しました。結果として、レビュー品質を保ちながら約20%のコスト削減を達成したとのことです。ツールの機能追加だけでなく、エージェントに与える指示の構造そのものを見直すことがLLM活用の効果を左右するという実践的な知見が示されています。

詳細は [Better tools made Copilot code review worse. Here's how we actually improved it.](https://github.blog/ai-and-ml/github-copilot/better-tools-made-copilot-code-review-worse-heres-how-we-actually-improved-it/) を参照。

## メモリ安全なC言語を目指す「Fil-C」、Rust不要でメモリ安全性を実現

Filip Pizloが開発する「Fil-C」は、既存のC/C++コードをそのまま活かしながらメモリ安全性を実現するコンパイラです。ポインタに不可視の「InvisiCap」というケーパビリティを付与し、並行ガベージコレクタ「FUGC」と組み合わせることで、Rustの借用チェッカーのようなコンパイル時制約ではなく実行時チェックによってメモリ安全性違反を防ぎます。GCが実際のメモリ解放を「参照するポインタがなくなるまで」遅延させることで、use-after-freeの悪用を実質的に不可能にする仕組みです。Zennの検証記事では、gcc・clang・Rust・Zig・Goとのベンチマーク比較が行われ、ポインタを使わない処理ではオーバーヘッドがほぼ無い一方、配列多用処理では約2.3倍、アロケーション主体の処理では1.1倍程度の性能差にとどまり、複雑なメモリパターンでは並行GCがむしろ有利に働く場合もあると報告されています。

詳細は [Rust に書き直さなくても C 言語をメモリ安全にできる Fil-C を試した](https://zenn.dev/mattn/articles/cace8c5a00b9cc) を参照。

## フロントエンドに広がるOpenTelemetry Browser SDKの現在地

OpenTelemetryのブラウザSDKは2025年末以降、専用リポジトリでの開発が加速し、マルチプラットフォーム対応の枠組みよりも速いペースで進化しているとZennの記事は報告しています。ユーザー操作やCore Web Vitals、パフォーマンス指標をイベントベース・スパンベースの計装で収集できるようになった一方、シンボリケーションやセッションリプレイといった、商用RUM（Real User Monitoring）製品が標準搭載する機能には未対応で、独自のインフラ構築が必要な点が課題として挙げられています。

詳細は [フロントエンドに広がりつつある OpenTelemetry：Browser SDK の現在地](https://zenn.dev/cybozu_frontend/articles/opentelemetry-browser-frontend) を参照。

## ATProto上での分散型サービス構築、公開/非公開データの設計課題

Luke KaniesはBlueskyの基盤プロトコルであるATProto上に、Yelpやgoodreadsのようなレビューサービス群を分散型で構築する試みについて論じています。ATProtoの設計上の問題点として、公開データと非公開データが完全に別システムとして扱われるため、開発者は事実上「2つのアプリケーション」を構築する羽目になると指摘。公開データと非公開データは「本質的には同じもので、権限レベルが異なるだけ」であるにもかかわらず、プロトコルが別々のストレージ・同期機構を要求する点に開発上の摩擦があるとしています。ID層の設計やコミュニティ主導の可能性には期待を示しつつ、プロトコルの思想に逆らう形での開発は大きな負担になると警鐘を鳴らしています。

詳細は [Building on ATProto](https://lukekanies.com/writing/building-on-atproto/) を参照。

## GitHub Sponsors、オープンソースへの累計拠出額が1億ドルを突破

GitHubは、GitHub Sponsorsを通じたオープンソースメンテナーへの累計拠出額が1億ドルに到達したと発表しました。コミュニティによる継続的な支援がこの節目を作り上げたとしており、オープンソースの持続可能性に対する認識が広がっていることを示す事例として紹介されています。メンテナーへの資金還流はエコシステム全体の健全性に直結するため、企業・個人双方からの継続的な支援モデルの定着が今後の焦点となりそうです。

詳細は [$100 million for open source: A milestone built by the community](https://github.blog/open-source/maintainers/100-million-for-open-source-a-milestone-built-by-the-community/) を参照。
