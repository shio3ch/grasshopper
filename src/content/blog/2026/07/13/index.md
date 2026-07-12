---
title: "AIコーディングエージェントのトークン効率とブラウザ指紋、データセンター電力問題まで — 2026-07-13 技術ニュースまとめ"
description: "Claude CodeとOpenCodeのトークン消費比較、Terence TaoによるAIコーディングエージェント考察、GPT-5.6移行事例、Math.tanhによるブラウザフィンガープリンティング、GitHubの新機能など本日の注目トピックをまとめました。"
pubDate: 2026-07-13
tags: ["AIエージェント", "Claude Code", "ブラウザセキュリティ", "GitHub", "クラウドインフラ", "Zenn"]
author: "grasshopper"
---

本日はAIコーディングエージェント関連の話題が中心となった。Claude CodeとOpenCodeのトークン消費量を比較した分析がHacker Newsで大きな注目を集め、数学者Terence Taoによるコーディングエージェント活用記事も話題に上った。加えてブラウザの`Math.tanh`実装差を利用した新しいフィンガープリンティング手法、アイルランドのデータセンターが電力の23%を消費しているという報告など、AI活用の裏側にあるインフラ・セキュリティ課題も浮き彫りになった。国内ではZennでGitHub Actionsの並列化によるCI高速化事例や、金融機関でのAIチャット導入事例が人気を集めた。GitHub公式ブログではCopilotコードレビューの改善とリポジトリ所有者管理の自動化が報告されている。

## Claude CodeはOpenCodeよりも33,000トークン多く消費している

Claude CodeとOpenCodeのトークン消費量を比較した分析によると、Claude Codeはプロンプトを処理する前の時点で約33,000トークンを送信しているのに対し、OpenCodeは約7,000トークンにとどまるという。システムプロンプトやツール定義の肥大化が主な要因として挙げられており、コスト効率やレイテンシに直結する問題として多くの開発者から反応があった。エージェント型コーディングツールが一般化する中、オーバーヘッドの最適化が今後の競争軸になりそうだ。

