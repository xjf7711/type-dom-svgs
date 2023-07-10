import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdBookmarkSvg extends TypeSvgSvg {
  className: 'TdBookmarkSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdBookmarkSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M290.17945 125.041878M376.757295 499.17695c-66.842361-0.223081-121.190153-54.850236-120.890324-121.511471 0.297782-66.601884 54.580083-120.507608 121.222899-120.387881 67.325361 0.125867 121.033587 54.391794 120.722502 121.972982C497.509473 445.318298 442.92018 499.393891 376.757295 499.17695L376.757295 499.17695zM376.737852 438.488753c33.410947 0.102331 60.682058-26.998911 60.71685-60.327994 0.035816-33.022091-27.048029-60.280922-60.029188-60.424184-33.513278-0.14224-60.703547 26.612101-61.034075 60.053748C316.068074 410.956699 343.338161 438.382329 376.737852 438.488753L376.737852 438.488753zM376.737852 438.488753M928.817686 524.408611C798.773887 394.33309 668.763858 264.224824 538.56861 134.299729c-16.504906-16.463973-32.479739-33.327036-51.724035-47.195905-20.039405-14.436804-40.845267-22.820752-65.433268-22.706141-43.686988 0.209778-87.37193 0.060375-131.057895 0.060375 0 0.01228 0 0.030699-0.00614 0.047072-45.561685 0-91.13258-0.399089-136.690172 0.10847-51.02921 0.567935-90.073458 40.454364-90.133833 91.478458-0.094144 90.289376-0.077771 180.585915 0.071631 270.879384 0.013303 7.040347 0.851391 14.201443 2.325975 21.090341 5.334495 24.89704 20.547988 44.6315 37.609573 61.802578 140.086525 140.993175 280.764522 281.403065 421.418982 421.836491 37.090756 37.024242 98.471732 36.777625 135.612631-0.292666 89.947592-89.769536 179.824575-179.613774 269.462105-269.701558 7.099698-7.127328 13.276375-15.757892 17.809621-24.740474C966.804858 599.405699 958.935634 554.523489 928.817686 524.408611zM874.813724 611.651604c-65.810868 65.095577-132.300188 131.676995-196.60168 196.065468-22.778796 22.808472-45.557592 45.617967-68.351738 68.410066-5.378497 5.378497-11.362792 8.220219-17.309224 8.220219-5.878894 0-11.776208-2.790556-17.054421-8.068769l-74.783217-74.771961C388.639926 689.454598 272.750499 573.58973 158.95885 459.452203c-7.271614-7.29208-13.470803-16.957207-18.939351-25.484418-0.735757-1.14815-1.488911-3.954055-1.49505-7.080256-0.190335-79.287811-0.227174-165.334559-0.11461-270.797519 0.010233-10.44591 6.444782-16.457834 17.653055-16.495696 14.644535-0.052189 30.605042-0.075725 50.232055-0.075725 10.842952 0 21.687952 0.007163 32.532951 0.014326 10.850116 0.007163 21.699208 0.014326 32.54523 0.014326l18.806321 0c11.939937 0 23.87885 0.00921 35.817764 0.01842 11.946077 0.00921 23.893176 0.019443 35.839253 0.019443 23.337521 0 42.22673-0.038886 59.44488-0.119727l0.151449 0c6.568602 0 11.927657 2.098801 19.770276 7.744381 23.378453 16.818037 42.936905 37.295418 63.643506 58.97416 7.712659 8.074909 15.687284 16.425088 23.806195 24.484647L701.073728 402.674059c56.884568 56.891731 115.705232 115.718535 173.788092 173.367513 4.490268 4.456498 7.061836 10.942213 7.05672 17.795295C881.913423 600.696088 879.323435 607.188966 874.813724 611.651604z');
    this.childNodes.push(path0);
  }
}