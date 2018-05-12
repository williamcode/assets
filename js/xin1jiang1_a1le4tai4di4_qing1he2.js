(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('青河县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"654325","properties":{"name":"青河县","cp":[90.37555,46.679113],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@KC@AACGOACAA@AAAAACEAA@AA@@@@@@@@A@@@@@A@@AAAA@@@@A@@@@A@@AA@@GGEEACCCEGIKEEEEAAEECCCECEEGGGEEKOCCEGEEAACGEGEEEG@AA@@AGGEEIIEGACCCCECAAAEEAAA@@CAA@A@ABA@A@AA@AA@@@A@CB@AAA@@CAA@@CEACACAACICGAAEEACACCC@AA@AAGIACA@CECA@ACACCCCOKMKCCEEIECC@ACCCCEC@ACA@AAACA@@CAGEAAAAAAAA@@@AECAAAGEEAA@AEEGQEKAC@ECGEICIACCI@E@@AAACCE@AAC@CAG@AACCCCCCCA@@A@AACBGAA@CAAECCAEACAAACCIIACCAAAGEEE@@@C@ABADC@ABABEBEBE@CAC@@BCBA@CBE@A@A@ABAJEB@@@@AAA@@@A@@@AD@DCBA@@@AA@C@CA@@AA@A@A@ABCAA@@@A@@AC@@@ABA@AFEBA@@@AA@AA@@ǉ@Ǖ@E@Ã@BF@FB@DB@BBB@B@D@@BBBBBBBBBBBB@BBBLFDB@B@B@DADCDCBCFAD@D@F@BDFBBBF@D@BBBFDB@DBBBB@@BBBDD@@BBH@DBD@B@FBDBHBD@RFFDFBDBF@FBF@JBJBNBLDDBJFLFJHJHNHFBHFHDFDFBDBDDDBDDDBFFJFFFDDDB@FBDADEF@B@D@@@BCBCF@D@D@@A@@B@BB@@B@B@@DD@B@B@BGJ@BEDCBAB@BBBHRFNFNBDBJDDBLBDBDBFDJBFBF@DDJBDBDBFDD@DBDBHBDBFBF@FBDBF@FDRBB@D@DBDDRBFBNBF@FBD@FBHBTBJ@D@HBB@FBF@HDL@H@D@B@J@JBJDLBF@BBFBBBF@HAFAD@@@@BB@B@B@BDDBF@DABABAB@BBB@BBBBB@B@BDB@BBBAB@BADCB@B@BA@@D@FAP@H@DAF@H@FANAL@B@FF\\BFBHBNBHBF@DBH@B@N@B@H@F@BBF@D@D@B@DAJBFAD@BALANAF@FAF@BAD@BABCDEHAHAF@D@D@D@LBD@F@HAN@F@BA@A@EDIFKFCFMFCDCBC@GBEDG@EBOHEBCBGFGDCBE@ABCBAB@@BBDD@F@D@F@BB@BBDDBBDBH@DBDBDBBBFHBBLFF@LDD@DDB@D@BBB@BBBBJBDBDDDDHFFDBDDFDHBP@NDVBRAFBF@J@F@F@HBN@FAL@FADADEF@B@B@BBJBD@JAFAF@B@D@B@F@F@F@XAFAHCFCH@D@F@F@FAF@HADAH@B@DBLD^BLBV@BABADEFGJEF@BADAB@JANABAJADAD@HAFAHCHELADAD@B@B@@BDDDBDBBDDB@BDB@BBBDBDBD@F@@@BAB@B@BFHDFBHBF@BBBB@DB@@@D@B@D@B@BDF@BFHB@BBDFBDBB@DA@ABA@@BAB@BBB@@BDDB@BDDD@DBBBBBBFBDDBB@H@D@B@F@D@FBFD@@@BBB@@BBBB@B@@AB@B@@FFB@BBB@D@HBB@HDBBFBDBD@@@BBA@@B@B@B@BB@D@B@DBBBAB@@@BD@@BBB@@BB@@ABABAB@FADAF@DAF@B@BBB@BBB@BAD@@AB@@AB@@C@IFABEDGFCDIHCDCFA@AD@BEHABCDGHEDABCBEDABEFA@C@ABA@ADA@BB@@DBBB@@DAD@@@LFDBB@B@DFFDBDB@D@DBFDB@B@B@BBDBD@BCD@D@RDDBB@B@@BBB@@B@B@B@FBB@BBFBB@BBB@@DGLAF@BCBADCFADKP@B@L@BAB@DAD@BCDAFCDEFCF@BAB@FCD@BAFCJCBABAD@DBBEDAD@BABAB@BCDCBCBABABAB@DABABCB@B@@A@I@ABABGRCDAFCDCDcVGFGHCDELCF@B@@A@ABBDAFAF@DABCDKJOPUTSTUXMPMNIJON@DBD@B@F@B@DBD@B@B@B@BAF@@@B@B@B@DBB@F@L@BAH@@@@AB@DAB@D@DAFAB@B@DAB@B@F@D@FAF@B@BCDAHCHAF@BA@ADADADAD@B@D@B@D@B@D@B@BAH@B@J@Z@B@F@B@L@D@B@JBF@B@B@B@D@D@F@D@@CNEP@BAFADAH@B@@AFADAF@HCN@B@D@B@BAFAJAD@DABAB@@@B@FADAFCHABABAF@@AFADCHCHAD@DADADEL@BEH@B@B@B@FADAJ@DAD@FAD@B@D@B@B@BAB@B@BAB@DAFAHAH@BBDLLFDNHJJPLNLHFFDBBD@JAJCPGJEFCDABAB@D@DBB@BB@B@BABAB@B@B@BBBBBBDB@B@@B@@BHBF@DA@@BCBA@@BAD@B@FABABABADEDAD@B@B@D@D@@@DAB@B@F@@@BABAB@@BB@@BB@B@B@D@@@B@F@D@D@F@B@BBDDBBB@B@DA@CBCBABB@@@@BBF@BBBB@@B@DBH@D@BA@@BBL@J@HBD@FBBDDBDBBBBB@DDFBBF@B@BAD@@BDBBBDB@DDDB@DBBB@B@@@B@@@B@B@B@BBD@DAD@@B@@BBDFBB@BA@CDCBC@EDCBGDABAB@B@FBB@B@@@BABCDABAB@D@H@B@D@F@BBDBD@F@@BB@BBB@BB@@B@B@B@D@@BF@B@@ABABA@@BA@@BADEF@D@B@@BBB@BBDB@BB@BAJEPEDAB@BAB@FBB@@@BD@BFFBBNHB@HB@@BBHDDBDBD@D@DBB@BBB@D@HDFBBBJBB@BB@B@D@BBDB@@@B@D@J@D@D@B@BB@@@@BDBBDB@BB@DA@@B@JDHDDFBDBJ@@B@v@dR^`J^PT^PPT@TGfAPBRBPg\\E\\j`rLf`dJTHFBBZPfN`T^jPr^dNjRzAjHNLnGzGZVzd`GhKfO@MncLOHM\\qDOP[TEPSAWBMHI\\GNMHUTYVKXKFUDCLOfEJKE_dcj[NU`cPMFOxgNMF]JG|FX@n@nSRQvY\\GDGFI`YGc@OJMN[LIbGJIEwIMIQCU^UNKNKXITO@kvELIB[VUdgOsGOK[GiCMOIwGZBHIHIHUGSMQMMAaOQ_OEIHGCIKIAMGOAMBa{qSEWUOugMMg]MSYGDWNSvhqIQEKdyh}LMRIfiFOAcAiG_XUHcE__WcWkaaWskycgiw}sSOMUUQM@Y@{AWDMGC]KOEKC[IKCGCSGYMEiOKCIC]KWGKCAA"],"encodeOffsets":[[92673,46513]]}}],"UTF8Encoding":true});}));