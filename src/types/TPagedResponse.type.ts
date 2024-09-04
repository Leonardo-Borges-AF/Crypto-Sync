export type TPagedResponse<T> = {
  data: T[]
  limit: number
  page: number
  total_results: number
  total_pages: number
}
