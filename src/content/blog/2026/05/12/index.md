---
title: "2026-05-12 技術ニュースまとめ"
description: "dnsmasqに6件の重大CVE、DuckDBが新プロトコル「Quack」を発表、Google DeepMindがAI時代のマウスポインターを再設計、GitHub CopilotにMaxプラン登場など、本日の主要な技術トピックをまとめます。"
pubDate: 2026-05-12
tags: ["セキュリティ", "AI", "オープンソース", "GitHub", "DuckDB"]
author: "grasshopper"
---

本日のテックニュースは、セキュリティ分野で重大なCVEが複数公開されたほか、DuckDBの新しいクライアントサーバープロトコルや、Google DeepMindによるAI時代のUI刷新が注目を集めた。また、GitHub Copilotのプラン体系が大幅に改訂され、オープンソースコミュニティではBambu Labをめぐる論争も続いている。AI分野では軽量なツール呼び出しモデルの公開やエージェントワークフローの効率化手法が話題を呼んだ。

## dnsmasq に重大な脆弱性6件のCVEが公開

CERT から dnsmasq に対する深刻なセキュリティ脆弱性が6件一挙に公開された。dnsmasq は軽量なDNSフォワーダー兼DHCPサーバーとして組み込み機器やLinuxディストリビューションに広く採用されており、影響範囲は極めて広い。ルーターや IoT デバイス、コンテナ環境など多くの製品に組み込まれているため、早急なパッチ適用またはベンダーのアップデート確認が必要となる。詳細な脆弱性情報と対策は公式メーリングリストで確認できる。

