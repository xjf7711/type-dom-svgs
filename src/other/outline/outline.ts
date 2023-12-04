import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class OutlineSvg extends TypeSvgSvg {
  className: 'OutlineSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'OutlineSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'outline-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData(
      'M64 512h384v64H64z',
      'M896 320H256c-38.4 0-64-25.6-64-64V192c0-38.4 25.6-64 64-64h640c38.4 0 64 25.6 64 64v64c0 38.4-25.6 64-64 64zM256 192v64h640V192H256z m0-32V192v-32zM896 960H512c-38.4 0-64-25.6-64-64v-64c0-38.4 25.6-64 64-64h384c38.4 0 64 25.6 64 64v64c0 38.4-25.6 64-64 64z m-384-128v64h384v-64H512z m0-32v32-32zM896 640H512c-38.4 0-64-25.6-64-64V512c0-38.4 25.6-64 64-64h384c38.4 0 64 25.6 64 64v64c0 38.4-25.6 64-64 64zM512 512v64h384V512H512z m0-32V512v-32z',
      'M64 192h128v64H64zM64 832h384v64H64z',
      'M64 192h64v704H64z');
    this.childNodes = [path];
  }
}
