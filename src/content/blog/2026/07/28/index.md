---
title: "2026年7月28日 技術ニュースまとめ：Anthropicのオープンウェイト方針からGoの新GC観測、サプライチェーン対策まで"
description: "AnthropicのオープンウェイトモデルへのスタンスやGoogleのDMCA濫用訴訟、Volvo/Eicherのフリート管理システムへの侵入事例など、2026年7月28日の注目トピックをまとめました。"
pubDate: 2026-07-28
tags: ["AI", "セキュリティ", "Go", "GitHub", "OSS"]
author: "grasshopper"
---

2026年7月28日は、AI企業のオープンソース戦略や著作権をめぐる訴訟の判断、車両フリート管理システムへの侵入事例など、幅広い分野でニュースが動いた一日だった。特にAnthropicがオープンウェイトモデルに関する立場を公式に表明した点は、AI業界全体の今後の展開に影響を与えそうだ。またセキュリティ分野では大規模フリート管理プラットフォームの脆弱性が報告され、開発者コミュニティではGoのガベージコレクションの挙動やC言語のメモリ安全化に関する技術記事が注目を集めた。GitHubからはCopilotのアーキテクチャ設計思想やDependabotの新機能に関する発表もあった。

## Anthropic、オープンウェイトモデルに対する見解を表明

Anthropicが自社のブログで、オープンウェイト（重み公開）モデルに対する立場を明文化した。AI企業各社がクローズドモデルとオープンモデルの間で戦略を分けるなか、安全性とアクセシビリティのバランスをどう取るかについての考え方を示した内容となっている。モデルの重みを公開することの利点とリスクを整理しつつ、責任あるAI開発における同社の姿勢を明確にした点が注目される。今後の同社のモデル提供方針や、業界内でのオープン/クローズド論争にも影響を与える可能性がある。

