import { DataCache } from "./caching";

export interface DataSourceConfig {
  cachesize?: number;
}

export class DataSource {
  id: string;
  config: DataSourceConfig;
  cache?: DataCache;

  constructor(id: string, cfg: DataSourceConfig) {
    this.id = id;
    this.config = cfg;
  }

  useCache(cache?: DataCache): void {
    if (!cache) {
      this.cache = cache;
    }
    else {
      this.cache = new DataCache(`{this.id}_cache`, this.config.cachesize || 5000)
    }
  }
}
