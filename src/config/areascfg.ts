/** @module areascfg */

export type SyncAxis = "x" | "y" | "z";
export type KindOfArea = "grid" | "list" | "key" | "title" | "control" | "display";

export interface SyncConfig<SyAx extends SyncAxis> {
  axis: SyAx;
  syncAreaRef: string;
}

export interface AreaConfig<KOA extends KindOfArea> {
  id: string;
  kind: KOA;
  containerRef: string;
}

export interface GridAreaConfig extends AreaConfig<"grid"> {
  syncRefX: SyncConfig<"x">;
  syncRefY: SyncConfig<"y">;
}

export interface ColumnAreaConfig extends AreaConfig<"list"> {
  syncRef: SyncConfig<"y">;
}

export interface RowAreaConfig extends AreaConfig<"list"> {
  syncRef: SyncConfig<"x">;
}

export interface RowKeyAreaConfig extends AreaConfig<"key"> {
  syncAxis: "x";
}

export interface ColumnKeyAreaConfig extends AreaConfig<"key"> { 
  syncAxis: "y";
}

export interface RowTitleAreaConfig extends AreaConfig<"title"> {
  syncAxis: "x";
}

export interface ColumnTitleAreaConfig extends AreaConfig<"title"> { 
  syncAxis: "y";
}

export interface ControlAreaConfig extends AreaConfig<"control"> { }

export interface DisplayAreaConfig extends AreaConfig<"display"> { }
