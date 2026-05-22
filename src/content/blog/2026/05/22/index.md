---
title: "2026-05-22 技術ニュースまとめ"
description: "Anthropic Project Glasswing公開、CISA大規模データ漏洩、Deno 2.8リリース、Wi-Fi時刻同期の1ns精度実現、Apple corecrypto形式検証、GitHubへの不正アクセス調査など、本日の主要技術トピックを解説。"
pubDate: 2026-05-22
tags: ["AI", "セキュリティ", "JavaScript", "Rust", "GitHub", "オープンソース"]
author: "grasshopper"
---

本日の技術ニュースは、AnthropicによるProject Glasswingの初回アップデート公開や、米国サイバーセキュリティ機関CISAで発生したデータ漏洩問題が注目を集めた。ランタイム分野ではDeno 2.8がリリースされ、AIツール周辺ではモデルスペックのオープンデータベース「models.dev」が登場。GitHubの内部リポジトリへの不正アクセスも大きな波紋を呼んでいる。国内Zennコミュニティでは、RustによるPDF圧縮でGhostscriptを超えた事例やClaude Code活用事例が注目を集めた。

## Anthropic、Project Glasswingの初回アップデートを公開

AnthropicはAIの安全性研究プロジェクト「Project Glasswing」の初回アップデートを公開した。Glasswingは大規模言語モデルの解釈可能性（interpretability）と整合性（alignment）に関する研究の包括的なイニシアチブで、モデルの内部動作を人間が理解・検証できるようにすることを目標としている。今回の更新では研究の進捗と具体的な知見が共有されており、AIシステムの信頼性向上に向けた取り組みを示している。

