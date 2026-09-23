---
title: "2026年9月24日 技術ニュースまとめ：ClaudeがCRISPR様の新規酵素システムを発見、Gemini 3.8がTTSに対応、GitHub CopilotランタイムはRustへ全面移行"
description: "AnthropicのClaudeが自律的にDNAデータベースを解析し新規酵素システムを発見。GoogleはGemini 3.8のTTSモデルを発表。GitHub Copilotランタイムの大規模Rust移行やCloudflareのVaryヘッダー対応など2026年9月24日のニュースをまとめました。"
pubDate: 2026-09-24
tags: ["AI", "開発ツール", "セキュリティ", "インフラ", "プログラミング言語"]
author: "grasshopper"
---

本日はAI関連の話題が目立ち、Anthropicが自社の生命科学研究所でClaudeを使い新しい酵素システムを自律的に発見したと発表した一方、GoogleはGemini 3.8ベースの高品質な音声合成モデルを公開した。開発ツール領域ではGitHubがCopilotランタイムを大規模言語モデルの支援を受けつつTypeScriptからRustへ全面移行したことを明かし、AIエージェントによる大規模リファクタリングの実例として注目を集めている。インフラ面ではCloudflareが長年「HTTPで最も厄介な仕様」と言われてきたVaryヘッダーのキャッシュ制御に対応した。加えて、VSCodeのリモートSSH機能に潜むセキュリティ上の懸念や、RustマクロにC言語を埋め込む新ライブラリなど、実務者向けの技術記事も相次いで話題となった。

## Anthropic、ClaudeがDNAデータベースからCRISPR様の新規酵素システムを発見

Anthropicの新設生命科学研究所は、Claudeを用いて約950体のエージェントが21時間かけて200万以上の逆転写酵素を分析し、「ART（配列関連逆転写酵素）」と呼ばれる未知の酵素システムを発見したと発表した。バクテリオファージ内の逆転写酵素に付随する規則的なDNAリピート配列を認識し、CRISPRに類似した仕組みではないかとClaude自身が仮説を立てた点が特徴で、文献調査からデータベース検索、仮説生成、評価までの研究プロセス全体をAIが担った。従来は数週間から数ヶ月かかる分析作業を大幅に加速でき、AIが生物学的発見を自律的に駆動できることを実証した事例として注目される。

詳細は [Claude discovers a novel enzyme system with CRISPR-like repeats](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system) を参照。

## Google、自然言語プロンプトで音声を生成する「Gemini 3.8 Flash TTS」を発表

Googleはテキスト音声合成の最新版「Gemini 3.8 Flash TTS」と軽量版「Flash-Lite TTS」を発表した。自然言語プロンプトだけでゼロからカスタム音声を生成でき、100以上の言語・方言でキャラクターの口調や感情を細かく制御できるほか、30秒の音声サンプルから既存の声を複製する機能も備える。行ごとのスクリプト制御によりペースや感情、背景音を指定でき、数時間規模の長文生成でも音声ドリフトを抑えて品質を維持できる点が技術的なポイントだ。業界ベンチマークで高スコアを獲得しており、ポッドキャストやオーディオブック、ボイスエージェント制作への応用が見込まれる一方、AI生成音声と分かる透かし機能も組み込まれている。

詳細は [Gemini 3.8 text-to-speech](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/) を参照。

## Apple、長文コンテキストを画像として圧縮する視覚言語モデル「LensVLM-9B」を公開

Appleが90億パラメータの視覚言語モデル「LensVLM-9B」をHugging Face Hubで公開した。Qwen3.5-9Bをベースとし、ドキュメントのような長いテキスト情報を「圧縮された画像表現」として扱うのが特徴で、必要なページだけを学習済みツールにより非圧縮形式へ選択的に展開することで、大量の情報を効率的に処理できる。長大なコンテキストをすべてテキストトークンとして保持する従来手法に比べ、メモリ効率と処理速度の両面で優位性を狙った設計であり、長文書やマルチページ資料を扱うVLMの新たなアプローチとして関心を集めている。

