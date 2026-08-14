---
title: "2026年8月15日 技術ニュースまとめ：LLMウォーターマーキング、準同型暗号AI、Firefoxの広告ブロック方針など"
description: "Claudeの電子透かし技術やGoogleの準同型暗号AI、Firefoxのみが継続支持するuBlock Origin、BiomeとOxlintの速度差の理由、GitHubのエージェントアプリなど、今日の注目テック記事をまとめました。"
pubDate: 2026-08-15
tags: ["AI", "セキュリティ", "ブラウザ", "OSS", "GitHub", "暗号技術"]
author: "grasshopper"
---

今日は生成AIまわりの話題が目立った一日だった。Anthropic がClaudeの生成テキストに電子透かしを標準搭載したことが話題になったほか、Googleは準同型暗号を使ったプライバシー保護AI推論の基盤技術「HEIR」を発表した。ブラウザ領域では、広告ブロック拡張機能への対応方針でFirefoxが他の主要ブラウザと一線を画す立場を鮮明にした。開発ツール分野では、同じRust製でも設計思想の違いが速度差を生むBiomeとOxlintの比較記事や、GitHubによるエージェントアプリ連携の発表があった。オープンソースのセキュリティ強化に関するGitHubの取り組み成果も報告されている。

## Claudeがテキストに電子透かしを導入、LLMウォーターマーキング技術が実用段階に

Anthropicは2026年8月、Claudeの生成テキストに機械可読な電子透かしを埋め込む機能を発表した。数年前までは「実用化は難しい」とされていた技術が、わずか3年ほどで商用LLMに標準搭載されるまでに進展したことになる。

透かしは、LLMが次に出力する単語を選ぶ際の「統計的な癖」として埋め込まれる仕組みだ。複数の自然な単語候補から選べる場面で、秘密鍵から導いたルールに従って選択をわずかに偏らせ、数百トークン分の偏りを集計すると人間の文章ではあり得ない統計的パターンが浮かび上がる。研究は2023年のKGW法を起点に、「生成品質の劣化」と「言い換え攻撃への脆弱性」という2つの課題に取り組みながら、Gumbel-Max法やTournament sampling、SemStampといった手法へと発展してきた。AI生成コンテンツの真正性確認や不正利用対策の基盤技術として注目される。

