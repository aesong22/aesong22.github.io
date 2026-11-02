import { defineConfig } from 'astro/config';

// 배포 전에 저장소 이름이 정해지면 site와 base만 바꾼다.
// 저장소를 aesong22.github.io 로 만들면 base는 '/' 그대로 둔다.
// 일반 저장소(예: project-archive)로 만들면 base를 '/project-archive' 로 바꾼다.
export default defineConfig({
  site: 'https://aesong22.github.io',
  base: '/',
  build: { format: 'directory' },
});
