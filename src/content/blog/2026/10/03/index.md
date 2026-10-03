---
title: "Linux on M4の挑戦、UtahのVPN法に違憲的判断、Git 2.56ほか"
description: "Apple M4でLinuxを動かす取り組み、UtahのVPN法をめぐるEFFの勝訴、Git 2.56のハイライト、GitHubのAIセキュリティエージェントによるAndroid脆弱性発見などをまとめた2026年10月3日の技術ニュース。"
pubDate: 2026-10-03
tags: ["Linux", "Git", "セキュリティ", "AI", "Zenn", "Hacker News"]
author: "grasshopper"
---

本日は Hacker News、Zenn、GitHub Blog から技術ニュースを取り上げる。Apple Silicon (M4) 上で Linux を動かす取り組みや、Utah 州の VPN 規制法をめぐる裁判所の判断が注目を集めた。GitHub Blog では Git 2.56 のハイライトと、AI セキュリティエージェントによる Android 脆弱性の発見が公開されている。Zenn では Jujutsu への移行や AI 開発時代のツール運用に関する記事がトレンド入りした。

## Linux on M4 ── "The Forgetful CPU"

Apple M4 上で Linux を動作させる取り組みについてのブログ記事が Hacker News で話題になっている。タイトルから、M4 の CPU 挙動に関する癖への対処が主題と読み取れる。Apple Silicon は公式にサードパーティ OS を前提としていないため、新世代チップへの対応は逆解析の積み重ねが重要になる。

詳細は [The Forgetful CPU (Linux on M4)](https://yuka.dev/blog-2026-10-02-linux-m4.html) を参照。

## Utah 州の VPN 法は「技術的に不可能」と裁判所が判断

EFF は、Utah 州の VPN 関連法が技術的に実現不可能な義務を課しているとする主張を裁判所が認めたと報じている。HN でも 500 ポイントを超える反響があった。通信の匿名性・年齢確認規制と、実装可能性の乖離という観点で、開発者やサービス事業者にも関係が深い。

詳細は [Court agrees with EFF: Utah's VPN law demands a technical impossibility](https://www.eff.org/deeplinks/2026/10/court-agrees-eff-utahs-vpn-law-demands-technical-impossibility) を参照。

## Apple Pass Designer

Apple が Wallet パスを作成するための Pass Designer を公開しており、HN で議論されている。パスの作成・管理を簡便にするツールで、チケットや会員証を扱う開発者に関係する。

詳細は [Apple Pass Designer](https://developer.apple.com/pass-designer/) を参照。

## Git 2.56 のハイライト

GitHub Blog によると、Git 2.56 ではコンフリクト解決をより安全に行える `git add --resolved` が導入され、merge-base の計算やリポジトリの repack といった処理で大幅な性能改善が入った。大規模リポジトリを扱うチームには恩恵が大きい。

詳細は [Highlights from Git 2.56](https://github.blog/open-source/git/highlights-from-git-2-56/) を参照。

## AI セキュリティエージェントで Android の脆弱性 24 件を発見

GitHub のセキュリティチームは、オープンソースの AI セキュリティエージェントとカスタマイズしたタスクフローを使い、Android アプリから 24 件の脆弱性を見つけたと報告している。位置情報の追跡やアカウント乗っ取りにつながるものが含まれる。AI による脆弱性探索を再現可能なワークフローに落とし込む例として参考になる。

詳細は [How we found 24 Android vulnerabilities using our open source AI security agent](https://github.blog/security/how-we-found-24-android-vulnerabilities-using-our-open-source-ai-security-agent/) を参照。

## AI 時代に鍛えるべき三つのスキル

GitHub Blog は、AI エージェントへの指示、出力の批判的レビュー、技術的判断力の維持を、開発者が強化すべきスキルとして挙げている。実装作業が AI に移る中での役割の変化を整理した内容である。

詳細は [AI is changing developer work. Here are three skills to strengthen.](https://github.blog/ai-and-ml/ai-is-rewriting-the-developer-career-ladder-heres-how-to-stand-out/) を参照。

## Jujutsu に移行して Git に戻れなくなった理由（Zenn）

15 年間 Git を使ってきた筆者が Jujutsu (jj) に移行した理由を述べた記事が Zenn のトレンドに入っている。Git 互換を保ちつつ異なる操作モデルを持つバージョン管理ツールへの関心の高さがうかがえる。

詳細は [Jujutsu と出会い、15 年使った Git にもう戻れなくなった理由](https://zenn.dev/oukayuka/articles/15years-git-then-jujutsu) を参照。

## Claude Code の使用量カウントを実測（Zenn）

Max 20x プランでの実測により、使用量の重み付けが API 料金表とは異なっていたとする検証記事。AI コーディングツールのコスト管理に役立つ。

詳細は [Claude Code の使用量はどう数えられているのか ── Max 20x で実測した重みは API 料金表と違った](https://zenn.dev/tksfjt1024/articles/25c0ab111c277c) を参照。

## OpenAI DevDay 2026 発表まとめ（Zenn）

OpenAI DevDay 2026 の発表内容をまとめた記事が公開されている。開発者向けの新機能を俯瞰するのに便利である。

詳細は [OpenAI DevDay 2026 発表まとめ](https://zenn.dev/schroneko/articles/openai-devday-2026) を参照。

## terraform apply で 1 か月半前のコードが本番に出ていた（Zenn）

terraform apply の結果、古いコードが本番に反映されていたという運用上の失敗事例。IaC のデプロイ経路やバージョン固定の確認の重要性を示す。

詳細は [terraform applyしたら、1ヶ月半前のコードが本番に出ていた](https://zenn.dev/gonta_ganbareyo/articles/6256bf2008b2ef) を参照。
