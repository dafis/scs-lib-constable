import { DOMWrapper } from 'scs-lib-concore/src/utils/dom';

/**
 * The CellDOMWrapper class extends DOMWrapper for use within table cells.
 * It provides the same DOM manipulation methods and can be extended with
 * cell-specific functionality as needed.
 */
export class CellDOMWrapper extends DOMWrapper {
  // Additional cell-specific DOM manipulation methods can be added here.
}


export type CellRenderFunction = (element: HTMLElement) => void;

/**
 * The Cell class represents a single cell within a table structure.
 * It encapsulates rendering logic and provides a flexible API for displaying content.
 */
export class Cell {
  private domElement?: CellDOMWrapper;
  private renderFunction?: CellRenderFunction;
  private htmlTemplate?: string;
  private htmlTemplateId?: string;

  /**
   * Sets a custom render function for the cell.
   * @param renderer - The render function to handle cell content.
   */
  setRenderFunction(renderer: CellRenderFunction): void {
    this.renderFunction = renderer;
  }

  /**
   * Defines an HTML string to be used as the cell content.
   * @param template - HTML string for rendering in the cell.
   */
  setHTMLTemplate(template: string): void {
    this.htmlTemplate = template;
  }

  /**
   * Sets an HTML template ID to use as the cell content.
   * @param templateId - The ID of a <template> element in the DOM.
   */
  setHTMLTemplateId(templateId: string): void {
    this.htmlTemplateId = templateId;
  }

  /**
   * Renders the cell content into the specified target element.
   * If replaceParent is true, the target element is replaced with the content;
   * otherwise, the content is appended as a child.
   * @param targetElement - The target element for rendering.
   * @param replaceParent - If true, replaces targetElement in the DOM.
   */
  render(targetElement: HTMLElement, replaceParent: boolean = false): void {
    const virtualRoot = document.createElement("div");
    virtualRoot.classList.add("virtual-root-element");

    if (this.renderFunction) {
      // Use the custom render function
      this.renderFunction(virtualRoot);
    } else if (this.htmlTemplateId) {
      // Use the specified template ID to render content
      this.templateRenderer(virtualRoot, this.htmlTemplateId);
    } else if (this.htmlTemplate) {
      // Render the HTML string directly
      this.directHTMLRenderer(virtualRoot, this.htmlTemplate);
    }

    // Add content to the DOM based on replaceParent flag
    if (replaceParent) {
      targetElement.replaceWith(virtualRoot);
    } else {
      targetElement.appendChild(virtualRoot);
    }

    // Set domElement to the wrapper of the rendered content
    this.domElement = new CellDOMWrapper(virtualRoot);
  }

  /**
   * Renders HTML content directly into the specified element.
   * @param element - The target element for the HTML content.
   * @param template - HTML string to set as the content.
   */
  private directHTMLRenderer(element: HTMLElement, template: string): void {
    element.innerHTML = template;
  }

  /**
   * Renders content using a specified HTML template element.
   * @param element - The target element for the template content.
   * @param templateId - The ID of the <template> element in the DOM.
   */
  private templateRenderer(element: HTMLElement, templateId: string): void {
    const template = document.getElementById(templateId) as HTMLTemplateElement;
    if (template && template.content) {
      element.appendChild(template.content.cloneNode(true));
    } else {
      console.warn(`Template with ID "${templateId}" not found.`);
    }
  }

  /**
   * Returns the DOM wrapper of the cell if available.
   * @returns - The CellDOMWrapper instance or undefined.
   */
  getDOMElement(): CellDOMWrapper | undefined {
    return this.domElement;
  }
}

