---
title: "2026-06-13 技術ニュースまとめ"
description: "Anthropic モデルへの米規制強化、Claude Fable 5 の日本向けアクセス停止、OpenAI の Codex OSS 開放、Pyodide 314.0 リリース、GitHub Copilot CLI のエージェント機能強化など、AI・開発ツール・セキュリティ分野の主要トピックを解説。"
pubDate: 2026-06-13
tags: ["AI", "LLM", "Claude", "GitHub", "セキュリティ", "Python", "WebAssembly"]
author: "grasshopper"
---

本日は AI 規制・政策に関する大きな動きが複数あった。Amazon CEO の働きかけによって米国政府が Anthropic モデルへの制限を強化したとの報道が流れ、日本国内では Claude Fable 5 への輸出管理によるアクセス停止が話題となった。一方、開発ツール面では OpenAI の Codex がオープンソース向けに提供開始、GitHub Copilot CLI にカスタムエージェント機能が追加、Pyodide 314.0 がリリースされるなど活発な動きが続く。AI を悪用した証拠捏造の疑惑事件や、$730 万調達直後のOSS プロジェクト突然のアーカイブといったセンセーショナルな出来事も注目を集めている。

## Amazon CEO の働きかけで Anthropic モデルへの米国規制が強化

Wall Street Journal の報道によると、Amazon CEO が米国当局と交渉を行った結果、Anthropic の AI モデルに対する規制・輸出管理が強化されたという。AWS を通じて Anthropic の主要出資者となっている Amazon にとっても影響が及ぶ形であり、AI モデルの国際的な流通をめぐる政府関与の深まりを示す事例として注目される。クラウドプロバイダーと AI 企業の関係が政府規制の焦点になりつつある現状を改めて浮き彫りにした。

