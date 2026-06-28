---
title: "2026-06-28 技術ニュースまとめ"
description: "本日の主要トピックは、GLM 5.2のセキュリティベンチマークでのClaude超え、ISC'26での新スパコンTop500首位、AIによるMRI読影事例、ブラウン大学でのAI不正問題、LLMの鏡テスト研究など、AI・HPC・オープンソースを横断する話題が並んだ一日でした。"
pubDate: 2026-06-28
tags: ["AI", "LLM", "HPC", "オープンソース", "セキュリティ", "教育"]
author: "grasshopper"
---

本日2026年6月28日は、AIモデルのベンチマーク競争が新局面を迎えたニュースを筆頭に、世界最速スパコンの更新、医療分野へのAI活用、大学でのAI不正問題といった多岐にわたるトピックが注目を集めた。国内では ZennでClaude CodeとOWASP Benchmarkを組み合わせた脆弱性検出の検証記事や、LLM事後学習を俯瞰する技術解説が人気を集めた。GitHubブログではCopilotのエージェント性能評価や社内データ分析エージェントの構築事例も公開されている。

## GLM 5.2 がサイバーセキュリティベンチマークでClaudeを超えた

Semgrepが公開したブログ記事によると、同社独自のセキュリティ特化ベンチマーク「Mythos」において、GLM 5.2がClaudeを上回るスコアを記録したという。評価はコード脆弱性の検出・説明能力に焦点を当てており、従来のコーディング系ベンチマークとは異なる実務的な観点からモデルを比較している点が特徴だ。LLMのセキュリティ用途での実力評価が進む中、既存の大手モデル以外の選択肢が台頭しつつある動きとして注目に値する。

