---
title: "2026-07-02 技術ニュースまとめ"
description: "ゼロから合成した細胞が初めて成長・分裂に成功した研究成果や、オープンソース3D物理エンジン「Box3D」の登場、FFmpeg 9.1の新AACエンコーダー、PlayStationの物理ディスク生産終了計画など、2026年7月2日の主要テックニュースを解説する。"
pubDate: 2026-07-02
tags: ["AI", "オープンソース", "ゲーム", "データベース", "Git"]
author: "grasshopper"
---

本日はゼロから合成した細胞が初めて成長・分裂に成功したという生物学分野のブレイクスルーがHacker Newsで大きな注目を集めた。ソフトウェア分野では、オープンソースの3D物理エンジン「Box3D」の登場やFFmpeg 9.1の新AACエンコーダー、Qualcomm Linux 2.0のリリースなど基盤技術の更新が相次いだ。ゲーム業界ではPlayStationが2028年までに新作タイトルの物理ディスク生産を終了する方針を明らかにしている。Zennではデータベースのパフォーマンスチューニングやプレビュー環境の構築に関する実践的な記事がトレンド入りし、GitHub BlogからはGit 2.55の新機能ハイライトが公開された。

## 合成細胞が初めて成長・分裂に成功

科学者チームが**ゼロから設計・合成した人工細胞が成長し分裂する**ことに世界で初めて成功したとする研究成果が、Hacker Newsで650を超えるポイントを獲得し大きな話題となった。生命の最小単位を人工的に再現し、自己複製というプロセスまで実現した点が画期的とされる。合成生物学の分野において、生命システムをボトムアップで構築・制御する研究の大きな一歩と位置づけられており、今後の医療や生体材料への応用が期待される。