詳細は [Project Glasswing: An Initial Update](https://www.anthropic.com/research/glasswing-initial-update) を参照。

## CISAのデータ漏洩、議員が説明要求

米国のサイバーセキュリティ・インフラセキュリティ庁（CISA）で重大なデータ漏洩が発生し、複数の議員が詳細な説明を求めている。セキュリティジャーナリストのBrian Krebs氏が報じたところによると、CISAは現在も被害の封じ込めに奔走中であり、漏洩したデータの範囲や影響がまだ明確になっていない状況だ。国家の重要インフラを守る機関自体が攻撃を受けたという事実は、サプライチェーン攻撃や内部脅威の深刻さを改めて浮き彫りにしている。

詳細は [Lawmakers Demand Answers as CISA Tries to Contain Data Leak](https://krebsonsecurity.com/2026/05/lawmakers-demand-answers-as-cisa-tries-to-contain-data-leak/) を参照。

## Deno 2.8リリース

JavaScriptランタイムのDeno 2.8がリリースされた。Node.jsとの互換性向上が続けて進められており、既存のnpmエコシステム資産をDeno環境で活用しやすくなっている。パフォーマンス改善とセキュリティモデルの強化も含まれており、エッジコンピューティング環境でのユースケースがさらに広がることが期待される。

詳細は [Deno 2.8](https://deno.com/blog/v2.8) を参照。

## models.dev：AIモデルスペックのオープンデータベース

AIモデルのスペック・料金・能力を一元管理するオープンソースデータベース「models.dev」がHacker Newsで注目を集めた。様々なプロバイダのモデル情報をJSON形式で集約しており、コンテキストウィンドウのサイズ、対応モダリティ、価格帯などを横断的に比較できる。LLMアプリケーションのプロバイダ選定や、コスト試算に活用できる実用的なリソースだ。

詳細は [Models.dev: open-source database of AI model specs, pricing, and capabilities](https://github.com/anomalyco/models.dev) を参照。

## Wi-Wi：ワイヤレスで1ナノ秒精度の時刻同期を実現

Jeff Geerling氏が「Wi-Wi」と呼ぶワイヤレス時刻同期技術を紹介した。有線のPTP（Precision Time Protocol）に匹敵する5ns未満の精度をWi-Fi経由で達成しており、ケーブル敷設が困難な環境での高精度タイムスタンプ要件に応える可能性がある。分散センサーシステムや金融取引のタイムスタンプ管理、映像制作現場での同期など、幅広い応用が期待される。

詳細は [Wi-Wi is wireless time sync at 1 nanosecond](https://www.jeffgeerling.com/blog/2026/wi-wi-is-wireless-time-sync-less-than-5ns/) を参照。

## AppleがcorecryptoライブラリへのFormal Verificationを公開

Appleはセキュリティブログで、自社の暗号ライブラリ「corecrypto」に対する形式検証（Formal Verification）のアプローチを詳述した。数学的証明によってコードの正確性を保証する形式検証は、暗号実装のバグが致命的なセキュリティ欠陥につながるリスクを根本的に排除できる。Appleほどの規模のプロダクト全体に適用するための手法を公開したことは、業界のセキュリティ水準の引き上げにつながる可能性がある。

詳細は [A blueprint for formal verification of Apple corecrypto](https://security.apple.com/blog/formal-verification-corecrypto/) を参照。

## GitHubが内部リポジトリへの不正アクセスを調査

GitHubは公式ブログで、GitHub所有の内部リポジトリへの不正アクセスが発生したことを公表した。調査は継続中で、流出した情報の範囲や影響について詳細を明らかにしている。GitHubはCI/CDパイプラインや開発ツールのエコシステムの中心にあるため、このような事案は業界全体に影響しうる。ソフトウェアサプライチェーンセキュリティへの注目が再び高まっている。

詳細は [Investigating unauthorized access to GitHub-owned repositories](https://github.blog/security/investigating-unauthorized-access-to-githubs-internal-repositories/) を参照。

## GoogleのModern Web GuidanceでAIが書く古いCSSを修正

Zennトレンド記事では、GoogleがリリースしたMCP対応の「Modern Web Guidance」スキルを紹介している。生成AIは訓練データの偏りにより古いCSSやJavaScriptのイディオムを生成しがちだが、このスキルはモダンなウェブ標準に沿ったコードを出力するようAIをガイドする。Flexbox全盛期以降に普及したCSS Grid、論理プロパティ、カスタムプロパティなどを積極的に活用させる仕組みで、AIコーディング支援の品質向上に直結する実用的なアプローチだ。

詳細は [GoogleのModern Web Guidanceスキル登場。AIが古いCSS・JSを書く問題を解決する](https://zenn.dev/ubie_dev/articles/modern-web-guidance) を参照。

## RustでGhostscriptを超えるPDF圧縮を実装

約40年の歴史を持つGhostscriptをRustによる自前実装で性能面で超えたという事例がZennで注目を集めた。記事ではPDF圧縮処理のアルゴリズム選択から、Rustの所有権モデルを活かしたメモリ安全な実装、ベンチマーク比較までを詳解している。GhostscriptはPostScript/PDFの業界標準ツールとして長く使われてきたが、近年のシステムプログラミング向けRustエコシステムの成熟が既存ツールを置き換えうるレベルに達していることを示す事例だ。

詳細は [【PDF圧縮】約40年続く業界標準Ghostscriptを、Rust 自前実装で抜いた話](https://zenn.dev/ikora/articles/b50ca6275eddc9) を参照。

## Claude CodeのSkillで開発フローを仕組み化

Zennでは、Claude CodeのSkill機能を活用して社内プロジェクトの開発フローを自動化・体系化した事例が紹介された。Skillを使うことで、コードレビューやドキュメント生成などの繰り返し作業をClaudeに委譲し、1時間以内に開発を完了できる仕組みを構築したという。エージェント的なAI活用がチームの開発プロセスに組み込まれていく実例として参考になる。

詳細は [1時間で開発を完了する。Claude Code の Skill で社内プロジェクトを仕組み化した話](https://zenn.dev/sonicgarden/articles/e5fd7f54433d3d) を参照。
