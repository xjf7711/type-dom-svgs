import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElMoonSvg extends TypeSvgSvg {
  className: 'ElMoonSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElMoonSvg';
    this.addAttrObj({
      name: 'ElMoonSvg',
      title: 'ElMoonSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z',
    );
    this.childNodes.push(path0);
  }
}
