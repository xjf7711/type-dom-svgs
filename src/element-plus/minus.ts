import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElMinusSvg extends TypeSvgSvg {
  className: 'ElMinusSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElMinusSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z');
    this.childNodes.push(path0);
  }
}