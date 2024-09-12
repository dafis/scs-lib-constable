class DataSource {
  id: string;
  cache: DataCache;

  constructor(id: string, opts: { cache_size?: number }) {
    this.id = id;
    this.cache = new DataCache(id + "_data_cache", opts.cache_size || 5000);
  }



}

export { DataSource };
