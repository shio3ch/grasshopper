---
title: "2026-05-23 技術ニュースまとめ"
description: "GitHubリポジトリへの不正アクセス調査、C#/.NET 11でのユニオン型追加、BunへのネイティブImage API導入、SpaceX Starship v3初飛行、Zennでは Claude Code Skills活用法やGhostscriptを超えたRust製PDF圧縮など注目トピックを紹介。"
pubDate: 2026-05-23
tags: ["GitHub", "C#", "Bun", "Rust", "AI", "セキュリティ", "SpaceX"]
author: "grasshopper"
---

本日の技術ニュースは、GitHubの内部リポジトリへの不正アクセスが明らかになったセキュリティインシデントを筆頭に、C#/.NET 11 Preview 2でのユニオン型の正式サポート、BunランタイムへのネイティブImage API追加などプラットフォームの進化が目立つ。国内では Claude Code Skillsの活用事例やGhostscriptを凌駕するRust製PDF圧縮実装など、実践的な記事がZennでトレンドに上がっている。SpaceXによるStarship v3の初テスト飛行も大きな話題を呼んだ。

## GitHub、内部リポジトリへの不正アクセスを調査中

GitHubが自社の内部リポジトリに対する不正アクセスがあったことを公式ブログで報告した。現在調査中であり、影響範囲や詳細は継続的に更新されている。GitHubほどの大規模プラットフォームでの内部インフラへの侵害は、OSSサプライチェーン全体への影響リスクという観点からも業界全体が注目している。ソースコード管理を担う基盤インフラが標的になることの危険性を改めて提示した事例だ。

