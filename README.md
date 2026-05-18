# My Ramen

好みのラーメンジャンルからおすすめのラーメン店を探せる、Next.js Static Export構成のWebアプリです。

## 開発

```bash
npm install
npm run dev
```

ローカルでは `http://localhost:3000` を開いて確認します。

## テスト

```bash
npm run lint
npm run test
npm run build
```

Storybookは以下で起動できます。

```bash
npm run storybook
```

## GitHub Pagesへのデプロイ

GitHub Pages向けの静的デプロイは [.github/workflows/deploy.yml](./.github/workflows/deploy.yml) で定義しています。

デプロイ時は `GITHUB_PAGES=true` を指定して `npm run build` を実行し、`next.config.ts` の `basePath` と `assetPrefix` を `/my-ramen` に切り替えます。生成された `out` ディレクトリを `actions/upload-pages-artifact` でアップロードし、`actions/deploy-pages` で公開します。

### 手順

1. 変更を `main` ブランチへpushします。
2. GitHub Actionsの `Deploy to GitHub Pages` workflowが実行されます。
3. `npm ci` と `npm run build` が実行され、静的ファイルが `out` に生成されます。
4. `out/.nojekyll` を作成して、GitHub Pages上で `_next` 配下のアセットがそのまま配信されるようにします。
5. `out` がGitHub Pagesへデプロイされます。

GitHub上のPages設定はこのリポジトリ外の操作です。PagesのSourceにはGitHub Actionsを利用してください。

リポジトリ名を `my-ramen` 以外に変更する場合は、[next.config.ts](./next.config.ts) の `basePath` を新しいリポジトリ名に合わせて変更してください。
