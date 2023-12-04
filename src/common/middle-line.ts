import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class TdMiddleLineSvg extends TypeSvgSvg {
  className: 'TdMiddleLineSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdMiddleLineSvg';
    this.addAttrObj({
      name: 'TdMiddleLineSvg',
      title: 'TdMiddleLineSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M763.733333 507.733333h-503.466666a21.333333 21.333333 0 1 0 0 42.666667h503.466666a21.333333 21.333333 0 1 0 0-42.666667zM612.8128 786.8672c-22.980267-2.568533-43.016533-6.2464-52.718933-11.118933-9.710933-4.846933-18.2272-13.1328-18.2272-24.900267V584.533333h-68.266667v166.314667c0 11.767467-3.310933 19.9168-13.525333 24.516267s-25.890133 8.430933-48.887467 11.502933c-5.102933 1.015467-7.202133 5.12-7.202133 12.253867 0 3.584 0.708267 7.918933 1.757866 13.013333 16.3328-1.015467 33.937067-1.902933 52.599467-2.679467a1325.6448 1325.6448 0 0 1 109.627733 0c18.116267 0.785067 35.370667 1.664 51.729067 2.679467 0.9984-5.102933 1.544533-9.429333 1.544533-13.013333 0-8.174933-2.807467-12.253867-8.430933-12.253867zM289.902933 329.088a9.386667 9.386667 0 0 0 4.9664-5.358933 506.965333 506.965333 0 0 1 17.6128-33.723734c5.632-9.685333 12.270933-17.621333 19.933867-23.739733 7.645867-6.135467 16.7168-8.8064 27.204267-11.869867 10.453333-3.063467 23.364267-2.6624 38.6816-2.6624H473.6v221.866667h68.266667v-221.866667h86.263466c15.317333 0 28.219733-0.401067 38.6816 2.6624 10.4704 3.054933 19.396267 6.698667 26.837334 12.834134a84.804267 84.804267 0 0 1 19.515733 23.253333 341.845333 341.845333 0 0 1 16.8704 33.476267c1.015467 2.56 2.798933 4.224 5.3504 5.239466 2.568533 1.024 4.864 1.467733 6.903467 1.467734 3.063467 0 5.751467-0.5376 8.046933-1.5616 2.304-1.024 4.718933-2.065067 7.287467-3.080534-5.632-17.3568-9.582933-33.211733-11.886934-47.5136a770.5856 770.5856 0 0 0-6.519466-36.010666c-2.048-9.7024-4.215467-17.237333-6.5024-22.6048-2.304-5.358933-6.016-8.0384-11.118934-8.0384-4.087467 0-9.335467 0.264533-15.701333 0.776533-6.4 0.512-13.397333 1.024-21.0688 1.536-7.662933 0.512-15.3344 1.5872-22.980267 2.107733-7.662933 0.512-14.549333 1.322667-20.6848 1.322667H385.262933c-6.6304 0-13.781333-0.8192-21.435733-1.322667-7.68-0.520533-15.197867-1.3056-22.613333-1.8176-7.3984-0.520533-14.429867-1.169067-21.0688-1.681066-6.6304-0.512-11.7504-0.8448-15.317334-0.8448-5.12 0-8.814933 2.5344-11.118933 7.637333-2.286933 5.12-4.462933 12.3648-6.5024 21.819733-2.048 9.4464-4.352 21.3248-6.903467 35.618134-2.568533 14.301867-6.4 30.634667-11.502933 49.024 4.096 3.063467 8.9344 4.599467 14.5664 4.599466 2.048-0.008533 4.215467-0.512 6.536533-1.544533z',
    );
    this.childNodes.push(path0);
  }
}
