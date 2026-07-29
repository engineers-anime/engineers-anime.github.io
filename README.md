# エンジニアニメ (engineers-anime)

[![Deploy Astro site](https://github.com/engineers-anime/engineers-anime.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/engineers-anime/engineers-anime.github.io/actions/workflows/deploy.yml)

[https://engineers-anime.github.io/](https://engineers-anime.github.io/)

## 🔄 コンテンツの更新方法

### 1. note マガジンの追加・変更

`src/data/note-magazines.ts` の `magazineUrls` 配列に RSS URL を追加します。

- **ファイル**: `src/data/note-magazines.ts`
- **形式**: `https://note.com/{ユーザーID}/m/{マガジンID}/rss`

### 2. 同人誌（BOOTH）の追加

`src/data/booth-books.ts` の配列に商品 URL を追加します。商品名・説明・画像はビルド時に BOOTH から取得します。

- **ファイル**: `src/data/booth-books.ts`
- **形式**: `https://engineers-anime.booth.pm/items/{商品ID}`

### 3. キャラクターグッズ（SUZURI）

SUZURI API から `srkr` ショップの最新商品をビルド時に取得します。SUZURI で商品を追加・更新した後、次回のデプロイでサイトにも反映されます。

API を利用するには、[SUZURI のアプリケーション管理ページ](https://suzuri.jp/developer/apps)で API キーを取得してください。

ローカルでは、`.env.example` を参考に `.env` を作成します。

```env
SUZURI_API_KEY=取得したAPIキー
```

GitHub Actions では、リポジトリの `Settings` → `Secrets and variables` → `Actions` に次の Repository secret を登録します。

- **Name**: `SUZURI_API_KEY`
- **Secret**: SUZURI で取得した API キー

> [!CAUTION]
> SUZURI の API キーには読み書き権限があります。コードへ直接記載したり、Git にコミットしたりしないでください。

### 4. スライドショー画像の更新

以下のフォルダに画像ファイルを配置します（数字の昇順でソート）。

- **ヒーロー画像**: `src/assets/img/top_slide/`
- **勉強会セクション**: `src/assets/img/slides/study/`
- **同人誌セクション**: `src/assets/img/slides/book/`

### 5. 手動ビルド

GitHub Actions タブから `Deploy Astro site` ワークフローを `Run workflow` してください。

## 🛠 開発・ビルド方法

### 必要な環境

- Node.js 22.12 以上

### コマンド

| コマンド          | 内容                                   |
| :---------------- | :------------------------------------- |
| `npm install`     | 依存関係のインストール                 |
| `npm run dev`     | ローカル開発サーバーの起動             |
| `npm run build`   | 本番用ビルドの生成                     |
| `npm run preview` | ビルド済みファイルのローカルプレビュー |
| `npm run format`  | コード整形                             |
| `npm run lint`    | コードチェック                         |

## 🎨 クレジット

- **イラスト**: [赤城ナツイチ](https://x.com/DDDD__akagi)
- **ロゴ**: [もっと](https://x.com/mottox2)
- **主催者**: [うーたん](https://x.com/uutan1108)

## 📜 ライセンス

ソースコードは MIT ライセンスで公開されています。
ただし、**ロゴ、イラスト、およびサイト内の文章（コンテンツ）については、MIT ライセンスの対象外**です。これら著作物の無断転載・再配布は禁止します。
