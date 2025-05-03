# MeetCycle 💘

로테이션 소개팅

## CI/CD 파이프라인

이 프로젝트는 GitHub Actions와 Vercel을 사용한 CI/CD 파이프라인이 구성되어 있습니다:

1. **GitHub Actions**:

   - `main` 브랜치로 push 또는 pull request가 생성되면 워크플로우가 실행됩니다.
   - 코드 린팅 및 빌드 검증을 수행합니다.
   - `main` 브랜치로 push된 경우에만 Vercel 배포가 진행됩니다.

2. **Vercel 배포**:

   - GitHub Actions 워크플로우에서 빌드가 성공하면 Vercel로 자동 배포됩니다.
   - 정적 빌드 파일이 Vercel 플랫폼에 배포됩니다.

3. **환경 변수 설정**:
   - GitHub Secrets에 다음 값들을 설정해야 합니다:
     - `VERCEL_TOKEN`: Vercel API 토큰
     - `VERCEL_ORG_ID`: Vercel 조직 ID
     - `VERCEL_PROJECT_ID`: Vercel 프로젝트 ID

## 개발 환경 설정

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
