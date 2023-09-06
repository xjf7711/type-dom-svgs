import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdNumericalSvg extends TypeSvgSvg {
  className: 'TdNumericalSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdNumericalSvg';
    this.addAttrObj({
      viewBox: '0 0 1073 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M191.597683 1024h690.029335A191.850117 191.850117 0 0 0 1072.84605 833.033403V191.597683A191.850117 191.850117 0 0 0 881.627018 0H191.597683A191.850117 191.850117 0 0 0 0 191.597683V833.033403a191.850117 191.850117 0 0 0 191.597683 190.966597zM87.468507 833.033403V191.597683a104.255393 104.255393 0 0 1 104.129176-104.129176h690.029335a104.255393 104.255393 0 0 1 104.129176 104.129176V833.033403a104.255393 104.255393 0 0 1-104.129176 104.129176H191.597683A104.255393 104.255393 0 0 1 87.468507 833.033403z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M248.016763 312.008875a160.043387 160.043387 0 0 1-37.865154 45.816837 265.056083 265.056083 0 0 1-63.865895 41.65167l-7.320596 3.407864v70.176753l17.291754-6.058424a329.048194 329.048194 0 0 0 50.486873-25.243437c8.835203-5.174904 16.913102-10.476026 24.233699-15.650931v277.29915h70.807839V304.940712h-50.234439zM492.247011 631.085912c7.320597-7.699248 25.243436-23.097744 51.749045-45.816838a770.682115 770.682115 0 0 0 71.691359-66.642672 181.87896 181.87896 0 0 0 31.80673-49.098484 124.450142 124.450142 0 0 0 10.097375-48.846049 109.556514 109.556514 0 0 0-35.088377-82.546038 130.003698 130.003698 0 0 0-93.400715-33.195119 136.062123 136.062123 0 0 0-92.643412 30.670776 127.353137 127.353137 0 0 0-40.515715 88.352027l-1.135955 12.621719 73.079749 7.573031v-13.883891a62.225071 62.225071 0 0 1 16.282016-45.943054 58.564773 58.564773 0 0 1 43.797363-16.155799 57.428818 57.428818 0 0 1 41.904104 15.146062 48.593615 48.593615 0 0 1 15.524714 36.602983A82.798472 82.798472 0 0 1 566.588931 467.003575a496.538395 496.538395 0 0 1-79.643042 76.487612 487.324541 487.324541 0 0 0-61.34155 57.807469 181.500308 181.500308 0 0 0-32.185382 53.137434 92.390977 92.390977 0 0 0-6.184642 36.602983v12.621718h270.862074v-69.41945H488.460496zM929.841982 513.32528a93.400715 93.400715 0 0 0-32.185381-26.758042 89.614199 89.614199 0 0 0 19.816097-21.709356 90.623937 90.623937 0 0 0 15.019845-50.486873 104.507827 104.507827 0 0 0-15.398496-54.399605 107.537039 107.537039 0 0 0-44.302231-40.389498 133.790213 133.790213 0 0 0-61.720203-14.388759 122.178232 122.178232 0 0 0-81.914951 28.272649 129.877481 129.877481 0 0 0-42.282756 78.38087l-2.271909 12.621718 70.807839 12.621718 2.019475-12.621718a72.322445 72.322445 0 0 1 18.932577-42.913842 49.603353 49.603353 0 0 1 35.719463-13.379021 47.836312 47.836312 0 0 1 35.088377 12.621718 42.913842 42.913842 0 0 1 12.621718 32.437816 39.379761 39.379761 0 0 1-17.544189 36.350548 81.157648 81.157648 0 0 1-45.564402 12.621719h-5.932208l-12.621718-1.388389-8.204117 70.934056 18.175274-4.796253a119.527672 119.527672 0 0 1 28.903735-4.543818 58.69099 58.69099 0 0 1 43.418711 16.660668 57.681252 57.681252 0 0 1 16.786885 42.913842 62.351288 62.351288 0 0 1-18.932577 46.321705 60.710465 60.710465 0 0 1-45.438186 18.680143 53.011217 53.011217 0 0 1-37.865155-13.88389 88.352028 88.352028 0 0 1-22.84531-49.098483l-2.398126-11.485764-69.41945 9.213854 1.262171 12.621718a124.828793 124.828793 0 0 0 40.894367 83.681992 129.246395 129.246395 0 0 0 89.740417 32.437816 137.702946 137.702946 0 0 0 98.449402-37.865155A122.30445 122.30445 0 0 0 950.667817 580.599039a108.546777 108.546777 0 0 0-20.825835-67.273759z',
    );
    this.childNodes.push(path1);
  }
}
