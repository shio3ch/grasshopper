---
title: "2026-09-16 技術ニュースまとめ：Gemini 3.8 Live、サプライチェーン脆弱性、React/GitHub開発者向けTips"
description: "GoogleのGemini 3.8 Live発表、DockerイメージからのGitHubトークン漏洩によるBaseten侵害、M4 Mac Mini向けLinux GPUドライバ開発、GitHub Copilotアプリ解説など2026年9月16日の主要技術ニュースをリンク付きで紹介。"
pubDate: 2026-09-16
tags: ["AI", "セキュリティ", "React", "GitHub", "Google"]
author: "grasshopper"
---

本日はGoogleが音声対話向けAIモデル「Gemini 3.8 Live」シリーズを発表したことが大きな話題となった。セキュリティ分野では、Dockerイメージのビルド履歴に残っていた古いGitHubトークンを起点にBasetenの本番環境へ管理者権限で侵入できたという実例が注目を集めている。ハードウェア方面ではApple SiliconのGPUファームウェアを1か月でリバースエンジニアリングしLinux用ドライバを実装した挑戦的な事例が話題に。開発者向けにはGitHub Copilotアプリのチュートリアルや8月の障害報告、ReactやGitHub Pagesに関する日本語の実践的なノウハウ記事も多く共有された。

## Google、対話特化のAIモデル「Gemini 3.8 Live」シリーズを発表

Googleはリアルタイムの自然な音声対話を目的とした新モデル「Gemini 3.8 Live」と、複雑な多段階推論に対応する上位版「Gemini 3.8 Live Extended Thinking」を発表した。両モデルとも97言語に対応し、対話を中断せずにバックグラウンドタスクを実行できるほか、視覚入力もほぼ即座に処理できる点が特徴。Gemini API、Google Workspace、検索を通じて提供が始まっており、より自然な音声エージェントの開発を後押しする。

詳細は [Gemini 3.8 Live and 3.8 Live Extended Thinking](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/) を参照。

## DockerイメージのビルドAI履歴に残った古いトークンでBasetenの本番GitHubに侵入

セキュリティ企業Strixが、公開状態だったBasetenのHarborコンテナレジストリを分析し、イメージのビルド履歴メタデータから2023年3月に作成されたGitHubパーソナルアクセストークンを発見、それが3年後も有効なままだったと報告した。このトークンにはBasetenの主要リポジトリ、クラスタを制御するGitOpsリポジトリ、Homebrew tapへの管理者・push権限が付与されており、サプライチェーン攻撃につながりかねない重大なインシデントだった。Dockerのビルド履歴には削除したはずの機密情報が残存し得るため、BuildKitのシークレットマウント機能の利用や、ファイルシステムだけでなくイメージレイヤー・メタデータの監査が必要だと指摘されている。

