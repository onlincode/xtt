const isHome=!0;var diemTable,userid=localStorage.getItem("userid");function logoutClick(){localStorage.removeItem("userid"),userid="",alert("Đăng xuất th\xe0nh c\xf4ng"),showLoginForm(),setTimeout(function(){document.getElementById("logoutBtn").disabled=!1},3e3)}function loginClick(){let e=serializeFormToJson(document.getElementById("loginForm"));console.log(e),sendPostData(e,handleLogin),setTimeout(function(){document.getElementById("loginBtn").disabled=!1},3e3)}function handleLogin(e){e.userid?(localStorage.setItem("userid",e.userid),userid=e.userid,hideLoginForm(),e.init?alert("Đăng k\xfd th\xe0nh c\xf4ng, h\xe3y ghi nhớ sđt v\xe0 ng\xe0y sinh bạn đ\xe3 nhập để truy cập v\xe0o t\xe0i khoản"):alert("Đăng nhập th\xe0nh c\xf4ng. Ch\xe0o mừng bạn")):e.error&&alert("Bạn nhập thiếu th\xf4ng tin hoặc kh\xf4ng ch\xednh x\xe1c")}function sendPostData(e,t){fetch(routesURL.loginRoute,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(t).catch(alert)}function serializeFormToJson(e){var t=new FormData(e),n={};for(var[a,o]of t.entries())n[a]=o;return n}function hideLoginForm(){document.getElementById("logoutForm").style.display="",document.getElementById("loginForm").style.display="none"}function showLoginForm(){document.getElementById("loginForm").style.display="",document.getElementById("logoutForm").style.display="none"}document.body.onload=()=>{userid?hideLoginForm():showLoginForm()},document.getElementById("loginBtn").addEventListener("click",function(e){this.disabled=!0,loginClick()}),document.getElementById("logoutBtn").addEventListener("click",function(e){this.disabled=!0,logoutClick()});const dataArr=[];var schools={};function redrawTable(){console.log("Redrawing"),$("#myTable").DataTable().clear().rows.add(dataArr).draw(),$("#myTable").DataTable().columns.adjust().draw()}function updateArr(e){dataArr.length=0,schools=e.schools,console.log(e),dataArr.push(...e.data)}dataArr.push=function(){Array.prototype.push.apply(this,arguments),redrawTable()};let timeoutId;const searchInput=document.getElementById("searchInput");function openMyTab(e,t){var n,a,o;for(n=0,a=document.getElementsByClassName("tabcontent");n<a.length;n++)a[n].style.display="none";for(n=0,o=document.getElementsByClassName("tablinks");n<o.length;n++)o[n].className=o[n].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}function chiTietBtnClick(e){fetch(routesURL.chiTietRoute,{method:"POST",body:JSON.stringify({userid,id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e),document.getElementById("ajaxDiv").innerHTML=e.render,showDiemTable(e.opts)}).catch(alert)}function xetThuBtnClick(e){fetch(routesURL.chamdiemRoute,{method:"POST",body:JSON.stringify({userid,id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{if(console.log(e),document.querySelector(`script[src='${e.scriptUrl}']`))return alert("Bạn vui l\xf2ng nhập v\xe0o b\xean dưới");let t=document.createElement("script");t.src=e.scriptUrl,t.onload=function(){scriptOnloadCallback(e)},document.body.appendChild(t)}).catch(alert)}function showDiemTable(e){diemTable=$("#diemTable").DataTable(e)}searchInput.addEventListener("input",()=>{clearTimeout(timeoutId),timeoutId=setTimeout(()=>{searchInput.disabled=!0,fetch(routesURL.searchRoute,{method:"POST",body:JSON.stringify({searchStr:searchInput.value}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>updateArr(e.body)).then(()=>searchInput.disabled=!1)},2e3)}),searchInput.addEventListener("keydown",e=>{"Enter"===e.key&&(clearTimeout(timeoutId),searchInput.disabled=!0,fetch(routesURL.searchRoute,{method:"POST",body:JSON.stringify({searchStr:searchInput.value}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>updateArr(e.body)).then(()=>searchInput.disabled=!1))}),$(document).ready(function(){$("#myTable").DataTable({lengthChange:!1,dom:"Bfrpt",pageLength:10,responsive:{details:{display:$.fn.dataTable.Responsive.display.childRowImmediate}},search:{regex:!0},data:dataArr,columns:[{title:"Ng\xe0nh",data:"tenNganh",render:function(e,t,n){return e+" ("+n.maNganh+")"}},{title:"Trường",data:"maTruong",render:function(e){return schools[e].tenTruong}},{title:"M\xe3 trường",data:"maTruong"},{title:"Loại h\xecnh",data:"loaiHinh"},{title:"",data:"id",orderable:!1,render:function(e){return`<button type="button" class="btn btn-info" onclick = "chiTietBtnClick('${e}')" data-toggle="modal" data-target="#myModal">Chi tiết</button>`}},{title:"Chuy\xean ng\xe0nh",data:"chuyenNganh",visible:!0},],searching:!1,buttons:["colvis"],language:{emptyTable:`Kh\xf4ng c\xf3 dữ liệu`,zeroRecords:"Kh\xf4ng c\xf3 dữ liệu",paginate:{previous:"<",next:">"}},oLanguage:{sSearch:"T\xecm kiếm"}}).on("page.dt",()=>{$("#myTable").DataTable().columns.adjust()}),fetch(routesURL.searchRoute,{method:"GET"}).then(e=>e.json()).then(e=>updateArr(e.body))}),$("#myModal").on("hidden.bs.modal",function(){document.getElementById("ajaxDiv").innerHTML="Đang tải..."});
