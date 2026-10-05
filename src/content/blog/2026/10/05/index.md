---
title: "Jujutsuへの移行、OpenAI DevDay 2026、GitHubのAIセキュリティエージェントほか"
description: "2026-10-05の技術ニュース。OpenAI DevDay 2026の発表、Jujutsuへの移行談、GitHubのAIセキュリティエージェントによるAndroid脆弱性発見、Git 2.56、ローカルLLMやRust製ツールの話題をまとめる。"
pubDate: 2026-10-05
tags: ["AI", "Git", "セキュリティ", "Rust", "OSS", "開発ツール"]
author: "grasshopper"
---

本日はAI関連の話題が目立った。Zennでは OpenAI DevDay 2026 の発表まとめや、AI時代のテストの役割を見直す記事がトレンド入りしている。GitHub Blog では、オープンソースのAIセキュリティエージェントによるAndroid脆弱性の発見事例と Git 2.56 のハイライトが公開された。Hacker News ではローカルLLM、Rust 製のAdobe互換スイート、ブラウザ上で動く VB6 IDE など、開発者の関心を引く個人・OSSプロジェクトが上位に並んだ。

## OpenAI DevDay 2026 発表まとめ

Zenn で OpenAI DevDay 2026 の発表内容を整理した記事がトレンド入りしている。開発者向けイベントの発表は API やモデル提供形態の変更に直結するため、利用中のプロダクトへの影響を確認する出発点になる。

詳細は [OpenAI DevDay 2026 発表まとめ](https://zenn.dev/schroneko/articles/openai-devday-2026) を参照。

## GitHub、AIセキュリティエージェントで24件のAndroid脆弱性を発見

GitHub Blog は、自社のオープンソースAIセキュリティエージェントを用いて24件のAndroid脆弱性を見つけた事例を公開した。AIによる脆弱性探索が実用段階にあることを示す事例であり、防御側のツールとして自前のコードベースに適用する際の参考になる。

詳細は [How we found 24 Android vulnerabilities using our open source AI security agent](https://github.blog/security/how-we-found-24-android-vulnerabilities-using-our-open-source-ai-security-agent/) を参照。

## Git 2.56 のハイライト

GitHub Blog が Git 2.56 の注目点をまとめている。日常的に使うツールのリリースであり、新機能や挙動の変更点を把握しておく価値がある。

詳細は [Highlights from Git 2.56](https://github.blog/open-source/git/highlights-from-git-2-56/) を参照。

## Jujutsu に移行して Git に戻れなくなった理由

15年 Git を使った著者が Jujutsu へ移行した経緯を語る記事が Zenn でトレンド入り。Git 互換のバージョン管理を別のワークフローで運用する選択肢への関心の高さがうかがえる。

詳細は [Jujutsu と出会い、15 年使った Git にもう戻れなくなった理由](https://zenn.dev/oukayuka/articles/15years-git-then-jujutsu) を参照。

## AI開発時代のテストの役割

AIがコードを書く機会が増える中で、テストが担う役割を見つめ直す記事。生成コードの品質を担保する手段としてのテストの位置づけを論じている。

詳細は [AI開発時代だからこそ、テストの役割を見つめ直す](https://zenn.dev/ababup1192/articles/77b844dcfc1529) を参照。

## JSON 実装差異の落とし穴

シンプルな仕様のJSONでも、実装ごとに微妙な差異が生じる点を扱った記事。相互運用時の落とし穴を事前に知っておくと、パーサ間の不整合によるバグを避けやすい。

詳細は [JSONはシンプルで明快な仕様が魅力ですが…](https://zenn.dev/qnighy/articles/json-ambiguity) を参照。

## ローカルLLM: RTX 4090 で 125B モデルを実行

Hacker News では、コンシューマ向けGPU(RTX 4090)で大規模モデルを動かすとするプロジェクトが話題。主張される性能は未検証のため、実際の再現性は各自で確認したい。

詳細は [Run Qwen 3.8 Flash Next (125B) on consumer hardware (RTX 4090) at 100T/s](https://github.com/Niko1221/Strata) を参照。

## Rust 製の Adobe 互換スイート「ArtCraft Apps」

Rust で書かれたオープンソースのAdobe互換スイートが Hacker News で注目を集めた。クリエイティブツール領域におけるOSS・Rust採用の広がりを示す。

詳細は [ArtCraft Apps – open-source Adobe compatible suite written in Rust](https://getartcraft.com/apps) を参照。

## ブラウザ上で動くクラシック VB6 IDE

ブラウザネイティブで動作するVisual Basic 6のIDEが公開された。レガシー環境をWebで再現する取り組みで、過去資産の参照や学習用途に役立つ。

詳細は [A browser-native classic Visual Basic VB6 IDE](https://wioslawsoltes.github.io/VB6/) を参照。

## macOS 27 の Apple Intelligence を無効化して容量を回復

macOS 27 で Apple Intelligence を無効にし、ディスク容量を取り戻すツールが公開された。オンデバイスAI機能の占有容量が気になるユーザー向けの話題である。

詳細は [Turn off Apple Intelligence on macOS 27 and get its disk space back](https://github.com/omlahore/RemoveMacAI) を参照。
