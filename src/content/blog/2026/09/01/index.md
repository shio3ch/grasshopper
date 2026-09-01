---
title: "2026年9月1日 技術ニュースまとめ：Chrome拡張MV2排除、GitHub障害の教訓、npmサプライチェーン攻撃対応"
description: "GoogleがuBlock Originなど MV2 拡張を削除、GitHub障害の再発防止策、npmパッケージへのマルウェア混入対応、AIコーディングエージェントのコスト比較など、今日の技術トピックを紹介。"
pubDate: 2026-09-01
tags: ["セキュリティ", "AI", "GitHub", "OSS", "ブラウザ拡張"]
author: "grasshopper"
---

今日はブラウザのセキュリティを巡る動きが大きな話題になった。Google が Manifest V2 拡張機能を Chrome ウェブストアから削除し、人気の広告ブロッカー uBlock Origin が事実上使えなくなったことが注目を集めている。加えて GitHub Blog では 8 月 17 日の大規模障害の詳細な振り返りと LLM 評価手法の解説が公開され、Zenn では npm パッケージへのマルウェア混入インシデントの対応記録や AI コーディングエージェントのサブスクリプション比較が人気を集めた。ブラウザセキュリティ、インフラの信頼性、サプライチェーン攻撃、AI 開発ツールの実務知見という複数の軸で技術情報が動いた一日だった。以下、各トピックを詳しく見ていく。

## Google、Chromeウェブストアから MV2 拡張を一斉削除、uBlock Originも対象に

Google が Manifest V2（MV2）ベースの拡張機能を Chrome ウェブストアから削除し、広く使われている広告ブロッカー uBlock Origin もその対象となったことが Hacker News で大きな議論を呼んだ。これは Google が進めてきた Manifest V3（MV3）への移行強制の一環で、MV3 は拡張機能が使えるネットワークリクエスト制御 API を大幅に制限しており、高機能な広告ブロッカーの実装を事実上困難にする。議論では、悪意ある広告が非技術者ユーザーを狙う攻撃経路になっている以上、広告ブロッカーはセキュリティ対策として不可欠だという指摘や、ブラウザ・検索・広告を一体で握る Alphabet の構造そのものを問題視する声も上がった。Firefox など代替ブラウザへの関心が高まる契機にもなっている。

