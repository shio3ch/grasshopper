---
title: "2026年9月2日 技術ニュースまとめ：Claude Fable/Mythos 5.1発表、npmサプライチェーン攻撃対応、LLM推論効率化"
description: "AnthropicがClaude Fable/Mythos 5.1を発表、Jujutsu作者がERSCへ移籍、LLM推論効率化の技術解説、npmマルウェア対応記録、OpenClawのセキュリティ課題など今日の技術トピックを紹介。"
pubDate: 2026-09-02
tags: ["AI", "LLM", "セキュリティ", "OSS", "コーディングエージェント"]
author: "grasshopper"
---

今日は AI モデル・インフラ周りの動きが目立った一日だった。Anthropic が新モデル「Claude Fable 5.1」「Claude Mythos 5.1」を発表し、コスト効率と科学分野での成果を打ち出している。Hacker News では LLM 推論の効率化技術やローカル環境での大規模モデル運用に関する技術解説が人気を集め、バージョン管理システム Jujutsu の作者が新興スタートアップ ERSC に CTO として参画するというニュースも話題になった。Zenn では npm パッケージへのマルウェア混入インシデントの対応記録や AI コーディングエージェントのサブスク比較が引き続き注目され、GitHub Blog では急成長プロジェクト OpenClaw のセキュリティ課題と LLM の本番評価手法が取り上げられている。以下、各トピックを詳しく見ていく。

## Anthropic、新モデル「Claude Fable 5.1」「Claude Mythos 5.1」を発表

Anthropic がアーキテクチャは共通ながら安全策の適用範囲が異なる 2 つの新モデル、Fable 5.1（一般提供）と Mythos 5.1（審査を経たサイバーセキュリティ・ライフサイエンス専門家向けに制限を緩和）を発表した。コーディングや知識労働、長時間の問題解決タスクで新たな基準を打ち立てたとしており、キャッシュ済みトークン読み取りが 75%安価になったことなどにより通常ワークロードで約 25%、エージェント的タスクでは最大 45%のコスト削減を実現したという。科学分野では Mythos 5.1 が競合の 10 倍の親和性を持つタンパク質バインダーを設計したほか、金星の標高マップの解像度を 10〜20km から 2〜3km に改善するなどの成果も報告されている。企業が自社クラウド上でモデルを稼働できる Enterprise Frontier Safeguards も導入され、プライバシーと悪用防止の両立を図る。

詳細は [Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1) を参照。

## LLM推論の「効率フロンティア」、トレードオフ技術とフロンティア押し上げ技術を整理

Baseten のブログが LLM 推論最適化を体系的に整理した技術解説を公開し、Hacker News で議論を呼んだ。バッチサイズ・並列化戦略（Tensor Parallelism vs Expert/Attention Data Parallelism）・量子化といった「特定のトレードオフ地点を選ぶ技術」と、カーネル最適化・投機的デコーディング（EAGLE-3 など）・Prefill/Decode の分離実行といった「フロンティア自体を押し上げる技術」を区別しているのが特徴だ。ハードウェア改善とソフトウェア最適化を組み合わせることで得られる効率化は掛け算的に積み上がり、その余剰キャパシティをレイテンシとスループットのどちらに振り向けるかはワークロード次第で柔軟に選べるとしている。LLM 推論基盤を設計・運用するエンジニアにとって、選択肢を整理する上で参考になる内容だ。

