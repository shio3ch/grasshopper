---
title: "Anthropicへの政府ブラックリスト措置に違法判断、Cloudflareは1.1.1.1で100TBのメモリ削減 — 2026年8月28日の技術ニュースまとめ"
description: "米連邦判事がトランプ政権によるAnthropicの取引排除を違法と判断。CloudflareはDNSキャッシュ最適化で100TBのメモリを削減し、GoogleはGemini-3.5-Transcribeを発表。GitHub Blogやローカル開発移行の知見も紹介。"
pubDate: 2026-08-28
tags: ["AI", "セキュリティ", "インフラ", "OSS", "開発ツール"]
author: "grasshopper"
---

本日はAI政策を巡る司法判断が大きな話題となった。連邦判事がトランプ政権によるAnthropicの取引排除措置を違法と判断したことが報じられ、AI企業と政府の関係を巡る議論に一石を投じている。インフラ分野ではCloudflareが1.1.1.1のDNSキャッシュ最適化により100テラバイトものメモリ削減を達成したことを公表し、モデル面ではGoogleが音声認識モデル「Gemini-3.5-Transcribe」を発表した。OSSコミュニティでは、AIエージェント（vibecodedなファザー）が発見したFFmpegのバグ報告や、GitHubがOpenClawプロジェクトのメンテナー支援に触れる記事を公開するなど、AIと開発ワークフローの融合が進む様子がうかがえる。国内Zennでは開発環境をクラウドに全面移行する事例やマイクロサービス間の認可設計に関する知見が共有された。以下、各トピックを詳しく紹介する。

## 米判事、トランプ政権によるAnthropicの取引排除を違法と判断

New York Timesの報道によると、米連邦判事はトランプ政権がAnthropicを政府調達や取引先リストから排除しようとした措置について違法との判断を下した。AI企業に対する政府の裁量的な取引排除がどこまで法的に許容されるかという論点は、AI政策と行政権限の境界を巡る重要な先例となりうる。AI企業と政府機関との関係が緊密化する中、今回の判断は今後の政策形成やコンプライアンス対応に影響を与える可能性がある。