詳細は [Google Has Removed MV2 Extensions from the Chrome Web Store, Including UBO](https://webiterate.dev/google-removed-extensions-ublock-origin-108/) を参照。

## Apple、AI需要の急増でMac miniとMac Studioの発表を前倒し

Apple が例年の 10〜11 月ではなく 8 月に Mac mini と Mac Studio の新モデルを発表したのは、企業からの AI 向けハードウェア需要が想定を上回ったためだと報じられている。Apple は法人顧客向けの専任チームや明確な AI 事業戦略を持たないまま需要急増に直面しており、Private Cloud Compute インフラへのアクセスを求める企業の要望も断っていたという。メモリ不足も重なり高性能構成は品薄が続き、一部の企業は代替として Nvidia の DGX Spark に流れている。複数の Mac Studio を連携させて大規模モデルを動かす用途を訴求するなど、Apple もエンタープライズ AI 市場への対応を急いでいる様子がうかがえる。

詳細は [Apple caught off guard by AI demand for Mac Mini and Mac Studio](https://www.macrumors.com/2026/08/30/apple-unexpected-mac-mini-and-studio-demand/) を参照。

## GitHub、8月17日障害の詳細な振り返りと再発防止策を公開

GitHub が 7 時間 47 分に及んだ 8 月 17 日の障害について詳細なポストモーテムを公開した。米中部データセンターの重要インフラコンポーネントがトラフィックのピークにスケールしきれず失敗したことが発端で、認証障害へと連鎖し、さらに Copilot 側のクライアントリトライループが復旧を難しくしたという。対策として 300 万コア以上の CPU と 120 ペタバイトのストレージを追加し、Azure が負荷の 58%を担うまで拡張（5 月時点では 12%）したほか、リトライ回数の統一やアラート改善、障害の連鎖を防ぐコンポーネント分離を進めるとしている。8 月だけで 2 度目の大規模障害という重みを踏まえた内容だ。

詳細は [The August 17 outage, and the work ahead](https://github.blog/news-insights/company-news/the-august-17-outage-and-the-work-ahead/) を参照。

## 本番投入前のLLM評価、GitHubのシークレットスキャンに学ぶ8つの実践

GitHub Blog が、シークレットスキャン機能の開発経験をもとに LLM を安全に本番投入するための評価手法を解説した。プロダクトゴールを起点にすること、評価を一度きりでなく継続的なテストとして扱うこと、本番同様のノイズを含むデータで評価すること、本番ラベルを鵜呑みにせず精査すること、エラー分析に投資することなど 8 つの原則を挙げている。同社はこの手法で誤検知を 95%削減しつつ再現率（recall）のガードレールを維持したという。LLM をプロダクトに組み込むチームにとって、評価基盤の設計をどう体系化するかの具体的な参考になる。

詳細は [How to evaluate LLMs before production](https://github.blog/ai-and-ml/llms/how-to-evaluate-llms-before-production/) を参照。

## OpenClaw、急成長の裏で「プロンプトリクエスト」という新課題

「GitHub 史上最速で成長したプロジェクト」と紹介される個人 AI アシスタント OpenClaw について、GitHub Blog がメンテナに取材した記事を公開した。2025 年 11 月に週末プロジェクトとして始まり、半年で 38.8 万スター・8.1 万フォーク・8 万コミット超に達したという。開発者の Peter Steinberger は「もはやプルリクエストとは呼ばず、プロンプトリクエストと呼んでいる」と語り、AI 支援で大量生産されるコントリビューションの評価が新たな負担になっていると説明する。信頼性の判断軸としてエージェントとの対話ログの提出を重視するようになったほか、評判の水増しを狙った複製 PR など新種の攻撃面にも対応を迫られている。

詳細は [OpenClaw went viral. Meet the maintainers building and securing it.](https://github.blog/open-source/maintainers/openclaw-went-viral-meet-the-maintainers-building-and-securing-it/) を参照。

## npmパッケージにマルウェアを混入された開発者の対応記録

Zenn では、自作の npm パッケージ `@7nohe/openapi-react-query-codegen` に第三者がマルウェア入りバージョンを公開した際の対応を綴った記事が注目を集めた。原因は GitHub Actions のリリースワークフローの脆弱性で、10 個の改ざんバージョンが公開されインストール時に悪意あるコードが実行される状態だったという。著者はワークフローの即時停止、Trusted Publisher と長期トークンの失効、latest タグの安全版への差し戻し、該当バージョンの非推奨化、npm への通報、証拠保全のためのコミットハッシュ抽出、攻撃者アカウントの通報という順序立てた対応を取り、約 5 時間で該当バージョンは削除された。サプライチェーン攻撃を受けた際の実践的な初動対応として参考になる。

詳細は [自作npmパッケージにマルウェアを公開されたときにやったこと](https://zenn.dev/7nohe/articles/npm-malware-incident-response) を参照。

## 個人向けAIコーディングエージェント、サブスクの実質コスパを比較

Zenn では、OpenAI Codex Pro、Anthropic Claude Max、Moonshot Kimi、Zhipu の GLM Coding Plan、xAI SuperGrok、OpenCode Go（DeepSeek V4 Flash）など主要なコーディングエージェント向けサブスクリプションのコストパフォーマンスを比較した記事が人気を集めた。モデルを Fable クラス・Opus クラス・Sonnet クラスに分類した上で、API 単価の安さよりも月間トークン付与量による「サブスクリプション圧縮効果」（10 倍を超えることもある）の方が実質コストを左右すると指摘している。総合的には OpenAI が最もコスパに優れるという結論だが、Claude の性能を重視するなら Anthropic、予算重視なら OpenAI Plus と OpenCode Go の併用が現実的な選択肢として挙げられている。

詳細は [個人向け Coding Agent サブスクリプションのコストパフォーマンス比較](https://zenn.dev/kimuson/articles/compare-ai-subscription-20260818) を参照。

## macOSソフトウェアをLinuxで動かす「Darling」

Wine がWindows ソフトを Linux で動かすように、macOS ソフトウェアの互換レイヤーを提供するプロジェクト「Darling」が Hacker News で改めて注目を集めた。ハードウェアエミュレーションではなく Darwin 環境そのものを実装するアプローチを取り、Apple が公開した Darwin のソースコードや Cocotron、GNUstep などの成果を活用している。GUI アプリのサポートはまだ実験的で単純なものに限られるが、多くの macOS アプリケーションをネイティブに近い形で動作させることに成功しているという。GPLv3 のオープンソースプロジェクトとして開発が続いており、WSL2 上での動作もサポートする。

詳細は [Darling: Run macOS Software on Linux](https://www.darlinghq.org/) を参照。

## macOSライクなオープンソースOS「RavynOS」、Darwin/FreeBSDベースで開発中

Darwin と FreeBSD、Apple のオープンソースコンポーネントをベースに、macOS のユーザー体験を再現しようとするプレアルファ段階の OS「RavynOS」が Hacker News で話題になった。「macOS の洗練さとオープンソースの自由を両立する」ことを目標に掲げ、グローバルメニューバーや Command キーのショートカット、Applications/System/Library といった標準的なフォルダ構成、Cocoa API のネイティブサポートなど macOS ライクな要素を多数取り入れている。まだ一般ユーザー向けの完成度ではなく開発者向けプレビューの段階だが、Apple のハードウェア制約を受けないオープンな代替 OS を志向する野心的なプロジェクトとして関心を集めている。

詳細は [RavynOS: Pre-alpha open-source OS based on Darwin, FreeBSD, Apple open-source](https://ravynos.com/) を参照。

## ChatGPTエージェントの全ツール・スキルを網羅したリファレンスが公開

ChatGPT の作業セッションで呼び出し可能なツールとスキルを網羅的にまとめたリファレンスページが Hacker News で話題になった。232 個のツールインターフェースと 44 個のスキル定義を 24 の機能カテゴリに整理しており、GitHub 連携だけで 89 種類のツールを持つなど統合の深さがうかがえる。ツール（呼び出し可能なエンドポイント）とスキル（再利用可能な手順のパッケージ）を明確に区別している点も特徴で、エージェントが持つ能力を構造化・発見可能な形で公開するアプローチとして、AI エージェント開発者の関心を集めている。

詳細は [ChatGPT Work Tool and Skill Reference](https://codex-tool-reference.simonw.chatgpt.site/) を参照。
