import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class CurrencySvg extends TypeSvgSvg {
  className: 'CurrencySvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'CurrencySvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'currency-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M298.666667 426.666667m21.333333 0l384 0q21.333333 0 21.333333 21.333333l0 42.666667q0 21.333333-21.333333 21.333333l-384 0q-21.333333 0-21.333333-21.333333l0-42.666667q0-21.333333 21.333333-21.333333Z',
      'M469.333333 789.333333m0-21.333333l0-320q0-21.333333 21.333334-21.333333l42.666666 0q21.333333 0 21.333334 21.333333l0 320q0 21.333333-21.333334 21.333333l-42.666666 0q-21.333333 0-21.333334-21.333333Z',
      'M298.666667 576m21.333333 0l384 0q21.333333 0 21.333333 21.333333l0 42.666667q0 21.333333-21.333333 21.333333l-384 0q-21.333333 0-21.333333-21.333333l0-42.666667q0-21.333333 21.333333-21.333333Z',
      'M368.661749 247.500637m15.084945 15.084945l165.934391 165.934391q15.084945 15.084945 0 30.169889l-30.169889 30.16989q-15.084945 15.084945-30.16989 0l-165.934391-165.934392q-15.084945-15.084945 0-30.169889l30.169889-30.169889q15.084945-15.084945 30.16989 0Z',
      'M654.575935 248.833446m-15.084945 15.084945l-165.934391 165.934391q-15.084945 15.084945 0 30.169889l30.169889 30.16989q15.084945 15.084945 30.16989 0l165.934391-165.934392q15.084945-15.084945 0-30.169889l-30.169889-30.169889q-15.084945-15.084945-30.16989 0Z',
      'M512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333z m0 85.333334c188.522667 0 341.333333 152.810667 341.333333 341.333333s-152.810667 341.333333-341.333333 341.333333S170.666667 700.522667 170.666667 512 323.477333 170.666667 512 170.666667z');
    this.childNodes = [path];
  }
}
