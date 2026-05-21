# AGENTS.md

日本語で説明してください

## プロジェクト概要

Webアプリを開発します。
このアプリは、ユーザーが好みのラーメンジャンルを選択すると、おすすめのラーメン店を提案します。

### 主要な機能

- ラーメンジャンルの選択
- ジャンルに応じたラーメン店一覧表示
- ラーメン店詳細表示
- 該当ラーメン店のGoogle Mapへの遷移

### データの管理

- ラーメン店データは静的なJSON / Typescriptデータとして管理してください
- データベース及び外部APIは不要です

### ラーメン店データ要件

ラーメン店は以下の情報を持ちます。

```ts
type RamenShop = {
  id: number;
  name: string;
  genreId: number;
  googleMapUrl: string;
};
```

ラーメンジャンルは以下の情報を持ちます。

```ts
type Genre = {
  id: number;
  name: string;
};
```

### 非要件

以下の機能は不要です。

- 認証
- データベース
- 管理画面
- 投稿機能
- リアルタイム通信
- 外部API連携

## 開発概要

### 開発方針

本アプリケーションはシンプルで保守しやすい構成を重視してください。
以下を優勢します。

- 可読性
- 保守性
- シンプルな設計
- 最小限の依存関係
- 高速な静的ページ
- 過剰設計を避ける

### 技術構成

本アプリケーションの開発に用いる技術は以下の通りです。

- Node.js(v24.15.0)
- npm
- Next.js(v16.2.6, Static export)
- Typescript
- Tailwnd CSS
- shadcn/ui

### 設計方針

- 可能な限り Static Generation を利用してください
- 不要な Client Component は避けてください
- 小さく再利用しやすいコンポーネントに分割してください
- UI とロジックは適切に分離してください
- static export 制約の範囲で server side を優先してください
- 不要なライブラリ追加は禁止です

### 開発ルール

- 変更前に方針を短く説明してください
- 関連ファイルを読んでから編集してください
- 大きな変更は小さなステップに分けてください
- 変更後は `npm run lint` を実行してください
- 型エラーが出ないようにしてください

### 環境構築

- Next.jsのインストール
  - `npx create-next-app@latest`を実行してインストールしてください
  - ファイル構成はrecommendに従ってください
- GitHub Actionsの追加
  - Pull Request 作成時に `npm run build` を実行
- husky と lint-staged を導入してください
- prettierの導入
  - ESLintとprettierの設定を行ってください
  - prettier-plugin-tailwindcss を導入してください

### コーディングルール

- React Component はシンプルで読みやすくしてください
- Server Component を優先してください
- interface より type を優先してください
- Tailwind class は既存順序に合わせてください

#### 命名規則

- Component ファイル名は UpperCamelCase
  - `PostCard.tsx`
  - `LoginForm.tsx`
- utility 関数ファイルは lowerCamelCase
  - `formatDate.ts`
  - `createPost.ts`

#### 実装ルール

- Component は以下形式で定義してください
  ```tsx
  export default function PostCard() {}
  ```
- 関数・hooks はアロー関数を利用してください
  ```ts
  const formatDate = () => {};
  ```

### データ構成方針

以下のような構成を推奨します。

```txt
data/
├── genres.ts
└── ramenShops.ts
```

### UI方針

- モダンでミニマルなUIを優先してください
- 余白を活かしてください
- 過剰なアニメーションは禁止です
- Vercel のようなシンプルなデザインを意識してください

### デザイン改善方針

現在のUIはシンプルすぎるため、全体的により完成度の高いモダンなWebアプリらしい見た目に改善してください。

以下を重視してください。

- 日本語テキストが不自然な位置で折り返されないように調整する
- 見出し、説明文、カード内テキストの行間・文字サイズ・余白を整える
- Next.js、Nuxt.js、Remix、Astro.js、AI系WebアプリのLPのような近代的で洗練されたデザインを参考にする
- ただし、過剰な装飾やアニメーションは避ける
- ライトモード / ダークモードの切り替えに対応する
- モノクロだけでなく、控えめで美しいグラデーションやアクセントカラーを取り入れる
- 背景、カード、ボタン、ジャンル選択UIにメリハリをつける
- モバイル表示でも読みやすく、余白が詰まりすぎないようにする
- Tailwind CSS と shadcn/ui の設計思想に沿ったシンプルな実装にする

特に以下を改善してください。

- Heroセクションを追加し、アプリの目的が一目で伝わるようにする
- ジャンル選択部分をカードまたはボタンUIとして見やすくする
- ラーメン店一覧をカード形式で表示し、クリックしやすくする
- Google Mapへの導線を分かりやすいボタンとして配置する
- 日本語の文章は `line-height`、`max-width`、`text-wrap`、`word-break` などを適切に使い、読みやすく整える
- ダークモード時もコントラストが十分になるようにする

デザイン改善は、既存のシンプルな構成を壊さず、小さなコンポーネント単位で進めてください。
不要なライブラリは追加せず、Tailwind CSS と shadcn/ui を中心に実装してください。
まず既存のファイル構成とUI実装を確認し、変更方針を短く説明してから、段階的にデザイン改善を進めてください。