詳細は [Claude がテキストに電子透かしを入れ始めたので、LLM ウォーターマーキングの仕組みを調べた](https://zenn.dev/hellorusk/articles/3328866ca9e922) を参照。

## Google、準同型暗号でプライバシー保護AI推論を実用化する「HEIR」を発表

Googleは、暗号化されたデータに対して直接計算を実行できる準同型暗号技術を活用し、ユーザーのプライバシーを保護したままAI推論を行うオープンソースコンパイラ「HEIR」を発表した。

これまでのエンドツーエンド暗号化では、機能提供とプライバシー保護がトレードオフの関係にあったが、準同型暗号はこの対立を「計算コストの問題」に変える。医療や金融など規制の厳しい業界で、データを平文のまま共有せずに高度なサービスを提供できるようになる可能性がある。技術的には、HEIRは事前学習済みのAIモデルを暗号化入力に対応する形へ自動変換する仕組みを持ち、複数の企業と協力して推薦システムや不正検知、ネットワーク異常検知などの実用デモを実現した。処理は複雑だが、非専門家でも扱える「ワンクリックソリューション」を目指しているという。

詳細は [Google is making private AI practical with homomorphic encryption](https://blog.google/security/how-google-is-making-private-ai-practical-with-homomorphic-encryption/) を参照。

## Firefox、主要ブラウザで唯一uBlock Originの継続サポートを表明

Firefoxが、主要ブラウザとして初めてuBlock Originの継続サポートを公式に発表した。Microsoft EdgeやChromiumベースの他のブラウザがManifest V3への移行に伴い広告ブロック拡張機能の機能を制限する中での決定だ。

Chromiumエンジンを採用していないFirefoxは、「Our support for uBlock Origin isn't going anywhere（uBlock Originのサポートはなくならない）」との立場を明言し、フルスペック版のuBlock Originを使い続けられる唯一の大手ブラウザとなる。他のブラウザでは機能が制限されたuBlock Origin Liteへの移行や、組み込みの広告ブロック機能への乗り換えが避けられない状況にあり、プライバシー重視のユーザーにとってFirefoxの選択がより明確な差別化要因になりそうだ。

詳細は [Firefox is now the last major browser that still supports uBlock Origin](https://www.pcworld.com/article/3212428/firefox-is-now-the-last-major-browser-that-still-supports-ublock-origin.html) を参照。

## 同じRust製でも速度差が出るBiomeとOxlint、設計思想の違いを分析

BiomeとOxlint(oxc)はどちらもRust製のJavaScript/TypeScriptツールだが、速度差は言語ではなく設計方針の違いから生じているという分析記事が注目を集めた。

Oxlintは事前計算されたデータ構造を参照するだけで済む設計を採用し、単一のAST走査で処理を完結させることで高速化を実現している。一方Biomeはロスレスの具象構文木（CST、red-green tree）を採用し、複数ファイルにまたがる解析やCSS対応など汎用性を優先する設計になっている。メモリ確保の戦略にも違いがあり、oxcはポインタ加算のみで済む一括アリーナ方式を採るのに対し、Biomeは参照カウントによる個別確保方式を採用している。この設計上のトレードオフが体感速度の差につながっているとのことだ。

詳細は [同じRust製のBiomeとOxlintで、なぜ速度差が大きいのか](https://zenn.dev/estie/articles/64b80da2fbf175) を参照。

## Cloudflare、16年間貫く「通り道を支配する」という設計思想

Cloudflareが創業から16年間一貫して「通り道に立つ」という単一の設計原則を貫いてきたことを解説する記事が話題になった。ユーザーとオリジンサーバー間のトラフィックの通り道に介在し、その場で処理を完結させることでレイテンシを最小化しつつセキュリティ機能を実現する、という考え方だ。

技術的には、全てのエッジサーバーが同一のソフトウェアスタックを実行する均質なアーキテクチャを採用しており、リクエストが複数の拠点を経由してしまう「ヘアピンピング」を排除している。CDN・DNS・WAF・Workersなど一見バラバラに見える製品群も、この「通り道の上で何ができるか」を突き詰める過程から生まれたものであり、根底にある設計思想は共通しているという。

詳細は [Cloudflareは16年間ずっと同じことをしている。「通り道を支配する」という設計思想を知る](https://zenn.dev/akari1106/articles/9d2abbc63a4abb) を参照。

## GitHub、外部ツールをGitHub内から直接呼び出せる「エージェントアプリ」を発表

GitHubは、Amplitude、Endor Labs、LaunchDarkly、PagerDutyといった外部ツールをGitHub内から直接呼び出せる新機能「エージェントアプリ」を発表した。

プルリクエストの作成から本番環境への展開まで、開発者がツール間を行き来してコンテキストを持ち運ぶ必要がなくなり、ソフトウェア配信ワークフロー全体をGitHub上に集約できる点が技術的な改善点となっている。CI/CDやモニタリング、フィーチャーフラグ管理などの外部サービスとGitHubの連携がより緊密になることで、開発者体験の向上が期待される。

詳細は [How to bring your software delivery workflow into GitHub with agent apps](https://github.blog/ai-and-ml/github-copilot/how-to-bring-your-software-delivery-workflow-into-github-with-agent-apps/) を参照。

## GitHub、50のOSSプロジェクトへの投資から得たAI時代のセキュリティの教訓を公開

GitHubは「Secure Open Source Fund」の一環として、50のオープンソースプロジェクトに50万ドル以上を投資しセキュリティ強化を支援した結果を公開した。

調査の結果、「AIはメンテナーが脆弱性を迅速に調査・優先順位付け・対応するのを支援できる一方、最終的な判断と責任は人間のメンテナーが担う必要がある」という結論が導き出された。参加プロジェクトの92%が主要なセキュリティ機能を有効化し、プログラム全体で533件の新しいCVEが特定され、4,210件のCodeQLアラートが修正されたという。AIが支援ツールとして有効に機能する一方、意思決定の主体は依然として人間であるべきだという点が強調されている。

詳細は [What 50 open source projects taught us about security in the AI era](https://github.blog/open-source/maintainers/what-50-open-source-projects-taught-us-about-security-in-the-ai-era/) を参照。

## RustDesk、Wayland環境での真の無人リモートアクセスに対応

オープンソースのリモートデスクトップツールRustDeskが、Linuxの新しいディスプレイサーバープロトコルであるWayland環境において、ユーザーの操作なしで接続できる「真の無人リモートアクセス」に対応したと発表した。

Waylandは従来のX11に比べてセキュリティ面で優れる一方、画面キャプチャや入力操作の権限管理が厳格なため、無人でのリモートアクセスの実装が技術的な課題となっていた。今回の対応により、サーバー管理やヘッドレス運用など、ユーザーが物理的に画面の前にいない状況でのリモート操作がWayland環境でも可能になる。

詳細は [RustDesk now supports true unattended remote access on Wayland](https://rustdesk.com/blog/unattended-remote-access-wayland/) を参照。

## 新モデル「Qwen 3.8 27B」がHacker Newsで大きな話題に

Alibaba系のQwenチームが公開した新しい大規模言語モデル「Qwen 3.8 27B」がHacker Newsのトップストーリーとなり、大きな注目を集めた。モデルはHugging Face上でFP8量子化版が公開されている。

パラメータ数27Bというミッドサイズのモデルながら高い性能を示しているとみられ、オープンウェイトモデルの選択肢がさらに広がる形となった。継続的に進化するオープンモデルのエコシステムにおいて、実運用でのコストと性能のバランスを取りたい開発者にとって選択肢の一つとなりそうだ。

詳細は [Qwen 3.8 27B](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) を参照。

## 「Opus 5は使いにくくなった」という声がHacker Newsで議論に

AnthropicのモデルOpus 5について「以前より使いにくく感じる」と指摘するブログ記事がHacker Newsで大きな議論を呼んだ。

具体的な技術的検証内容は記事本文に譲るが、モデルのアップデートに伴う挙動の変化がユーザー体験にどう影響するかという点は、LLMを開発ワークフローに組み込む開発者にとって共通の関心事だ。モデルのバージョンアップグレードが必ずしも全てのユースケースで体感的な改善につながるとは限らないという指摘は、AIツールを選定・運用する上での実践的な視点を提供している。

詳細は [Why does Opus 5 feel worse to work with?](https://mun-logadan.github.io/why-does-opus-5-feel-worse/) を参照。
