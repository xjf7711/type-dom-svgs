import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class PictureSvg extends TypeSvgSvg {
  className: 'PictureSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'PictureSvg';
    this.setAttrObj({
      viewBox: '0 0 1229 1024',
      name: 'picture-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M1106.176 0 82.688 0C25.9584 0 0 53.0432 0 109.3632L0 929.4848C0 985.4464 26.0096 1024 82.688 1024L1106.176 1024C1162.9056 1024 1228.8 985.8048 1228.8 929.4848L1228.8 109.3632C1228.8 53.4016 1162.8544 0 1106.176 0L1106.176 0 1106.176 0 1106.176 0Z',
      'M1126.23104 444.90752 1050.91584 402.97472C979.85024 363.44832 883.54304 380.29312 830.70464 441.42592L642.23744 659.53792C620.57984 684.52352 575.26784 693.53472 545.52064 678.73792L428.88704 620.62592C356.23424 584.42752 260.95104 606.95552 212.41344 671.92832L102.38464 819.17952 102.58944 102.84032 1126.33344 102.37952 1126.23104 444.90752 1126.23104 444.90752 1126.23104 444.90752Z',
      'M1126.7584 921.6 153.6 921.6 294.9632 724.083057C313.856 697.153894 355.328 690.653752 383.744 705.72971L500.3776 767.726874C571.9552 805.744512 667.9552 785.370117 720.2304 720.860298L908.6976 488.166111C929.7408 462.220163 972.9024 452.169522 1001.6256 469.266536L1126.8608 539.730268 1126.7584 921.6 1126.7584 921.6 1126.7584 921.6Z',
      'M338.43712 519.42912C423.27552 519.42912 492.03712 450.66752 492.03712 365.82912 492.03712 280.99072 423.27552 212.22912 338.43712 212.22912 253.59872 212.22912 184.83712 280.99072 184.83712 365.82912 184.83712 450.66752 253.59872 519.42912 338.43712 519.42912L338.43712 519.42912 338.43712 519.42912Z',
      'M338.43712 314.62912C366.69952 314.62912 389.63712 337.56672 389.63712 365.82912 389.63712 394.09152 366.69952 417.02912 338.43712 417.02912 310.17472 417.02912 287.23712 394.09152 287.23712 365.82912 287.23712 337.56672 310.17472 314.62912 338.43712 314.62912L338.43712 314.62912 338.43712 314.62912Z');
    this.childNodes = [path];
  }
}
