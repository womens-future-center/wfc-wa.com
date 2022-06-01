# [wfc-wa.com](https://wfc-wa.com)管理リポジトリ

このリポジトリは[wfc-wa.com](https://wfc-wa.com)のサイト開発リポジトリ兼ホストリポジトリになります｡

このソースコードよりビルドを行い､Vercel にてデプロイしています｡

## ビルド状況

## ローカル開発環境構築

このプロジェクトは vscode devcontainer を導入しています｡

そちらよりコンテナを起動することで､バージョンの差異を気にすることなく開発が出来ます｡

まず､このレポジトリを Remote Container 機能を使用し､コンテナ内で開いてください｡

つぎに､依存パッケージをインストールしてください｡

```bash
npm install
```

.env.local ファイルをサンプルの通りに変更してください｡

ローカルサーバーが起動できます｡

```bash
npm run dev
```

## 開発詳細

ソースコードは`src`以下に存在します｡

### ブランチについて

`main`ブランチをサイトのビルドブランチとして使用しております｡

また､`dev`ブランチを開発用のブランチとし､開発しています｡

そのため､新たに変更を加えるときは`dev`ブランチより新たにブランチを作成し､開発を行ってください｡

### TypeScript

このプロジェクトでは､TypeScript を採用しております｡

型の宣言は全て`type`より行い､`interface`は抽象クラスとして使用してください｡

型を明示的にしなければならない時以外は､なるべく型推論を利用してください｡

### デザイン設計

ディレクトリ構成として､アトミックデザインを採用しています｡

新規コンポーネントを作成する際は､そちらに沿って作成をお願いいたします｡

### API

API routes は無効化しています｡

### Lint & Format

ESLint によるリント､Prettier によるソースコードフォーマットを行っております｡

特に Prettier については､vscode 使用時はファイル保存時に自動でフォーマットが行われるよう設定を行っております｡

### Host

このプロジェクトは Cloudflare Pages にホストしています｡

プルリクエストを送ると､ Cloudflare Pages によってプレビュー URL が発行され､閲覧することが出来ます｡

## License

このサイトのソースコードは[MIT ライセンス](https://opensource.org/licenses/MIT)によりライセンスされています｡

外部ライブラリ等の使用によるライセンスの継承が発生した際は､そのライセンスを継承します｡

ソースコードは､株式会社 Women's Future Center の許可を得た場合のみ､公開できます｡

また､その他ロゴマーク等は､株式会社 Women's Future Center の著作権取り扱いが適用されます｡

## Authors

- [株式会社 Women's Future Center](https://wfc-wa.com)

- Ryoichi Kurimoto ([ryone9re](https://github.com/ryone9re))
