---
title: "2026-06-14 技術ニュースまとめ"
description: "AIの本質に関する議論、リオデジャネイロのLLM偽装問題、GitHub Copilot CLIの大型アップデート、RustによるX11サーバー実装、PostgreSQLの大量削除問題など、本日の主要な技術トピックを解説する。"
pubDate: 2026-06-14
tags: ["AI", "LLM", "GitHub", "Rust", "PostgreSQL", "Next.js", "Python"]
author: "grasshopper"
---

本日の技術ニュースは、AI・LLMを巡る議論が活発だ。「AIはコードに過ぎない」という本質論から、自治体が公開したLLMがオープンソースモデルのマージに過ぎなかったという事件、そしてAnthropicを巡る業界の動向まで多岐にわたる。開発ツール面ではGitHub Copilot CLIが言語サーバー統合や委譲制御の改善など複数のアップデートを発表。インフラ分野ではPostgreSQLの大規模削除問題とRust製X11サーバーが注目を集めている。国内ではZennでNext.jsの設計論やGitHub Copilotの有料化対応に関する記事が人気を博している。

## AIはコードに過ぎない──プロンプトで賢くはならない

The Registerが「AI is code – and can't be prompted into being smarter」と題した記事を掲載した。LLMをプロンプトで誘導しても、モデルの実際の能力は変わらないという主張で、「AIは魔法ではなくコードだ」という前提に立ち返ることを促している。システムプロンプトで「あなたは天才エンジニアです」と指示しても、モデルの重みは変化しない。ユーザーが期待するアウトカムと、モデルが実際にできることとのギャップを整理する上で示唆に富む論考だ。

