---
title: "2026-05-11 技術ニュースまとめ：ローカルAIの台頭・Obsidian RAT攻撃・LakebaseのPostgres高速化など"
description: "本日の主要技術トピック：ローカルAI推進論とM4 Macでの実践例、ObsidianプラグインによるRAT攻撃キャンペーン、メリーランド州のAI電力コスト問題、DatabricksのLakebase Postgresアーキテクチャ、GitHubエージェントPRのレビュー手法、Tursoが変えるAIエージェント時代のDB設計など。"
pubDate: 2026-05-11
tags: ["AI", "セキュリティ", "ローカルAI", "データベース", "エージェント", "OSS"]
author: "grasshopper"
---

本日 2026-05-11 の技術ニュースを概観する。ローカル AI に関するトピックが Hacker News で同時に複数浮上しており、クラウド依存からの脱却という流れが加速していることが読み取れる。セキュリティ面では Obsidian プラグインを悪用した RAT 配布キャンペーンが確認されており、開発者コミュニティへの注意喚起が広まっている。データベース分野では Databricks の Lakebase が Postgres 書き込みを 5 倍高速化したと発表し、インフラの話題を席巻した。国内 Zenn では引き続き AI エージェント周辺の実践記事が上位を占めている。

---

## ローカル AI を標準にすべき理由

Hacker News で高い支持を集めた記事「Local AI needs to be the norm」は、開発者がクラウド AI API への依存を見直し、デバイス上でモデルを動かすことを普通の選択肢にすべきだと主張する。著者は iOS アプリ「Brutalist Report」を例に挙げ、記事の要約・分類・抽出といった典型的なユースケースには、シェイクスピアを書けるほど高性能なモデルは不要だと指摘する。クラウド依存は障害リスク・プライバシー侵害・コストの三重苦をもたらす一方、現代のデバイスはニューラルエンジンを内蔵しており、ローカル推論に十分な性能を持つ。信頼性の高いアプリを作るには、ユーザーデータをデバイス外に出さない設計こそが王道だという論旨だ。

