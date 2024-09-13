export type SyncAxis = "x" | "y" | "z";
export type KindOfArea = "grid" | "list" | "key" | "title" | "control" | "display";

export interface AreaConfig {
  id: string;
  kind: KindOfArea;
  containerRef: string;
}

export abstract class Area {
  id: String;
  constructor(id: string) {
    this.id = id;
  }
}

export interface GridAreaConfig extends AreaConfig {
  syncAreaRefX: string;
  syncAreaRefY: string;
}

export class GridArea extends Area {
  config: GridAreaConfig;
  constructor(id: string, cfg: GridAreaConfig) {
    super(id);
    this.config = cfg;
  }
}

export interface ListAreaConfig extends AreaConfig {
  axis: SyncAxis;
  syncAreaRef: string;
}

export class ListArea extends Area {
  config: ListAreaConfig;
  constructor(id: string, cfg: ListAreaConfig) {
    super(id);
    this.config = cfg;
  }
}

export interface TitleAreaConfig extends AreaConfig {
  axis: SyncAxis;
  syncAreaRef: string;
}

export class TitleArea extends Area {
  config: TitleAreaConfig;
  constructor(id: string, cfg: TitleAreaConfig) {
    super(id);
    this.config = cfg;
  }
}

export interface DisplayAreaConfig extends AreaConfig {

}

export class DisplayArea extends Area {
  config: DisplayAreaConfig;
  constructor(id: string, cfg: DisplayAreaConfig) {
    super(id);
    this.config = cfg;
  }
}

export interface ControlAreaConfig extends AreaConfig { 

}

export class ControlArea extends Area {
  config: ControlAreaConfig;
  constructor(id: string, cfg: ControlAreaConfig) {
    super(id);
    this.config = cfg;
  }
}

export type AreaTypes = GridArea | ListArea | TitleArea | ControlArea | DisplayArea;