詳細は [The efficient frontier of LLM inference](https://www.baseten.co/blog/the-efficient-frontier-of-llm-inference/) を参照。

## ChatGPT/Codexアプリ、キャッシュフォルダにLibreOffice一式を同梱

Simon Willison が、ChatGPT デスクトップアプリ（旧 Codex）のキャッシュフォルダ内に LibreOffice のフルインストールが含まれていることを発見し、ブログで報告した。Python や Node.js なども合わせて 1.7GB に達するといい、`codex-runtimes` 配下のプラグインフォルダには、これらのバイナリの見つけ方・使い方を Codex に指示する「スキル」定義も同梱されているという。オープンソースのオフィススイートを丸ごと同梱する構成から、OpenAI がドキュメントファイル（.doc や .xlsx など）の処理をエージェントの標準機能として組み込もうとしていることがうかがえる。AI エージェントがローカル環境にどこまでツールチェーンを持ち込むかという設計思想の一例として関心を集めた。

詳細は [The ChatGPT/Codex app bundles a full copy of LibreOffice](https://simonwillison.net/2026/Sep/1/codex-libreoffice/) を参照。

## 104GBのMoEモデルを48GBのMacで動かす「Slotstream」

Hacker News の Show HN で、125B パラメータ・ディスク容量 104GB の MoE モデル「Qwen3.8-Flash-Next」を、48GB RAM の Mac で動かすツール「Slotstream」が紹介された。モデル全体をメモリに載せる代わりに SSD からストリーミングする方式を採用し、常時必要な 3.8GB のトランク部分のみをメモリに保持しつつ、エキスパートの重みは固定サイズのキャッシュプールに `pread` でオンデマンド読み込みする設計だ。Python 非依存の Swift 製シングルバイナリで Apple の MLX フレームワークを利用し、Ollama・OpenAI 互換 API を提供する。48GB の M5 Pro ではピークメモリ 32GB で約 12 tok/s のデコード速度を達成しており、手元の Mac で大型 MoE モデルを扱う選択肢として注目されている。

詳細は [Show HN: Running 104GB Qwen3.8-Flash-Next on 48GB Mac with at ~12 tok/s](https://github.com/carloslfu/slotstream) を参照。

## バージョン管理システムJujutsuの作者、新興VCSスタートアップERSCへ

Google で Mercurial クライアント「Fig」の開発などバージョン管理に長年携わってきた Martin von Zweigbergk が、2019 年に個人プロジェクトとして始め GitHub スター 3 万超を獲得した VCS「Jujutsu」の開発者として知られるが、この度 Amplify Partners 出資の新興企業 East River Source Control（ERSC）に CTO として参画することが発表された。ERSC は AI 時代のソフトウェア開発に合わせた次世代バージョン管理プラットフォームを開発するスタートアップだ。von Zweigbergk は Jujutsu について「ラップトップ上で完結する部分の体験は改善したが、サーバー側のインフラは依然 Git のアーキテクチャに制約されている」と述べており、ERSC ではストレージ層の再設計に踏み込む狙いがあるとみられる。Jujutsu は Apache 2.0 のオープンソースプロジェクトとして von Zweigbergk が引き続きメンテナンスを続ける。

詳細は [The creator of Jujutsu has joined ERSC](https://ersc.io/blog/martin-joins-ersc) を参照。

## 5090一台・1.5時間・67セントで訓練した小型Transformerが多くのLLMを上回る

個人開発者 Mithil Vakde が、RTX 5090 一台で 1.5 時間・約 67 セントのコストからスクラッチ訓練した小型 Transformer が、抽象化・推論能力を測るベンチマーク ARC-AGI-1 で正答率 44%を達成し、多くの大規模 LLM を上回ったとブログで報告した。入出力グリッドのペアをトークン列に変換して自己回帰的に学習させる手法で、3D RoPE 位置埋め込みやタスクごとの学習済み埋め込みによるタスク間知識転移、SwiGLU FFN・RMSNorm・NorMuon オプティマイザといった現代的な構成要素、色・二面体変換によるデータ拡張とアンサンブル投票などを組み合わせている。大量の合成データや複雑な人手設計の帰納バイアスに頼らずにサンプル効率を高められることを示す事例として、Hacker News で注目を集めた。

詳細は [I trained a small transformer in 1.5hrs and it beats many LLMs](https://mvakde.github.io/blog/44-on-arc-1/) を参照。

## npmパッケージにマルウェアを混入された開発者の対応記録

Zenn では、自作の npm パッケージ `@7nohe/openapi-react-query-codegen` に第三者がマルウェア入りバージョンを公開した際の対応を綴った記事が引き続き注目を集めている。原因は GitHub Actions のリリースワークフローの脆弱性で、10 個の改ざんバージョンが公開されインストール時に悪意あるコードが実行される状態だったという。著者はワークフローの即時停止、Trusted Publisher 権限の失効、latest タグの安全版への差し戻し、該当バージョンの非推奨化、npm への通報、証拠保全のためのコミット抽出、攻撃者アカウントの通報という順序立てた対応を取り、約 5 時間で該当バージョンは削除された。非推奨化だけではバージョン固定やロックファイル経由のインストールを防げない点や、検知の正確さが重要である点など、サプライチェーン攻撃の実践的な初動対応として参考になる。

詳細は [自作npmパッケージにマルウェアを公開されたときにやったこと](https://zenn.dev/7nohe/articles/npm-malware-incident-response) を参照。

## 個人向けAIコーディングエージェント、サブスクの実質コスパを比較

Zenn では、OpenAI Codex Pro、Anthropic Claude Max、Moonshot Kimi、Zhipu AI（Z.AI）、xAI SuperGrok、OpenCode Go（DeepSeek V4 Flash）など主要なコーディングエージェント向けサブスクリプションのコストパフォーマンスを比較した記事が人気を集めた。モデルを Fable/Sol クラス・Opus クラス・Sonnet クラスに分類した上で、Fable/Sol クラスでは GPT-5.6 Sol が高い利用率（20〜43 倍の圧縮効果）を示し、Sonnet クラスでは GPT-5.6 Luna が $100 プランで月間 76〜79B トークンという高いコスパを発揮すると分析している。フロンティアモデル全体では Codex Pro 5x が月間約 3.0〜3.2B トークンを提供し Claude Max（0.88B 相当）を大きく上回るとして、総合的には OpenAI が最もコスパに優れると結論づけつつ、Claude の性能を重視するなら Anthropic、コスト重視なら安価なモデルを補助的に併用する戦略を提案している。

詳細は [個人向け Coding Agent サブスクリプションのコストパフォーマンス比較](https://zenn.dev/kimuson/articles/compare-ai-subscription-20260818) を参照。

## OpenClaw、爆発的成長の陰でPR洪水とレピュテーション操作に対応

GitHub Blog が、「GitHub 史上最速で成長したプロジェクト」と紹介される個人 AI アシスタント OpenClaw のメンテナに取材した記事を公開した。Peter Steinberger が 2025 年 11 月に週末プロジェクトとして始め、半年で約 38.8 万スター・8.1 万フォークに達したという。急成長は「参加者を集める」段階から「殺到する貢献の中から価値あるものを選別する」段階への転換を強いており、一部の投稿者は一度に数百件の PR を送るほどだった。信頼構築のためにエージェントとの対話ログや検証結果を「示す」ことが新たな信用シグナルとなった一方、既存 PR を複製してバッジや信頼度を水増しする攻撃、サプライチェーン攻撃を踏まえた依存関係の総点検、AI 生成コードを人間の作者性という従来の手がかりなしに査読する難しさなど、急成長ならではのセキュリティ課題が浮き彫りになっている。

詳細は [OpenClaw went viral. Meet the maintainers building and securing it.](https://github.blog/open-source/maintainers/openclaw-went-viral-meet-the-maintainers-building-and-securing-it/) を参照。

## 本番投入前のLLM評価、GitHubが8つの実践を解説

GitHub Blog が、LLM を安全に本番投入するための評価手法を解説する記事を公開した。特定モデルではなくビジネス上の意思決定から出発すること、評価を一度きりでなく変更のたびに回す統合テストとして扱うこと、本番同様の曖昧さやノイズを含むデータで評価すること、ワークフローの結果を鵜呑みにせず本番ラベルの妥当性を精査すること、合成データやオープンデータセットでカバレッジの穴を戦略的に埋めること、集計指標だけでなくエラーを体系的に分析すること、LLM-as-Judge は明確なケースの自動化に限定し曖昧・高リスクなケースは人手レビューに回すこと、オフラインでの成功を過信せず慎重に本番展開することの 8 つを実践として挙げている。LLM をプロダクトに組み込むチームにとって、評価基盤をどう体系化するかの具体的な参考になる。

詳細は [How to evaluate LLMs before production](https://github.blog/ai-and-ml/llms/how-to-evaluate-llms-before-production/) を参照。
