(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('扶风县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610324","properties":{"name":"扶风县","cp":[107.900219,34.37541],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AAC@C@C@EA@@@ACC@CBA@@@GBC@C@GB@@@@@@@B@@IBA@@@@A@@A@@@@A@AB@CC@AABBD@@@@@@@B@@@@BBA@@@@B@@BA@@BB@@ABAA@@@@@B@@@@@@C@AB@@@B@@@@@B@B@@B@@@BB@B@@A@A@@@@B@@@@C@@@@A@A@@IB@@@BD@@@@BBBBBA@@@@@A@A@@@@BB@@@B@@@B@A@A@C@@@A@@B@@B@@@@@@BA@@@@A@@A@@@@B@@B@@@@@@BCBA@A@A@G@C@AC@@A@ABA@@BA@@@A@@A@@@ABAA@@@@@A@@@BB@@A@A@@@A@BA@@A@@@@CA@ABA@@@@@@@BB@B@@A@ABC@EB@@AAA@CBCB@@@@BBBD@BB@@@DB@B@@@B@BA@@B@BBFB@B@@B@BBD@@B@BDA@@@@B@B@B@B@B@@@@@BB@BF@D@@A@@@@@AA@AA@CB@@AB@@A@@@A@@B@@@B@@A@@@A@@@@B@B@B@B@@A@@A@AA@@@@B@@@@A@@B@F@D@@@@AB@@@B@@@B@@BB@@@BAB@@@F@D@B@BBBAD@BBF@@@@C@EB@@@A@@A@@@@AA@AB@@@CE@@BA@@AGB@@@B@@A@@@@BAA@@@@@BA@@@A@@@@BE@@@@B@@A@A@C@@ACB@@@@@AA@@@@@@A@@G@A@@BA@EB@@A@@@@B@@@B@@@@C@@DC@@BA@@B@@@BGB@ACBA@@AC@@CEBA@@@@BIB@BA@@@AB@@@@@BAB@@@@@@@@@@C@@@@BC@@@@@@B@@A@@AG@@B@@@B@@@@C@@@C@ABAA@AG@@DA@A@@@@@ABA@A@@BA@@B@@A@@BAB@@@BBD@B@@A@@B@@A@BBAB@@B@@@@BB@@@@@B@@@B@@BB@@@@D@@A@A@@@@B@B@@A@@@AB@@A@A@A@@@@BBB@BA@@B@B@BBB@@B@@B@@@@B@@@B@@AB@@B@@@@@BB@@@B@BA@B@F@@B@@@@B@@A@@B@@A@@@@@@BAB@B@@@@A@@@A@BB@B@@@@BB@B@@@@@BBB@@BB@@@BBD@@BB@@@@@B@@@@@@B@@B@@@@@@AB@@BB@BB@BBDDB@BB@@@@@B@@@@A@@B@@B@BB@@@@AB@@@B@@AB@@@BA@@@A@@B@B@@A@A@@@@DA@@@@@@BBD@@B@@@@B@@@BB@BB@BB@@B@@A@AB@@@@BB@@A@@@@B@@B@@@F@B@@@BB@@@@A@A@@B@@B@B@@@@@BB@@@B@@@BB@@@BB@@B@@A@@B@@@D@B@@ABB@@B@BAB@@@BBB@@@B@@D@B@B@@@@B@@@BFA@@@ABBD@B@@A@@@@D@@@@D@BB@@D@@@@@@BB@@BB@@@B@BAB@B@@B@BB@BA@@BB@@@@B@@@@AB@@@@@@A@@B@@AA@@AB@@@@A@@@A@@B@B@@@B@@B@@BBD@@@@@@BB@B@@@BB@@@@B@@@@@@AB@B@FA@@BB@@@BB@@@B@@BB@@AB@B@B@@AB@@A@@@@B@BA@@@A@@AA@@@@@@@@D@BAB@@@B@@@@A@@BA@@B@@@B@@A@@B@@A@@B@@@DABB@A@@@@BA@@@@AA@@@@@AB@B@@@@@@AAAB@@@B@@A@@B@@@@@@B@@@@B@B@@B@@B@@@BB@@@B@@B@BB@@BB@@@@@BBBBB@@B@@@B@BB@BB@@@BB@@@@B@BAB@B@D@B@@@@AB@BD@B@BB@BA@@BCBA@@FBB@BB@BB@B@@@ABAB@B@@@BB@B@@@@@@@@BB@@B@B@D@BBB@@@@@B@@@B@B@B@B@@@B@B@@CB@BAB@DA@@BA@AD@@@B@@@BCB@@@@@BA@AB@@AB@@A@@B@@@B@B@BA@ABABA@A@A@@B@B@@@B@@ABA@AB@BADABA@ABA@@@A@AB@BABABA@@@BB@@A@@@A@@@A@@@A@@B@@@B@@@@CD@B@BAF@BAB@@@@BBHFDDB@@B@BBB@B@B@B@F@D@BAB@@@B@BADAB@@@DAB@B@@BD@@@B@D@BA@A@A@@B@@@B@B@@@@B@@B@@@B@@A@@@@@@B@@@@CA@@AB@@@B@BA@@@@@@@@A@@@AA@@B@@@B@@@@A@@@@@@A@A@@@@AB@@@B@B@@AB@B@D@B@BA@@@@@A@@@@@AB@DAB@@@@A@@@@@@A@@BA@ABCBA@A@A@A@A@@@A@@@A@AB@@A@@@A@A@AEA@BADAB@BABAB@B@BABADA@ADADAB@@@B@B@F@B@D@B@@@BABAB@@ABAD@@CBCBCB@@@B@B@@BDB@@BA@@@@AA@@@ABAB@B@B@BA@A@@@A@A@@B@@B@@@B@B@DA@@@@@B@@AB@BAB@BBB@@@BAB@B@@@B@@@B@@B@@@@BAB@@@D@@@@BBB@BA@@BB@BBBBB@@BBB@@@B@BABA@@B@@@B@@@@BB@FDB@@BBB@@B@B@B@B@@BB@B@@@DB@@B@@AB@B@B@@@B@@BD@@@B@B@B@@B@@BBDB@@B@@@DBD@BDB@DB@BDDBBBB@BB@@B@B@B@BB@@BBB@BDB@B@@@@BB@@@@BDB@AB@B@@BBDD@@@BA@CBA@@@CAA@@@CA@@ABA@@@BB@@BD@@BBDF@DBBBD@@B@@BB@BAF@DAB@B@DB@@@BB@AB@@B@@@B@@B@@@@ABB@@@B@A@@B@@@@D@D@B@B@@@@AB@@AB@B@@@@@B@B@BBB@DDBB@@@@DAB@DB@@D@H@BBB@B@B@B@BBB@DB@@@B@@@F@@BB@@@@B@B@@@@@@A@A@C@@@A@@@@B@@@DBDBB@BDB@@@DCB@BABA@CA@BA@@B@DBB@B@B@DBB@@@@@BAAAB@BABCB@@@@@@@@@@AB@B@@AB@@@@@@B@@@B@AB@@@@@B@@@BB@BB@B@@@@B@@@@B@@BA@@B@@@@B@@@@B@@@@@BB@@@BAB@@@BB@BA@AB@@@B@@BAB@@B@@@@ADA@BB@@@@BBBBB@BBBB@@BBF@@BB@BBB@@@@@@A@@DC@A@@@A@@AA@@AA@A@@BCAA@@@AB@@@@@@@@B@@@@B@@@B@B@@@BA@@@@@A@@AAAAAA@@@@@@@@DA@@BBD@@@@@B@@@@A@@BA@@@@BC@@B@BBB@B@B@FA@@@@B@@A@@BB@@DB@@F@B@@@AA@@@CBC@A@A@@AEAC@@A@C@AAA@AAAA@@AC@C@@@ACA@A@A@A@A@A@AAAAEAC@@@A@@@@@@@AA@@@@A@A@A@A@@AA@@@@@AB@BABA@ABCB@DAB@DB@@BB@@@AB@BC@CB@@ABA@@B@@ABA@@@A@@@A@@@A@@DC@@BCB@B@BA@@@@BEDI@@DC@A@@@CBA@A@A@@BCBA@@AAAACCAAAA@@@A@@@A@ABA@@@A@@@A@@A@@@A@BG@@@ABAA@A@@AAA@@BC@@@A@@AC@@AAAA@CHDBA@@@A@@@C@@AA@@AB@@@CA@CAG@@A@A@@@@@ACA@@@C@ABABCBGB@@@@AB@D@@AH@D@B@@@@@B@@@BA@@@@D@@@B@@A@@@@DB@D@B@BB@@@BABA@@@BDD@@B@@@@@@A@@AA@A@A@@BB@@@CB@@@@BB@@@BA@@D@@ABA@AB@@@@D@@@@BA@@@CA@@@@@EBA@@@A@A@@@BA@@AA@AA@@@@A@A@@@@@A@@@A@A@@@@EB@@C@@@@@@@A@@@@@@A@ABA@@AA@@A@@@BA@@@A@@A@@@@A@G@@@AA@@C@CBA@ABC@A@C@A@ABCBA@A@A@A@@AAEB@A@@@@EAA@@ABCA@@A@@B@B@@CBC@@D@@@BC@C@@@@B@B@@@BB@A@@@@F@@@BC@@B@@@BC@@@A@@@@BCB@@ABA@@B@B@@@@ABC@ABE@A@@BADEB@@ABAAA@@BA@AAB@@@@A@@@BC@@A@@@@AAA@A@@C@@@@AA@A@@A@@BC@@@@BC@@@A@@B@B@BA@A@@B@BB@@BA@@B@@@B@@@DA@AB@@@@@@AA@A@@A@@@@D@@AA@A@@@@@@@A@E@A@GAA@@@AAA@@ADB@A@@@A@@A@@@@@@@@A@A@A@@@A@A@A@@@@@A@AB@@E@@A@@ABA@@D@@A@@BAB@@ABA@C@A@@@A@C@@@A@@@A@A@A@C@@@@A@A@@@@@BA@@CA@@@@@A@@@@BB@@B@@AB@@A@AB@@@B@B@@@B@@@@@B@B@@@BABC@@B@B@B@B@@@@AB@B@@@@@BA@@@A@A@@B@@@@@B@B@B@@C@A@@C@@@@A@@@ABA@@A@@A@@B@@AACB@@A@@@A@@B@@@BAAA@AA@@ABA@A@@@C@@A@@AA@B@AA@@@@A@@BC@@B@@@@A@@@@@@AB@@@@A@@B@@AA@AA@@@@A@@@@B@@A@@B@@AA@@@@BA@A@@A@@@@@A@@B@BAA@@AB@A@@@@A@@AAAABA@@@A@@@@@@AB@AA@@@@@@AA@@A@@B@@@@@@@BA@AA@@A@@@@A@@@@@A@@@@@@A@A@@@A@@@@@A@@AA@@@@B@BA@BBA@@@@BA@A@@@@@@BB@@@@@AB@A@BA@@@@@BBA@@@@@@@A@@@C@@@@@A@A@@@A@A@@@@@@A@@@@@@@@C@A@@@ABA@@A@@@@@AB@@A@@B@@@AAA@@@A@A@@@AB@@AB@@@@@BC@@@@B@@@B@@@B@@AA@@A@@B@@@@BB@@@@@B@@A@@@@@AB@@@DA@@@A@@BA@@BA@@BBB@@@@@B@@@@@@@B@@A@@@@@A@@@@A@@@@@@A@A@@@AAAA@@@@B@@AA@@ABA@A@@@AB@@A@@@A@@B@@A@@@@BA@@@A@@CC@AA@@@C@@@CCA@@A@@AAA@@@@@@@@@A@@@@BA@@@C@@@A@@@@B@B@@@B@@ABAAA@C@CBA@ABGFA@@@A@@@CAA@A@EAC@EBA@A@A@@@@CAEA@AK@A@AAAC@@C@ACA@GHABA@C@CBA@AAE@C@@D@B@BD@@@@D@B@@@@A@@@@@@@A@@@@@@@@BB@@@B@@@@@ABG@@@@D@D@B@@B@@@B@B@@D@BAB@@CBC@@@@BA@@DA@@@CB@@@@@@@BB@@@BB@@DB@@C@@B@@B@@@AB@@B@@@A@C@@A@@A@A@AB@@AG@@CA@BAAA@CD@@AJ@D@@@B@@@LA@ABA@BH@D@@EA@@AB@@AF@@AEA@@C@@CE@@AA@@E@@@CA@@CB@@@@CB@@B@@@@B@@G@@@E@AA@@EA_@@A@@B@@A@@A@@A@@A@@C@C@M@AB@@A@A@@BA@@A@@A@@@A@A@A@@AA@@A@@E@@@AAB@@A@@A@@@A@@A@@@@@@@@@BA@@@@@A@@B@@A@@@AB@@@BA@@@A@@@A@@@A@@@A@AAA@A@@@AAA@E@A@A@@@@@@A@A@@EAA@@@A@@@@@@B@@@D@B@DAB@DABCDABCBC@C@A@AACAAC@A@C@@"],"encodeOffsets":[[110514,35045]]}}],"UTF8Encoding":true});}));