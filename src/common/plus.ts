import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdPlusSvg extends TypeSvgSvg {
  className: 'TdPlusSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdPlusSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M7 7V3h2v4h4v2H9v4H7V9H3V7h4z');
    this.childNodes.push(path0);
  }
}
