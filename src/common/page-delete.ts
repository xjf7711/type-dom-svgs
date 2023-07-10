import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdPageDeleteSvg extends TypeSvgSvg {
  className: 'TdPageDeleteSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdPageDeleteSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M429.276439 620.591207c0-51.505048 13.492292-99.79896 36.95568-141.767817l0-213.390042c0 0 0-40.08495 40.098253-40.08495l240.511749 0 0 105.35449c20.727067 1.86958 40.884153 5.757121 60.121286 11.732206L806.963407 205.285456c0 0-5.988388-38.080294-40.071647-40.08495L506.330372 165.200506c-40.098253 2.004657-60.147892 40.08495-60.147892 40.08495l-20.049638 0c0 0-20.049638-38.080294-60.147892-40.08495L105.396957 165.200506c-34.056654 4.009314-40.099277 40.08495-40.099277 40.08495l0 521.175987c0 0-2.004657 60.134589 40.099277 60.134589l260.587993 0 60.147892 60.135612 20.049638 0 45.896306-45.883003C452.847274 751.252059 429.276439 688.718841 429.276439 620.591207zM367.989607 726.46042l-242.544035 0 0-501.113045 240.538355 0c40.099277 0 40.099277 40.08495 40.099277 40.08495L406.083204 684.369789l0 0C408.08786 722.451106 396.058896 726.46042 367.989607 726.46042z');
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData('M720.507336 382.343011c-131.567501 0-238.235916 106.667392-238.235916 238.248196 0 131.567501 106.667392 238.208287 238.235916 238.208287 131.539872 0 238.208287-106.640786 238.208287-238.208287C958.715623 489.010403 852.047208 382.343011 720.507336 382.343011zM890.818233 625.604384c-0.026606 14.685467-9.781784 24.410969-24.410969 24.410969 0 0-260.127506 0-292.559149-0.013303-13.601786 0-23.652699-9.984399-23.680329-23.626094-0.026606-3.52222-0.026606-5.107321-0.054235-5.838985 0 1.680269 0-1.692548 0 0 0.026606-0.717338 0.026606-2.302439 0.054235-5.824659 0.026606-13.493316 10.078543-23.476691 23.626094-23.476691 32.295544-0.026606 292.585755-0.026606 292.585755-0.026606 14.656815 0 24.410969 9.754155 24.438599 24.425296 0 2.8847 0 4.212952 0 4.985548 0.026606-2.384303 0.026606 2.369977 0 0C890.818233 621.391433 890.818233 622.718661 890.818233 625.604384z');
    this.childNodes.push(path1);
  }
}