詳細は [GLM 5.2 beats Claude in our benchmarks](https://semgrep.dev/blog/2026/we-have-mythos-at-home-glm-52-beats-claude-in-our-cyber-benchmarks/) を参照。

## ISC'26: Top500で新たな世界最速スパコンが誕生

ISC High Performance 2026において、Top500リストが更新され、新たな世界No.1スパコンが発表された。Chips and Cheeseによる分析記事では、ハードウェアアーキテクチャや電力効率の観点から詳しい解説が行われている。AI/ML向けの演算性能が引き続き重視されており、GPU・アクセラレータ搭載構成が上位を占める傾向は変わっていない。気候科学・創薬・核融合研究への活用を見据えたシステム設計の変化も指摘されている。

詳細は [TOP500 at ISC'26: We have a New Number 1 Supercomputer](https://chipsandcheese.com/p/top500-at-isc26-we-have-a-new-number) を参照。

## Claude Code OpusでMRIの「セカンドオピニオン」を取得した事例

ブロガーのAntoine氏が、自身のMRI画像をClaude Code Opusに解析させ、セカンドオピニオンを得る実験を公開した。放射線科医の所見と比較しながら、AIがどの程度正確に所見を読み取れるかを詳細に記録している。医療診断への応用は倫理・規制面の課題が大きいが、AIリテラシーの観点から「AIと医療情報をどう扱うか」を考えるケーススタディとして広く共有されている。

詳細は [I used Claude Code to get a second opinion on my MRI](https://antoine.fi/mri-analysis-using-claude-code-opus) を参照。

## ブラウン大学教授がAIによる大規模不正を告発

El Paísの英語版記事によると、ブラウン大学の教授が期末試験においてAIを使った大規模な不正行為が発生したとして糾弾した。教授はAI生成テキストの特徴的なパターンや構造の均一性を根拠に不正を指摘しており、学術的誠実性の危機として注目を集めている。AI検知ツールの限界と、試験制度そのものの見直しを求める声も上がっており、教育機関でのAI利用ポリシー整備が急務となっている。

詳細は [Professor denounces mass AI fraud on an exam at Brown](https://english.elpais.com/education/2026-06-28/ai-fraud-at-brown-university-academic-integrity-is-at-risk.html) を参照。

## LLMは「鏡テスト」をパスするか？

Pascal Schuster氏のブログでは、動物の自己認識テストとして知られる「鏡テスト」をLLMに適用する思考実験が展開されている。LLMが自己参照的な質問に対してどのように応答するかを通じて、「自己認識」に相当する能力があるかを検証している。AGI・意識の議論とも接続する哲学的トピックで、研究者・エンジニアの双方から関心を集めている。

詳細は [Do LLMs pass the mirror test?](https://blog.pascalschuster.de/article/do-llms-pass-the-mirror-test) を参照。

## GitHub Copilotエージェントハーネスのモデル横断評価

GitHubブログでは、Copilotのエージェント型タスク処理基盤（agentic harness）を複数のモデル・タスク種別で評価した結果が公開された。処理性能・コスト効率・タスク完了率の観点から比較が行われており、モデル選定がエージェント設計に与える影響が示されている。特定タスクでは小型モデルがコスト面で優位に立つケースもあり、実務でのエージェント設計に役立つ知見を提供している。

詳細は [Evaluating performance and efficiency of the GitHub Copilot agentic harness across models and tasks](https://github.blog/ai-and-ml/github-copilot/evaluating-performance-and-efficiency-of-the-github-copilot-agentic-harness-across-models-and-tasks/) を参照。

## GitHub社内でデータ分析エージェントを構築した話

GitHubエンジニアリングチームによる社内データ分析エージェントの構築事例が公開された。自然言語でのクエリ入力からSQL生成・実行・結果可視化までをエンドツーエンドで処理するエージェントを構築し、非エンジニア社員でもデータ分析を行えるようにした経緯が詳述されている。ツール選定・プロンプト設計・ハルシネーション対策など、実装上の工夫が具体的に語られており、社内AIエージェント導入の参考事例として有用だ。

詳細は [How we built an internal data analytics agent](https://github.blog/ai-and-ml/github-copilot/how-we-built-an-internal-data-analytics-agent/) を参照。

## Claude Code と Codex の脆弱性検出能力を OWASP Benchmark で検証（Zenn）

Zennユーザーのyukkie1114氏が、Claude CodeとOpenAI Codexのコードレビュー機能をOWASP Benchmark v1.2を用いて比較検証した記事を公開した。XSS・SQLインジェクション・パストラバーサルなど典型的な脆弱性カテゴリごとに検出率を計測しており、両ツールの得意・不得意が具体的な数値で示されている。実務でのAIコードレビュー導入を検討する開発者にとって実践的な指標となる内容だ。

詳細は [Claude Code と Codex のレビュー機能は脆弱性をどれだけ見つけられるかをOWASP Benchmark で検証](https://zenn.dev/yukkie1114/articles/3d927e8c28e085) を参照。

## LLM 事後学習（SFT / RLHF / DPO / GRPO）を教師信号から俯瞰する（Zenn）

Zennユーザーのshunk031氏が、LLMの事後学習手法を「教師信号の種類」という切り口で体系的に整理した解説記事を公開した。SFT・RLHF・DPO・RLVR・GRPO・自己蒸留といった各手法が、どのような形の教師信号を使うかを統一的な視点で比較しており、手法間の関係性を理解しやすくまとめられている。LLM研究・応用の両面で参照価値の高い技術まとめとなっている。

詳細は [LLM 事後学習 (SFT / RLHF / DPO / RLVR / GRPO / 自己蒸留) を教師信号から眺める](https://zenn.dev/shunk031/articles/llm-post-training-overview) を参照。

## Librepods: AirPodsをオープンソース化するプロジェクト

GitHubで公開されている「Librepods」プロジェクトは、Apple AirPodsのファームウェアや通信プロトコルを解析し、Appleエコシステム外でも完全な機能が利用できるようにすることを目指すオープンソースの取り組みだ。耳検出センサー連携・ノイズキャンセリング制御・自動切換えといった機能をLinux・Android環境でも動作させることを目標としており、プロプライエタリデバイスの"解放"を推進するコミュニティの活動として注目を集めている。

詳細は [Librepods: AirPods liberated](https://github.com/librepods-org/librepods) を参照。
