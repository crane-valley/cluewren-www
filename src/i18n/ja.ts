import type { Strings } from "./types";

const ja: Strings = {
  meta: {
    title: "Cluewren: コーディングエージェント向け自動プレイテスト",
    description:
      "Unity、Godot、Unreal Engineのエディタで開いているゲームについて、コーディングエージェントにテストを依頼できます。エージェントがC#ハーネスを記述し、意思決定モデルJevがプレイして、エージェントが測定された証拠とともに結果を報告します。",
  },
  nav: {
    label: "メインナビゲーション",
    skip: "本文へ移動",
    docs: "ドキュメント",
    github: "GitHub",
    language: "言語",
  },
  hero: {
    title: "コーディングエージェントでゲームをプレイテスト",
    lead:
      "エディタで開いているゲームに対して、挙動の検証や目標達成、バグの探索をClaude CodeやCodexに依頼できます。エージェントがC#ハーネスを記述し、Jevがゲームをプレイして、エージェントが測定された証拠とともに判定を報告します。",
    primary: "はじめる",
    secondary: "GitHub",
    requirements:
      "Windows 11、.NET 10 SDK、TypeSafeのAPIキー、およびソースコードからのビルドが必要です。",
  },
  report: {
    label: "プレイテストレポートの例",
    caption:
      "UnityのFPS Microgameサンプルにおける実際の実行レポートからの抜粋です（原文の英語で表示）。",
    duration: "{s} 秒、1 エピソード",
  },
  steps: {
    title: "動作の流れ",
    items: [
      {
        title: "エディタでゲームを開く",
        body: "Cluewrenプラグインを導入したUnity、Godot、またはUnreal Engineでプロジェクトを開きます。",
      },
      {
        title: "エージェントに指示する",
        body: "Claude CodeやCodexに対して、挙動の検証、目標の達成、またはゲームの探索を指示します。",
      },
      {
        title: "プレイと報告",
        body: "エージェントがコードを調査してC#ハーネスを作成します。Jevがゲームをプレイし、判定に必要な場合はエージェントが画面フレームを確認したうえで、測定された証拠とともに判定を報告します。",
      },
    ],
  },
  engines: {
    title: "検証済みエンジン",
    head: {
      engine: "エンジン",
      tested: "検証済みバージョン",
      install: "導入方法",
    },
    rows: [
      {
        engine: "Unity",
        tested: "6000.6.7f1（パッケージ定義は6000.0以降）",
        install: "Git URLまたはディスクからUPMパッケージとして導入",
      },
      {
        engine: "Godot",
        tested: "4.7.2",
        install: "addons/にアドオンをコピーして有効化",
      },
      {
        engine: "Unreal Engine",
        tested: "5.8（Win64のみ）",
        install: "C++プロジェクトではプラグインをビルド、BlueprintのみのプロジェクトではBuildPluginによるビルド済みパッケージを使用",
      },
    ],
  },
  data: {
    title: "データとプライバシー",
    stays: {
      title: "ローカルマシンに残るデータ",
      items: [
        "アカウントやテレメトリはなく、Cluewrenへのデータ送信はありません。",
        "実行データはプロジェクト内に保存されます（harness.cs、トレースログ、report.json、notes.md）。",
        "ゲームプレイのフレーム画像はbrainプロセスのメモリ（最新160 MiB分）にのみ保持され、ディスクには書き出されず、終了時に破棄されます。",
      ],
    },
    leaves: {
      title: "外部に送信されるデータ",
      items: [
        "Jevへの意思決定リクエスト（ハーネスが算出したゲーム状態のテキストと選択肢）はapi.typesafe.aiに送信されます。",
        "コーディングエージェントが読み取った内容（ソースコードやframesツール経由のフレーム画像）は、エージェントのプロバイダに送信されます。Cluewrenはその送信内容を制御できません。",
      ],
    },
  },
  sandbox: {
    title: "ハーネスのサンドボックス",
    body:
      "Windows 11では、ハーネスはAppContainer内で実行されます。コンテナはネットワークアクセスを持たず、書き込みは実行フォルダのみに限定され、APIキーを保持しません。コンテナを作成できない場合、Cluewrenは環境変数にキーを持たない通常の子プロセスにフォールバックします。そのフォールバックプロセスはユーザーのファイルを読み取り、ネットワークにアクセスできる状態となり、実行ログにもその旨が記録されます。",
    more: "サンドボックスの詳細を読む",
  },
  start: {
    title: "クイックスタート",
    body: "以下のコマンドでCluewrenをビルドし、お使いのエージェントに登録します。",
    connect: "利用するエージェントに合わせてconnect claudeまたはconnect codexを実行してください。",
    next: {
      title: "次のステップ",
      items: [
        {
          text: "お使いのエンジン向けプラグインを導入する",
          page: "getting-started/install/#エンジンプラグイン",
        },
        {
          text: "keys.envにTypeSafeのAPIキーを設定する",
          page: "guides/decision-model-key/",
        },
        {
          text: "新しいエージェントセッションを開始してテストを依頼する",
          page: "getting-started/first-run/",
        },
      ],
    },
  },
  footer: {
    license: "CluewrenはApache-2.0ライセンスで提供されるオープンソースソフトウェアです。",
    derived: "本ソフトウェアはAura Autopilot（Apache-2.0ライセンス）から派生しています。",
  },
  notFound: {
    title: "ページが見つかりません",
    body: "指定されたページは見つかりませんでした。",
    home: "トップページに戻る",
  },
};

export default ja;
