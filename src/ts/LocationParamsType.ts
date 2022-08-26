export type LocationParamsType<Data> = {
  pathname: string;
  state: Data;
  search: string;
  hash: string;
  key: string;
};
