import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class TdTreeShapeSvg extends TypeSvgSvg {
  className: 'TdTreeShapeSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdTreeShapeSvg';
    this.addAttrObj({
      name: 'TdTreeShapeSvg',
      title: 'TdTreeShapeSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M207.36 656H110.08a96 96 0 0 1-96-96V462.72a96 96 0 0 1 96-96h97.28a96 96 0 0 1 96 96v97.28a96 96 0 0 1-96 96zM110.08 430.72a32 32 0 0 0-32 32v97.28a32 32 0 0 0 32 32h97.28a32 32 0 0 0 32-32V462.72a32 32 0 0 0-32-32zM920.96 296.96h-97.92a96 96 0 0 1-96-96V103.68a96 96 0 0 1 96-96h97.92a96 96 0 0 1 95.36 96v97.28a96 96 0 0 1-95.36 96z m-97.92-225.28a32 32 0 0 0-32 32v97.28a32 32 0 0 0 32 32h97.92a31.36 31.36 0 0 0 31.36-32V103.68a31.36 31.36 0 0 0-31.36-32zM920.96 656h-97.92a96 96 0 0 1-96-96V462.72a96 96 0 0 1 96-96h97.92a96 96 0 0 1 95.36 96v97.28a96 96 0 0 1-95.36 96z m-97.92-225.28a32 32 0 0 0-32 32v97.28a32 32 0 0 0 32 32h97.92a31.36 31.36 0 0 0 31.36-32V462.72a31.36 31.36 0 0 0-31.36-32zM920.96 1015.04h-97.92a96 96 0 0 1-96-96v-97.28a96 96 0 0 1 96-96h97.92a96 96 0 0 1 95.36 96v97.28a96 96 0 0 1-95.36 96z m-97.92-225.28a32 32 0 0 0-32 32v97.28a32 32 0 0 0 32 32h97.92a31.36 31.36 0 0 0 31.36-32v-97.28a31.36 31.36 0 0 0-31.36-32zM673.92 912.64H478.08a32 32 0 0 1-32-32V152.32a32 32 0 0 1 32-32h195.84a32 32 0 0 1 0 64H512v664.32h163.84a32 32 0 0 1 32 32 32 32 0 0 1-33.92 32z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M664.96 548.48h-320a32.64 32.64 0 0 1-32-32 32 32 0 0 1 32-32h320a32 32 0 0 1 32 32 32 32 0 0 1-32 32z',
    );
    this.childNodes.push(path1);
  }
}