詳細は [For first time, a cell built from scratch grows and divides](https://www.quantamagazine.org/for-the-first-time-a-cell-built-from-scratch-grows-and-divides-20260701/) を参照。

## PlayStation、2028年1月に新作タイトルの物理ディスク生産を終了へ

Sony/PlayStationが、**2028年1月をもって新作ゲームタイトルの物理ディスク生産を終了する**方針を公式ブログで発表し、Hacker Newsで550ポイント超の反響を呼んだ。既存タイトルの再生産や旧作の流通には引き続き対応するとみられるが、業界全体でデジタル配信への移行が加速していることを象徴する発表となった。ゲームの保存性や中古市場、コレクター文化への影響を懸念する声も上がっている。

詳細は [Physical disc production ending in Jan 2028 for new games on PlayStation](https://blog.playstation.com/2026/07/01/physical-disc-production-ending-in-january-2028-for-new-games-releasing-on-playstation-consoles/) を参照。

## Box3D、オープンソースの3D物理エンジンとして公開

人気の2D物理エンジン「Box2D」の開発チームが、**3D対応の新エンジン「Box3D」をオープンソースとして公開**した。Hacker Newsで388ポイントを獲得し、ゲーム開発者やシミュレーション用途の技術者から注目を集めている。Box2Dで培われた高精度な衝突検出・剛体シミュレーション技術を3次元空間に拡張したもので、既存の商用3D物理エンジンに対するオープンソースの選択肢として期待されている。

詳細は [Box3D, an open source 3D physics engine](https://box2d.org/posts/2026/06/announcing-box3d/) を参照。

## FFmpeg 9.1に新しいAACエンコーダーが搭載

FFmpeg 9.1で**新しいネイティブAACエンコーダー**が搭載されたことがHydrogenaudioのフォーラムで報告され、Hacker Newsで250ポイントを集めた。従来のFFmpeg内蔵AACエンコーダーは音質面で外部エンコーダーに劣るとされてきたが、新エンコーダーでは音質の大幅な改善が確認されているという。音声処理パイプラインをFFmpegに依存するアプリケーションにとって、外部ライブラリへの依存を減らせる可能性がある技術的な進展である。

詳細は [FFmpeg 9.1's new AAC encoder](https://hydrogenaudio.org/index.php/topic,129691.0.html) を参照。

## グラフィックスプログラマーになるための学習ガイドが話題に

グラフィックスプログラミング分野の技術者による、**グラフィックスプログラマーを目指す人向けの体系的な学習ガイド**がHacker Newsで199ポイントを獲得した。数学的基礎からGPUアーキテクチャ、レンダリングパイプライン、実践的なプロジェクトの積み上げ方まで、初学者がキャリアを築く上でのロードマップを提示している。専門性の高い分野への参入障壁を下げる実践的な内容として、業界内外から関心を集めている。

詳細は [What to learn to be a graphics programmer](https://blog.demofox.org/2026/07/01/what-to-learn-to-be-a-graphics-programmer/) を参照。

## Qualcomm、組み込み向け「Qualcomm Linux 2.0」を公開

Qualcommが組み込みシステム向けLinuxディストリビューション**「Qualcomm Linux 2.0」を公開**したことがHacker Newsで29ポイントを集めた。同社のチップセット向けに最適化されたLinux環境を提供するもので、IoTやエッジデバイス開発者にとってハードウェアとソフトウェアの統合開発をよりスムーズにすることが狙いとみられる。組み込みLinuxのエコシステムにおけるベンダー主導の環境整備が進んでいる状況を示す事例である。

詳細は [Qualcomm Linux 2.0](https://www.qualcomm.com/developer/blog/2026/06/qualcomm-linux-2-now-available) を参照。

## ZCode、GLM-5.2向けのコーディングハーネスとして登場

AIコーディングエージェント「ZCode」が、モデル「**GLM-5.2**」向けのハーネスとして公開され、Hacker Newsで114ポイントを集めた。Claude CodeやCursorなど既存のAIコーディングツールが乱立するなか、特定のオープンウェイトモデルに最適化されたハーネスという位置づけで、AIコーディングエージェント市場の多様化を示す事例となっている。

詳細は [ZCode – Harness for GLM-5.2](https://zcode.z.ai/en) を参照。

## 【Zenn】遅いSQLクエリの原因はDISTINCT ONとネステッドループにあった

Zennのトレンド記事では、**PostgreSQLで遅いと思われたクエリの真因がSQL自体ではなく、`DISTINCT ON` とネステッドループの組み合わせにあった**という調査記録が紹介されている。実行計画（EXPLAIN ANALYZE）を丹念に読み解きながらボトルネックを特定していく過程が詳細に解説されており、パフォーマンスチューニングにおける表面的な原因と本質的な原因を切り分ける重要性を示す実践的な内容となっている。

詳細は [遅いのは SQL だと思ったら、別のところにあった](https://zenn.dev/dress_code/articles/postgres-distinct-on-nested-loop) を参照。

## 【Zenn】PRごとに専用DB環境を用意する仕組みを構築

不動産テック企業のエンジニアが、**プレビュー環境でプルリクエストごとに専用のデータベースを自動で用意する仕組み**を構築した事例をZennで紹介した。PRのマージ前に本番相当のデータでレビューやQAを行える環境を、CI/CDパイプラインと連携させて自動生成する設計がポイントで、開発チームのレビュー品質とリードタイムの両立を図る取り組みとして参考になる内容となっている。

詳細は [Preview環境でPRごとに専用DBを使えるようにした話](https://zenn.dev/estie/articles/59ec0ae59c3199) を参照。

## GitHub、Git 2.55の新機能ハイライトを公開

GitHub Blogが**Git 2.55の新機能ハイライト**を公開した。最新リリースにおけるパフォーマンス改善や新しいコマンドオプション、内部実装の変更点などがまとめられており、Gitを日常的に利用する開発者にとって押さえておきたいアップデート内容となっている。バージョン管理システムの基盤技術が継続的に改善されている状況を伝える内容である。

詳細は [Highlights from Git 2.55](https://github.blog/open-source/git/highlights-from-git-2-55/) を参照。
