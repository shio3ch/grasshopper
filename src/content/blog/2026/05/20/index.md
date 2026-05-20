---
title: "2026-05-20 技術ニュースまとめ"
description: "GitHub悪意あるVSCode拡張によるリポジトリ侵害、OpenAIモデルが離散幾何学の予想を反証、Qwen3.7-Max登場、Asm.js廃止、SpaceX S-1上場申請など、本日の主要技術ニュースをまとめた。"
pubDate: 2026-05-20
tags: ["セキュリティ", "AI", "GitHub", "WebAssembly", "SpaceX", "フロントエンド"]
author: "grasshopper"
---

本日の技術ニュースは、GitHubを狙った悪意あるVSCode拡張による大規模な侵害事件が最大の話題となった。AI分野ではOpenAIのモデルが数学的予想を反証したことや、Alibabaの新エージェントモデル Qwen3.7-Max の公開が注目を集めた。ウェブ技術面ではFirefox/SpiderMonkeyからのAsm.js廃止、Googleのウェブへの姿勢を批判するエッセイが議論を呼んだ。宇宙開発ではSpaceXがついてS-1を提出し、Starship第12回飛行テストも実施された。フロントエンド/インフラ分野では、React CompilerのOxlintによる段階的導入やTerraformのsecret管理についての日本語記事も注目された。

## GitHub：悪意あるVSCode拡張で3,800リポジトリが侵害される

悪意を持って作られたVSCode拡張機能経由で、GitHubの3,800以上のリポジトリが不正アクセス・侵害されたことが確認された。攻撃者は拡張機能を通じて開発者のGitHub認証情報を窃取し、リポジトリへのアクセスを得たと報告されている。GitHubも自社内部リポジトリへの不正アクセスを調査中であることをブログで公表した。VSCode マーケットプレイスのサプライチェーンリスクが改めて浮き彫りになった事件であり、インストール済みの拡張機能の信頼性確認が急務となっている。

