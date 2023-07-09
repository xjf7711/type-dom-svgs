import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class FilesSvg extends TypeSvgSvg {
  className: 'FilesSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'FilesSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z");
    this.childNodes.push(path0);
  }
}