詳細は [Claude Code sends 33k tokens before reading the prompt; OpenCode sends 7k](https://systima.ai/blog/claude-code-vs-opencode-token-overhead) を参照。

## Terence Tao、AIコーディングエージェントで新旧アプリを構築

数学者Terence Tao氏が自身のブログで、現代のAIコーディングエージェントを用いて新規アプリと既存アプリの改修の両方に取り組んだ経験を公開した。数学研究者という非エンジニアの視点から、エージェントがどこまで実務レベルのソフトウェア開発を代替できるかを検証しており、具体的なプロンプトの工夫や試行錯誤の過程が詳細に記録されている。専門外の人物によるハンズオン検証として、AIエージェントの実用性を測る材料として評価が高い。

詳細は [Old and new apps, via modern coding agents](https://terrytao.wordpress.com/2026/07/11/old-and-new-apps-via-modern-coding-agents/) を参照。

## 本番AIエージェントをGPT-5.6に移行、処理速度2.2倍・コスト27%減

Ploy社が本番環境で稼働するAIエージェントをGPT-5.6に移行した事例を公開した。移行の結果、処理速度が2.2倍に向上し、コストは27%削減されたと報告している。モデル更新に伴うプロンプト調整やレイテンシ計測など、実運用ならではの知見が共有されており、モデル移行を検討するチームにとって参考になる内容となっている。

詳細は [Migrating a production AI agent to GPT-5.6: 2.2x faster, 27% cheaper](https://ploy.ai/blog/migrating-a-production-ai-agent-to-gpt-5-6) を参照。

## Chromium 148以降、Math.tanhでOS指紋を特定可能に

Chromium 148以降、JavaScriptの`Math.tanh`関数の浮動小数点演算結果に生じる微小な差異を利用することで、実行環境の基盤OSを識別できることが報告された。ブラウザ間で同一のJavaScriptエンジンを使っていても、OSの数学ライブラリ実装差によって計算結果が微妙に異なる点を悪用したフィンガープリンティング手法であり、プライバシー保護の観点から新たな課題として注目されている。ブラウザベンダー側での対策が今後求められる。

詳細は [Since Chromium 148, Math.tanh is now fingerprintable to link underlying OS](https://scrapfly.dev/posts/browser-math-os-fingerprint/) を参照。

## アイルランドのデータセンターが国内電力の23%を消費

The Registerの報道によると、アイルランドにおけるデータセンターの電力消費量が国内総消費電力の23%に達したという。AIブームによる計算需要の急増がデータセンター建設を加速させており、電力インフラへの負荷が社会問題として顕在化している。同国政府や電力会社による新規データセンター誘致の見直し議論にもつながっており、AI活用の裏側にあるエネルギーコストが改めて注目されている。

詳細は [Irish datacenters now guzzle 23% of the country's electricity](https://www.theregister.com/on-prem/2026/07/11/irish-datacenters-now-guzzle-23-of-the-countrys-electricity/5270013) を参照。

## GitHub Actionsの並列化でデプロイ8分→3分、CIコスト3割減

Zennの人気記事では、GitHub Actionsのジョブ・ステップを並列化することでデプロイ時間を8分から3分に短縮し、CIコストを3割削減した事例が紹介されている。依存関係のないステップを`matrix`戦略や並列ジョブに分割する具体的な設定例が示されており、CI/CDパイプラインのボトルネック解消に取り組むチームにとって実践的な内容となっている。

詳細は [GitHub Actions の parallel でデプロイは8分→3分、CI はコスト3割減になった](https://zenn.dev/hatsu/articles/github-actions-steps-parallel) を参照。

## APIもDBも東京リージョンなのに全クエリが太平洋を横断していた

インフラ運用の実体験を綴ったZenn記事では、APIサーバーもデータベースも東京リージョンに配置していたにもかかわらず、実際には全クエリが太平洋を横断する経路を通っていたという意外な事例が紹介されている。原因調査の過程でDNS解決やルーティング設定の見落としが明らかになり、レイテンシ改善につながった経緯が詳細に解説されている。マルチリージョン構成におけるネットワーク経路の落とし穴として参考になる。

詳細は [APIもDBも東京なのに、全クエリが太平洋横断していた話](https://zenn.dev/avaintelligence/articles/b7d4743a448485) を参照。

## 情報漏洩に敏感な金融機関でClaude・Gemini・ChatGPTを導入

セキュリティ要件の厳しい金融機関において、Claude・Gemini・ChatGPTといった複数のAIチャットサービスを導入した事例がZennで紹介されている。情報漏洩リスクを抑えるためのアクセス制御やログ管理、社内ガイドライン策定など、規制業種特有の導入プロセスが具体的に解説されており、コンプライアンスを重視する組織におけるAI活用の実践例として注目を集めている。

詳細は [情報漏洩に敏感な金融機関で、Claude・Gemini・ChatGPTを導入した話](https://zenn.dev/seiuchi3939/articles/b12d6746d9f187) を参照。

## GitHub Copilotコードレビュー、ツール刷新で品質改善

GitHub公式ブログでは、Copilotのコードレビュー機能について、共有のUnix系ツールへの移行が一時的に性能低下を招いたものの、レビュアーの実際のワークフローに合わせてツール指示を書き直すことで平均レビューコストを約20%削減できたと報告している。ツールの汎用化と実運用に即した最適化のバランスを取る難しさと、その解決プロセスが具体的に描かれている。

詳細は [Better tools made Copilot code review worse. Here's how we actually improved it.](https://github.blog/ai-and-ml/github-copilot/better-tools-made-copilot-code-review-worse-heres-how-we-actually-improved-it/) を参照。

## GitHub、全リポジトリに「所有者」を45日で付与

GitHubは自社が抱える11,000以上のアクティブリポジトリすべてに対し、`ownership-type`と`ownership-name`という2つのカスタムプロパティを用いて明確な所有者を割り当てる取り組みを45日以内に完了させたことを発表した。大規模組織におけるリポジトリガバナンスとセキュリティ管理の課題を解決する実践例として、同様の課題を抱える企業にとって参考になる内容となっている。

詳細は [How GitHub gave every repository a durable owner](https://github.blog/security/application-security/how-github-gave-every-repository-a-durable-owner/) を参照。
