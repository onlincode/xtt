var _0x45c8ac=_0x57ea;function _0x4ffc(){var _0x4fada3=['#diemTable','application/json','Loại\x20hình','Chuyên\x20ngành','ajaxDiv','chiTietRoute','disabled','style','<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-info\x22\x20onclick\x20=\x20\x22chiTietBtnClick(\x27','getItem','#myTable','chamdiemRoute','rows','logoutForm','273812dKqGFE','logoutBtn','Trường','GET','draw','onload','innerHTML','replace','Redrawing','init','getElementById','catch','push','add','Mã\x20trường','236oyPHbg','addEventListener','keydown','click','loginRoute','length','loaiHinh','5001AbvDGM','removeItem','Tìm\x20kiếm','3206220xViGSd','display','key','columns','adjust','hidden.bs.modal','entries','render','searchRoute','querySelector','loginBtn','DataTable','className','block','log','src','maNganh','Đang\x20tải...','json','Đăng\x20ký\x20thành\x20công,\x20hãy\x20ghi\x20nhớ\x20sđt\x20và\x20ngày\x20sinh\x20bạn\x20đã\x20nhập\x20để\x20truy\x20cập\x20vào\x20tài\x20khoản','tabcontent','data','userid','opts','apply','currentTarget','createElement','page.dt','ready','stringify','script[src=\x27','#myModal','Ngành','searchInput','maTruong','tablinks','script','then','Không\x20có\x20dữ\x20liệu','Bạn\x20nhập\x20thiếu\x20thông\x20tin\x20hoặc\x20không\x20chính\x20xác','appendChild','scriptUrl','colvis','4267264ebIsRh','1236431fnubkV','\x20active','tenTruong','schools','6490672zYHLsV','input','Đăng\x20xuất\x20thành\x20công','error','body','value','loginForm','9RIPOAW','5838265tCsNCn','getElementsByClassName','POST'];_0x4ffc=function(){return _0x4fada3;};return _0x4ffc();}(function(_0x301e2c,_0x8befcb){var _0x275899=_0x57ea,_0x118f40=_0x301e2c();while(!![]){try{var _0x15015e=parseInt(_0x275899(0xc6))/0x1+parseInt(_0x275899(0xd5))/0x2*(-parseInt(_0x275899(0xdc))/0x3)+-parseInt(_0x275899(0x10a))/0x4+parseInt(_0x275899(0x117))/0x5+-parseInt(_0x275899(0xdf))/0x6+parseInt(_0x275899(0x10b))/0x7+parseInt(_0x275899(0x10f))/0x8*(parseInt(_0x275899(0x116))/0x9);if(_0x15015e===_0x8befcb)break;else _0x118f40['push'](_0x118f40['shift']());}catch(_0x59141b){_0x118f40['push'](_0x118f40['shift']());}}}(_0x4ffc,0x9a2f4));const isHome=!0x0;var diemTable,userid=localStorage[_0x45c8ac(0xc1)]('userid');function logoutClick(){var _0x4c57b7=_0x45c8ac;localStorage[_0x4c57b7(0xdd)](_0x4c57b7(0xf5)),userid='',alert(_0x4c57b7(0x111)),showLoginForm(),setTimeout(function(){var _0x5b38d5=_0x4c57b7;document[_0x5b38d5(0xd0)]('logoutBtn')[_0x5b38d5(0xbe)]=!0x1;},0xbb8);}function loginClick(){var _0x9d0a83=_0x45c8ac;let _0x994759=serializeFormToJson(document[_0x9d0a83(0xd0)](_0x9d0a83(0x115)));console[_0x9d0a83(0xed)](_0x994759),sendPostData(_0x994759,handleLogin),setTimeout(function(){var _0x55aa81=_0x9d0a83;document[_0x55aa81(0xd0)](_0x55aa81(0xe9))[_0x55aa81(0xbe)]=!0x1;},0xbb8);}function handleLogin(_0x3bf6c3){var _0x3859b6=_0x45c8ac;_0x3bf6c3[_0x3859b6(0xf5)]?(localStorage['setItem'](_0x3859b6(0xf5),_0x3bf6c3[_0x3859b6(0xf5)]),userid=_0x3bf6c3[_0x3859b6(0xf5)],hideLoginForm(),_0x3bf6c3[_0x3859b6(0xcf)]?alert(_0x3859b6(0xf2)):alert('Đăng\x20nhập\x20thành\x20công.\x20Chào\x20mừng\x20bạn')):_0x3bf6c3[_0x3859b6(0x112)]&&alert(_0x3859b6(0x106));}function sendPostData(_0x21344d,_0x23e79e){var _0x1e4032=_0x45c8ac;fetch(routesURL[_0x1e4032(0xd9)],{'method':_0x1e4032(0x119),'body':JSON['stringify'](_0x21344d),'headers':{'Content-Type':_0x1e4032(0x11b)}})[_0x1e4032(0x104)](_0x39b06c=>_0x39b06c[_0x1e4032(0xf1)]())[_0x1e4032(0x104)](_0x23e79e)[_0x1e4032(0xd1)](alert);}function serializeFormToJson(_0x2c25d3){var _0x2c79b6=_0x45c8ac,_0x260118=new FormData(_0x2c25d3),_0x735a42={};for(var [_0x35fdeb,_0x24ff90]of _0x260118[_0x2c79b6(0xe5)]())_0x735a42[_0x35fdeb]=_0x24ff90;return _0x735a42;}function hideLoginForm(){var _0x3324c3=_0x45c8ac;document['getElementById'](_0x3324c3(0xc5))[_0x3324c3(0xbf)]['display']='',document[_0x3324c3(0xd0)](_0x3324c3(0x115))[_0x3324c3(0xbf)][_0x3324c3(0xe0)]='none';}function _0x57ea(_0x37e196,_0x49eba3){var _0x4ffcb9=_0x4ffc();return _0x57ea=function(_0x57ea09,_0x16d435){_0x57ea09=_0x57ea09-0xbe;var _0x358323=_0x4ffcb9[_0x57ea09];return _0x358323;},_0x57ea(_0x37e196,_0x49eba3);}function showLoginForm(){var _0xd497ea=_0x45c8ac;document[_0xd497ea(0xd0)]('loginForm')[_0xd497ea(0xbf)][_0xd497ea(0xe0)]='',document[_0xd497ea(0xd0)](_0xd497ea(0xc5))[_0xd497ea(0xbf)][_0xd497ea(0xe0)]='none';}document[_0x45c8ac(0x113)][_0x45c8ac(0xcb)]=()=>{userid?hideLoginForm():showLoginForm();},document[_0x45c8ac(0xd0)]('loginBtn')[_0x45c8ac(0xd6)](_0x45c8ac(0xd8),function(_0x5e9040){var _0x4bd277=_0x45c8ac;this[_0x4bd277(0xbe)]=!0x0,loginClick();}),document[_0x45c8ac(0xd0)](_0x45c8ac(0xc7))[_0x45c8ac(0xd6)](_0x45c8ac(0xd8),function(_0x209935){var _0x30993a=_0x45c8ac;this[_0x30993a(0xbe)]=!0x0,logoutClick();});const dataArr=[];var schools={};function redrawTable(){var _0x345440=_0x45c8ac;console['log'](_0x345440(0xce)),$('#myTable')[_0x345440(0xea)]()['clear']()[_0x345440(0xc4)][_0x345440(0xd3)](dataArr)[_0x345440(0xca)](),$(_0x345440(0xc2))[_0x345440(0xea)]()[_0x345440(0xe2)]['adjust']()[_0x345440(0xca)]();}function updateArr(_0x13998e){var _0x173964=_0x45c8ac;dataArr[_0x173964(0xda)]=0x0,schools=_0x13998e[_0x173964(0x10e)],console['log'](_0x13998e),dataArr[_0x173964(0xd2)](..._0x13998e[_0x173964(0xf4)]);}dataArr['push']=function(){var _0x1b9351=_0x45c8ac;Array['prototype']['push'][_0x1b9351(0xf7)](this,arguments),redrawTable();};let timeoutId;const searchInput=document['getElementById'](_0x45c8ac(0x100));function openMyTab(_0x5eaed,_0x11cfa8){var _0x22242e=_0x45c8ac,_0x28304b,_0x3f0afb,_0x26b91a;for(_0x28304b=0x0,_0x3f0afb=document[_0x22242e(0x118)](_0x22242e(0xf3));_0x28304b<_0x3f0afb[_0x22242e(0xda)];_0x28304b++)_0x3f0afb[_0x28304b][_0x22242e(0xbf)][_0x22242e(0xe0)]='none';for(_0x28304b=0x0,_0x26b91a=document['getElementsByClassName'](_0x22242e(0x102));_0x28304b<_0x26b91a[_0x22242e(0xda)];_0x28304b++)_0x26b91a[_0x28304b][_0x22242e(0xeb)]=_0x26b91a[_0x28304b][_0x22242e(0xeb)][_0x22242e(0xcd)](_0x22242e(0x10c),'');document[_0x22242e(0xd0)](_0x11cfa8)[_0x22242e(0xbf)]['display']=_0x22242e(0xec),_0x5eaed[_0x22242e(0xf8)][_0x22242e(0xeb)]+=_0x22242e(0x10c);}function chiTietBtnClick(_0x4a6093){var _0x344d2f=_0x45c8ac;fetch(routesURL[_0x344d2f(0x11f)],{'method':'POST','body':JSON[_0x344d2f(0xfc)]({'userid':userid,'id':_0x4a6093}),'headers':{'Content-Type':_0x344d2f(0x11b)}})['then'](_0x84c12d=>_0x84c12d[_0x344d2f(0xf1)]())['then'](_0x261d16=>{var _0x3ead9d=_0x344d2f;console[_0x3ead9d(0xed)](_0x261d16),document[_0x3ead9d(0xd0)](_0x3ead9d(0x11e))[_0x3ead9d(0xcc)]=_0x261d16[_0x3ead9d(0xe6)],showDiemTable(_0x261d16[_0x3ead9d(0xf6)]);})[_0x344d2f(0xd1)](alert);}function xetThuBtnClick(_0x5b25d0){var _0x56e5a1=_0x45c8ac;fetch(routesURL[_0x56e5a1(0xc3)],{'method':_0x56e5a1(0x119),'body':JSON[_0x56e5a1(0xfc)]({'userid':userid,'id':_0x5b25d0}),'headers':{'Content-Type':_0x56e5a1(0x11b)}})['then'](_0x130733=>_0x130733[_0x56e5a1(0xf1)]())['then'](_0x49a4e7=>{var _0x5f390a=_0x56e5a1;console['log'](_0x49a4e7),if (document[_0x5f390a(0xe8)](_0x5f390a(0xfd)+_0x49a4e7['scriptUrl']+'\x27]')) return scriptOnloadCallback(_0x49a4e7);let _0x115b52=document[_0x5f390a(0xf9)](_0x5f390a(0x103));_0x115b52[_0x5f390a(0xee)]=_0x49a4e7[_0x5f390a(0x108)],_0x115b52['onload']=function(){scriptOnloadCallback(_0x49a4e7);},document[_0x5f390a(0x113)][_0x5f390a(0x107)](_0x115b52);})[_0x56e5a1(0xd1)](alert);}function showDiemTable(_0x3a3d46){var _0x37b12c=_0x45c8ac;diemTable=$(_0x37b12c(0x11a))['DataTable'](_0x3a3d46);}searchInput[_0x45c8ac(0xd6)](_0x45c8ac(0x110),()=>{clearTimeout(timeoutId),timeoutId=setTimeout(()=>{var _0x545ec4=_0x57ea;searchInput[_0x545ec4(0xbe)]=!0x0,fetch(routesURL[_0x545ec4(0xe7)],{'method':_0x545ec4(0x119),'body':JSON[_0x545ec4(0xfc)]({'searchStr':searchInput[_0x545ec4(0x114)]}),'headers':{'Content-Type':'application/json'}})[_0x545ec4(0x104)](_0x2dccff=>_0x2dccff['json']())[_0x545ec4(0x104)](_0x2049b8=>updateArr(_0x2049b8['body']))[_0x545ec4(0x104)](()=>searchInput['disabled']=!0x1);},0x7d0);}),searchInput[_0x45c8ac(0xd6)](_0x45c8ac(0xd7),_0x54904e=>{var _0x2724f1=_0x45c8ac;'Enter'===_0x54904e[_0x2724f1(0xe1)]&&(clearTimeout(timeoutId),searchInput[_0x2724f1(0xbe)]=!0x0,fetch(routesURL[_0x2724f1(0xe7)],{'method':_0x2724f1(0x119),'body':JSON['stringify']({'searchStr':searchInput[_0x2724f1(0x114)]}),'headers':{'Content-Type':'application/json'}})[_0x2724f1(0x104)](_0x59cc43=>_0x59cc43[_0x2724f1(0xf1)]())[_0x2724f1(0x104)](_0xaa9d8f=>updateArr(_0xaa9d8f[_0x2724f1(0x113)]))[_0x2724f1(0x104)](()=>searchInput[_0x2724f1(0xbe)]=!0x1));}),$(document)[_0x45c8ac(0xfb)](function(){var _0x4c0dcb=_0x45c8ac;$(_0x4c0dcb(0xc2))['DataTable']({'lengthChange':!0x1,'dom':'Bfrpt','pageLength':0xa,'responsive':{'details':{'display':$['fn']['dataTable']['Responsive'][_0x4c0dcb(0xe0)]['childRowImmediate']}},'search':{'regex':!0x0},'data':dataArr,'columns':[{'title':_0x4c0dcb(0xff),'data':'tenNganh','render':function(_0x52e830,_0x17f23d,_0x368026){var _0x14bef5=_0x4c0dcb;return _0x52e830+'\x20('+_0x368026[_0x14bef5(0xef)]+')';}},{'title':_0x4c0dcb(0xc8),'data':_0x4c0dcb(0x101),'render':function(_0x508234){var _0x4ce263=_0x4c0dcb;return schools[_0x508234][_0x4ce263(0x10d)];}},{'title':_0x4c0dcb(0xd4),'data':_0x4c0dcb(0x101)},{'title':_0x4c0dcb(0x11c),'data':_0x4c0dcb(0xdb)},{'title':'','data':'id','orderable':!0x1,'render':function(_0x57bae2){var _0x5e9026=_0x4c0dcb;return _0x5e9026(0xc0)+_0x57bae2+'\x27)\x22\x20data-toggle=\x22modal\x22\x20data-target=\x22#myModal\x22>Chi\x20tiết</button>';}},{'title':_0x4c0dcb(0x11d),'data':'chuyenNganh','visible':!0x0}],'searching':!0x1,'buttons':[_0x4c0dcb(0x109)],'language':{'emptyTable':_0x4c0dcb(0x105),'zeroRecords':_0x4c0dcb(0x105),'paginate':{'previous':'<','next':'>'}},'oLanguage':{'sSearch':_0x4c0dcb(0xde)}})['on'](_0x4c0dcb(0xfa),()=>{var _0x42ca52=_0x4c0dcb;$(_0x42ca52(0xc2))[_0x42ca52(0xea)]()[_0x42ca52(0xe2)][_0x42ca52(0xe3)]();}),fetch(routesURL[_0x4c0dcb(0xe7)],{'method':_0x4c0dcb(0xc9)})['then'](_0x21bda3=>_0x21bda3[_0x4c0dcb(0xf1)]())[_0x4c0dcb(0x104)](_0x14e52e=>updateArr(_0x14e52e['body']));}),$(_0x45c8ac(0xfe))['on'](_0x45c8ac(0xe4),function(){var _0x5e05be=_0x45c8ac;document[_0x5e05be(0xd0)]('ajaxDiv')[_0x5e05be(0xcc)]=_0x5e05be(0xf0);});
