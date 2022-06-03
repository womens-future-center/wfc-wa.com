type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type news<T='get'> = Structure<
T,
{
  /**
   * タイトル
   */
  title: string
  /**
   * 本文
   */
  body: string
}>

export type achievement<T='get'> = Structure<
T,
{
  /**
   * タイトル
   */
  title: string
  /**
   * 写真
   */
  image: { url: string, width: number, height: number }
  /**
   * 本文
   */
  context: string
  /**
   * タグ
   */
  tag: string
}>


export interface EndPoints {
  get: {
    news: news<'get'>
    achievement: achievement<'get'>
  }
  gets: {
    news: news<'gets'>
    achievement: achievement<'gets'>
  }
  post: {
    news: news<'post'>
    achievement: achievement<'post'>
  }
  put: {
    news: news<'put'>
    achievement: achievement<'put'>
  }
  patch: {
    news: news<'patch'>
    achievement: achievement<'patch'>
  }
}