詳細は [LensVLM: Compressing long context as images, expanding only relevant pages](https://huggingface.co/apple/LensVLM-9B) を参照。

## GitHub、Copilotランタイムの80万行超をAIエージェントの支援でTypeScriptからRustへ全面移行

GitHubは、Copilotランタイムの80万行以上のコードベースをTypeScriptからRustへ書き換えたことを明らかにした。数ヶ月という短期間で完了できた理由として、移行作業の大部分をAIエージェント自身に任せたことを挙げている。単純な機械的変換ではなく、型システムの違いや非同期処理モデルの差異を踏まえた設計判断が必要な大規模リファクタリングをAIが主導した事例であり、AIコーディングエージェントが実運用コードベースの大規模な言語移行に耐えうる水準に達しつつあることを示す事例として注目されている。

詳細は [Migrating the GitHub Copilot runtime to Rust, using Copilot](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) を参照。

## GitHub、Copilotアプリで200万行超の巨大プルリクエストを描画する差分表示エンジンを刷新

GitHubは、Copilotアプリにおいて2,200ファイル・100万行超の変更・400件超のインラインレビューコメントを含むような巨大なプルリクエストでも快適に扱えるよう、差分表示（diff）レンダリングを再構築したと発表した。AIエージェントによる自動生成コードの増加でPRの規模が従来より大きくなりやすい現状を踏まえ、大量のファイルとコメントを扱ってもUIの応答性を保つレンダリング手法を採用している。AI時代のコードレビュー体験を支えるフロントエンド基盤の課題と対応策を示す事例といえる。

詳細は [Rendering huge pull requests in the GitHub Copilot app](https://github.blog/engineering/user-experience/rendering-huge-pull-requests-in-the-github-copilot-app/) を参照。

## GitHub Blog、「RAGは死んだか」「SkillsはMCPを殺したか」といったAI開発の論点を整理

GitHub Blogは、コードレビューは誰が担うべきか、RAG（検索拡張生成）は時代遅れになったのか、AnthropicのSkills機能はMCP（Model Context Protocol）を置き換えるのかといった、AI開発コミュニティで交わされている複数の「ホットテイク」を整理する記事を公開した。結論としては、SkillsとMCPは競合するというより役割の異なる補完的な技術であり、RAGも用途によっては依然有効であるとしている。AIツールの選定において表面的な流行に流されず、それぞれの技術が解決する具体的な課題を見極める重要性を説く内容だ。

詳細は [Should you read the code, is RAG dead, and did Skills kill MCP?](https://github.blog/ai-and-ml/should-you-read-the-code-is-rag-dead-and-did-skills-kill-mcp/) を参照。

## Cloudflare、HTTPで「最も厄介な仕様」とされるVaryヘッダーのキャッシュ制御に対応

Cloudflareは、Cache Rules機能でHTTPのVaryヘッダーに対応するキャッシュ制御を全プラン向けに提供開始した。1つのURLが言語や画像形式などの違いで複数の正しいレスポンスを持つ場合、従来のCDNキャッシュは「すべての値ごとに個別キャッシュ」か「Vary自体を無視」かの二択を迫られ、キャッシュの断片化や非効率を招いていた。新機能では、同等のリクエストを統合する「normalize」、値ごとに正確に区別する「passthrough」、キャッシュをスキップする「bypass」という3種類の処理をヘッダーごとに選択でき、オリジン側の意図を保ちながら柔軟なキャッシュ最適化が可能になった。

詳細は [We just shipped support for the ugliest part of HTTP: Vary](https://blog.cloudflare.com/vary-support/) を参照。

## VSCodeのリモートSSH機能、強力すぎるエージェント常駐の設計にセキュリティ上の懸念

インフラ企業Fly.ioのブログは、VSCodeのリモート編集機能に潜むセキュリティ上の懸念を指摘した。Emacsのtrampのような標準シェルコマンドの実行に留まる仕組みとは異なり、VSCodeはリモートサーバー上にBashスニペットのダウンローダーとNodeバイナリからなるエージェントを常駐させ、WebSocket接続経由でファイルシステム操作や任意ファイル編集、シェルPTYプロセスの起動、さらには自己永続化までを可能にしているという。開発用サーバーでの利用には注意が必要で、本番環境での安易な利用は避けるべきだと警鐘を鳴らしている。

詳細は [VSCode's SSH Agent Is Bananas (2025)](https://fly.io/blog/vscode-ssh-wtf/) を参照。

## Zenn、Rustのマクロ内にC言語コードを直接記述できるライブラリ「cinrs」が話題に

Zennのトレンド記事では、RustのマクロにC言語コードを直接埋め込んで呼び出せるライブラリ「cinrs」が注目を集めた。外部のCコンパイラに依存せず、マクロに渡されたCコードを内部の完全なCコンパイラでRustの同等コードへ変換して処理する仕組みで、C89からC23までの複数規格に対応する。`__attribute__((cinrs_safe))`でアノテートした関数はunsafeを外せるほか、パフォーマンスベンチマークではGCC/Clangと同等かそれ以上の結果を達成しているという。bindgenのような既存のC FFIツールと異なりbuild.rsやlibclangが不要で、Cコンパイラが存在しない環境でもCコードを実行でき、miriによる検証にも対応する点が高く評価されている。

詳細は [C言語のコードをRustの中に書けるライブラリを作った](https://zenn.dev/tanakh/articles/c-code-in-rust) を参照。

## Zenn、AIエージェントを用いた並列開発におけるVS CodeとCursorの実務上の違いを比較

Zennのトレンド記事では、複数のAIコーディングエージェントを並列に動かしつつ人間も並行して開発を進める「並列開発」ワークフローにおいて、VS CodeとCursorの使い勝手の違いを論じた記事が話題となった。著者はセキュリティ制約の厳しい業務環境でVS Code＋GitHub Copilotを試したところ、開いているファイルが意図せずコンテキストに含まれる、指定した編集位置と実際の編集箇所がずれる、無関係なターミナルイベントでチャットが再開してしまうといった問題に直面したという。一方Cursorはインライン参照で複数リソース間の関係を文章内に明示でき、UI操作も直感的で待機時間が少ないとし、「安心して任せられるか」を基準にCursorを選好すると結論づけている。

詳細は [分離できていない？並列開発で感じた VS Code と Cursor の違い](https://zenn.dev/imkohenauser/articles/vscode-cursor-parallel-development) を参照。
