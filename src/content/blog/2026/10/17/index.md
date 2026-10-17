---
title: "Claude による ECDSA 曲線の来歴調査、Waymo トロント進出、FLUX 3 Image Klein など"
description: "2026-10-17 の技術ニュース。Hacker News の話題(Claude の ECDSA 研究、PS5 での llama.cpp、FLUX 3 Image Klein、Waymo トロント)、GitHub Blog のスター履歴再設計、Zenn の OSS・テスト関連記事をまとめる。"
pubDate: 2026-10-17
tags: ["Hacker News", "AI", "GitHub", "Zenn", "OSS", "自動運転"]
author: "grasshopper"
---

本日の Hacker News では、AI 関連の話題が目立った。Anthropic の ECDSA 曲線の来歴に関する調査、画像生成モデル FLUX 3 Image Klein、脱獄済み PS5 上で llama.cpp を動かす試みなどが上位に入っている。モビリティ分野では Waymo のトロント展開が話題になった。GitHub Blog はスター履歴の再設計とセキュアなアクセス自動化を取り上げ、Zenn では OSS が PR を閉じ始めた件やテスト設計の記事が人気を集めている。なお、各リンク先の本文までは取得しておらず、以下はタイトルから読み取れる範囲の紹介である。

## Claude reveals ECDSA curve origins

Anthropic の研究ページとして、ECDSA で使われる楕円曲線の由来を Claude が調べた内容が公開されている。暗号標準のパラメータ選定の透明性は長年議論されてきたテーマであり、AI が来歴の検証に使われる点が注目される。

詳細は [Claude reveals ECDSA curve origins](https://www.anthropic.com/research/ecdsa-curve-origins) を参照。

## FLUX 3 Image Klein

Black Forest Labs が「FLUX 3 Image Klein」のブログを公開した。FLUX シリーズの新しいモデルで、画像生成モデルの更新動向として押さえておきたい。

詳細は [FLUX 3 Image Klein](https://bfl.ai/blog/flux-3-image-klein) を参照。

## 脱獄済み PS5 で llama.cpp を動かす

脱獄した PS5 上で GGUF 形式のモデルをネイティブ実行するプロジェクト「PS5LM」が公開された。家庭用ゲーム機のハードウェアをローカル LLM 推論に流用する実験として興味深い。

詳細は [Llama.cpp on a jailbroken PS5](https://github.com/cobanov/PS5LM) を参照。

## Waymo in Toronto

Waymo がトロントに関する発表を行った。北米の別の都市・国への自動運転タクシーの展開として注目される。

詳細は [Waymo in Toronto](https://waymo.com/blog/2026/10/waymo-in-toronto/) を参照。

## Tesla Roadster

Tesla の Roadster ページが Hacker News のトップに上がっている。

詳細は [Tesla Roadster](https://www.tesla.com/roadster) を参照。

## From 2,500 requests to 24: スター履歴の再構築

GitHub Blog より。スター履歴の取得を、スターした全ユーザーを取得せずに再構築することで、リクエスト数を約 2,500 から 24 に削減した事例。API 呼び出し数の最適化という点で参考になる。

詳細は [From 2,500 requests to 24: Rebuilding star history without the stargazers](https://github.blog/engineering/architecture-optimization/from-2500-requests-to-24-rebuilding-star-history-without-the-stargazers/) を参照。

## Staying Evergreen: 共有 Org のアクセスとリポジトリ管理の自動化

GitHub 社内の共有 Organization で、セキュアなアクセス管理とリポジトリの衛生管理を自動化した取り組みの紹介。

詳細は [Staying Evergreen](https://github.blog/engineering/platform-security/staying-evergreen-how-we-automated-secure-access-and-repo-hygiene-in-a-shared-org/) を参照。併せて [GitHub availability report: September 2026](https://github.blog/news-insights/company-news/github-availability-report-september-2026/) も公開されている。

## 有名 OSS が PR を閉じはじめた

Zenn のトレンド記事。AI 生成と思われる PR の増加など、OSS メンテナの負荷に関連した動きを整理し、どう向き合うかを論じている。

詳細は [有名 OSS が PR を閉じはじめた。何が起きていて、どう向き合うか](https://zenn.dev/hand_dot/articles/ecb391d4322330) を参照。

## 良いテストを書き、良いテストを見分ける

『単体テストの考え方/使い方』のエッセンスをまとめた記事。テストの質を見極める観点を学べる。

詳細は [良いテストを書き、良いテストを見分ける](https://zenn.dev/nexta_/articles/unit-testing-principles-essence) を参照。

## 改めて考える、AIエンジニアリングの今

AI エンジニアリングの現状を整理し直す Zenn の記事。

詳細は [改めて考える、AIエンジニアリングの今](https://zenn.dev/r_kaga/articles/2fd185c50cea7c) を参照。
