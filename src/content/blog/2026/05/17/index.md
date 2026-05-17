---
title: "2026-05-17 技術ニュースまとめ"
description: "AMD SEV-SNP脆弱性「Fabricked」公開、VercelのZero言語登場、BunのRust書き換え、エージェント向けコード検索Semble、GitHub Issuesのパフォーマンス改善など本日の主要技術トピックをまとめる。"
pubDate: 2026-05-17
tags: ["AI", "セキュリティ", "Rust", "開発ツール", "GitHub", "LLM"]
author: "grasshopper"
---

本日は、セキュリティ研究・新プログラミング言語・AIコーディングツールの競争という三つの軸で大きなニュースが重なった。AMDのハードウェアセキュリティ機構を突破する攻撃手法「Fabricked」が公開され、クラウドセキュリティ分野に波紋を投げかけている。一方、VercelがシステムプログラミングのためのZero言語を公表し、BunのRust書き換えとともに言語・ランタイム領域が再び活況を呈している。AIコーディングアシスタントではClaude CodeとCodexを比較する実体験レポートが注目を集め、GitHubはアクセシビリティエージェントの構築知見やIssuesのゼロレイテンシー改善事例を公開した。

## AMD SEV-SNPを突破する「Fabricked」攻撃手法が公開

セキュリティ研究者グループが、AMDのInfinity Fabricを意図的に誤設定することでSEV-SNP（Secure Encrypted Virtualization-Secure Nested Paging）の保護を突破できる攻撃手法「Fabricked」を発表した。SEV-SNPはクラウド仮想マシンのメモリを暗号化・隔離する機密コンピューティングの基盤技術であり、多くの主要クラウドプロバイダーが採用している。今回の研究は、ハードウェアレベルのファブリック設定を操作するだけでTEE（Trusted Execution Environment）の分離が破れることを実証しており、ハイパーバイザー開発者やクラウドオペレーターへの迅速なパッチ適用が求められる。機密コンピューティングへの信頼を揺るがす発見として業界全体の注目を集めている。