詳細は [Investigating unauthorized access to GitHub-owned repositories](https://github.blog/security/investigating-unauthorized-access-to-githubs-internal-repositories/) を参照。

## C#/.NET 11 Preview 2、ユニオン型をついに導入

Andrew Lockによる解説記事が Hacker News でトップランクに入った。.NET 11 Preview 2 において、C# が待望のユニオン型（Union Types）のサポートに踏み切ることが明らかになった。Rustの `enum`、TypeScriptの `|` 型、Haskellの代数的データ型といった他言語では当たり前となっていた機能が、C#にも本格的に取り込まれる。エラー処理パターンや状態モデリングの表現力が大幅に向上し、null参照や例外に頼らない堅牢なAPIの設計が容易になると期待される。

詳細は [.NET (OK, C#) finally gets union types](https://andrewlock.net/exploring-the-dotnet-11-preview-2-dotnet-gets-union-types/) を参照。

## Bun、ネイティブ Image API「Bun.Image」を追加

JavaScriptランタイム Bun が `Bun.Image` APIをリリースした。Node.js環境ではSharpなどのネイティブモジュールに頼っていた画像処理（リサイズ、フォーマット変換、最適化など）が、Bunのランタイム組み込み機能として利用できるようになった。外部ネイティブバインディングへの依存なしで高速な画像処理が行えるため、SSGやAPIサーバーでの画像最適化パイプラインを大幅に簡略化できる。

詳細は [Bun.Image](https://bun.com/docs/runtime/image) を参照。

## SpaceX、Starship v3の初テスト飛行を実施

SpaceXが次世代超大型ロケット Starship の第3世代機（v3）による初の飛行テストを実施した。Starshipは将来的な月・火星への有人ミッションを見据えた再利用型ロケットで、v3ではエンジン推力の向上と機体構造の改良が加えられている。宇宙輸送コストの低減を目指す長期的なアーキテクチャ変更の文脈でも注目が高い。

詳細は [SpaceX launches Starship v3 rocket](https://www.space.com/space-exploration/launches-spacecraft/spacex-starship-v3-megarocket-first-test-flight) を参照。

## Claude Code Skillsを日々の開発で活用する方法（Zennトレンド）

Zennのトレンド首位には、Claude Code の「Skills」機能を実際の開発ワークフローに組み込んだ実践的な解説記事がランクインした。カスタムスラッシュコマンドや再利用可能なプロンプトスキルとして定義し、反復作業を自動化する手法が紹介されている。AIコーディングアシスタントをチームの開発標準に組み込む上での具体的なノウハウとして、多くの開発者の関心を集めている。

詳細は [日々の開発で使っているClaude Code Skills](https://zenn.dev/remitaid/articles/4f9dc787b6c191) を参照。

## GoogleのModern Web Guidanceスキル、AIの「古いコード」問題を解決

AIコードアシスタントが古い仕様のCSSやJavaScriptを生成してしまう問題に対し、Google が「Modern Web Guidance」スキルを提供開始した。LLMの学習データには古いウェブ標準が多く含まれるため、廃止されたAPIや非推奨の書き方が混入しやすい。このスキルをAIに適用することで、最新のウェブ標準に準拠したコード生成が期待できる。フロントエンド開発における生成AIの品質向上に向けた実用的なアプローチとして注目される。

詳細は [GoogleのModern Web Guidanceスキル登場。AIが古いCSS・JSを書く問題を解決する](https://zenn.dev/ubie_dev/articles/modern-web-guidance) を参照。

## Ghostscriptを超えたRust製PDF圧縮実装

約40年の歴史を持つ業界標準ツール「Ghostscript」のPDF圧縮性能を、Rustによる自作実装が上回ったという技術記事がZennで話題になった。PDFの内部構造を深く解析し、Rustの安全なメモリ管理と高速処理を組み合わせることで実現した。オープンソースのPDF処理スタックにおいてRustが台頭しつつあることを示す事例であり、レガシーCツールのRust置き換えという潮流とも一致する。

詳細は [【PDF圧縮】約40年続く業界標準Ghostscriptを、Rust 自前実装で抜いた話](https://zenn.dev/ikora/articles/b50ca6275eddc9) を参照。

## 不可視文字による攻撃とパターンマッチの限界

ゼロ幅スペースや制御文字など「不可視文字」を悪用した攻撃を正規表現ベースのパターンマッチングで防ぐことの難しさを論じた記事がZennトレンドに入った。Unicode規格における不可視文字の種類は多岐にわたり、単純なブラックリスト方式では網羅しきれない。正規化（NFC/NFKC）の適用やWhitelist方式への切り替えを含む防御戦略が解説されており、入力バリデーション設計の再考を促す内容となっている。

詳細は [不可視文字による攻撃を防ぐにはパターンマッチだと厳しいという話](https://zenn.dev/ame_x/articles/16a5ddcef27c44) を参照。

## 80386マイクロコードの逆アセンブル解析

Hacker Newsで注目を集めた技術記事。Intel 80386プロセッサの内部マイクロコードを逆アセンブルし、その実装を解読する試みが詳細にまとめられた。マイクロコードはCPUの命令セットとハードウェアの間に位置する低レイヤーの「ファームウェア」であり、1980年代のアーキテクチャ設計思想や命令実装のトレードオフが垣間見える。レトロコンピューティングとハードウェアリバースエンジニアリングの双方の観点から、高い技術的価値を持つ内容だ。

詳細は [80386 Microcode Disassembled](https://www.reenigne.org/blog/80386-microcode-disassembled/) を参照。

## GitHub Copilot、Gartner Magic Quadrantで3年連続リーダーに認定

GitHub Copilotが「Enterprise AI Coding Agents」カテゴリのGartner Magic Quadrantで3年連続リーダーとして認定された。AIコーディングアシスタント市場は急速に競合が増えているが、GitHubはVS CodeやJetBrainsとの深いIDE統合、大規模エンタープライズ向けのアクセス制御・監査機能を強みとして市場リーダーの地位を維持している。企業がAIツール導入を本格化させる中で、信頼性と管理性が評価されていると言える。

詳細は [GitHub recognized as a Leader in the Gartner® Magic Quadrant™ for Enterprise AI Coding Agents for the third year in a row](https://github.blog/ai-and-ml/github-copilot/github-recognized-as-a-leader-in-the-gartner-magic-quadrant-for-enterprise-ai-coding-agents-for-the-third-year-in-a-row/) を参照。
