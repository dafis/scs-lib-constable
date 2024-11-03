import { Cell, CellDOMWrapper} from '../src/tableelements/cell';
import { DOMWrapper } from 'scs-lib-concore/src/utils/dom';

describe('CellDOMWrapper', () => {
  let element: HTMLElement;
  let wrapper: CellDOMWrapper;

  beforeEach(() => {
    element = document.createElement('div');
    wrapper = new CellDOMWrapper(element);
  });

  test('should set text content in CellDOMWrapper', () => {
    wrapper.setTextContent('Hello World');
    expect(wrapper.getElement().textContent).toBe('Hello World');
  });

  // Weitere Tests für CellDOMWrapper falls nötig
});

describe('Cell', () => {
  let cell: Cell;
  let targetElement: HTMLElement;

  beforeEach(() => {
    cell = new Cell();
    targetElement = document.createElement('div');
    document.body.appendChild(targetElement);
  });

  afterEach(() => {
    document.body.removeChild(targetElement);
  });

  test('should render with custom render function', () => {
    cell.setRenderFunction((el) => {
      el.textContent = 'Rendered with custom function';
    });
    cell.render(targetElement);
    expect(targetElement.querySelector('.virtual-root-element')?.textContent).toBe('Rendered with custom function');
  });

  test('should render with HTML template', () => {
    cell.setHTMLTemplate('<span>HTML Content</span>');
    cell.render(targetElement);
    expect(targetElement.querySelector('.virtual-root-element')?.innerHTML).toBe('<span>HTML Content</span>');
  });

  test('should render with template ID', () => {
    const template = document.createElement('template');
    template.id = 'test-template';
    template.innerHTML = '<div>Template Content</div>';
    document.body.appendChild(template);
    cell.setHTMLTemplateId('test-template');
    cell.render(targetElement);
    expect(targetElement.querySelector('.virtual-root-element')?.innerHTML).toBe('<div>Template Content</div>');
    document.body.removeChild(template);
  });

  test('should replace target element when replaceParent is true', () => {
    const newParent = document.createElement('div');
    const newTarget = document.createElement('div');
    newParent.appendChild(newTarget);
    document.body.appendChild(newParent);
    cell.setHTMLTemplate('<p>Replaced Content</p>');
    cell.render(newTarget, true);
    expect(newParent.innerHTML).toBe('<div class="virtual-root-element"><p>Replaced Content</p></div>');
    document.body.removeChild(newParent);
  });
});