詳細は [Local AI needs to be the norm（unix.foo）](https://unix.foo/posts/local-ai-needs-to-be-norm/) を参照。

---

## M4 Mac（24GB）でローカルモデルを実用水準で動かす

同じく HN でトレンド入りした「Running local models on an M4 with 24GB memory」は、実際のセットアップと性能評価を報告した実践記事だ。著者は LM Studio 経由で Qwen 3.5-9B（4bit 量子化）を動かし、思考モード有効・128K コンテキストウィンドウで約 40 トークン/秒を達成したと報告する。Qwen 3.6 Q3・GPT-OSS 20B・Devstral Small 24B・Gemma 4B なども試したが、速度不足やツール呼び出しの精度不足から実用に耐えなかった。複雑な多段階タスクには継続的なユーザー介入が必要になる点が課題として挙がる一方、オフライン動作・サブスクリプション不要・データセンターへの環境負荷ゼロという利点は無視できない。Pi と OpenCode の両フレームワークを評価し、レスポンスの速さで Pi、カスタマイズ性で OpenCode に軍配が上がるとしている。

詳細は [Running local models on an M4 with 24GB memory（jola.dev）](https://jola.dev/posts/running-local-models-on-m4) を参照。

---

## Obsidian プラグインを悪用した PHANTOMPULSE RAT 攻撃

セキュリティ研究者が、Obsidian のコミュニティプラグインを悪用して「PHANTOMPULSE」と呼ばれる RAT（遠隔操作型マルウェア）を配布するキャンペーンを確認した。攻撃者は LinkedIn や Telegram 上でベンチャーキャピタリストを装い、クラウドホスト型の Obsidian Vault への参加を誘う。ユーザーがコミュニティプラグインの同期を有効にすると、"Shell Commands" および "Hider" プラグインが悪意あるコードを実行し RAT を展開する仕組みだ。PHANTOMPULSE はキーロギング・スクリーンショット・ファイル窃取・任意コマンド実行を可能にするほか、Ethereum ブロックチェーンを C2 サーバーの名前解決に使うという斬新な持続性手法を採用しており、従来の IP ブロックによる無害化が困難だ。金融・暗号資産分野の専門家が主なターゲットとされる。信頼できるソース以外のプラグインの有効化と Vault の無断同期には十分な注意が必要だ。

詳細は [Obsidian plugin was abused to deploy PHANTOMPULSE RAT（cyber.netsecops.io）](https://cyber.netsecops.io/articles/obsidian-plugin-abused-in-campaign-to-deploy-phantom-pulse-rat/) を参照。

---

## メリーランド州民が AI データセンター向け送電網整備に 20 億ドルの追加負担

Tom's Hardware の報道によると、メリーランド州の住民が州外の AI データセンターに電力を供給するための送電網整備費として 20 億ドル（約 3,000 億円）を電力料金に上乗せされる見通しとなり、州当局が連邦エネルギー規制委員会（FERC）に異議を申し立てた。AI インフラの急拡大が地域の電力インフラに与える費用転嫁の問題が顕在化した事例であり、「電力コスト保護の誓約を破るものだ」と州側は批判する。AI データセンターの立地・電力調達の社会的コストをめぐる議論が今後も拡大しそうだ。

詳細は [Maryland citizens hit with $2B power grid upgrade for out-of-state AI（Tom's Hardware）](https://www.tomshardware.com/tech-industry/artificial-intelligence/maryland-citizens-slapped-with-usd2-billion-grid-upgrade-bill-for-out-of-state-ai-data-centers-state-complains-to-federal-energy-regulators-says-additional-cost-breaks-ratepayer-protection-pledge-promises) を参照。

---

## Lakebase アーキテクチャが Postgres 書き込みを最大 5 倍高速化

Databricks が公式ブログで Lakebase のアーキテクチャ詳細と性能成果を公開した。最大の革新は「イメージ生成のプッシュダウン」で、従来 Postgres のコンピュートレイヤーが WAL（Write-Ahead Log）にページイメージをまるごと埋め込んでいたのを、ストレージレイヤーのページサーバーがデルタの蓄積状況に応じて動的に生成する方式に変更した。コンピュートは Paxos ベースのクォーラム型セーフキーパーへ WAL をストリーミングするだけで済み、ステートレス構成を実現する。性能面では 32 vCPU 構成で 1 分あたりの新規注文処理数が約 95,686 件から 439,300 件へ約 4.6 倍向上し、WAL トラフィックを 94% 削減（58KB → 4KB/トランザクション）、読み取りテールレイテンシを 2 倍改善した。本番環境での検証として、高トラフィック顧客の定常 WAL 生成量が 30 MB/s から 1 MB/s へ削減したとも報告されている。

詳細は [How Lakebase architecture delivers 5x faster Postgres writes（Databricks Blog）](https://www.databricks.com/blog/how-lakebase-architecture-delivers-5x-faster-postgres-writes) を参照。

---

## GitHub：エージェンティックワークフローのトークン効率を最大 62% 削減

GitHub Blog が、Copilot のエージェンティックワークフローでトークン消費を大幅削減した取り組みを詳細に解説した。実施した 4 つの最適化は以下のとおりだ。①エージェントフレームワークを横断してトークン使用量を一元観測するプロキシの導入、②実際には呼び出されない MCP ツールをスキーマごと削除（呼び出し 1 回あたり 8〜12 KB 削減）、③データ取得処理を MCP から確定的な GitHub CLI 呼び出しへ移行、④トークン消費パターンを毎日監査・最適化する自動エージェントの整備。結果として Auto-Triage Issues で 62%、Security Guard で 43%、Smoke Claude で 59% のトークン削減を達成した。高頻度ワークフローほど削減効果が累積するため、頻度の高い処理から手を付けることが推奨されている。

詳細は [Improving token efficiency in GitHub Agentic Workflows（GitHub Blog）](https://github.blog/ai-and-ml/github-copilot/improving-token-efficiency-in-github-agentic-workflows/) を参照。

---

## エージェント PR が増える時代のレビュー戦略

AI エージェントが生成したプルリクエスト（エージェント PR）の普及に伴い、GitHub Blog がレビュアー向けの実践的ガイドを公開した。注目すべき主要リスクは 5 つだ。①CI の弱体化（テスト削除・カバレッジ閾値の引き下げは即ブロック）、②既存ユーティリティの再実装（エージェントは類似関数を「前例」として増殖させる）、③表面的な正しさの陰に潜む境界条件バグ、④大規模 PR への対処方針不在（実装計画の提示を事前に求める）、⑤プロンプトインジェクション脆弱性（未検証の外部入力がプロンプトに混入する経路の確認）。効率的なレビューには Copilot 等の自動コードレビューを前段として使い、人間のレビュアーはコンテキストと運用上の判断に集中するという分担が推奨されている。

詳細は [Agent pull requests are everywhere. Here's how to review them.（GitHub Blog）](https://github.blog/ai-and-ml/generative-ai/agent-pull-requests-are-everywhere-heres-how-to-review-them/) を参照。

---

## CodexをローカルLLMで動かす：LM Studio + Qwen 3.6-27B の実践

Zenn のトレンド記事「CodexをローカルLLMで駆動する」では、OpenAI Codex の代替として LM Studio の CLI を使いローカル LLM（Qwen 3.6-27B-UD-Q4_K_XL の GGUF 形式）を接続する手順が詳述されている。llama.cpp は Responses API に対応していないため動作せず、LM Studio が localhost:8080/v1 で OpenAI 互換エンドポイントを提供することで解決した。Codex の設定ファイルに `wire_api = "responses"` を指定し、モデル識別子を合わせるだけで接続できる。コーディングエージェントとして実際に機能するためには基本的な会話能力だけでなく、命令追従の精度と長文脈での安定性が求められ、モデル選定がカギになるとしている。同一の評価フレームワークで複数モデルのベンチマーク比較が行える点も副次的なメリットとして挙げられている。

詳細は [CodexをローカルLLMで駆動する（Zenn）](https://zenn.dev/robustonian/articles/codex_with_local_llm) を参照。

---

## Turso が変えるAIエージェント時代のデータベース設計

Zenn の記事「AIエージェント時代のDB設計をTursoが書き換えに来ている話」は、SQLite ベースの Turso がマルチテナント SaaS やエージェントシステムの DB 設計を根本から変え得ると論じている。従来の RDBMS では全テナントが共有 DB を使いアクセス制御で分離するのが一般的だったが、Turso は SQLite のファイルベースモデルと Rust による書き直しで MVCC 対応・シングルライター問題の解消を実現し、「テナントやエージェントセッションごとに DB を 1 つ作る」という発想をコストとオーバーヘッドの両面から実用的にした。DB をコード中の変数のように気軽に作成できるこの設計思想は、自律エージェントが複数のコンテキストを並行管理するユースケースとの相性が良く、今後の AI エージェント基盤の有力な選択肢となりそうだ。

詳細は [AIエージェント時代のDB設計をTursoが書き換えに来ている話（Zenn）](https://zenn.dev/emuni/articles/6eef9f97f564b4) を参照。

---

## Louis Rossmann が OrcaSlicer 開発者の法的支援を表明

リペア権（Right to Repair）活動家として知られる Louis Rossmann が、3D プリンターメーカー Bambu Lab から訴訟の脅しを受けた OrcaSlicer のオープンソース開発者に対し、法的費用の負担を申し出た。OrcaSlicer は Bambu Lab 製プリンターとの互換スライサーとして人気を集めており、コミュニティ主導の開発が企業側の利益と衝突した形だ。オープンソースプロジェクトが大手メーカーの法的圧力にさらされるリスクと、リペア権・互換ソフトウェアを守るための社会的支援のあり方があらためて問われる事例となっている。

詳細は [Louis Rossmann offers to pay legal fees for a threatened OrcaSlicer developer（Tom's Hardware）](https://www.tomshardware.com/3d-printing/louis-rossmann-tells-3d-printer-maker-bambu-lab-to-go-bleep-yourself-over-its-lawsuit-against-enthusiast-right-to-repair-advocate-offers-to-pay-the-legal-fees-for-a-threatened-orcaslicer-developer) を参照。
