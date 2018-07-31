(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('义安区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"340706","properties":{"name":"义安区","cp":[117.791544,30.952823],"childNum":5},"geometry":{"type":"MultiPolygon","coordinates":[["@@ACAC@C@@@@A@YN@@`A"],["@@KAJN@ABI"],["@@@A@AB@@AAA@BA@@@@@AA@@A@@@A@A@@@@AB@AAB@@A@@@A@@@@@AA@BA@@@@B@@@@@@A@@@@@@@AB@@A@A@A@@A@@@AA@@@@A@@B@@@@A@A@@B@@@AAA@@@@BABBB@@A@@@@B@@@A@@@@A@@A@A@A@@AA@AA@@C@A@@A@@DAB@@@@ACA@AB@F@@B@B@@BBB@B@@BD@@@@@B@@@F@B@BBD@FBB@B@AA@A@@@AB@@A@A@A@AB@BA@A@A@@A@@@@@@@B@BC@AA@@A@C@@@EAA@@BA@@@@B@@CBA@C@AFEHK@IDEAEBIKUBA@CECC@EGCA@BC@CE@CAAMEEAIIEGGEEEACACACECCBADADCDCDCFEJABGBE@GCCACECCECACEEEAECGCKCIAIAI@C@C@GAICEAEEECEEIEIEEEIEEGAE@E@IEEECGACAICGCGCCA@@A@A@@B@@@AA@A@A@AA@@A@@@@AA@@@A@@@@@@@@@@A@@A@@@@@@@A@@@A@@@A@@@@@@@@AA@@A@@@@@A@@@A@@AB@BA@A@@@AA@@@A@A@CAA@@@AA@A@MBI@ABA@@B@BBBDJBB@D@@@B@BA@ABA@A@IAEAA@M@MAA@ABA@@B@B@@@BDDBDBBAB@B@B@B@@DBB@DDDJBDDB@D@HBH@FBFDDDDDF@B@J@FBBD@LBD@BDDHFFD@BBDBBBBBADC@AD@BBDBDFBF@LBH@FBDD@@BB@FBDBDFBFBFBD@FDBDBF@DBBFDDBHDFB@DBDADADBFBD@DDBDBD@N@J@B@DF@BBBBFDJDDHFFHFBHBF@BABAFCDAD@F@FDDBCBGD@B@BBBLBFDDDBBAB@@CAGAE@ED@D@D@FNAD@BH@@E@IB@D@D@HIDFD@DABC@ECAAC@ABCDA@ADCJBHBHJPBDBFDBH@D@B@BD@DF@@C@@DBB@B@@BB@B@@@@@B@@@@@B@@@F@@@@@BA@@@@@AB@@B@BB@B@@@@B@@AB@B@@BAB@@@@@@A@@@AB@BC@@BCBBHAACB@F@B@@@BB@B@@DB@DB@B@B@BBBA@A@CBABCAC@CBAFAF@CADABBBABDFCBBJGHG@ACB@@BABCE@ACAGCA@ABADAJ@ACB@@ABB@@@@BAB@@@@AA@@@DA@A@@B@F@@@@DE@@B@BB@@B@@@B@@@@B@@@@@@@@BB@@CBA@AC@@AB@@B@@B@B@@@BA@@AA@@@@A@@@@A@@B@BA@@B@@@@@B@"],["@@LVAJBFCF@JFBH@@DFB@FB@DADAFDH@DAHD@C@AD@DDDBB@Qn@@@AB@VgF@DBDC@ADABA@@@A@@@@@A@@AAA@@@AAB@B@@@BBBB@BBBBDDBF@@@@ADA@A@A@A@@@AAA@CAAA@@A@@@@@A@@B@@A@@@A@@B@B@@@B@@BFD@@BAB@@BB@@@B@@@BA@ABAB@BA@@AA@@A@@A@A@A@AB@@ABA@A@A@ABAEBEBA@@@GBCBEBGCECCA_B@B@@A@@@A@@@@@@AB@@@@@B@@@ZMAAC@@@@@@AA@@A@@A@@@@@A@@ABA@BBA@@B@@AB@@@B@B@@@B@@@@@B@B@@A@@@@AA@@AA@@AA@@BA@A@@@@@@@AA@A@B@AAEBA@A@@@C@@B@@ABAB@@@@@B@@A@@@@B@@A@@@@@@B@@@AA@@@@@@B@@A@@@@@BA@@@@A@@@C@@B@@@AD@@@@@@@BA@AA@@@@@B@AA@A@@@@B@D@BA@@@AB@BA@@BBB@B@BA@@BA@@AE@@@@A@@BABAA@@A@@@C@AAA@@B@@@@C@@@C@EBE@CDEFAFAF@DCFABABAJB@B@@@BB@@AA@A@@@A@@B@@@B@B@@@@ABB@A@@@@B@@A@@BBB@@@@@B@@A@AB@BBBA@AB@B@@A@@BB@@@BAB@@A@AB@BB@A@@@BBA@@@ABA@@AAB@BDB@@@@B@@B@@@BBB@BBBB@@BA@@@A@@@@A@@@@A@AA@A@@AA@@BA@@@AA@@@AA@B@@A@@@@@A@@AA@ABB@A@BB@@BB@@B@BA@@@B@@@@@@AB@B@BB@@@@BB@@@@B@@@@@@@@AA@@A@@@AAB@AA@A@@A@@@@@A@@@@AAC@@@BABBBA@B@BDA@DDBBBD@@@@@@@@AEAB@AA@@@A@@@@@BAA@@A@@A@AB@@@@AB@@A@@@AA@@@@A@AAA@@@A@@@A@@A@@@A@@BBB@@@@CA@B@@@@ABA@@@AB@@@B@IMCAECEA"],["@@BB@BA@@B@BABB@@BA@@B@D@@@@CAABAB@DA@@A@@@@@@A@@@@@@A@@@AA@@@A@@@@@@@@@BBAB@A@@@B@@A@@@C@BACAB@AA@BA@BDI@CBAB@BDBBHBDF@ADAB@@DA@BGHIHAAEDACABAACBDBE@EBAB@DBDADAB@D@BABAAA@A@A@@CCA@@@AAA@@A@E@A@BDGBAAAD@@ADA@@B@@@B@@@@A@AB@@@ABA@@@A@@A@A@@A@AA@@B@@@@AB@@@@E@@@A@@@@@A@@@@@A@A@@AA@A@CA@@@DE@@@CBEBCBCDADAJADABNZEDGAQCOBQBIDOB_JC@QBKFK@SOMEICQCSKN@L@N@H@@M@EQ@@MaB@G@QHYFBB@BB@@DBDB@B@@@B@BD@@A@AB@@AAABADD@BCBABDB@@B@BB@@B@@AB@BBDBB@D@EGHBDEF@@A@CBA@ABC@A@A@@B@B@B@@@B@@@B@@A@A@A@AAA@A@AA@C@@BABA@C@A@@@A@A@AAA@AAA@CBA@A@CAA@BA@A@AA@AAC@C@@CABC@ABC@@@ABA@@@IBAECGCEACSSGCGEWOAP@F@LALAHANBR@LAB@@EZ@BA@@D@B@B@B@B@B@@@@@BAD@D@H@D@BAD@JBH@FBL@DBJFPRhL\\BD@BJXRn@BPTNLJHFBHF\\TrTVBR@RCTIVWJY@UDIBADKPOXKHATGH@H@H@H@JBDBHBJDHDFDFBFFLHFGDAF@J@FA@GF@DEDGLDLHNEBCDAJEEIOSAC@A@@@AAEJQHEPADKAGLGJAB@FAVAL@NALCDGDGFGFEFEFADAHADAFGDIBGFGDCHAHAHAJ@F@F@FBH@FBH@F@H@HAFCDADCCGDEDCAAAAAE@E@EAAAAAECI@EBEBCJA@CAAIBBEDID@@KBCJCACIDACCCEA@@A@GAAAAFG@G@GAGAGCGAGCIEECGCGCGCGEGECGEEEEAA@A@@EAE@GB@@AB@B@B@BAB@BA@@B@B@B@BB@@@BB@@ABA@AB@BAB@@A@@@A@@AA@AB@@EC@AA@@@A@A@@@@B@@@BA@@@@B@@@@@BB@BB@DBB@B@@@B@B@BCB@B@@E@CAACAA@AAAAA@@A@A@BB@@B@BB@@@B@@@@@B@@ABCB@BCDCAE@Uh@@DABABA@@B@@@@@@@@AB@@@@@B@A@@B@@A@@@@@@@A@@BCBADA@@@@@@BBBB@B@@@BA@A@AB@B@A@BBC@@B@@ABABB@@@@@@B@@@@AB@BB@@BA@@AAB@@@@AA@B@@@B@@@@@B@@@@B@@BA@@@B@@B@@@B@BA@@A@@AAAA@@@A@@BA@A@@AA@@A@AAA@@AA@@BC@@AA@@AABAB@@A@A@A@@@@@AAA@@@CB@@B@@@BABAB@BA@@@@@@BA@@AB@AA@A@@@@@@@A@AA@@D@DA@ABABBA@@@@@@@ABB@@@B@@BB@@@AB@@@@@@D@@@@@B@@@@@@@B@@@@@B@@AB@@@@@A@@AB@@@@@@@BABB@@@@A@A@BDB@AAB@@@@@B@B@RmA@CACCC@@B@DGCCBG@ECCBCBA@@EEA@CG@EAGLEFDABB@@@B@BBB@@BD@@AB@@@@@B@@@B@B@@@B@B@B@BBB@B@@@BB@ADA@@B@@@@@BBB@BB@@@@BB@@B@@@BB@CBA@FDB@BB@BBBCBABC@@@@@@AA@CBA@AB@@ABB@A@@B@@AB@@@@A@@@A@@AA@@@@@A@@@@BB@@@EB@CA@@@@A@@@@@@@BC@@@@A@@B@@@@@@@E@C@A@A@@@@BA@BDB@@B@@B@@@B@@@@BAB@B"]],"encodeOffsets":[[[120882,31609]],[[120846,31604]],[[120815,31681]],[[120832,31599]],[[120815,31677]]]}}],"UTF8Encoding":true});}));