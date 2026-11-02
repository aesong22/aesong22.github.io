// base가 '/' 이든 '/저장소명' 이든 같은 방식으로 주소를 만든다.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => `${base}${path}`;
