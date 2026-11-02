# project-archive

필명으로 운영하는 개인 프로젝트 기록 사이트. Astro로 만든다.

## 명령

- `npm install` 처음 한 번
- `npm run dev` 개발 서버
- `npm run build` 빌드 (결과는 dist)
- `npm run preview` 빌드 결과 미리보기

## 글 쓰기

`src/content/articles/{프로젝트}/` 아래에 Markdown 파일을 만든다. 맨 위 정보에 `status: draft`를 두면 빌드에서 빠지고, `published`로 바꾸면 사이트에 나온다.

## 값 규칙

프로젝트의 단계는 구상, 제작 중, 검증 중, 사용 중 네 가지 안에서만 바꾼다. 공유 범위는 나만, 소수 공유, 공개 세 가지다. 다른 값을 쓰면 빌드가 실패한다. 정의는 `src/lib/meta.ts`에 있다.

## 공개하기 전에 확인

글, 이미지, 코드에 실명, 회사명, 이메일, 회사와 제품을 특정할 수 있는 화면과 경로와 수치, 내부 주소, API 키, 설치 파일 링크가 없는지 확인한다. 이미지는 EXIF를 제거한다.

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 GitHub Pages에 배포한다. 저장소를 `aesong22.github.io`로 만들면 주소가 `https://aesong22.github.io/` 가 되고 `astro.config.mjs`는 그대로 쓴다. 다른 이름이면 `base`를 바꾼다.
