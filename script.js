const isHome = true;
var userid = localStorage.getItem("userid")

var diemTable;
document.body.onload = () => {if (userid){
  hideLoginForm();
}
else showLoginForm();
}
document.getElementById("loginBtn").addEventListener("click", function(event){
  this.disabled = true;
  loginClick();

});

document.getElementById("logoutBtn").addEventListener("click", function(event){
  this.disabled = true;
  logoutClick();

});
function logoutClick(){
  localStorage.removeItem("userid")
  userid = ""
  alert("Đăng xuất thành công")
  showLoginForm()
// Enable the login button after 3 seconds (3000 milliseconds)
setTimeout(function() {
  document.getElementById("logoutBtn").disabled = false;
}, 3000);
 
}

function loginClick(){
  let form = document.getElementById("loginForm");
  let data = serializeFormToJson(form);
  console.log(data);
  sendPostData(data,handleLogin)
  setTimeout(function() {
    document.getElementById("loginBtn").disabled = false;
  }, 3000);
}

function handleLogin(data){
  if (data.userid){
    localStorage.setItem("userid", data.userid)
    userid = data.userid
    hideLoginForm()
    if (data.init){
      alert("Đăng ký thành công, hãy ghi nhớ sđt và ngày sinh bạn đã nhập để truy cập vào tài khoản")
    }
    else alert("Đăng nhập thành công. Chào mừng bạn")
  }
  else if (data.error){
    alert("Bạn nhập thiếu thông tin hoặc không chính xác")
  }

}

function sendPostData(data, callback) {
  fetch("https://faas-sgp1-18bc02ac.doserverless.co/api/v1/web/fn-095529cf-2322-4519-9320-10dbf07f76fb/thpt/log", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(callback)
  .catch(alert);
}

function serializeFormToJson(form) {
  var formData = new FormData(form);
  var jsonObject = {};

  for (var [key, value] of formData.entries()) {
      jsonObject[key] = value;
  }
 
  return jsonObject
}

function hideLoginForm(){
  document.getElementById("logoutForm").style.display = ""
  document.getElementById("loginForm").style.display = "none"
}
function showLoginForm(){
  document.getElementById("loginForm").style.display = ""
  document.getElementById("logoutForm").style.display = "none"
}
const dataArr = []
var schools = {}
dataArr.push = function() { Array.prototype.push.apply(this, arguments);   redrawTable()};

 

function redrawTable(){
  console.log("Redrawing")
  $("#myTable").DataTable().clear().rows.add(dataArr).draw();
  $("#myTable").DataTable().columns.adjust().draw();

}
function updateArr(data){
  dataArr.length = 0;
  
  schools = data.schools;
  console.log(data)
  //Object.keys(schools).map(v => schools[v].moTa = Object.values(schools[v]).join(" ") + Object.values(schools[v]).map(removeAccents).join(" "))
  dataArr.push(...data.data);
  
}
function removeAccents(str) {
  return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}


let timeoutId;
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    searchInput.disabled = true;
    fetch("http://127.0.0.1/search", {method : "POST", body: JSON.stringify({searchStr: searchInput.value})   }).then(response => response.json()).then(json => updateArr(json.body)).then(() => searchInput.disabled = false)
  }, 2000);
});

 
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
 
    clearTimeout(timeoutId);
    searchInput.disabled = true;
    fetch("http://127.0.0.1/search", {method : "POST", body: JSON.stringify({searchStr: searchInput.value})   }).then(response => response.json()).then(json => updateArr(json.body)).then(() => searchInput.disabled = false)
  }
});
 


$(document).ready( function () {
  $('#myTable tfoot th').each(function () {
    var title = $(this).text();
    $(this).html('<input type="text" placeholder="Search ' + title + '" />');
});
  var table = $('#myTable').DataTable({
  lengthChange: false,
  dom:"Bfrtp",
   pageLength: 10,
   responsive: true,
   search: {
    regex: true
  },
   data: dataArr,
   columns:[
    {title: "Tên trường", data: "maTruong", render: function(data) {return schools[data].tenTruong}},
    {title: "Ngành", data:"tenNganh", render: function (data,meta,row){ return data + " ("+ row.maNganh+ ")"}},
    {title:"Mã trường", data:"maTruong"},
    {title: "Loại hình" , data: "loaiHinh"},
    {title: "", data: "id", orderable:false, render:function (data) {return `<button type="button" class="btn btn-info" onclick = "xetThu('${data}')" data-toggle="modal" data-target="#myModal">Chi tiết</button>`}},
    {title: "Chuyên ngành", data:"chuyenNganh", visible:true},
  ],
  searching:false,
   buttons: ['colvis'],
   responsive: true,  
   language: {
         emptyTable: `Không có dữ liệu`,
         zeroRecords: "Không có dữ liệu",
         "paginate": {
          "previous": "<",
          "next": ">"
        }
      },
      "oLanguage": {
        "sSearch": "Tìm kiếm"
      }  
});

table.on('page.dt', () => {$("#myTable").DataTable().columns.adjust()});
fetch("http://127.0.0.1/search", {method : "GET"}).then(response => response.json()).then(json => updateArr(json.body))


});

function openMyTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


function xetThu(id){
  fetch("http://127.0.0.1/nganh", {
    method: 'POST',
    body: JSON.stringify({userid,id}),
  })
  .then(response => response.json())
  .then(response => {
    console.log(response)
    document.getElementById("ajaxDiv").innerHTML = response.render;
    // Get the element with id="defaultOpen" and click on it
    showDiemTable(response.opts);
  })
  .catch(alert);
}

function xetThuBtnClick(id){
  //if (typeof currentId !== "undefined" && currentId == id) return alert("Bạn vui lòng nhập thông tin vào bên dưới")
  fetch("http://127.0.0.1/chamdiem", {
    method: 'POST',
    body: JSON.stringify({userid,id}),
  })
  .then(response => response.json())
  .then(response => {
    console.log(response)
    // Get the element with id="defaultOpen" and click on it
    const script = document.createElement('script');
    script.src = response.scriptUrl;
    script.onload = function(){
      scriptOnloadCallback(response);
    }
    document.body.appendChild(script);
 
  })
  .catch(alert);
}
function showDiemTable(opts){
  diemTable = $('#diemTable').DataTable(opts);
}
$('#myModal').on('hidden.bs.modal', function () {
  document.getElementById("ajaxDiv").innerHTML = 'Đang tải...'
})