詳細は [Amazon CEO's talks with U.S. officials triggered crackdown on Anthropic models（WSJ）](https://www.wsj.com/tech/ai/amazon-ceos-talks-with-u-s-officials-triggered-crackdown-on-anthropic-models-dcc90578) を参照。

## Claude Fable 5 が輸出管理指令でアクセス停止に

上記の規制強化を受け、日本のユーザーの間で Claude Fable 5 へのアクセスが突然できなくなったという報告が相次いだ。Zenn 上でも「輸出管理指令によるアクセス停止」として体験談が投稿されており、影響範囲や回避策についての議論が広がっている。世界最高水準とも評価される最新モデルが突如使えなくなる事態は、AI ツールを業務に組み込んでいる開発者や企業にとって大きなリスクとして認識されつつある。

詳細は [Claude Fable 5が突然使えなくなった(輸出管理指令によるアクセス停止)（Zenn）](https://zenn.dev/yamadatt/articles/20260613-fable5-access-suspended) を参照。

## 英国警察官が AI で証拠を「捏造」した疑いで捜査対象に

Sky News および BBC の報道によると、英ダービーシャー警察の警察官が複数の事件で AI を使って証拠を生成・改ざんした疑いで調査を受けていることが明らかになった。司法の場において AI 生成コンテンツが虚偽証拠として悪用される事例が明るみになった点は、AI リテラシーと法制度の整備が急務であることを示している。AI ツールのアクセス制御や利用ログの保全など、技術的な対策の検討も今後求められるだろう。

詳細は [Police officer investigated for using AI to 'create evidence' in multiple cases（Sky News）](https://news.sky.com/story/derbyshire-police-officer-investigated-for-using-ai-to-create-evidence-in-multiple-cases-13553661) および [Derbyshire Police officer accused of using AI to 'create evidence'（BBC）](https://www.bbc.com/news/articles/cy8wppwdxl6o) を参照。

## OpenAI が Codex をオープンソースプロジェクト向けに提供開始

OpenAI が Codex のオープンソースコミュニティ向け提供フォームを公開した。商用ユーザーとは異なる条件でコーディング AI にアクセスできるようにすることで、OSS エコシステムとの関係強化を図る狙いがあると見られる。GitHub Copilot との競合環境が激化するなか、OpenAI が OSS コミュニティを取り込む戦略を明確にした動きとして注目される。

詳細は [Codex for open source（OpenAI）](https://openai.com/form/codex-for-oss/) を参照。

## TensorZero：$730 万調達直後に OSS リポジトリを突然アーカイブ

AI コーディングツール関連の OSS プロジェクト TensorZero が、シードラウンドで $730 万（約 11 億円）を調達した翌日に GitHub リポジトリをアーカイブ状態にしたと報告されている。調達直後の突然のクローズはコミュニティに衝撃を与えており、OSS ビジネスモデルの持続可能性や「オープン」とは何かを問い直す議論が Hacker News 上で活発に行われている。スタートアップが OSS を手がかりに資金調達したのちクローズドへ移行するパターンへの警戒感が改めて高まっている。

詳細は [AI OSS tool repo goes archived over night after raising $7.3M Seed（GitHub）](https://github.com/tensorzero/tensorzero) を参照。

## Pyodide 314.0：Python パッケージが PyPI に WebAssembly ホイールを公開可能に

Python の WebAssembly 実行環境 Pyodide のバージョン 314.0 がリリースされた。最大のアップデートは、Python パッケージが WebAssembly (Emscripten) 向けのホイールを PyPI に直接公開できるようになった点だ。これまでは Pyodide 独自のビルドパイプラインを経る必要があったが、標準の `pip install` ワークフローに近い形でパッケージを利用できるようになる。ブラウザ上で動作するフル機能の Python 環境の実現に向けて大きな一歩となる。

詳細は [Pyodide 314.0 リリースブログ](https://blog.pyodide.org/posts/314-release/) を参照。

## GitHub Copilot CLI にカスタムエージェントとワークフロー機能

GitHub Blog がカスタムエージェント機能と Language Server 連携の 2 本の記事を立て続けに公開した。カスタムエージェントを使うと、一度限りのプロンプトから複数ステップのワークフローを定義できるようになる。さらに Language Server Protocol（LSP）との統合により、コードベース全体の型情報やシンボル解決をリアルタイムに参照しながら補完・修正提案が行われるようになった。単純なコード補完を超えた「コードを理解する AI」への進化が続いている。

詳細は [From one-off prompts to workflows: How to use custom agents in GitHub Copilot CLI](https://github.blog/ai-and-ml/github-copilot/from-one-off-prompts-to-workflows-how-to-use-custom-agents-in-github-copilot-cli/) および [Give GitHub Copilot CLI real code intelligence with language servers](https://github.blog/ai-and-ml/github-copilot/give-github-copilot-cli-real-code-intelligence-with-language-servers/) を参照。

## Bedrock AgentCore + Strands SDK で自己改善型社内 RAG ボット

AWS の Bedrock AgentCore と Strands Agents SDK を組み合わせることで、「使うほど賢くなる社内 RAG ボット」を構築する手法が Zenn で紹介された。ユーザーとのやり取りから学習データを蓄積し、次回の検索・回答精度を自律的に高めるアーキテクチャが詳細に解説されている。マネージドサービスを活用しながら自己改善ループを実装できる点が注目ポイントで、エンタープライズ向け RAG 構築の参考になる内容だ。

詳細は [Bedrock AgentCore + Strands Agents SDK で作る、使うほど賢くなる社内RAGボット（Zenn）](https://zenn.dev/pksha/articles/agentcore-strands-self-improving-rag) を参照。

## RTX 5080 + RTX 3090 のデュアル GPU 構成で Qwen 3.6 27B Q8 が 80 tok/s を達成

RTX 5080 と RTX 3090 を組み合わせたコンシューマー GPU 環境で、Qwen 3.6 27B Q8 量子化モデルの推論速度 80 トークン/秒超を実現したという検証レポートが話題になっている。異なる世代・メモリ帯域の GPU をどのように組み合わせてパフォーマンスを最大化するかが詳細にまとめられており、ローカル LLM 環境を構築したいエンジニアにとって実践的な参考情報となっている。

詳細は [RTX 5080 and RTX 3090 Setup: 80 Tok/s on Qwen 3.6 27B Q8](https://imil.net/blog/posts/2026/rtx-5080-+-rtx-3090-setup-80+-tok-s-on-qwen-3.6-27b-q8/) を参照。

## GitHub シークレットスキャンの偽陽性を大規模削減

GitHub Blog が、シークレットスキャニング機能の偽陽性削減に向けた取り組みを公開した。機械学習モデルの改善やルールベースのヒューリスティック見直しにより、誤検知率を大幅に下げながら真の漏洩検出精度を維持することに成功したという。セキュリティアラートの信頼性向上は「アラート疲れ」を防ぐうえでも重要であり、DevSecOps ワークフローの実用性を高める改善として評価できる。

詳細は [Making secret scanning more trustworthy: Reducing false positives at scale（GitHub Blog）](https://github.blog/security/making-secret-scanning-more-trustworthy-reducing-false-positives-at-scale/) を参照。

## QA エンジニアが「自分でテストをやりきる」発想を手放す

Zenn のトレンド記事として、QA エンジニアが従来の「自分がすべてテストする」という役割認識を見直し、開発チーム全体でテスト品質を担う体制への移行を模索する体験談が注目を集めた。テスト自動化や AI 支援が普及するなか、QA エンジニアの職能がどう変化するかを具体的なエピソードを交えながら論じており、チーム開発のあり方を考えるうえで示唆に富む内容となっている。

詳細は [QAエンジニアが「自分でテストやりきる」のをやめようとしている話（Zenn）](https://zenn.dev/yasuhiro_test/articles/65eba13298c9c2) を参照。