詳細は [AI is code – and can't be prompted into being smarter](https://www.theregister.com/ai-and-ml/2026/06/14/ai-is-code-and-cant-be-prompted-into-being-smarter/5254141) を参照。

## リオデジャネイロの「自製LLM」は既存モデルのマージだった

ブラジル・リオデジャネイロ市が独自開発と称して公開したLLM「Nex-N2」が、実際には既存オープンソースモデルのマージに過ぎないと指摘されてGitHubのIssueで問題が浮上した。自治体や企業が「自製AI」を謳ってリリースするケースで、実態がモデルマージ（複数のオープンソースモデルを結合したもの）に過ぎない事例が相次いでいる。LLMの評価や出所の透明性が問われる事例として注目されている。

詳細は [Rio de Janeiro's "homegrown" LLM appears to be a merge of an existing model](https://github.com/nex-agi/Nex-N2/issues/4) を参照。

## Anthropicへの問い──「これはAnthropicが求めたことか？」

AIスタートアップの戦略を分析するニュースレター「Very Sane」が「Did Anthropic ask for this?」と題した記事を公開。Anthropicが外部に対して持つ影響力や、同社のパブリックコミュニケーションと実際のビジネス行動のギャップについて考察している。AI安全性を標榜しながら商業的な拡張を続けるAnthropicの立ち位置を批判的に検討した内容で、Hacker Newsで議論を呼んでいる。

詳細は [Did Anthropic ask for this?](https://www.verysane.ai/p/did-anthropic-ask-for-this) を参照。

## GitHub Copilot CLIが委譲をより選択的に制御

GitHub公式ブログが「How we made GitHub Copilot CLI more selective about delegation」を公開した。Copilot CLIがエージェントとして自律的にタスクを実行する際、どのアクションを委譲するかの制御を強化したという内容だ。以前は過剰な自動実行が起きやすかった問題を改善し、ユーザーの意図と一致した範囲でのみ自律行動するよう調整している。信頼性の高いCLIエージェント体験に向けた重要なステップだ。

詳細は [How we made GitHub Copilot CLI more selective about delegation](https://github.blog/ai-and-ml/how-we-made-github-copilot-cli-more-selective-about-delegation/) を参照。

## GitHub Copilot CLIに言語サーバー統合でコードインテリジェンスを付与

同じくGitHub Blogが「Give GitHub Copilot CLI real code intelligence with language servers」を公開。Copilot CLIがLanguage Server Protocol（LSP）を活用して、コード補完・参照解決・型情報などの静的解析機能を取り込む仕組みを解説している。これにより、CLIベースのAIアシスタントがIDEと同等レベルのコードコンテキストを持てるようになる。エージェントが「コードを読む」精度が大幅に向上すると期待される。

詳細は [Give GitHub Copilot CLI real code intelligence with language servers](https://github.blog/ai-and-ml/github-copilot/give-github-copilot-cli-real-code-intelligence-with-language-servers/) を参照。

## GitHubのシークレットスキャニングが偽陽性を大幅削減

「Making secret scanning more trustworthy: Reducing false positives at scale」と題したGitHub Blogの記事では、シークレットスキャニング機能の誤検知（偽陽性）削減に向けた取り組みが紹介された。機械学習モデルの改善と、トークンのエントロピーや文脈に基づくフィルタリングを組み合わせることで、偽陽性率を大幅に低下させたという。セキュリティアラートへの疲弊（alert fatigue）を防ぐ上で重要な改善だ。

詳細は [Making secret scanning more trustworthy: Reducing false positives at scale](https://github.blog/security/making-secret-scanning-more-trustworthy-reducing-false-positives-at-scale/) を参照。

## TorchCodec 0.14リリース──HDR動画デコードとFast Wav Decoder

MetaのPyTorchチームが動画・音声デコードライブラリ「TorchCodec」のv0.14.0をリリースした。主な新機能はCPUおよびCUDA上でのHDR（High Dynamic Range）動画デコードと、高速WAVデコーダーの追加だ。機械学習パイプラインで動画・音声データを効率的に処理するためのライブラリで、特に大規模なマルチモーダル学習ワークフローに有用な機能が揃っている。

詳細は [TorchCodec 0.14: HDR Video Decoding for CPU and CUDA, and Fast Wav Decoder](https://github.com/meta-pytorch/torchcodec/releases/tag/v0.14.0) を参照。

## PostgreSQLで大規模削除を行う唯一のスケーラブルな方法はDROP TABLE

PlanetScaleのブログが「The only scalable delete in Postgres is DROP TABLE」という刺激的なタイトルで、PostgreSQLにおける大量行削除の問題を解説した。`DELETE`文で数百万行を削除するとテーブルの肥大化（bloat）やVACUUMの負荷が深刻になる。代わりにデータを新テーブルに移行してから古いテーブルを`DROP TABLE`するパターンや、パーティション分割を使って期限切れデータを丸ごと落とすアプローチが紹介されている。データ保持ポリシーを設計する際に必読の内容だ。

詳細は [The only scalable delete in Postgres is DROP TABLE](https://planetscale.com/blog/the-only-scalable-delete) を参照。

## Yserver──Rustで書かれたモダンなX11サーバー

`joske/yserver`というGitHubリポジトリが注目を集めている。RustでゼロからX11サーバーを実装するプロジェクトだ。既存のXorgはCで書かれた巨大なコードベースで、セキュリティ上の懸念も多い。RustによるX11サーバーの再実装は、Waylandへの移行が進む中でも、Xプロトコルの理解やRustによるシステムプログラミングの教育的な意義が大きい。まだ実験的な段階だが、Hacker Newsで活発な議論が起きている。

詳細は [Yserver: A modern X11 server written in Rust](https://github.com/joske/yserver) を参照。

## 【Zenn】従量制GitHub Copilotの代替としてOpenCode GoをCopilot Chatで使う

GitHub Copilotが従量制に移行したことを受け、Zennでは代替手段に関する記事が急増している。「従量制になったGithub Copilotの代わりにOpenCode GoをCopilot Chatのカスタムプロバイダとして使う」という記事では、OpenCode GoをVS CodeのCopilot Chatのカスタムバックエンドとして設定する手順が詳細に解説されている。コスト削減を図りながら既存のワークフローを維持したい開発者に実用的な内容だ。

詳細は [従量制になったGithub Copilotの代わりにOpenCode GoをCopilot Chatのカスタムプロバイダとして使う](https://zenn.dev/kusuke/articles/82129236caa5f8) を参照。

## 【Zenn】半年でNext.jsアプリを10本作って見えた設計の「判断基準」

Next.js 15を使って半年間で10本のアプリを開発した経験をもとに、設計判断のガイドラインをまとめた記事がZennで高い注目を集めている。App RouterとPages Routerの使い分け、Server ComponentsとClient Componentsの境界線の引き方、データフェッチ戦略など、実践的な知見が体系的にまとめられている。Next.jsの公式ドキュメントだけでは掴みにくい「なぜそう設計するのか」という理由が丁寧に説明されており、Next.js入門者から中級者まで参考になる内容だ。

詳細は [半年でNext.jsアプリを10本作って見えた設計の「判断基準」](https://zenn.dev/yun_bow/articles/87d781437d1ddf) を参照。
