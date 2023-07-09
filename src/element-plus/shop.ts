import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class ShopSvg extends TypeSvgSvg {
  className: 'ShopSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ShopSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z");
    this.childNodes.push(path0);
  }
}
