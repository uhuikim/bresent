export const navData: Array<{ title: string; url: string }> = [
  { title: '빵 선물', url: '/present' },
  { title: '빵 사전', url: '/dictionary' },
  { title: '빵 재료', url: '/ingredient' },
  { title: '오답노트', url: '/note' },
  { title: '레시피', url: '/recipe' },
  { title: '빵 자료', url: '/book' },
];

export const breadData: Array<{
  category: string;
  title: string;
  imgUrl: string;
  country: string;
  ingredient: Array<string>;
}> = [
  {
    category: 'bread',
    title: '소금빵',
    imgUrl: '소금빵',
    country: 'JP',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },
  {
    category: 'bread',
    title: '단팥빵',
    imgUrl: '단팥빵',
    country: 'JP',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },
  {
    category: 'bread',
    title: '바게트',
    imgUrl: '바게트',
    country: 'FR',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },

  {
    category: 'bread',
    title: '스콘',
    imgUrl: '스콘',
    country: 'GB',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },
  {
    category: 'bread',
    title: '베이글',
    imgUrl: '베이글',
    country: 'US',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },
  {
    category: 'bread',
    title: '브레첼',
    imgUrl: '브레첼',
    country: 'DE',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },
  {
    category: 'cookie',
    title: '브레첼',
    imgUrl: '브레첼',
    country: 'DE',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },
];

const type = [
  '브라우니',
  '고로케',
  '마들렌',
  '휘낭시에',
  '에그타르트',
  '몽블랑',
  '에끌레어',
  '다쿠와즈',
  '마카롱',
  '오페라',
  '파리브레스트',
  '티라미수',
  '치아바타',
  '포카치아',
  '바게트',
  '베이글',
  '비에누아',
  '브리오슈',
  '뱅오쇼콜라',
  '슈톨렌',
  '쿠글로프',
  '프레첼',
  '세이글',
  '브리오쉬 살레',
  '스콘',
  '식빵',
];

export const countryMap: Record<string, string> = {
  JP: '일본',
  KR: '한국',
  FR: '프랑스',
  GB: '영국',
  US: '미국',
  DE: '독일',
};
