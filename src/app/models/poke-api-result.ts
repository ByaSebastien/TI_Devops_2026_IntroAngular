export interface PokeApiResult {
  count: number;
  previous?: string;
  next?: string;
  results: PokeApiResultItem[];
}

export interface PokeApiResultItem {
  name: string;
  url: string;
}
