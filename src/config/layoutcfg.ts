/** @module config/layoutcfg */

export interface ContainerConfig {
  id: string;
  xPos: number;
  xSpan: number;
  yPos: number;
  ySpan: number;
}

/**
  */
export interface LayoutConfig {
  xSize: number;
  ySize: number;
  container: {[name: string]: ContainerConfig};
}

/**
 * @class
 */
export class Dummy {}
