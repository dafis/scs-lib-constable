import { TableLayout } from "../buildingblocks/layouts/comp_layouts";
import { ConstructableTable } from "../constable";
import { GridArea, KeyArea, ListArea } from "../buildingblocks/areas/comp_areas";

export type TableRenderFunction = {
  (table: ConstructableTable, layout: HTMLDivElement): HTMLElement;
};

export type LayoutRenderFunction = {
  (
    layout: TableLayout,
    areas: { [id: string]: HTMLDivElement },
  ): HTMLDivElement;
};

export type GridAreaRenderFunction = {
  (area: GridArea, cells: HTMLElement[]): HTMLElement;
};

export type ListAreaRenderFunction = {
  (area: ListArea, cells: HTMLElement[]): HTMLElement;
};

export type KeyAreaRenderFunction = {
  (area: KeyArea, cells: HTMLElement[]): HTMLElement;
};
