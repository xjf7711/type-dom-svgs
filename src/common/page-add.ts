import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdPageAddSvg extends TypeSvgSvg {
  className: 'TdPageAddSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdPageAddSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M466.230072 478.82953 466.230072 265.442558c0 0 0-40.086997 40.1003-40.086997L746.853377 225.355561l0 105.34528c20.727067 1.86958 40.886199 5.757121 60.096726 11.732206L806.950104 205.290573c0 0-5.988388-38.08234-40.046065-40.086997L506.330372 165.203576c-40.1003 2.004657-60.150962 40.086997-60.150962 40.086997l-20.049638 0c0 0-20.050662-38.08234-60.150962-40.086997L105.406167 165.203576c-34.0587 4.010337-40.101323 40.086997-40.101323 40.086997l0 521.172917c0 0-2.004657 60.137659 40.101323 60.137659L365.97881 786.601148l60.150962 60.124356 20.049638 0 45.899376-45.871747c-39.234583-49.597605-62.806441-112.13287-62.806441-180.26255C429.273369 569.082066 442.765661 520.79941 466.230072 478.82953zM367.983467 726.46349 125.456828 726.46349 125.456828 225.355561 365.97881 225.355561c40.101323 0 40.101323 40.086997 40.101323 40.086997l0 418.930301C408.084791 722.453153 396.054803 726.46349 367.983467 726.46349z');
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData('M720.515522 382.344035c-131.572618 0-238.245126 106.672508-238.245126 238.246149 0 131.572618 106.672508 238.205217 238.245126 238.205217 131.519406 0 238.192937-106.632599 238.192937-238.205217C958.70846 489.016543 852.035952 382.344035 720.515522 382.344035zM890.809023 620.617813c0 0.772596 0 2.099824 0 4.985548-0.026606 14.685467-9.781784 24.411993-24.411993 24.411993L753.085312 650.015354l-3.061732 0c-0.054235 0.826831-0.10847 1.530866-0.10847 2.221598-0.026606 32.513508 0 82.044598-0.026606 114.544803 0 11.556197-6.719028 20.72809-17.259082 23.369244-2.086521 0.529049-4.281513 0.74599-6.448876 0.75827-5.337565 0.027629-6.339382 0.027629-6.151094 0.040932 2.276856 0.014326 0.216941 0.014326 0 0-0.893346 0-2.248204-0.013303-5.012154-0.013303-13.980409 0-23.898293-9.91686-23.924899-23.898293 0-32.582069 0-82.220606 0-114.788349l0-2.235924-2.925632 0c-32.406061 0-81.881892 0-114.313535-0.014326-13.601786 0-23.653723-9.984399-23.681352-23.627117-0.027629-3.521197-0.027629-5.106298-0.055259-5.837962 0.026606-0.718361 0.026606-2.303462 0.055259-5.825682 0.026606-13.493316 10.079566-23.477714 23.626094-23.477714 32.298614-0.026606 81.691557-0.026606 114.043383-0.026606 0.948605 0 1.923816 0 3.251044 0l0-2.899026L691.092399 474.005664c0-13.263072 9.456373-23.369244 22.678512-23.599488 4.796236-0.095167 6.340405-0.149403 6.800893-0.177032 0.488117 0.027629 2.031263 0.081864 6.800893 0.162706 13.006222 0.216941 22.515806 10.364045 22.515806 23.546276 0.026606 32.337499 0.026606 81.718163 0.026606 114.042359l0 3.223415 3.171226 0 113.284089 0c14.657838 0 24.411993 9.754155 24.439622 24.426319C890.809023 618.517989 890.809023 619.845217 890.809023 620.617813 890.835629 618.23351 890.835629 622.98779 890.809023 620.617813z');
    this.childNodes.push(path1);
  }
}