---
title: "GPT 6.1 Sol の登場、Git 2.56、GitHub の CSS Modules 移行など：2026-09-30 の技術ニュース"
description: "OpenAI の GPT 6.1 Sol、Git 2.56、GitHub の CSS Modules 移行と Android 脆弱性発見、NAND ゲートだけで作られたコンピュータ、Zenn の Jujutsu やテスト論をまとめて紹介します。"
pubDate: 2026-09-30
tags: ["AI", "Git", "GitHub", "セキュリティ", "フロントエンド", "Zenn"]
author: "grasshopper"
---

本日は Hacker News で OpenAI の新モデル「GPT 6.1 Sol」が大きな注目を集めた。GitHub Blog では Git 2.56 のハイライト、CSS-in-JS から CSS Modules への移行によるパフォーマンス改善、AI エージェントによる Android 脆弱性の発見が公開されている。Zenn では Git に代わるバージョン管理 Jujutsu の体験談や、AI 開発時代のテストの役割を論じた記事が伸びている。ハードウェア寄りでは、NAND ゲートだけで構成したコンピュータや、インドの送配電ロスの大幅改善も話題になった。

## GPT 6.1 Sol：「Astra に近い知能を 5 分の 1 の価格で」

OpenAI が GPT 6.1 Sol を発表した。HN のタイトルでは、上位モデル Astra に近い知能を約 5 分の 1 の価格で提供するとされている。高性能モデルの価格低下は、エージェント用途のように呼び出し回数が多いワークロードのコスト設計に直接効く。ベンチマークの詳細や提供条件は公式ページで確認したい。

詳細は [GPT 6.1 Sol: Near-Astra intelligence for a fifth of the price](https://openai.com/index/introducing-gpt-6-1-sol/) を参照。

## Git 2.56 のハイライト

GitHub Blog によると、Git 2.56 ではコンフリクト解消ワークフローの安全性向上、merge-base 計算の高速化、path-walk repack の強化が入った。大規模リポジトリでの操作性やリポジトリサイズの最適化に関わる改善で、日常的に Git を使う開発者にも恩恵がある。

詳細は [Highlights from Git 2.56](https://github.blog/open-source/git/highlights-from-git-2-56/) を参照。

## GitHub が CSS-in-JS から CSS Modules へ移行

GitHub は CSS-in-JS から CSS Modules へ移行し、サーバーサイドレンダリングが 55% 高速化するなどの成果を得たと報告した。タイトルは「より多くの CSS を配信することでパフォーマンスを改善」で、実行時のスタイル生成コストを、ビルド時に生成される静的 CSS に置き換える判断が技術的な要点になる。

詳細は [Improving site performance by shipping more CSS](https://github.blog/engineering/architecture-optimization/improving-site-performance-by-shipping-more-css/) を参照。

## オープンソース AI セキュリティエージェントで Android の脆弱性 24 件を発見

GitHub Security Lab は、AI を用いたタスクフローで Android アプリの脆弱性を 24 件見つけた事例を公開した。ツールはオープンソースで、他のセキュリティ研究者も利用できる。AI を脆弱性調査に組み込む具体例として参考になる。

詳細は [How we found 24 Android vulnerabilities using our open source AI security agent](https://github.blog/security/how-we-found-24-android-vulnerabilities-using-our-open-source-ai-security-agent/) を参照。

## NAND-16：277,248 個の NAND ゲートで作られたコンピュータ

NAND ゲート 277,248 個から構築したコンピュータ「NAND-16」が紹介された。NAND は万能ゲートであり、あらゆる論理回路を NAND だけで構成できるという原理を、コンピュータ全体の規模で実証したプロジェクトである。計算機アーキテクチャの教材としても興味深い。

詳細は [NAND-16: a computer built from 277,248 NAND gates](https://somethingbig.ai/computer) を参照。

## PS5 の「Relapse Exploit」

GitHub 上で PS5 向けのエクスプロイト「Relapse Exploit」のリポジトリが公開され、HN で議論になっている。中身の技術的詳細は各自でリポジトリを確認されたい。

詳細は [PS5 Relapse Exploit](https://github.com/ntfargo/Relapse-Exploit) を参照。

## デリーは送配電ロスを 50% から 5% へ削減した

IEEE Spectrum は、デリーが電力の送配電ロスを 50% から 5% に減らした経緯を取り上げている。インフラの計測と運用改善が大きな効果を生んだ事例として、技術者にも示唆がある。

詳細は [How Delhi cut electricity loss from 50 to 5 percent](https://spectrum.ieee.org/delhi-electricity-loss) を参照。

## Zenn：Jujutsu と出会い、15 年使った Git にもう戻れない

Zenn のトレンドでは、15 年間 Git を使ってきた筆者が Jujutsu に移行した理由を語る記事が上位に入った。Git に代わる、または Git と併用できる新しいバージョン管理ツールへの関心の高さがうかがえる。

詳細は [Jujutsu と出会い、15 年使った Git にもう戻れなくなった理由](https://zenn.dev/oukayuka/articles/15years-git-then-jujutsu) を参照。

## Zenn：AI 開発時代だからこそ、テストの役割を見つめ直す

同じく Zenn では、AI がコードを書く時代にテストが果たす役割を再考する記事がトレンド入りしている。生成コードの品質を担保する手段としてテストの重要性が増している、という問題意識は多くの現場に共通する。

詳細は [AI開発時代だからこそ、テストの役割を見つめ直す](https://zenn.dev/ababup1192/articles/77b844dcfc1529) を参照。

## Zenn：Rust 製自作 OS「octox」が大学の教材に

Rust で作られた自作 OS「octox」がサンフランシスコ大学の教材として使われていたことを紹介する記事も注目を集めた。個人開発の OS が教育現場で採用された事例である。

詳細は [Rustで作った自作OS「octox」がサンフランシスコ大学の教材になっていました](https://zenn.dev/o8vm/articles/3934806424cd85) を参照。