詳細は [Our position on open-weights models](https://www.anthropic.com/news/position-open-weights-models) を参照。

## 米地裁、GoogleのDMCA濫用主張を退ける判断

Googleがスクレイピングを行う第三者に対しDMCA（デジタルミレニアム著作権法）を根拠に差し止めを試みていた件で、裁判所がその主張を退ける判断を下した。著作権法を競合排除の手段として利用しようとする動きに対し、司法がブレーキをかけた形だ。ウェブスクレイピングの合法性やプラットフォーマーによる法的手段の濫用について、今後の判例形成に影響を与える可能性がある事案として注目されている。

詳細は [Judge Rejects Google's Attempt to DMCA Its Way Out of Being Scraped](https://www.techdirt.com/2026/07/27/judge-rejects-googles-attempt-to-dmca-its-way-out-of-being-scraped/) を参照。

## Volvo/Eicherのフリート管理プラットフォームに深刻な脆弱性

セキュリティ研究者が、Volvo・Eicherグループの商用車フリート管理プラットフォームに存在した脆弱性を報告した。認証や権限管理の不備を突くことで、本来アクセスできないはずの全ユーザー・全車両の情報や制御機能にアクセスできる状態だったという。IoT化が進む商用車業界において、バックエンドAPIの権限設計がいかに重要かを改めて示す事例であり、フリート管理システムを持つ他社にとっても教訓となる内容だ。

詳細は [Exploiting Volvo/Eicher's fleet platform to gain control over all users/vehicles](https://eaton-works.com/2026/07/27/my-eicher-hack/) を参照。

## GoのGC観測から見る新旧ガベージコレクタの違い

Go言語の新しいガベージコレクタがヒープメモリをどのように扱うかを、可視化ツールを用いて観測した技術記事が話題になった。従来のGCと新GCでメモリの走査パターンやレイテンシ特性がどう異なるかを実際のグラフとともに解説しており、ランタイム内部の挙動を理解する上で参考になる内容となっている。パフォーマンスチューニングやレイテンシ要件の厳しいシステムを開発するGoエンジニアにとって有用な知見が詰まっている。

詳細は [Watching Go's new garbage collector move through the heap](https://theconsensus.dev/p/2026/07/19/observing-gos-garbage-collector-old-and-new.html) を参照。

## セキュリティ同人誌「Paged Out #9」が公開

セキュリティ・リバースエンジニアリング分野で人気の同人誌「Paged Out!」の第9号がPDFで無料公開された。各号ともに1ページ完結の技術コラムを多数の執筆者が持ち寄る形式で構成されており、エクスプロイト開発やマルウェア解析、低レイヤプログラミングなど幅広いテーマを扱っている。無料かつ実践的な内容が多く、セキュリティ分野の学習資料として引き続き高い人気を誇る。

詳細は [Paged Out #9 [pdf]](https://pagedout.institute/download/PagedOut_009.pdf) を参照。

## ReactからHtmxへの移行事例が再浮上

あるプロジェクトがReact.jsをコードベースから排除し、UIのインタラクティブ性をHtmxで実現した事例が改めて注目を集めている。SPAフレームワークの複雑なビルドチェーンやクライアント状態管理から離れ、サーバーサイドレンダリング中心のシンプルな構成に回帰した経緯が詳しく述べられており、フロントエンドの「肥大化」に疑問を持つ開発者の間で議論を呼んでいる。

詳細は [Removing React.js from the codebase and adapting Htmx for UI interactivity (2023)](https://misago-project.org/t/removing-reactjs-from-the-codebase-and-adapting-htmx-for-ui-interactivity/1267/) を参照。

## Zenn: Opus 5時代のプロンプト設計、「検証して」は逆効果に

Zennでは、Anthropicの最新モデル「Opus 5」に対する従来型プロンプトが逆に性能を下げてしまうケースがあるとする分析記事がトレンド入りした。公式のプロンプトガイドを読み解きながら、「検証して」といった従来定番だった指示を削り、「簡潔に」という指示を加えることで応答品質が改善するという実験結果を紹介している。モデルの世代交代に伴いプロンプトエンジニアリングのベストプラクティスも更新が必要であることを示す内容だ。

詳細は [Opus 5では今までのプロンプトが逆効果に。「検証して」を消して「簡潔に」と書くべし。公式プロンプトガイドを読み解く](https://zenn.dev/little_hand_s/articles/72646a09f49d2a) を参照。

## Zenn: Rustに書き直さずCをメモリ安全にする「Fil-C」を試す

C言語のコードをRustへ移植することなくメモリ安全性を高める処理系「Fil-C」を実際に試したレポートがZennで公開された。既存のCコードベースを大幅に書き換えることなく、境界チェックなどの安全機構を後付けできる点が特徴で、レガシーなCプロジェクトを抱える現場にとって現実的な選択肢となりうるかを検証している。メモリ安全性言語への全面移行が難しい大規模プロジェクトにとって参考になる内容だ。

詳細は [Rust に書き直さなくても C 言語をメモリ安全にできる Fil-C を試した](https://zenn.dev/mattn/articles/cace8c5a00b9cc) を参照。

## GitHub Blog: エージェント型コーディングは「ハーネス」がすべて

GitHub Blogでは、AIコーディングエージェントの性能を左右する要因は基盤モデルそのものより、ツール群やコンテキスト管理を含む「ハーネス」の設計であるとする記事が公開された。Copilotの開発チームが得た知見をもとに、エージェントに何をどう見せるか、どのようなツールを与えるかといった設計判断がタスク成功率に直結すると論じている。AIエージェントを自社プロダクトに組み込む開発者にとって示唆に富む内容だ。

詳細は [The harness is all you need (mostly)](https://github.blog/ai-and-ml/github-copilot/the-harness-is-all-you-need-mostly/) を参照。

## GitHub Blog: Dependabotに「クールダウン」期間を導入

GitHubは依存関係の自動更新ツールDependabotに、新バージョンのリリース直後にすぐアップデートを提案せず一定期間待機する「クールダウン」機能を導入したと発表した。サプライチェーン攻撃では、パッケージの乗っ取り直後に悪意あるバージョンが公開され、自動更新ツール経由で拡散するケースが多いため、リリース直後の数日〜数週間を待つことでリスクを低減する狙いがある。エコシステム全体のセキュリティ向上に寄与する取り組みとして評価されている。

詳細は [The case for a cooldown: Why Dependabot now waits before issuing version updates](https://github.blog/security/supply-chain-security/the-case-for-a-cooldown-why-dependabot-now-waits-before-issuing-version-updates/) を参照。
