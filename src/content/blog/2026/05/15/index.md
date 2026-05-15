---
title: "2026-05-15 技術ニュースまとめ"
description: "Pixel 10のゼロクリック脆弱性、ZulipのOSS財団設立、カリフォルニア州のオンラインゲーム保護法案、GitHub Copilotのアクセシビリティエージェント、WaymoのOTA更新など本日の主要技術ニュースを解説。"
pubDate: 2026-05-15
tags: ["セキュリティ", "AI", "オープンソース", "GitHub", "自動運転", "法律"]
author: "grasshopper"
---

本日の技術ニュースでは、Google Project ZeroによるPixel 10のゼロクリック攻撃チェーンの公開が最大の注目を集めた。オープンソース分野ではZulipが独立財団設立を発表し、長期的な持続可能性を確保しようとしている。カリフォルニア州ではオンラインゲームのサービス終了後も遊べるようにするための法案が重要な関門を通過した。GitHubはアクセシビリティエージェントの取り組みとIssues画面の大幅なパフォーマンス改善を公開。Zennでは AIを活用した開発ワークフロー最適化に関する実践的な記事が多くの注目を集めている。

## Google Project Zero: Pixel 10 に対するゼロクリック攻撃チェーンを公開

Google Project Zeroが、Android搭載のPixel 10に対するゼロクリック（ユーザー操作不要）のエクスプロイトチェーンを発表した。攻撃者がデバイスに物理的にも論理的にも特別なアクションを要求せず、リモートから完全な制御を得られる可能性があることを示している。このような詳細な公開はベンダーへのパッチ適用を促す目的があり、モバイルセキュリティの研究において重要な節目となる。ベースバンドやカーネル、ユーザースペースを横断する複合的な脆弱性の悪用技術が詳細に記述されており、セキュリティエンジニアにとって必読の内容だ。

