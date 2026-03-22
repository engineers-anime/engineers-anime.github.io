# エンジニアニメ (engineers-anime)

[https://engineers-anime.github.io/](https://engineers-anime.github.io/)

## 🔄 コンテンツの更新方法

### 1. note マガジンの追加・変更

`src/data/note-magazines.ts` の `magazineUrls` 配列に RSS URL を追加します。

- **ファイル**: `src/data/note-magazines.ts`
- **形式**: `https://note.com/{ユーザーID}/m/{マガジンID}/rss`

### 2. 同人誌（BOOTH）の追加

`src/data/booth-books.ts` に商品情報を追加します。

- **ファイル**: `src/data/booth-books.ts`

### 3. スライドショー画像の更新

以下のフォルダに画像ファイルを配置します（数字の昇順でソート）。

- **ヒーロー画像**: `src/assets/img/top_slide/`
- **勉強会セクション**: `src/assets/img/slides/study/`
- **同人誌セクション**: `src/assets/img/slides/book/`

### 4. 手動ビルド

GitHub Actions タブから `Deploy Astro site` ワークフローを `Run workflow` してください。

## 🛠 開発・ビルド方法

### 必要な環境

- Node.js 20 以上

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
