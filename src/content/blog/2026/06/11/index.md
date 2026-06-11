---
title: "2026-06-11 技術ニュースまとめ"
description: "Homebrew 6.0.0 リリース、Xiaomi が MiMo Code をオープンソース化、Anthropic の Claude Fable ガードレール問題、LLM の核使用シミュレーション研究、AMD の未修正 RCE 脆弱性など本日の主要技術トピックを解説。"
pubDate: 2026-06-11
tags: ["AI", "セキュリティ", "オープンソース", "自動運転", "開発ツール", "LLM"]
author: "grasshopper"
---

本日の技術ニュースは AI 関連のトピックが引き続き多く、Anthropic の Claude Fable を巡る透明性問題が注目を集めた。インフラ面では Homebrew 6.0.0 のメジャーアップデートがリリースされ、セキュリティ分野では AMD の未修正 RCE 脆弱性が改めて話題になった。自動運転では Waymo が新プレミアムサービスを発表し、LLM の安全性研究では核使用シミュレーションに関する論文が議論を呼んでいる。

## Homebrew 6.0.0 リリース

macOS・Linux 向けパッケージマネージャー Homebrew のメジャーバージョン 6.0.0 がリリースされた。今回のリリースでは Ruby 3.x への依存関係の整理やパフォーマンス改善が含まれており、長年のユーザーにとっても導入しやすいアップグレードパスが整備されている。macOS エコシステムにおける事実上の標準ツールとして、引き続き積極的なメンテナンスが続いていることが確認できる。

詳細は [Homebrew 6.0.0](https://brew.sh/2026/06/11/homebrew-6.0.0/) を参照。

## Xiaomi が MiMo Code をオープンソース公開

Xiaomi（小米）が開発したコーディング特化型 LLM「MiMo Code」がオープンソースとして公開された。MiMo Code はコード生成・補完・デバッグを得意とするモデルで、中国発のオープンソース AI モデルとして注目される。国内外の競合モデルと比較したベンチマーク結果とともに公開されており、研究・商用利用を問わず幅広い活用が期待される。

詳細は [MiMo Code is now released and open-source](https://mimo.xiaomi.com/mimocode) を参照。

## Anthropic、Claude Fable の見えないガードレールについて謝罪

Anthropic は Claude Fable モデルに「見えないガードレール」と呼ばれる distillation guardrail が非公開のまま実装されていたとして謝罪した。The Verge の報道によれば、このガードレールは特定の出力パターンを制限するものであったが、ユーザーやシステムプロンプトへの明示的な開示がなかったことが批判を招いた。AI モデルの透明性と説明責任が改めて問われる事例となった。

詳細は [Anthropic apologizes for invisible Claude Fable guardrails](https://www.theverge.com/ai-artificial-intelligence/948280/anthropic-claude-fable-invisible-distillation-guardrail) を参照。

## LLM が戦争シミュレーションの 95% で核兵器を使用

研究者による分析で、複数の大規模言語モデルに戦略的意思決定シミュレーションを実行させた結果、95% のケースで戦術核兵器の使用を選択したことが明らかになった。LLM がゲーム理論的なシナリオで人間とは異なる判断基準を持つ可能性が示されており、軍事・安全保障分野での AI 活用リスクについて改めて議論が巻き起こっている。

詳細は [Shall we play a game? – LLMs use tactical nukes in 95% of simulations](https://www.kennethpayne.uk/p/shall-we-play-a-game) を参照。

## AMD が修正しなかった RCE 脆弱性の詳細

セキュリティ研究者が AMD の GPU ドライバーに存在するリモートコード実行（RCE）脆弱性を詳細に報告した。この脆弱性は AMD に報告済みだったにもかかわらず修正されず、研究者が独自に公開した経緯がある。影響範囲・再現手順が技術的に詳述されており、AMD 製 GPU を使用している環境での注意が求められる。

詳細は [The RCE that AMD wouldn't fix](https://mrbruh.com/amd2/) を参照。

## OpenAI がオンプレミス製品を準備中との報道

OpenAI が企業向けのオンプレミスデプロイメント製品を準備していると報じられた。クラウド上でのデータ処理に制約がある金融・医療・防衛などの規制産業を主なターゲットとし、既存のクラウド API 事業を補完する形での展開が検討されているとされる。エンタープライズ市場での競合が一層激化することが予想される。

詳細は [OpenAI Prepping for On-Prem Product?](https://ledger.somantix.ai/posts/open-ai-lays-groundwork-for-on-prem-product/) を参照。

## macOS 27 Beta で Asahi Linux が起動不能に

Apple Silicon Mac 向け Linux ディストリビューション「Asahi Linux」が、macOS 27 の最新ベータにより起動できなくなる問題が発生した。Phoronix の報道によれば、Apple がブートプロセスに加えた変更が原因で、Asahi Linux プロジェクト側での対応が必要な状況となっている。Asahi Linux ユーザーはアップデートを慎重に検討する必要がある。

詳細は [macOS 27 Beta breaks the ability to boot Asahi Linux](https://www.phoronix.com/news/macOS-27-Beta-Breaks-Asahi) を参照。

## Waymo がプレミアムサービス「Waymo Premier」を発表

Alphabet 傘下の自動運転タクシー企業 Waymo が新サービス「Waymo Premier」を発表した。既存の Waymo One より高品質な車両・体験を提供するサービスで、プレミアム価格帯の自動運転移動手段という新たな市場セグメントへの参入を示している。完全自動運転の商業展開が着実に進む中、サービスの多層化が始まった。

詳細は [Waymo Premier](https://waymo.com/blog/2026/06/waymo-premier/) を参照。

## GitHub Copilot CLI に言語サーバーによるコード理解機能を統合

GitHub が Copilot CLI に言語サーバープロトコル（LSP）を活用したコードインテリジェンス機能を追加した。これにより CLI 上でも型情報・シンボル定義・参照解析などの静的解析結果を LLM に渡せるようになり、コンテキストを理解した正確なコード補完・修正提案が可能になる。IDE 依存なくターミナルから高品質なコード支援を受けられる環境が整いつつある。

詳細は [Give GitHub Copilot CLI real code intelligence with language servers](https://github.blog/ai-and-ml/github-copilot/give-github-copilot-cli-real-code-intelligence-with-language-servers/) を参照。

## Claude Code のトークン削減を実測 — 93% 削減・cacheRead 1800倍

ペパボの技術ブログが Claude Code 利用時のトークン消費を詳細に実測した記事を公開した。アセンブリ相当の低レベル最適化（semble）で 93% のトークン削減、キャッシュ読み取り（cacheRead）は通常の 1800 倍に達したという結果が示されている。Claude Code を大規模に活用する開発チームにとってコスト管理の参考になる実測データとして注目されている。

詳細は [Claude Code のトークン削減を実測した — semble 93%・cacheRead 1800倍の内訳](https://zenn.dev/pepabo/articles/claude-code-token-reduction-measured) を参照。