詳細は [Fabricked: Misconfiguring Infinity Fabric to Break AMD SEV-SNP](https://xca-attacks.github.io/fabricked/) を参照。

## VercelがシステムプログラミングのためのZero言語を公開

Vercelがフロントエンドインフラだけにとどまらずシステムプログラミング向けの自社言語「Zero」を公表した。エッジランタイムや次世代インフラの内部実装を念頭に設計されたとされ、開発者コミュニティでは「Rustの後継を狙うのか」という議論が活発に起きている。Webホスティング・デプロイ基盤で圧倒的な存在感を持つVercelが自前の言語スタックを持つことは、インフラ技術の垂直統合がさらに進む象徴的な動きだ。言語仕様や既存エコシステムとの統合については続報が待たれる。

詳細は [Vercelがシステムプログラミング言語「Zero」を公開した！](https://zenn.dev/tkithrta/articles/74b35b39c2bb5e) を参照。

## BunがわずかつつRustに書き換わった件

JavaScriptランタイム「Bun」が特定コンポーネントをわずか6日でRustで書き直した経緯と判断基準をまとめた記事がZennでトレンド入りしている。BunはもともとZig言語で構築されており、パフォーマンスと開発体験のバランスを追求してきたが、今回の移行ではRustのエコシステムや型安全性が決め手になったとされる。実際のプロダクトコードベースにおけるZig→Rust移行の具体的な知見は少なく、システムプログラマにとって貴重な一次情報として注目を集めている。

詳細は [Bun が 6 日で Rust に書き換わった件](https://zenn.dev/ashunar0/articles/55a669c10e6a8d) を参照。

## Semble: エージェント向けコード検索でトークン消費を98%削減

Hacker NewsのShow HNとして登場した「Semble」は、AIエージェント向けのコード検索ライブラリだ。従来のgrepと比較してトークン消費量を最大98%削減できるとアピールしており、LLMへ渡すコンテキストを最小化しながら関連コードを精度良く抽出する。エージェントワークフローでのコードベース探索が当たり前になりつつある中、トークンコスト削減は直接的な運用コスト削減にも直結する。semantic searchとシンボル解析を組み合わせた実装が効率化を実現しているとされる。

詳細は [Show HN: Semble – Code search for agents that uses 98% fewer tokens than grep](https://github.com/MinishLab/semble) を参照。

## Claude CodeからCodexへ移行する前に知りたかったこと

Claude Codeのヘビーユーザーだった筆者がOpenAI Codexへ乗り換えを検討した際に気づいた両者の差異を、実体験に基づいてまとめた記事がZennに掲載された。コンテキスト管理・ファイル編集精度・エージェント的な振る舞いの違いを具体的なシナリオで比較しており、AIコーディングアシスタントの選択を迷っているエンジニアにとって実用的な情報が詰まっている。ツール選択は目的やワークフローによって異なるという結論も示されており、盲目的な乗り換えへの警鐘にもなっている。

詳細は [Claude Code派だった僕がCodexに移る前に知りたかったこと](https://zenn.dev/gemcook/articles/e56eabc7ba2961) を参照。

## LLM Wikiを1ヶ月運用してわかった「知識をつなぐ力」の重要性

Andrej Karpathy氏が提唱するLLM Wikiの考え方を基に、1ヶ月の実運用から得られた知見をまとめた記事がZennでトレンド入りしている。個別の事実を記録するだけでなく、概念間の関連性を構造化することこそがLLMを実践的な知識ツールとして機能させる鍵だという洞察が展開されている。RAGや外部メモリシステムの設計を考える上でも示唆的な観点であり、LLMアプリケーション開発者に広く読まれている。

詳細は [Andrej Karpathy氏のLLM Wikiを1ヶ月運用してわかった、LLMの知識を『繋げる力』](https://zenn.dev/tsurubee/articles/llm-wiki-connecting-knowledge) を参照。

## GitHubがアクセシビリティエージェント構築の知見を公開

GitHub Copilotチームが、汎用アクセシビリティエージェントの設計・構築プロセスで得た知見をブログで公開した。スクリーンリーダー対応や色覚多様性サポートなど多様なアクセシビリティ要件に対してAIエージェントで自動化するアプローチを採用し、実装上のトレードオフや設計原則を丁寧に解説している。アクセシビリティとAIの組み合わせは社会的重要性が高く、技術的な実践例として業界全体に参考になる内容だ。

詳細は [Building a general-purpose accessibility agent—and what we learned in the process](https://github.blog/ai-and-ml/github-copilot/building-a-general-purpose-accessibility-agent-and-what-we-learned-in-the-process/) を参照。

## GitHub Issuesのナビゲーションをゼロレイテンシー化した改善事例

GitHubエンジニアリングチームが、Issuesのページ遷移を「体感ゼロ遅延」レベルまで高速化した最適化事例を技術ブログで詳述した。プリフェッチ・クライアントサイドキャッシュ・段階的レンダリングなど複数のテクニックを組み合わせたアーキテクチャ改善であり、before/afterの数値も合わせて公開されている。大規模SaaSにおけるフロントエンドパフォーマンス改善の実例として、エンジニアが即座に応用できる知見が多く含まれている。

詳細は [From latency to instant: Modernizing GitHub Issues navigation performance](https://github.blog/engineering/architecture-optimization/from-latency-to-instant-modernizing-github-issues-navigation-performance/) を参照。

## GitHubがバグバウンティプログラムを刷新し共同責任モデルへ

GitHubがバグバウンティプログラムの品質基準と運用方針を更新する発表を行った。セキュリティ研究者からの報告品質を高めるための新指針と、プラットフォーム側・研究者側双方が責任を共有するフレームワークを打ち出している。「質の高い脆弱性報告は全員のメリットになる」という考え方は、今後の業界標準になり得るアプローチだ。報奨金制度の透明性向上も含まれており、セキュリティコミュニティとの信頼強化を狙った内容となっている。

詳細は [Raising the bar: Quality, shared responsibility, and the future of GitHub's bug bounty program](https://github.blog/security/raising-the-bar-quality-shared-responsibility-and-the-future-of-githubs-bug-bounty-program/) を参照。

## 「AIはプロセスを速くしない」という論考がHNで議論を呼ぶ

「AIはあなたのプロセスをより速くするとは思わない」というタイトルのブログ記事がHacker Newsで大きな議論を呼んでいる。AIツールが個々のタスクを高速化する一方で、プロセス全体のボトルネックを解消するわけではなく、むしろ新たな調整コストや意思決定の遅延を生む可能性があるという論点が展開されている。コンウェイの法則やリトルの法則を引きながら組織論と絡めた分析は説得力があり、LLMへの楽観的な期待に対する冷静な反論として、エンジニアリングマネジャーやテックリードに広く読まれている。

詳細は [I don't think AI will make your processes go faster](https://frederickvanbrabant.com/blog/2026-05-15-i-dont-think-ai-will-make-your-processes-go-faster/) を参照。

## Rustの unsafe 入門：怖くない使い方を解説

Zennで「怖くないunsafe入門」と題したRust記事がトレンド入りしている。`unsafe`ブロックは多くのRust初学者が敬遠しがちな機能だが、適切に使えば安全なabstractionを構築するための強力な道具になる。生ポインタ操作・FFI・アトミック操作など具体的なユースケースを通じて、何が「安全」で何が「危険」なのかを丁寧に整理しており、Rustの型システムの設計思想への理解も深まる内容だ。

詳細は [【Rust】怖くないunsafe入門](https://zenn.dev/nuskey/articles/rust-introduction-to-unsafe) を参照。