詳細は [Judge Rules Trump Administration's Blacklisting of Anthropic Was Illegal](https://www.nytimes.com/2026/08/27/technology/anthropic-government-blacklisting-ruling.html) を参照。

## Cloudflare、1.1.1.1のDNSキャッシュ最適化で100テラバイトのメモリを削減

CloudflareはパブリックDNSリゾルバ「1.1.1.1」のキャッシュ実装を最適化し、全体で約100テラバイトのメモリ使用量を削減したと発表した。大規模分散システムにおいてキャッシュのデータ構造やエントリの表現方法を見直すことで、性能を落とさずにメモリ効率を大幅に改善した事例であり、超大規模インフラにおけるメモリ最適化の実践例として参考になる。ハッシュテーブルの構造やTTL管理、エントリのメモリレイアウトなど、低レベルな最適化技術に関する詳細が解説されている。

詳細は [Saving 100 terabytes of memory by optimizing 1.1.1.1's DNS cache](https://blog.cloudflare.com/dns-cache-memory-optimization-1111/) を参照。

## Google、音声認識モデル「Gemini-3.5-Transcribe」を発表

Googleは新しい音声認識（transcription）モデル「Gemini-3.5-Transcribe」を発表した。Geminiファミリーの一環として、音声からテキストへの変換精度や多言語対応、話者分離などの機能強化が図られているとみられる。マルチモーダルモデルが音声処理領域でも専用モデルに匹敵する性能を発揮しつつある流れの中で、汎用基盤モデルベンダーが特化タスク向けの派生モデルを次々と投入する競争が続いている。

詳細は [Gemini-3.5-Transcribe](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/) を参照。

## 「小型モデルの時代が来た」— Small Models Have Arrived

Hacker Newsで話題になったブログ記事「Small Models Have Arrived」は、パラメータ数を絞った小型LLMが実用面で急速に力をつけている現状を論じている。推論コストやレイテンシの制約からエッジ・オンデバイス実行への需要が高まる中、量子化や蒸留などの技術進化により小型モデルの性能が大型モデルに近づきつつある点が指摘されている。大規模モデル一辺倒ではなく、用途に応じてモデルサイズを使い分けるアーキテクチャ設計の重要性を改めて示す内容だ。

詳細は [Small Models Have Arrived](https://calv.info/small-models-have-arrived) を参照。

## AIエージェント向けベンチマーク「Terminal-Bench-Science」が公開

科学研究のワークフローにおけるAIエージェントの能力を評価する新しいベンチマーク「Terminal-Bench-Science」が公開された。ターミナル環境でのタスク実行能力を測るTerminal-Benchの派生として、データ解析や実験の再現、論文調査といった科学研究特有のタスクをAIエージェントがどこまでこなせるかを定量的に評価する枠組みを提供する。研究支援用途でのAIエージェント活用が進む中、標準化された評価基準の整備は実用性を判断する上で重要な意味を持つ。

詳細は [Terminal-Bench-Science: Evaluating AI agents on scientific research workflows](https://www.terminal-bench-science.ai/announcement) を参照。

## vibecodedファザーがFFmpegのゼロ除算バグを発見

FFmpegのイシュートラッカーに、AIによって生成された（vibecodedな）ファザーを用いてゼロ除算バグを発見したとの報告が投稿された。人間が手作業でファザーを実装するのではなく、AIコーディングツールを使って迅速にファジングハーネスを構築し、実際に長年見過ごされてきたバグを検出したという事例であり、AI支援によるセキュリティ・品質保証の実践的な有効性を示す好例といえる。大規模で歴史あるC言語プロジェクトに対する自動化テスト手法の進化を示す事例として注目される。

詳細は [We found a division by zero bug in FFmpeg with a vibecoded fuzzer](https://code.ffmpeg.org/FFmpeg/FFmpeg/issues/24290) を参照。

## GitHub Blog、バイラルOSSプロジェクト「OpenClaw」のメンテナー支援を紹介

GitHub Blogは、SNS等で急速に注目を集め「バイラル化」したOSSプロジェクト「OpenClaw」を運営するメンテナーたちに焦点を当てた記事を公開した。突発的なスター数急増やコントリビューション急増に伴う運用負荷、セキュリティレビュー体制の整備など、人気急上昇プロジェクト特有の課題とその対処法が紹介されている。急成長するOSSプロジェクトがコミュニティの信頼性を保ちながら持続可能な運営体制を築く難しさを浮き彫りにする内容だ。

詳細は [OpenClaw went viral. Meet the maintainers building and securing it.](https://github.blog/open-source/maintainers/openclaw-went-viral-meet-the-maintainers-building-and-securing-it/) を参照。

## GitHub Blog、本番投入前のLLM評価手法を解説

GitHub Blogは、LLMを本番環境に投入する前にどのように評価すべきかを解説する記事を公開した。オフライン評価とオンライン評価の使い分け、評価データセットの設計、回帰検知の仕組みなど、LLMアプリケーション開発におけるQAプロセスの体系的なアプローチが紹介されている。LLMを組み込んだ機能のリリースサイクルが加速する中、再現性のある評価基盤の構築は品質担保の鍵となる。

詳細は [How to evaluate LLMs before production](https://github.blog/ai-and-ml/llms/how-to-evaluate-llms-before-production/) を参照。

## Zenn: 開発の8割をクラウドに移した実践記

Zennで注目を集めた記事では、ローカル開発環境をやめてClaude CodeやCursorといったAIコーディングツールを中心に開発作業の8割をクラウド環境に移した経験が共有されている。ローカルマシンのスペックに依存しない開発体制や、複数デバイス間でのシームレスな作業継続、AIエージェントとの協業を前提とした開発フローの再設計など、AIコーディングツールの普及によって変化しつつある開発スタイルの具体例として参考になる内容だ。

詳細は [ローカルでの開発やめませんか？Claude Code / Cursorで開発の8割をクラウドに移した話](https://zenn.dev/sc30gsw/articles/953334f11df507) を参照。

## Zenn: マイクロサービス間の認可伝搬、独自実装とIETF Transaction Tokensを比較

Zennの技術記事では、マイクロサービス間でユーザーの認可情報をどう安全に伝搬させるかという課題について、独自実装のアプローチとIETFで標準化が進む「Transaction Tokens」仕様を比較検討している。サービス間呼び出しの各段階でユーザーコンテキストと権限情報を検証可能な形で引き継ぐ設計は、ゼロトラストアーキテクチャの実践における重要な要素であり、標準仕様への準拠がもたらす相互運用性のメリットが論じられている。

詳細は [マイクロサービス間の認可伝搬をどう解くか？独自実装と IETF Transaction Tokens を見比べてみた](https://zenn.dev/layerx/articles/e01465a15e79c2) を参照。
