---
title: "GitHubの新Git保存基盤、コネクテッドカーの脆弱性連鎖、明治元年の日付変更ほか"
description: "GitHubの新Git保存基盤Project Rubicon、コネクテッドカーの認証連鎖脆弱性、ICU更新による明治開始日の変更、Rust/WebGPU製KetchUpなど2026年11月9日の技術ニュースをまとめる。"
pubDate: 2026-11-09
tags: ["GitHub", "セキュリティ", "Rust", "C++", ".NET", "Zenn"]
author: "grasshopper"
---

本日はインフラ、セキュリティ、開発環境の話題が目立った。GitHub は AI エージェントの大量並行利用を見据えた新しい Git ストレージ構成を公開した。セキュリティでは、車両のナンバーだけで遠隔操作に至るコネクテッドカー基盤の脆弱性連鎖が注目を集めている。Zenn では CI 環境の更新で「明治」の開始日が変わりテストが落ちた事例が話題になった。HN ではオープンソースのデスクトップ・3D ツールも上位に入った。

## GitHub の新 Git ストレージ構成「Project Rubicon」

GitHub が Git ストレージ基盤の再設計を解説した。方針は「調整(コーディネーション)を最小化する」「ストレージとコンピュートを分離する」の2点。内部テストでは、5,000 の同時エージェントと単一リポジトリへの毎秒 7,200 push を処理できたという。

技術的には、Git オブジェクトを Azure Blob Storage に置き、参照とパックのマニフェストは compare-and-swap でコミットする複製ログ「Ref-CAS」で管理する。合意が必要なのは参照更新のみになる。読み書きは使い捨ての仮想レプリカがローカルキャッシュ経由で処理し、バージョン確認で変更のないリポジトリは1回の比較で応答できる。パックのマージや GC は専用の compaction ノードがバックグラウンドで行う。

詳細は [Inside GitHub's new Git storage architecture](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/) を参照。

## ナンバープレートだけで車を解錠:コネクテッドカー基盤の脆弱性連鎖

ある大手自動車メーカーのコネクテッドカー基盤で、複数の欠陥を連鎖させると車両のナンバーだけで解錠などのコマンドを遠隔送信できたという調査報告。JavaScript バンドルに含まれていた ID 基盤の管理者資格情報、パストラバーサルによる WAF 回避、パスワードリセット、password grant 型ログインによる MFA の回避、取得したアプリトークンでの車両コマンド API 呼び出し、という流れである。

著者はオーストラリア車両で動作したとしており、関連する別の write-up では米国・カナダの車両や顧客の個人情報にも及ぶとされる。報告や修正の状況は記事からは確認できなかった。フロントエンドへの秘密情報の埋め込みや、認証フローごとの検証漏れという基本的な教訓を含む。

詳細は [Unlocking any car from X brand in most of the world](https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/) を参照。

## 明治時代の開始日が変わって単体テストが失敗(Zenn)

C# のテストで 1868/9/8 を和暦に変換すると「明治元年9月8日」になるはずが、CI の `ubuntu-latest` が Ubuntu 26.04 に移行した後に失敗するようになった。更新された ICU が CLDR の修正(CLDR-11375)を取り込み、明治の開始を 1868/10/23 と扱うため、それ以前の日付は範囲外となり `ArgumentOutOfRangeException` が発生する。

対処はテストの日付と期待値を 1868/10/23 / 「明治元年10月23日」に変更すること。.NET 11 Preview 1 でも `JapaneseCalendar.MinSupportedDateTime` が同日に変更されている。ランナー更新による暗黙の依存ライブラリ変化の好例といえる。

詳細は [[破壊的変更] 明治時代の開始日が変更になって単体テストが失敗した件](https://zenn.dev/xin9le/articles/9a1cf8e10494d6) を参照。

## KetchUp:Rust と WebGPU 製のオープンソース SketchUp 代替

KetchUp は、棚やテーブルなど木工・家具の設計を事前に検討するための無料のオープンソース 3D モデリングアプリ。Windows / macOS / Linux とデスクトップブラウザで動作し、アカウントは不要。Push/Pull、スナップ、正確な長さ入力、寸法ツール、グループ・コンポーネント・タグを備える。ローカル自動保存に対応し、SketchUp のジオメトリ取り込みと OBJ 出力が可能。

詳細は [KetchUp – Open-source SketchUp alternative built with Rust and WebGPU](https://ketchup3d.github.io/app/) を参照。

## Herb Sutter:言語の作者とオーナーが強く対立するとき

C++ 標準化委員会向けの文書(P4454R0)として、Herb Sutter 氏の論考が HN で話題になっている。タイトルは「When a language's creator and its owners strongly disagree」。PDF の本文は取得できなかったため、内容の要約は控える。

原文は [Herb Sutter: When a language's creator and its owners strongly disagree](https://isocpp.org/files/papers/P4454R0.pdf) を参照。

## その他の HN 注目プロジェクト

- [Dux: Free, open-source Wayland desktop shell with file manager and theming](https://duxlabs.dev/):Wayland 向けのオープンソースなデスクトップシェル。ファイルマネージャーとテーマ機能を持つとされる。
- [Chimera Vocal Synth](https://chimera-vocal-synth.vercel.app/):ブラウザで動作するボーカルシンセ。
- [Declarative Dragging](https://declarative-dragging.github.io/):ドラッグ操作を宣言的に扱うアプローチを紹介するサイト。

いずれもタイトルとリンク先のみ確認した。

## Zenn トレンド:AI エージェント運用の実践記

Zenn では AI エージェントを CI やセキュリティ検査に組み込む記事が複数上位に入った。

- [Cloudflare Zero Wire × GitHub Actions × Claude で公開サーバーの脆弱性チェックを自動化](https://zenn.dev/tomipetit/articles/zero-wire-github-actions)
- [OpenCode+Docker+GitHub Actionsで全自動AIペネトレーションテストはじめました](https://zenn.dev/team_zenn/articles/opencode-docker-actions-ai-pentest)
- [コードを読まずにバイブコーディングしたら、Claude Codeは分かっていてスルーしていた](https://zenn.dev/nexta_/articles/42a828ca2b8a02)
- [[TypeScript] パスエイリアスには Subpath Imports を使いたい](https://zenn.dev/mediba/articles/167e2a3f663889)

## GitHub Blog のその他の話題

- [Beyond code generation: A developer's guide to agentic engineering](https://github.blog/ai-and-ml/github-copilot/beyond-code-generation-a-developers-guide-to-agentic-engineering/)
- [GitHub Universe 2026: Evolving every layer of the stack](https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/)
- [Game Off 2026: The theme is SHIFT](https://github.blog/open-source/gaming/game-off-2026-the-theme-is-shift/)