詳細は [CERT releases six CVEs for serious security vulnerabilities in dnsmasq](https://lists.thekelleys.org.uk/pipermail/dnsmasq-discuss/2026q2/018471.html) を参照。

## Exim で未認証RCE脆弱性（CVE-2026-45185）が発見

セキュリティ研究チームXBOWが、広く使われているMTAソフトウェア Exim で未認証のリモートコード実行（RCE）脆弱性を発見した。CVE-2026-45185 として採番されており、認証不要で任意コード実行が可能な深刻度の高い脆弱性である。Exim はインターネット上の多数のメールサーバーで稼働しているため、SMTPポートを公開しているサーバー管理者は直ちにパッチ適用を検討すべきだ。XBOWが発見の経緯と技術的な詳細をブログで公開している。

詳細は [Dead.Letter (CVE-2026-45185) – How XBOW found an unauthenticated RCE on Exim](https://xbow.com/blog/dead-letter-cve-2026-45185-xbow-found-rce-exim) を参照。

## DuckDB が新クライアントサーバープロトコル「Quack」を発表

DuckDB チームが独自のクライアントサーバープロトコル「Quack」を公開した。従来の DuckDB はインプロセス型の組み込みデータベースとして知られていたが、Quack プロトコルによってリモートから DuckDB エンジンへ接続する標準的な手段が提供される。PostgreSQL ワイヤープロトコルとの互換性も考慮した設計となっており、既存のSQLクライアントからも接続しやすい。分析用データベースをサーバーレスではなく永続サーバーとして運用したいユースケースに対応できる。

詳細は [Quack: The DuckDB Client-Server Protocol](https://duckdb.org/2026/05/12/quack-remote-protocol) を参照。

## Google DeepMind がAI時代のマウスポインターを再設計

Google DeepMind がAI時代に向けたマウスポインターの再発明を発表した。従来の矢印カーソルは1960年代から基本形が変わっていないが、AIエージェントがPC操作を行う時代に合わせてインタラクションモデルを根本から見直すという内容だ。AIが画面上のどの要素に「注目」しているかをユーザーに可視化するアプローチや、エージェントとヒューマンの操作が混在する際のUI表現が示されている。AIアシスタントがデスクトップアプリを直接操作するケースが増える中、ポインターというUI基盤の再設計は今後の議論を呼びそうだ。

詳細は [Reimagining the mouse pointer for the AI era](https://deepmind.google/blog/ai-pointer/) を参照。

## Bambu Lab がオープンソースの社会的契約を悪用しているとの批判

3Dプリンターメーカー Bambu Lab が、オープンソースプロジェクト OrcaSlicer のコードを利用しながら、自社プリンターとの通信を制限する行為を続けているとして批判を浴びている。Bambu Lab は OrcaSlicer のフォークから多くの機能を取り込んだ一方、BambuNetwork（プリンター制御の中核API）へのアクセスをサードパーティに制限した。コミュニティが互換サポートを維持するフォーク [OrcaSlicer-bambulab](https://github.com/FULU-Foundation/OrcaSlicer-bambulab) を立ち上げ対抗しているが、「ギブ・アンド・テイク」のオープンソース規範を無視した行為として問題視する声は根強い。

詳細は [Bambu Lab is abusing the open source social contract](https://www.jeffgeerling.com/blog/2026/bambu-lab-abusing-open-source-social-contract/) を参照。

## GitHub Copilot に新たな「Max」プランと柔軟なアロットメントを導入

GitHub が Copilot の個人向けプラン体系を刷新し、Pro・Pro+ に「フレックスアロットメント」を導入するとともに新しい「Max」プランを追加した。フレックスアロットメントにより、月ごとのコード補完回数や会話数を用途に応じて柔軟に配分できるようになる。Maxプランは最上位の提供で、より高性能なモデルへのアクセスや上限引き上げを含む見込みだ。AI コーディングアシスタントの需要が高まる中、プランの細分化によって個人開発者から上級ユーザーまで幅広い層を取り込む狙いがある。

詳細は [GitHub Copilot individual plans: Introducing flex allotments in Pro and Pro+, and a new Max plan](https://github.blog/news-insights/company-news/github-copilot-individual-plans-introducing-flex-allotments-in-pro-and-pro-and-a-new-max-plan/) を参照。

## GitHub がエージェントワークフローのトークン効率を改善

GitHub エンジニアリングチームが、Agentic Workflows におけるトークン効率の改善手法を公開した。AIエージェントがコードリポジトリに対して複数ステップの推論・実行を行う際、不要なコンテキストの重複読み込みや冗長なプロンプト構造がトークン消費を押し上げていた。記事ではコンテキストの刈り込み戦略やプロンプト設計のベストプラクティス、キャッシュ活用によるコスト削減の具体例が示されている。大規模なコードベースを扱うエージェント開発者にとって実践的な内容だ。

詳細は [Improving token efficiency in GitHub Agentic Workflows](https://github.blog/ai-and-ml/github-copilot/improving-token-efficiency-in-github-agentic-workflows/) を参照。

## Needle: Gemini のツール呼び出し能力を26Mパラメータのモデルに蒸留

cactus-compute チームが、Google Gemini のツール呼び出し（Function Calling）能力をわずか26Mパラメータの小型モデルに蒸留した「Needle」を公開した。大規模モデルの推論コストを抑えつつ、構造化されたツール呼び出しを高精度に実行できる点が特徴だ。エッジデバイスやレイテンシが重視されるアプリケーションでAIエージェント機能を組み込む際の有力な選択肢となりうる。モデルウェイトとコードはGitHubで公開されている。

詳細は [Show HN: Needle: We Distilled Gemini Tool Calling into a 26M Model](https://github.com/cactus-compute/needle) を参照。

## Zenn トレンド: CodexをローカルLLMで駆動する

OpenAI の Codex CLI をローカルで動作するLLMと組み合わせる手法を解説した記事がZennでトレンド入りした。クラウドAPIへのコード送信を避けたいセキュリティ要件や、オフライン環境での利用ニーズに応えるアプローチとして注目されている。ローカルLLMの推論速度やコンテキスト長の制約を踏まえた実用的なTipsが紹介されており、プライベートなコードベースをAIアシストしたい開発者に参考になる内容だ。

詳細は [CodexをローカルLLMで駆動する](https://zenn.dev/robustonian/articles/codex_with_local_llm) を参照。

## Zenn トレンド: ソフトウェアの「設計原則」をエンジニアが拒絶する心理

SOLID原則やデザインパターンといった設計原則に対して、一部のエンジニアが感情的な抵抗を示す背景を認知科学的に考察した記事が大きな反響を呼んでいる。原則の抽象度とエンジニアの経験・認知スタイルの不一致、「原則の適用」と「原則への盲従」を混同することで生じる摩擦などが分析されている。チームでの設計議論をより建設的に進めるうえで示唆に富む視点だ。

詳細は [ソフトウェアの「設計原則」を、なぜ一部のエンジニアは生理的に嫌うのか](https://zenn.dev/torao/articles/20260502-differences-in-engrs-cognitive-strategies) を参照。
