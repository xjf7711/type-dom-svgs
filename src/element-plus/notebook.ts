import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElNotebookSvg extends TypeSvgSvg {
  className: 'ElNotebookSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElNotebookSvg';
    this.addAttrObj({
      name: 'ElNotebookSvg',
      title: 'ElNotebookSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z',
    );
    this.childNodes.push(path1);
  }
}
