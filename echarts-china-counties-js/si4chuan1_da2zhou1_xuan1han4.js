(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('宣汉县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"511722","properties":{"name":"宣汉县","cp":[107.72719,31.353835],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DCDI@A@@@AA@CAABA@GDEDABA@AAAA@AAAA@A@GBC@EAAAA@@C@CAC@AAACAA@ABGBA@@AC@AACC@ABA@@A@CAA@C@@@CAAAAE@AAC@@AAAAAAE@IAC@EBA@CAA@CAACACAA@EBG@E@AACCCAAABABCDABAFABADADA@CBCBGBE@A@A@@@AAA@CA@@C@CCAACACACCAA@@EC@@AC@@AAAC@@@@BA@A@@@@ACAAAAAA@@A@A@@AA@@AGCE@EACAECCCEGEECCAEAC@ABEBADCBABC@@@@EAIC@@A@A@AAA@CACA@@@A@@BA@@DADA@@@@@@B@@A@@DADAB@BAB@@CBA@CAECKAEAAAAEACAC@G@SDKBC@EAA@A@CBABAAA@A@@AAC@AC@CAA@CC@@@A@ABABA@CAEBA@ADABAD@@ABC@A@CAGAAAECAAACCA@A@CBA@GCCAEECAC@A@EBCBCDA@C@C@KCEAG@E@CBEDA@GBA@A@@ACC@@@@AC@AA@A@K@KBC@G@@@CAACCAC@A@C@@@AB@BABKFIDA@C@IAABAAC@@A@ABA@AECAACAAAA@@AA@@@EACAGAI@QAA@CBAA@@CC@A@G@C@CB@BCDABA@A@@@KACBA@@B@H@B@B@@ABABADAB@BBFD@BBBB@B@B@FADAB@D@BAB@BA@CBC@A@@@G@E@A@AAAGGMICCAA@A@ABCDEBADC@A@Q@C@IAAAA@@ACCEACCGCCCAAAC@CAE@O@GAC@EACACE@A@AAE@AAACCCAA@CAA@@@CD@@E@AACAAACCACAA@ABADABABC@A@@@@@@@@@A@A@@BAA@@@@@@CB@HAPCFADADCBABE@@@CCC@A@@@@DADCBADCBA@AAEGKAC@AA@CA@@MCC@E@AAA@AA@AAE@A@AAAAAA@@@GCCAA@CCCEAAECKCMGOGIA@@@AAC@@AAA@E@A@ECCAECEE@@AC@@@@CAC@A@AA@@@@@A@C@ABC@@@AAACACAICICC@C@EBE@A@A@C@CAACAAACAAA@AAC@E@E@G@C@IAC@ECGCECA@CAIACA@@@@@@@ABAA@ACAAAACAEACACAA@A@@@AAA@AA@CA@EACAEAG@ECC@CAC@CAEAQKGCIAGAGGA@CCCACCEACACAC@@DBD@D@D@BBJBFADAFCDEDC@CCCEAECAK@[JC@ECICAACC@CAA@G@EACA@A@GDEBGDCBCBCBE@C@C@EDA@A@ADADCBCBEBCAC@@@GDEDGDABEDEBCDCDCDABCB@B@B@@@B@@ADAFCBEFEDEDCBCBC@C@ECECCCAC@A@C@E@E@EACAAAAC@EACCCE@@CECECEEEECCCECCECCAEACCAGCCC@@ACCECEEGGIAACECC@AAAAAAAECACAA@AAC@AA@CCAAACAGAACEEECECAEGCE@@CCECACCG@@AGCEAGEEACABEDCBGBIDIDEDCDGLAD@BCB@@AAACCCA@A@ABCBEDC@A@A@A@CF@B@DCFEFABADEDEDEDABADABCBEBAD@L@BABCBE@E@ABAB@BBBDDD@@B@@@BA@@BA@@@@B@B@BBFHFDDB@B@B@DAFCD@BA@D@DDFHDFFB@BB@DBBAFADAD@BBB@@DBBBBF@BAFAD@DBBDB@BBDAH@FAFAFABGDCBAD@D@DBDBDBFBB@B@BBH@F@BCBEFEBABAAC@AAC@ABA@C@AAA@C@CBA@ABCBAB@HA@CDEDCDAB@D@D@BFDFDBBDD@D@@ABEDAD@D@@ADA@EDC@G@E@AB@@AF@JBD@BBH@DBDDFDB@D@BEFC@EBC@A@CEA@A@EBI@C@AACAC@E@CBABABBB@DDFDD@D@BEFCD@BABBBBDB@DFBD@D@BCDAB@H@BBBB@DBFBDB@@@B@D@B@BDBBBBF@DBBB@DBB@@@@@@B@@@@ABABAB@BBBBBB@ABA@IAA@A@@BABBB@BBBB@D@BBD@D@BB@BBB@@A@C@A@A@ABE@@@A@@B@BAB@@A@AA@AA@AACBABCB@BADBBB@FADABB@B@B@B@@CBEBC@EACAAE@A@@AACACBC@C@AC@CAAC@CAA@ABCBABKBA@G@C@EDGFEDCFED@@CHCF@F@DDFDBDDDBFDFDDBFD@B@F@J@FBBDDFBBBJ@D@BB@BAF@BCDADAB@DDBDD@B@@@@@BB@@@B@@B@@BDDD@B@@@BA@ABGDIBABA@@B@@BBBBDFDDBDB@@@@DDFELCHCFCACA]SGAE@EBGHCDABEFCDCBQBCHADABA@@BA@@BA@@@A@A@A@C@CAC@CACAG@G@C@EDEDCDCBCBA@ACAA@A@ABC@A@AA@AAA@E@AAA@C@E@C@CAEEAAC@ABCBA@CBAB@B@BB@D@@B@BA@KF@@CBA@AACEACCCC@C@A@ABA@@D@B@BAB@D@DAD@BABBB@BBBFFDDBBB@@BA@@@@@@BADABAD@@AD@@@BA@@@ABB@BBBDJLBBDBF@D@DA@C@A@A@CBAB@D@F@BBBB@@@B@@B@BB@BCF@D@BD@@@BA@ABAD@B@@B@BBBFAB@@B@@@BB@B@B@B@BB@BBB@@F@B@B@DCB@B@@@AB@D@DBDDB@H@DBD@@BDDDHBD@FEFEBABA@@B@@BB@BB@AB@DBD@BB@BBB@BFBBBFHDBDBF@B@BBB@B@@@B@B@B@LAB@BBFDDFBD@DCN@F@B@BBFBBBDBB@BB@@BHBDBBBBDBDBBB@DBHBB@BB@BBFBB@FDJDDBBBBBBB@BDDBADAFABBJDL@HAFDDBBFFDFDBDDL@FBHAFCD@DADAJ@FBD@DBBDBBAD@BBBB@F@@BD@DBBBBBFBDDBB@DABCFABGBC@C@ABAB@BBBB@B@B@B@@B@@BBB@BDD@B@B@B@@@D@BBBBBDDHBBFDFBF@DAH@DBBBBBB@DDB@FBHDHFJFB@PJDDB@@B@BBDAB@B@BBDFBD@@@DCDGDAB@DC@@HCDCHAFCD@F@D@HCHCFCFABCDEBEBC@@@@B@@A@@@@@@DAJ@H@F@DA@ABADEDCBCF@FADA@CAG@E@EBGBIBGBG@GBGBG@@DCHAF@DCTYJIHEHAHADCFGDCBA@@D@D@BB@@BB@BBB@BAB@BABABADBB@@BBB@B@DBBBB@BDBBF@BBBB@BBDBAB@FAFADAD@@@B@F@F@DBBAB@B@BADABABA@C@CAA@EDCHAH@H@ZJB@DBTFFBBB@@@BABABA@@@ABB@DD@BBBHFDDB@BBB@F@BB@@@BABEBCB@BIVCDEBCBCAEAGAGBGDEH@F@HBJ@B@DBFDFHFH@DAVOJCNAPBDBBBADCD[VADADCHBF@FBHDHDFFDDDBFBHDDDHDHDHBD@B@@@B@B@B@@@DBBDBBB@@@@B@H@@@BBB@BBBDBBBDBHBHBFDD@BDDFFHDB@H@B@@@@BH@HAD@DAHADCLIHAHAHCFADA@@B@F@F@B@DBFLBDBB@@B@BA@@BA@@B@HFD@BBB@@@B@B@F@@A@@B@@A@@@@@C@@@ABG@A@AB@@@BAB@BBBBBBBDDDB@BBDBBDDBDBD@BAD@DAFAB@F@FBD@F@F@D@DBBBBBBDBBB@B@BAB@BAD@D@DABADAD@BBBBDBBDDDBDB@B@DABA@ABCBCBCBCBCDABABADADCBA@A@AAC@AAA@A@CBA@ABC@A@A@AAC@ABCBABADAD@BADAB@DCD@B@D@B@BABA@ABC@CBAAAACA@@@A@A@@ACC@AA@C@A@A@C@CA@@@A@CBA@@BADCFADCFCDAFADABAFCD@BAD@BADAD@D@D@D@DBD@D@DAD@FAD@D@B@DBDBD@D@DAD@B@D@DADAD@DAB@@ABCBADCDABADCDADADADADADABADADADADADADABADABABAD@B@DBBBBBBDBDBDDBBDBDBFBDBDBDDDBBBBF@DBF@DBD@D@DADABADADADA@ADABABABABABCBABCBABAD@D@DAD@D@DBBBDBDBDBF@DBDBF@DBB@BBB@FDFFHDLHJHJLFFDDFJBBFJHLFFB@BBBDDBBBB@D@BAF@BAFADCDAD@D@DBDBBBFDDBDBDBD@DBDADAD@DADABAD@DABAD@@B@B@BBD@B@D@BDDBBBBDDFDB@B@BBFAB@F@D@D@D@FAD@D@F@D@D@DBDBDBBCBAFADAD@D@DBB@BAD@FCBAD@FBD@DBF@BB@AAA@CBA@ABAA@@A@@@AB@BD@@@@B@BABAFADAB@DADABAB@@@@AB@B@BAD@DABABABAB@@@B@DBB@@@BAB@D@D@@@BA@ABA@@BAB@B@H@B@AA@ACAEAAAAACCAAIEMKMIAA@@@ABAFCJABAB@FCBA@A@A@C@AFMBEBKBC@AAC@@@@AAE@A@GCAC@@@A@@BCDAFCBA@@@C@@DAB@D@@@BA@@@E@AFCDAFAHADABA"],"encodeOffsets":[[111148,32434]]}}],"UTF8Encoding":true});}));