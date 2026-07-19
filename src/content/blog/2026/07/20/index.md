---
title: "2026年7月20日 技術ニュースまとめ：Claude CodeのRust化、GitHubのAI活用術、Blender 5.2 LTSほか"
description: "Claude CodeがBun/Rustベースへ移行、AIアドバイスが判断精度を下げるという研究結果、GitHubのCopilotレビュー改善やリポジトリ所有者整備、Blender 5.2 LTSリリースなど、本日の注目トピックをまとめました。"
pubDate: 2026-07-20
tags: ["AI", "GitHub", "開発ツール", "テスト", "OSS"]
author: "grasshopper"
---

本日はAI関連の話題が目立った一日だった。Claude CodeがBunからRustベースの実装へ移行したというニュースや、AIのアドバイスが人間の判断精度をかえって下げるという研究結果が注目を集めた。GitHub公式ブログからはCopilotコードレビューの改善や、大規模組織におけるリポジトリ所有権の整備といった実践的な知見が公開されている。また国内Zennでは「敵対的検証」によるAIレビューの手法や、Playwrightを用いたE2Eテストの高速化事例など、開発現場に直結するテーマが並んだ。ここでは合計9件のトピックを取り上げる。

## Claude CodeがBun実装からRust実装へ移行

Simon Willison氏のブログで、Claude CodeがこれまでのBun（TypeScript/JavaScript）ベースの実装から、Rustで書かれた実装に切り替わったことが報告された。CLIツールの起動速度やメモリ使用量の改善が主な狙いとみられ、実際に体感速度が向上したとの検証結果も紹介されている。エージェント型コーディングツールが本番運用レベルで高速化・効率化を求められるフェーズに入っていることを示す事例といえる。

詳細は [Claude Code uses Bun written in Rust now](https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/) を参照。

## AIのアドバイスが人間の判断精度を下げるという研究結果

研究者らの調査によると、AIからのアドバイスを受けた被験者は、そうでない場合と比べて正答率が約3分の1に低下した一方で、自身の回答に対する自信は2倍近くに高まったという。AIの回答をそのまま鵜呑みにする「自動化バイアス」が、批判的思考を弱める形で作用している可能性が指摘されている。AI支援ツールを業務に組み込む際の設計・運用における重要な警鐘となる調査結果だ。

詳細は [AI advice made people 3x less accurate but 2x confident, researchers found](https://thenextweb.com/news/ai-advice-suppresses-critical-thinking-wrong-answers-study) を参照。

## GitHub、Copilotコードレビューのツール指示を見直しコストを2割削減

GitHub公式ブログでは、Copilotによるコードレビュー機能について、ツール自体を高度化したことでかえって精度が落ちていた問題を、ツールへの指示（プロンプト）の見直しによって改善した事例が紹介されている。より的確な調査パターンに絞り込むことで、レビューにかかるコストを約20%削減したという。LLMエージェントの性能はツールの機能追加だけでなく、指示設計の質に大きく左右されることを裏付ける内容だ。

詳細は [Better tools made Copilot code review worse. Here's how we actually improved it.](https://github.blog/ai-and-ml/github-copilot/better-tools-made-copilot-code-review-worse-heres-how-we-actually-improved-it/) を参照。

## GitHub、全リポジトリに「明確な所有者」を割り当てる45日間の取り組み

GitHub社内で、1万4000以上のリポジトリに対しカスタムプロパティを用いて明確な所有者を割り当て、うち8000件の非アクティブなリポジトリをアーカイブした45日間のプロジェクトが紹介されている。大規模組織でのリポジトリ管理・棚卸しの実践例として、内部統制やセキュリティ対応の観点からも参考になる内容だ。

詳細は [How GitHub gave every repository a durable owner](https://github.blog/security/application-security/how-github-gave-every-repository-a-durable-owner/) を参照。

## GitHub Agentic Workflowsでリポジトリ横断のドキュメント自動化

.NET Aspireチームの事例として、GitHub Agentic Workflowsを用いてコードマージ後にドキュメント更新のプルリクエストを自動生成する仕組みが紹介されている。導入後、82件のドキュメント関連PRがマージまで中央値44.8時間で処理されたとのことで、AIエージェントによるドキュメント保守の自動化が実運用レベルで機能し始めていることを示す事例だ。

詳細は [Automating cross-repo documentation with GitHub Agentic Workflows](https://github.blog/ai-and-ml/github-copilot/automating-cross-repo-documentation-with-github-agentic-workflows/) を参照。

## Blender 5.2 LTSがリリース

オープンソースの3DCGツールBlenderの長期サポート版、5.2 LTSがリリースされた。LTS版は安定性を重視したバージョンで、プロダクションパイプラインへの組み込みを前提とした企業・スタジオ向けの利用が想定されている。詳細な変更点は公式ダウンロードページで確認できる。

詳細は [Blender 5.2 LTS](https://www.blender.org/download/releases/5-2/) を参照。

## 「AIにレビューして」はもう古い？ 敵対的検証のすすめ

Zennの人気記事では、AIにコードレビューを依頼する際、単に「レビューして」と指示するのではなく、AI自身に欠陥を積極的に探させる「敵対的検証（Adversarial Verification）」的なアプローチを取ることで、より実効性の高いフィードバックが得られると論じられている。プロンプト設計を工夫することでAIレビューの精度を引き上げる具体的なテクニックが紹介されており、前述のGitHub Copilotレビュー改善の事例とも通じる内容だ。

詳細は [AIに「レビューして」はもう古い？「敵対的検証」のすすめ](https://zenn.dev/loglass/articles/6aa18c80496ec6) を参照。

## Claude Codeの3つのプラグイン活用術

Zennでは、Claude Codeの標準機能に加えて3つのプラグインを組み合わせることで開発体験が大きく向上したという実践レポートが公開されている。エージェント型コーディングツールの活用が個人の生産性向上だけでなく、チーム全体のワークフローに組み込まれ始めている様子がうかがえる内容だ。

詳細は [Claude Codeが化けた。今使っている3つのプラグイン+標準機能の活用法](https://zenn.dev/sonicmoov/articles/8712598f532b18) を参照。

## E2Eテストをユニットテスト並みの実行時間に短縮

Zennの技術記事では、PlaywrightによるE2Eテストの並列化とGitHub Actionsのチューニングを組み合わせることで、E2Eテストの実行時間をユニットテスト並みに短縮した事例が紹介されている。CI環境でのリソース配分やシャーディング設定など、具体的な最適化手法が解説されており、E2Eテストの実行時間に課題を抱えるチームにとって実践的な内容となっている。

詳細は [E2Eテストをユニットテスト並みの実行時間に — Playwright並列化とGitHub Actionsチューニングの実践](https://zenn.dev/berry_blog/articles/39392e1da7ca71) を参照。

## GitHub Releaseをパッケージリリースのトリガーにすべきでない理由

Zennの記事では、GitHub Releaseの作成をそのままパッケージ公開（npm publishなど）のトリガーとして使う設計のリスクについて論じられている。リリースの取り消しや誤操作時に不整合が生じやすいなど、CI/CDパイプライン設計における落とし穴と、より安全な代替設計が提案されている。

詳細は [GitHub Release 作成をパッケージリリースのトリガーにするな！](https://zenn.dev/yumemi_inc/articles/github-release-not-a-publish-trigger) を参照。