詳細は [GitHub confirms breach of 3,800 repos via malicious VSCode extension](https://www.bleepingcomputer.com/news/security/github-confirms-breach-of-3-800-repos-via-malicious-vscode-extension/) および [Investigating unauthorized access to GitHub's internal repositories](https://github.blog/security/investigating-unauthorized-access-to-githubs-internal-repositories/) を参照。

## OpenAI：AIモデルが離散幾何学の予想を反証

OpenAIのモデルが、離散幾何学の分野で長年信じられてきた中心的な予想を反証することに成功した。AIが純粋数学の未解決問題に実質的な貢献をしたケースとして、研究者の間で大きな注目を集めている。証明の正確性と再現性の検証はこれからだが、大規模言語モデルが抽象的な数学的推論において従来の限界を超えつつある兆候として広く議論されている。

詳細は [An OpenAI model has disproved a central conjecture in discrete geometry](https://openai.com/index/model-disproves-discrete-geometry-conjecture/) を参照。

## Qwen3.7-Max：エージェント最前線モデル登場

Alibabaが開発する Qwen シリーズの最新モデル「Qwen3.7-Max」が公開された。エージェント型タスクに特化して設計されており、複雑な指示への追従・ツール呼び出し・長期的な推論などで高いパフォーマンスを発揮するとされている。オープンソースモデル群の中でもトップクラスに位置づけられており、GPT-4oやClaude Sonnetと競合する水準を目指している。

詳細は [Qwen3.7-Max: The Agent Frontier](https://qwen.ai/blog?id=qwen3.7) を参照。

## Firefox/SpiderMonkey：Asm.jsのサポート終了

MozillaのJavaScriptエンジン SpiderMonkey が、Asm.js（JavaScriptのサブセットとして最適化されていた低レベル実行形式）のサポートを正式に終了する方針を発表した。Asm.jsは2013年頃に登場し、WebAssembly（Wasm）の前身として高パフォーマンスなウェブアプリケーションを可能にしてきたが、Wasmの普及により役割を終えた形だ。既存のAsm.jsコードはそのまま通常のJavaScriptとして動作するが、専用の最適化パスは削除される。

詳細は [Saying Goodbye to Asm.js](https://spidermonkey.dev/blog/2026/05/20/saying-goodbye-to-asmjs.html) を参照。

## Google宣戦布告論：ウェブへの姿勢を批判するエッセイが拡散

技術評論家の tante 氏が「Googleがウェブに宣戦布告している」と題したエッセイを公開し、Hacker News で大きく取り上げられた。Googleが検索・広告・AIサービスを通じてオープンウェブのエコシステムを侵食・弱体化させているという主張で、特に近年のAIによる検索結果の置き換えがコンテンツ制作者の収益を奪っている点が批判の焦点となっている。ウェブの持続可能性をめぐる議論が再燃している。

詳細は [Google Declaring War on the Web](https://tante.cc/2026/05/20/on-google-declaring-war-on-the-web/) を参照。

## SpaceX、S-1上場申請書をSECに提出

SpaceXがSEC（米証券取引委員会）にS-1書類を提出し、IPO（新規株式公開）に向けた動きが本格化した。数兆円規模と見られる評価額を持つSpaceXの上場は宇宙産業における歴史的なイベントとなる可能性があり、投資家コミュニティで大きな関心を集めている。StarshipやStarlinkなど主要事業の財務詳細が公開されることで、宇宙ビジネスの収益構造にも光が当たる見込みだ。

詳細は [SpaceX S-1](https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm) を参照。

## SpaceX：Starship第12回飛行テスト実施

SpaceXがStarshipの第12回統合飛行テストを実施した。ロケット全段の再利用・回収を目指す一連のテストの中での重要なマイルストーンであり、スーパーヘビーブースターとStarship宇宙船の両方の性能検証が続けられている。打ち上げの詳細と結果はSpaceX公式ページで公開されている。

詳細は [Starship's Twelfth Flight Test](https://www.spacex.com/launches/starship-flight-12) を参照。

## GoogleのModern Web Guidanceスキル：AIが古いCSS・JSを書く問題に対応

ZennでAIが時代遅れのCSSやJavaScriptを生成する問題を解決するためにGoogleが「Modern Web Guidance」スキルを導入したという記事が注目を集めた。大規模言語モデルはトレーニングデータに古い情報が含まれるため、現代のベストプラクティスに反するコードを出力することがある。このスキルはAIアシスタントが最新のウェブ標準に沿ったコードを生成するよう誘導するための仕組みとして設計されており、開発現場での実用性が期待されている。

詳細は [GoogleのModern Web Guidanceスキル登場。AIが古いCSS・JSを書く問題を解決する](https://zenn.dev/ubie_dev/articles/modern-web-guidance) を参照。

## React CompilerをOxlintで漸進的に導入する

Zennで公開された記事では、React CompilerをAnnotationモードとOxlintを組み合わせて段階的に既存プロジェクトへ導入する手法が解説されている。React Compilerは自動的にメモ化を行うことでパフォーマンスを向上させるが、既存の大規模コードベースへの一括適用にはリスクが伴う。Annotationモードで個々のコンポーネントに対して段階的に有効化し、Oxlintで問題箇所を検出する組み合わせは実践的なアプローチとして注目されている。

詳細は [React CompilerをannotationモードとOxlintで漸進的に導入する](https://zenn.dev/dress_code/articles/92dfb9206f50f3) を参照。

## GitHub：アクセシビリティエージェントの構築と学び

GitHubがCopilotを活用した汎用アクセシビリティエージェントの構築プロセスと、そこから得た知見をブログで公開した。スクリーンリーダーのサポートやコントラスト比の確認など、アクセシビリティチェックを自動化するエージェントの設計上の課題や、AIが人間のアクセシビリティニーズをどの程度理解できるかについての考察が含まれている。AI活用によるアクセシビリティ向上の可能性と限界を示す実践的な内容だ。

詳細は [Building a general-purpose accessibility agent—and what we learned in the process](https://github.blog/ai-and-ml/github-copilot/building-a-general-purpose-accessibility-agent-and-what-we-learned-in-the-process/) を参照。
