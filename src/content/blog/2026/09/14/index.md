---
title: "2026年9月14日 技術ニュースまとめ：広告業界のダークパターン、車載データ売買問題、GitHubのAI評価ガイド"
description: "Googleの不正広告問題、コネクテッドカーのデータ販売、JetKVM Mini、Julia 1.13、GitHubのLLM評価ガイド、ZennのLLMトークン効率化・git worktree記事などを紹介。"
pubDate: 2026-09-14
tags: ["AI", "セキュリティ", "プライバシー", "GitHub", "OSS", "開発ツール"]
author: "grasshopper"
---

今日はプライバシーと信頼を巡る話題が目立った一日だった。Googleの広告配信における不正広告の温床化を指摘する記事や、コネクテッドカーが収集したデータが第三者に販売されている実態を報じる記事が注目を集めた。開発ツール分野ではGitHubが本番投入前のLLM評価手法を解説するガイドを公開し、AI関連の専門用語を整理する記事も話題になった。ハードウェア分野ではリモートKVM機器「JetKVM Mini」が発表され、言語処理系ではJulia 1.13のハイライトが公開されている。国内Zennでは、LLMのトークン効率化やClaude Codeとgit worktreeを組み合わせた並列開発の工夫、ORMでのデカルト積問題の実測など、実務的な技術記事がトレンド入りした。

## Googleはなぜ今も「怪しい広告」を配信し続けるのか

広告ブロッカー開発者による調査記事が、Googleの広告配信ネットワークにおいて詐欺的・悪質な広告が依然として多数配信されている実態を指摘した。広告審査プロセスの不備や、悪質な広告主が審査をすり抜けるための手口が具体的に分析されており、広告エコシステム全体の構造的な問題として論じられている。プラットフォーム側の対策が後手に回りがちな理由を、実際の広告事例を交えて解説している点が特徴だ。

詳細は [Why is Google still serving dodgy ads?](https://www.atomic14.com/2026/09/13/why-is-google-still-serving-dodgy-ads) を参照。

## コネクテッドカーが集めるデータ、第三者への販売実態

The Vergeのコラムが、自動車メーカーが車両から収集する走行データや位置情報が第三者データブローカーに販売されている実態を報じた。保険会社や広告主にデータが流れる仕組みや、ユーザーが同意した覚えのないデータ利用が行われている問題点を整理している。IoTデバイスとしての自動車が持つプライバシーリスクを考える上で参考になる内容だ。

詳細は [Data collected by cars and sold to third parties](https://www.theverge.com/column/994172/your-car-is-selling-your-data) を参照。

## GitHub、本番投入前にLLMを評価する方法を解説

GitHubが公式ブログで、LLMを本番環境に投入する前に品質を評価するための手法をまとめたガイドを公開した。評価用データセットの設計、自動評価と人手評価の使い分け、回帰検知の仕組みづくりなど、実務でLLMアプリケーションを運用する際に直面する課題を体系的に整理している。プロンプトの変更やモデルのアップデートによる品質劣化を早期に検知するための実践的な指針として参考になる。

詳細は [How to evaluate LLMs before production](https://github.blog/ai-and-ml/llms/how-to-evaluate-llms-before-production/) を参照。

## 「ループ」「ハーネス」「群れ」——AI業界の新語をGitHubが整理

GitHubが、AIコーディングエージェント界隈で使われるようになった新しい用語（ループ、ハーネス、squad、hill climbingなど）を解説する記事を公開した。エージェント型開発ツールの急速な普及に伴い、開発者コミュニティ内で独自の語彙が生まれていることを踏まえ、それぞれの用語が指す技術的な概念や、なぜそうした表現が使われるようになったのかを紹介している。

詳細は [Decoding the new AI lingo: Loops, harnesses, squads, hill climbing… oh my!](https://github.blog/ai-and-ml/decoding-the-new-ai-lingo-loops-harnesses-squads-hill-climbing-oh-my/) を参照。

## リモートKVM機器「JetKVM Mini」が登場

小型リモートKVM（Keyboard, Video, Mouse）機器を手がけるJetKVMが、より安価でコンパクトな新製品「JetKVM Mini」を発表した。物理的にアクセスできないサーバーやPCの画面・キーボード・マウス操作をネットワーク経由で遠隔操作できる製品カテゴリで、ホームラボ運用者や小規模データセンター管理者から高い関心を集めている。オープンソースファームウェアを採用している点も既存ユーザーから支持されている理由の一つとされる。

詳細は [JetKVM Mini](https://jetkvm.com/blog/introducing-jetkvm-mini) を参照。

## Julia 1.13がリリース、主な変更点をハイライト

科学技術計算向けプログラミング言語Juliaの公式ブログが、バージョン1.13の主要な変更点をまとめたハイライト記事を公開した。コンパイラの改善やパッケージ管理まわりの機能強化など、パフォーマンスと開発体験の両面にわたるアップデート内容が紹介されている。数値計算・データ分析用途でJuliaを利用する開発者にとって押さえておきたい内容だ。

詳細は [Julia 1.13 Highlights](https://julialang.org/blog/2026/09/julia-1.13-highlights/) を参照。

## AIアライメント評価、2025年の手法をどう発展させるか

LessWrongに投稿された記事が、2025年に提案されたアライメント評価（alignment evals）のシンプルな派生手法について、その後の検証や改善の取り組みを報告している。モデルの「望ましくない行動」を検出するための評価設計をどう洗練させていくかという、AI安全性研究の地道な積み重ねを扱った内容で、評価手法そのものの限界や落とし穴についても言及されている。

詳細は [Astra and Fable still hack on simple variants of alignment evals from 2025](https://www.lesswrong.com/posts/munJKF7iWMsWJLAH2/astra-and-fable-still-hack-on-simple-variants-of-alignment) を参照。

## Zenn注目記事：LLMのトークン効率化とgit worktreeによる並列開発

国内Zennでは、生成AIを開発ワークフローに組み込む際の実践的なノウハウ記事がトレンド入りしている。「LLMのトークン効率化で気をつけたいことまとめ」はプロンプト設計やコンテキスト管理におけるコスト・レイテンシ削減の注意点を整理し、「Herdr × git worktree × Claude Codeの相性がいい話」はgit worktreeを使って複数のClaude Codeセッションを並列実行するワークフローを紹介している。AIコーディングツールを日常の開発プロセスにどう組み込むかという、実務目線の工夫が共有されている。

詳細は [LLMのトークン効率化で気をつけたいことまとめ](https://zenn.dev/ml_bear/articles/e5cc1047cba176) および [Herdr × git worktree × Claude Codeの相性がいい話](https://zenn.dev/gemcook/articles/herdr-worktree-parallel) を参照。

## Zenn注目記事：ORMのJOINで起こるデカルト積問題を実測

ZennではORM利用時に起こりがちな「デカルト積問題」を扱った記事も注目を集めた。複数のhasMany関連を一度のJOINで取得しようとすると、行数が関連レコード数の掛け算で爆発的に増加し、メモリやクエリ性能に深刻な影響を与える現象を、実際のベンチマーク数値とともに解説している。ORMが生成するSQLをブラックボックスのまま使わず、実行計画や結果セットのサイズを意識することの重要性を再確認させる内容だ。

詳細は [デカルト積問題って知っとるか〜？ 気軽にJOINでメモリ爆発するアレのヤバさ実測すぞ！](https://zenn.dev/levtech/articles/cartesian-product-doctrine-orm) を参照。
