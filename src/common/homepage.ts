import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class TdHomepageSvg extends TypeSvgSvg {
  className: 'TdHomepageSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdHomepageSvg';
    this.addAttrObj({
      name: 'TdHomepageSvg',
      title: 'TdHomepageSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M219.428571 658.285714q0-30.285714-21.428571-51.714285T146.285714 585.142857t-51.714285 21.428572T73.142857 658.285714t21.428572 51.714286T146.285714 731.428571t51.714286-21.428571T219.428571 658.285714z m109.714286-256q0-30.285714-21.428571-51.714285T256 329.142857t-51.714286 21.428572T182.857143 402.285714t21.428571 51.714286T256 475.428571t51.714286-21.428571T329.142857 402.285714z m244.571429 274.857143l57.714285-218.285714q3.428571-14.857143-4.285714-27.714286T605.142857 414.285714t-27.428571 3.714286-17.142857 22.571429l-57.714286 218.285714q-34.285714 2.857143-61.142857 24.857143t-36 56.285714q-11.428571 44 11.428571 83.428571t66.857143 50.857143 83.428571-11.428571 50.857143-66.857143q9.142857-34.285714-3.428571-66.857143t-41.142857-52z m377.142857-18.857143q0-30.285714-21.428572-51.714285T877.714286 585.142857t-51.714286 21.428572-21.428571 51.714285 21.428571 51.714286 51.714286 21.428571 51.714285-21.428571 21.428572-51.714286z m-365.714286-365.714285q0-30.285714-21.428571-51.714286T512 219.428571t-51.714286 21.428572T438.857143 292.571429t21.428571 51.714285T512 365.714286t51.714286-21.428572T585.142857 292.571429z m256 109.714285q0-30.285714-21.428571-51.714285T768 329.142857t-51.714286 21.428572T694.857143 402.285714t21.428571 51.714286T768 475.428571t51.714286-21.428571T841.142857 402.285714z m182.857143 256q0 149.142857-80.571429 276-10.857143 16.571429-30.857142 16.571429H111.428571q-20 0-30.857142-16.571429Q0 808 0 658.285714q0-104 40.571429-198.857143t109.142857-163.428571 163.428571-109.142857 198.857143-40.571429 198.857143 40.571429 163.428571 109.142857 109.142857 163.428571 40.571429 198.857143z',
    );
    this.childNodes.push(path0);
  }
}
