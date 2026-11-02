// 단계는 4개로 고정한다. 프로젝트는 이 안에서만 이동한다.
export const STAGES = ['구상', '제작 중', '검증 중', '사용 중'] as const;
// 공유 범위는 3개로 고정한다.
export const SHARES = ['나만', '소수 공유', '공개'] as const;

export type Stage = (typeof STAGES)[number];
export type Share = (typeof SHARES)[number];

export function stageIndex(s: Stage): number {
  return STAGES.indexOf(s);
}

// 글 id는 "프로젝트/파일명" 형태다. 파일명 부분이 주소의 slug가 된다.
export function articleSlug(id: string): string {
  return id.split('/').slice(1).join('/');
}
