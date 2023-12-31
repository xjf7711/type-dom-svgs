import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticHLineSvg extends TypeSvgSvg {
  className: 'TdStaticHLineSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticHLineSvg';
    this.addAttrObj({
      name: 'TdStaticHLineSvg',
      title: 'TdStaticHLineSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z',
    );
    this.childNodes.push(path0);
  }
}