詳細は [We got admin access to Baseten's production GitHub in 25 minutes](https://www.strix.ai/blog/baseten-harbor-github-pat-takeover) を参照。

## Internet Archive、Wayback Machineへの大量自動アクセスに対策を実施

Internet Archiveは、Wayback Machineを標的とした大量の自動化トラフィックに対する保護策を導入し、ブロック時のエラーメッセージ（HTTP 429）を更新したと発表した。サービスの安定性維持に寄与する一方で、正規利用者が誤ってブロックされるケースも発生しているという。誤検知の疑いがある場合は技術的な詳細を添えてinfo@archive.orgへ連絡するよう呼びかけており、ボット検知精度の改善に役立てる方針。

詳細は [An Update on Wayback Machine Access](https://blog.archive.org/2026/09/15/an-update-on-wayback-machine-access/) を参照。

## M4 Mac Mini向けLinux GPUドライバをわずか1か月で実装

エンジニアのCody Ho氏とNiklas Sheth氏が、通常なら数年を要するApple SiliconのGPUドライバ開発を、AGXファームウェアの複雑なABIをハイパーバイザーとLLM支援でリバースエンジニアリングすることで約1か月で完成させた。M1/M2世代に比べ構造体・ポインタ数が大幅に増えた難解なファームウェアインターフェースの解読、GPU状態遷移のキャプチャと再生、ジオメトリがバッファ容量を超えた際の部分レンダリング処理などが技術的な難所だったという。成果としてChromeやFirefoxでのWebGL動作、Minecraftを212fpsで実行できるところまで到達しており、今後Mesa・Linuxへのアップストリーム貢献を予定している。

詳細は [Building a Linux GPU Driver for the M4 Mac Mini in One Month](https://codyho.dev/blog/gpu-driver/) を参照。

## GitHub、8月の障害報告を公開——「可用性、次に容量、その次に機能」

GitHubは2026年8月に発生した5件のインシデントをまとめた月次可用性レポートを公開した。最も深刻だったのは8月17日にIssue・プルリクエスト・APIなど複数サービスに影響したデータセンターのロードバランサ容量超過で、他にもActionsのデプロイ起因の障害、Copilotクラウドエージェントのステータス更新遅延、トラフィックピーク時のActions実行失敗などが報告されている。サービスメッシュやActionsのオートスケーリング余裕の追加、クライアントリトライの増幅バグ修正、データベースフェイルオーバー設定の改善、自動サーキットブレーカーの導入などが対策として挙げられており、Azureへの移行を進める中で「可用性、次に容量、その次に機能」を優先する方針が改めて示された。

詳細は [GitHub availability report: August 2026](https://github.blog/news-insights/company-news/github-availability-report-august-2026/) を参照。

## GitHub Copilotアプリの使い方——diff・ターミナル・ブラウザパネル

GitHub公式ブログが、GitHub Copilotアプリでタブ切り替えなしにエージェント生成コードをレビューする方法を解説する初心者向けガイドを公開した。追加行を緑、削除行を赤で表示するdiffパネル、アプリ内で開発サーバーなどのコマンドを直接実行できるターミナルパネル、UIのテスト・改善を行う「Pick & Polish」機能を備えたブラウザパネルの3つを組み合わせることで、「何が変わったか」「動くか」「意図通りか」をマージ前に確認できる。

詳細は [GitHub Copilot app for Beginners: Using the diff, terminal, and browser](https://github.blog/ai-and-ml/github-copilot/github-copilot-app-for-beginners-using-the-diff-terminal-and-browser/) を参照。

## React 19.3のFragment Refsを使った「ずるい」実装テクニック

Zennでは、React 19.3で追加されたFragment Refsを利用し、自身は何も描画せずに内部要素へ属性を付与するコンポーネントの実装方法が紹介された。`observeUsing`メソッドに疑似的なObserverオブジェクトを渡すことでFragmentに囲まれたDOM要素を取得する仕組みを応用し、`<Hidden enabled>`のようなコンポーネントでhidden属性を子要素へ付与する例が示されている。ただし公式にサポートされた使い方ではなく将来の動作保証もないため、本番導入には注意が必要と著者自身が釘を刺している。

詳細は [Fragment Refsのずるい使い方](https://zenn.dev/uhyo/articles/react-fragment-refs-hack) を参照。

## クロスプラットフォーム開発が「解決するコスト・しないコスト」

Shopifyがネイティブ開発へ回帰したというニュースを題材に、クロスプラットフォーム技術のコスト構造を整理した記事がZennで注目を集めた。実装コスト・複数プラットフォーム間の同期コスト・品質保証コスト・学習コストなどは削減できる一方、アプリストア管理やOS固有機能対応のコストは残り、フレームワーク自体の維持コストも新たに発生すると指摘する。技術選定においては「一般的にどちらが優れているか」ではなく「自組織が何を安くしたいか」という観点で判断すべきだと結論づけている。

詳細は [クロスプラットフォーム開発が解決するコスト、解決しないコスト](https://zenn.dev/nkzn/articles/cross-platform-development-costs-2026) を参照。

## BabelなしでReact Compilerを導入し、useMemoの判断から解放される

Zennでは、Viteプロジェクトに Babel を追加せず React Compiler を導入する手法が紹介された。`@vitejs/plugin-react` 6.1以降でOxcがRustに移植した`oxc-transform-react`を`react({ compiler: true })`一行で呼び出せるようになったことが鍵で、TanStack Table v9への移行によりネイティブ互換性も確保している。狙いは性能向上そのものよりも、チーム開発において `useMemo`/`useCallback` の要否判断をlintで機械的に制御し、開発者もAIも「Compilerに任せる」ことをデフォルトにできる開発環境を整える点にある。

詳細は [React Compiler を Babel なしで入れて、useMemo を書くか迷うのをやめた](https://zenn.dev/hacobu/articles/2f58be1f62bcf8) を参照。

## プライベートGitHub Pagesへの独自ドメイン設定で陥りやすい罠

GitHub Pagesをプライベートリポジトリで公開する際にカスタムドメインを設定する際の注意点をまとめた記事がZennで共有された。設定画面に表示される`random-name-xxxxxxxx.pages.github.io`のようなランダムサブドメインはオリジン分離用の配信先に過ぎず、実際は`<organization>.github.io`へCNAMEを向ける必要がある。誤った設定でもエラーは出ずHTTPS証明書の発行ジョブが開始されないため検出が難しく、`pages/health` APIで`is_https_eligible: false`が返っていないか確認することが推奨される。またCloudflareなどのDNSプロキシを有効にしていると検証に失敗するため「DNS only」に設定する必要がある点も注意点として挙げられている。

詳細は [private な GitHub Pages に独自ドメインを当てるときに気をつけること](https://zenn.dev/genda_jp/articles/11abdf42c756e8) を参照。
