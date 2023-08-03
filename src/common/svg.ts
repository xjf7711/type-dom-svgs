import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdSvgSvg extends TypeSvgSvg {
  className: 'TdSvgSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdSvgSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M759.466667 755.456H581.8368c-14.421333 0-26.112 12.475733-26.112 27.869867v168.618666h28.433067L759.466667 760.439467v-4.983467zM759.466667 699.733333v-88.183466c0-15.189333 11.4688-27.477333 25.6-27.477334s25.6 12.288 25.6 27.477334v160.136533c0 7.2192-2.645333 14.1312-7.338667 19.285333L613.154133 998.7072a24.746667 24.746667 0 0 1-18.261333 8.226133H211.626667C146.602667 1006.933333 93.866667 950.306133 93.866667 880.452267V143.530667C93.866667 73.693867 146.602667 17.066667 211.626667 17.066667h481.28C757.930667 17.066667 810.666667 73.693867 810.666667 143.547733v48.930134c0 15.189333-11.4688 27.477333-25.6 27.477333s-25.6-12.288-25.6-27.477333V143.530667c0-39.4752-29.7984-71.492267-66.56-71.492267H211.626667c-36.7616 0-66.56 32.017067-66.56 71.509333v736.887467c0 39.4752 29.7984 71.492267 66.56 71.492267H503.466667v-168.618667C503.466667 737.160533 538.555733 699.733333 581.8368 699.733333H759.466667zM348.996267 273.066667c28.7744 0 50.210133 5.819733 63.880533 17.8176 14.557867 12.680533 20.462933 32.546133 17.442133 59.272533h-39.765333c-0.341333-15.069867-4.642133-26.043733-12.219733-32.546133-7.509333-6.8608-20.599467-9.9328-38.417067-9.9328-15.428267 0-27.477333 2.048-36.608 6.5024-11.332267 5.137067-17.8688 13.704533-20.224 25.361066-2.082133 10.274133 1.655467 18.8416 12.049067 25.002667 4.590933 2.730667 17.578667 7.8848 38.741333 15.086933 31.163733 10.274133 50.7392 18.500267 59.221333 23.978667 18.653867 12.680533 25.736533 30.139733 21.162667 52.753067-4.4544 21.930667-16.571733 39.424-36.266667 52.087466-19.626667 12.3392-45.294933 18.8416-76.458666 18.8416-30.1568 0-52.616533-5.819733-67.037867-17.476266-17.646933-14.3872-24.3712-37.000533-19.746133-68.181334h39.7312c-1.006933 18.500267 2.798933 31.863467 11.810133 39.748267 8.209067 6.8608 22.186667 10.615467 42.3936 10.615467 17.8176 0 32.836267-3.072 44.288-8.9088 11.537067-6.161067 18.602667-14.045867 20.701867-24.32 2.645333-13.021867-3.157333-23.296-16.708267-30.839467-4.3008-2.389333-18.944-7.8848-44.356267-16.093867-28.194133-9.591467-45.653333-16.452267-52.0192-20.565333-16.554667-11.298133-22.459733-27.7504-18.090666-49.322667 4.386133-21.6064 16.776533-38.741333 37.768533-51.063466C299.861333 278.869333 322.594133 273.066667 349.013333 273.066667z m122.504533 4.795733h43.52l26.692267 199.406933h1.024l107.6224-199.406933h43.52l-136.669867 244.6336h-48.298667l-37.410133-244.6336zM827.938133 273.066667c31.522133 0 54.801067 6.8608 70.109867 20.906666 14.6944 13.704533 21.5552 33.911467 20.445867 61.320534H878.08c-0.238933-15.752533-5.410133-27.409067-14.779733-35.293867-9.710933-7.867733-24.0128-11.639467-42.513067-11.639467-22.954667 0-42.6496 7.5264-59.221333 23.296-18.056533 16.452267-29.9008 39.406933-36.010667 69.546667-5.853867 28.791467-3.857067 51.063467 6.024533 66.474667 10.717867 16.452267 30.976 24.661333 60.791467 24.661333 11.639467 0 22.869333-1.365333 33.723733-4.096a140.424533 140.424533 0 0 0 28.672-11.3152l10.222934-50.363733h-64.768l6.9632-34.269867h104.840533l-20.992 103.4752a180.0192 180.0192 0 0 1-49.271467 23.296c-18.926933 5.495467-39.0144 8.226133-60.928 8.226133-39.082667 0-66.730667-12.3392-83.3024-37.000533-15.5648-22.954667-19.456-52.770133-12.0832-89.088 7.441067-36.6592 23.5008-66.798933 48.503467-90.453333C760.337067 285.405867 791.637333 273.066667 827.938133 273.066667z',
    );
    this.childNodes.push(path0);
  }
}