詳細は [A 0-click exploit chain for the Pixel 10](https://projectzero.google/2026/05/pixel-10-exploit.html) を参照。

## Zulip Foundation 設立発表

オープンソースのチームチャットツール Zulip が、独立した非営利財団「Zulip Foundation」の設立を発表した。Slack や Discord に依存しない、オープンでプライバシーに配慮したコミュニケーション基盤の開発を継続的に支援する体制を整える狙いがある。企業スポンサーへの依存度を下げ、コミュニティ主導の開発モデルを強化することで、オープンソースプロジェクトの長期的な持続可能性を確保しようとする取り組みとして注目される。スレッド型の議論に特化したUIは、大規模なリモートチームから高い評価を受けており、財団化によって今後の開発加速が期待される。

詳細は [The Zulip Foundation](https://blog.zulip.com/2026/05/15/announcing-zulip-foundation/) を参照。

## カリフォルニア州、オンラインゲームのサービス終了後も遊べる法案が前進

カリフォルニア州議会で審議中の法案が重要な委員会を通過した。この法案は、オンラインゲームのサービス終了時に、開発・販売会社がオフラインモードへのパッチ提供またはゲームの払い戻しを義務付けるものだ。いわゆる「ゲームの所有権」問題に法的な解決策を与える試みであり、デジタルコンテンツの購入者保護の観点から業界全体に大きな影響を与える可能性がある。施行されれば、ライブサービス型ゲームのビジネスモデルに対して根本的な見直しを迫ることになりかねない。

詳細は [California bill would require patches or refunds when online games shut down](https://arstechnica.com/gaming/2026/05/bill-to-keep-online-games-playable-clears-key-hurdle-in-california/) を参照。

## GitHub Copilot: 汎用アクセシビリティエージェントの構築と学び

GitHub が、GitHub Copilot を活用した汎用アクセシビリティエージェントの開発経験を公式ブログで公開した。スクリーンリーダーや代替入力デバイスを使用するユーザー向けに、UIの自動操作・補完を行うエージェントを構築した際の知見が詳細に記述されている。LLM をエージェントとして活用する際の信頼性やエラーハンドリング、ユーザーの意図解釈といった実践的な課題が豊富に含まれており、AIエージェント開発全般に応用できる内容だ。アクセシビリティとAIの交差点における先進的な取り組みとして注目されている。

詳細は [Building a general-purpose accessibility agent—and what we learned in the process](https://github.blog/ai-and-ml/github-copilot/building-a-general-purpose-accessibility-agent-and-what-we-learned-in-the-process/) を参照。

## GitHub Issues のナビゲーションパフォーマンスを大幅改善

GitHub エンジニアリングブログが、Issues 画面のナビゲーション遅延を劇的に短縮した取り組みの詳細を公開した。Turbo Drive（Hotwire）を活用したページ遷移のSPA化、キャッシュ戦略の見直し、クリティカルパスのレンダリング最適化などが組み合わさって、体感速度が大幅に向上したという。大規模な Rails アプリケーションにおけるフロントエンドパフォーマンス最適化の実例として、特にモノリシックな Web アプリを運用する開発者にとって参考になる内容だ。

詳細は [From latency to instant: Modernizing GitHub Issues navigation performance](https://github.blog/engineering/architecture-optimization/from-latency-to-instant-modernizing-github-issues-navigation-performance/) を参照。

## Waymo: 大雨後に水溜まりへ進入した3,800台のロボタクシーをOTA更新

自動運転タクシーサービスを展開するWaymoが、ロボタクシー3,800台に対してOTA（無線）ソフトウェア更新を実施したと発表した。きっかけは、車両が停水（standing water）に進入するインシデントが報告されたことで、自律走行システムの降水・水害対応の課題が露わになった。OTA更新で迅速に対応できたことは自動運転技術の運用成熟度を示す一方で、センサーフュージョンや道路状況の判断ロジックにまだ改善余地があることも浮き彫りになった。

詳細は [Waymo updates 3,800 robotaxis after they 'drive into standing water'](https://www.cnbc.com/2026/05/12/waymo-recalls-3800-robotaxis-after-able-drive-into-standing-water.html) を参照。

## 【Zenn】AI開発ハーネスで非エンジニアも開発参加できるようになった話

Zennで大きな注目を集めている記事。AIを活用した開発補助ツール（ハーネス）を徹底的に整備することで、コードレビューやシステム運用の大半が自動化され、エンジニア以外のメンバーも開発フローに参加できるようになった実践事例が詳述されている。CI/CDパイプラインとAIエージェントを組み合わせたワークフロー設計の考え方は、開発生産性向上に取り組むチームへの示唆に富んでいる。

詳細は [AIのハーネスを徹底的に整えたら、レビューもシステム運用も自動化され、非エンジニアも開発に参加できるようになった話](https://zenn.dev/aircloset/articles/d416342f46f16b) を参照。

## 【Zenn】CLAUDE.md / AGENTS.md に追記してコード品質を上げる実践Tips

CLAUDE.md や AGENTS.md に数行の指示を追記するだけで、AIコーディングアシスタントの出力品質が大幅に向上するという実践的なノウハウが紹介されている。命名規則、テスト方針、禁止パターンなどを明示的に記述することで、AIが一貫した高品質なコードを生成しやすくなる。Claude Code や GitHub Copilot、Cursor などを業務利用しているチームであれば、すぐに取り入れられる内容だ。

詳細は [たった数行でコード品質がグッと上がる、CLAUDE.md / AGENTS.md にいつも追記してるやつ](https://zenn.dev/peka2/articles/6dc7d5a87a99dd) を参照。

## 【Zenn】Rust の型システムで実装を自動選択する仕組みを理解する

Rust の型システムを活用し、型を渡すだけで適切な実装が自動的に選ばれる「型ディスパッチ」の仕組みを丁寧に解説した記事。トレイトの特殊化（specialization）や PhantomData、型パラメータを組み合わせることで、実行時のオーバーヘッドなしにポリモーフィズムを実現する手法が示されている。Rust の型システムの深い理解を求める中〜上級者向けのコンテンツとして好評を得ている。

詳細は [Rust で型を渡すだけで実装が選ばれる仕組みを理解する](https://zenn.dev/estie/articles/76bb030f8a9f87) を参照。

## SSD への書き込み最適化: VLDB 2026 論文

国際データベース学会 VLDB 2026 に掲載された論文「How to Write to SSDs」がHacker Newsで話題を集めている。NAND フラッシュの物理特性（書き込み増幅、ウェアレベリング、GCオーバーヘッド）を踏まえた上で、データベースや分散ストレージのI/Oパターンをどのように最適化すべきかが体系的に論じられている。特にLog-structured ストレージや NVMe の特性を生かした書き込み戦略に関する議論は、ストレージ層を扱うエンジニアにとって実践的な参考資料となる。

詳細は [How to Write to SSDs \[pdf\]](https://www.vldb.org/pvldb/vol19/p1469-lee.pdf) を参照。
