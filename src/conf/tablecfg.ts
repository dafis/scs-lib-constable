/** @module config/tablecfg */

import { AreaConfig, KindOfArea } from "./areascfg";
import { LayoutConfig } from "./layoutcfg";

/**
 */
type AreaRepo = { [name: string]: AreaConfig<KindOfArea> };

/*
 * @class
 */
export interface TableConfig {
  id: string;
  layout: LayoutConfig;
  areas: AreaRepo;
}

export class Dummy {}
