import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdCleanSvg extends TypeSvgSvg {
  className: 'TdCleanSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdCleanSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M719.329882 422.249412l-255.578353 255.578353 234.315295 234.315294 255.518117-255.638588-234.315294-234.255059zM59.151059 315.813647l298.164706-298.164706a60.235294 60.235294 0 0 1 85.172706 0l596.329411 596.329412a60.235294 60.235294 0 0 1 0 85.172706l-298.164706 298.164706a60.235294 60.235294 0 0 1-85.232941 0l-596.329411-596.329412a60.235294 60.235294 0 0 1 0-85.172706z');
    this.childNodes.push(path0);
  }
}
