var oldLabels={};
var currentId; 
function checkMyNumber(e) {
    return Number(e.replace(",", "."))
  }
  function handleThi() {
    let e = document.getElementById("thitn")
      , t = document.getElementById("thi1").value
      , n = document.getElementById("thi2").value
      , l = document.getElementById("thi3").value
      , u = checkMyNumber(t) + checkMyNumber(n) + checkMyNumber(l);
    e.value = u
  }
  function handleSum() {
    let e = document.getElementById("hocba")
      , t = document.getElementById("hoc11").value
      , n = document.getElementById("hoc12").value
      , l = document.getElementById("hoc13").value
      , u = document.getElementById("hoc21").value
      , m = document.getElementById("hoc22").value
      , h = document.getElementById("hoc23").value
      , a = document.getElementById("hoc31").value
      , o = document.getElementById("hoc32").value
      , c = document.getElementById("hoc33").value
      , d = checkMyNumber(t) + checkMyNumber(n) + checkMyNumber(l) + checkMyNumber(u) + checkMyNumber(m) + checkMyNumber(h) + checkMyNumber(a) + checkMyNumber(o) + checkMyNumber(c);
    e.value = d
  }
  function handleToHop() {
    let e = {
        A00: ["A00", "To\xe1n", "L\xfd", "Ho\xe1"],
        A01: ["A01", "To\xe1n", "L\xfd", "Anh"],
        B00: ["B00", "To\xe1n", "Ho\xe1", "Sinh"],
        B08: ["B08", "To\xe1n", "Sinh", "Anh"],
        D01: ["D01", "To\xe1n", "Văn", "Anh"],
        D07: ["D07", "To\xe1n", "Ho\xe1", "Anh"],
        C01: ["C01", "To\xe1n", "Văn", "L\xfd"]
    };
    for (j = 1; j < 4; j++) {
        let t = document.getElementsByClassName("mon" + j);
        for (i = 0; i < t.length; i++)
            if (t[i] instanceof HTMLElement) {
                let n = t[i].getAttribute("for");
                oldLabels[n] ? t[i].innerText = oldLabels[n] : oldLabels[n] = t[i].innerText;
                quote = /môn\s\w+:/.test(t[i].innerText) ? ":" : " ",
                t[i].innerText = t[i].innerText.replace(/môn\s\w+[\s:]/, "m\xf4n " + e[document.getElementById("tohop").value][j] + quote)
            }
    }
  }
function scriptOnloadCallback(obj){
  currentId = obj.id;
  displayXetThu(obj);
}

const sampleDiem = {
    "dgnl": "",
    "tohop": "A00",
    "thitn": "",
    "thi1": "",
    "thi2": "",
    "thi3": "",
    "hocba": "",
    "hoc11": "",
    "hoc12": "",
    "hoc13": "",
    "hoc21": "",
    "hoc22": "",
    "hoc23": "",
    "hoc31": "",
    "hoc32": "",
    "hoc33": "",
    "ielts": "0",
    "toefl": "0",
    "toeic1": "0",
    "toeic2": "0",
    "hsgqg": "0",
    "khkt": "0",
    "hsgtp": "0",
    "sat": "",
    "hocthuat": "",
    "vannghe": "",
    "doituong": "0",
    "khuvuc": "3"
}

function displayXetThu(obj){
 //document.getElementById("toggleDiv1").style.display = "none";
 if (document.getElementById("ajaxDiv2").innerHTML) return alert("Bạn vui lòng nhập vào bên dưới")
 document.getElementById("ajaxDiv2").innerHTML = renderXetThu(obj);  
 document.getElementsByClassName("defaultOpen")[0].click();
 handleToHop();
 populateFormFromJson("QSBForm", sampleDiem);
}
function populateFormFromJson(formId, jsonData) {
    var form = document.getElementById(formId);
    for (var key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
            var input = form.elements[key];
            if (input) {
                $(input).val(jsonData[key]).change();
                //input.value = jsonData[key];
            }   
        }
    }
}

function displayKetQua(e){
    // kết quả được tiêm vào ajaxDiv3 ở ajaxDiv2
    // cần giấu bảng xét thử (xetThuForm) ở ajaxDiv2 đi và hiện ajaxDiv3
   // document.getElementById("xetThuForm").style.display = "none";
    document.getElementById("ajaxDiv3").innerHTML = `
    <div class="form-group form-check"></div>   
<div class="progress">
 <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Thấp</div>
</div>
<div class="form-group form-check"></div>
`
var {dgnl: t, thitn: n, hocba: l, diemRaw: u, diemCong: m, diemUuTien: h, diemFull2022: a, diem2023: o, diemUuTien2023: c, diemFull2023: d} = e;
let y, g = ["Cột điểm thi ĐGNL: " + t, "Cột điểm thi Tốt nghiệp THPT: " + n, "Cột điểm học tập THPT: " + l, "Cột điểm cộng th\xe0nh t\xedch: " + m, "Cột điểm Ưu ti\xean: " + h, "Điểm x\xe9t tuyển 2022: " + a + " l\xe0m tr\xf2n: " + a.toFixed(3)], B = document.getElementById("ajaxDiv3");
B.innerHTML += g.map(e=>"<p>" + e + "<\/p>").join(""),
alert(g.map(e=>e + "\n").join("")),
document.getElementById("tinhdiem").disabled = !1


}


//gửi object điểm và tự parse
// show hide bảng khi nhấn xét lại

function getData(id) {
    document.getElementById("tinhdiem")
        .disabled = !0;
    let e = document.getElementById(
            "dgnl").value,
        t = document.getElementById(
            "tohop").value,
        n = document.getElementById(
            "thitn").value,
        l = document.getElementById(
            "thi1").value,
        u = document.getElementById(
            "thi2").value,
        m = document.getElementById(
            "thi3").value,
        h = document.getElementById(
            "hocba").value,
        a = document.getElementById(
            "hoc11").value,
        o = document.getElementById(
            "hoc12").value,
        c = document.getElementById(
            "hoc13").value,
        d = document.getElementById(
            "hoc21").value,
        y = document.getElementById(
            "hoc22").value,
        g = document.getElementById(
            "hoc23").value,
        B = document.getElementById(
            "hoc31").value,
        E = document.getElementById(
            "hoc32").value,
        I = document.getElementById(
            "hoc33").value,
        v = document.getElementById(
            "ielts").value,
        r = document.getElementById(
            "toefl").value,
        s = document.getElementById(
            "toeic1").value,
        b = document.getElementById(
            "toeic2").value,
        T = document.getElementById(
            "hsgqg").value,
        _ = document.getElementById(
            "khkt").value,
        $ = document.getElementById(
            "hsgtp").value,
        p = document.getElementById(
            "sat").value,
        k = document.getElementById(
            "hocthuat").value,
        N = document.getElementById(
            "vannghe").value,
        f = document.getElementById(
            "doituong").value,
        M = document.getElementById(
            "khuvuc").value;
    try {
        let temp = ({id, data:{
            dgnl: e,
            tohop: t,
            thitn: n,
            thi1: l,
            thi2: u,
            thi3: m,
            hocba: h,
            hoc11: a,
            hoc12: o,
            hoc13: c,
            hoc21: d,
            hoc22: y,
            hoc23: g,
            hoc31: B,
            hoc32: E,
            hoc33: I,
            ielts: v,
            toefl: r,
            toeic1: s,
            toeic2: b,
            hsgqg: T,
            khkt: _,
            hsgtp: $,
            sat: p,
            hocthuat: k,
            vannghe: N,
            doituong: f,
            khuvuc: M
    }})
    // send request and then display results
    guiDulieu(temp.data, displayKetQua)
    } catch (D) {
        alert(D)
    }
  }
function renderToHop(obj){
    return `<select id="tohop" onchange="handleToHop()">
    <option value="A00">A00: Toán, Lý, Hoá</option>
    <option value="A01">A01: Toán, Lý, Anh</option>
    <option value="B00">B00: Toán, Hoá, Sinh</option>
    <option value="B08">B08: Toán, Sinh, Anh</option>
    <option value="D01">D01: Toán, Văn, Anh</option>
    <option value="D07">D07: Toán, Hoá, Anh</option>
    <option value="C01">C01: Toán, Văn, Lý</option>
    </select>`
}



function guiDulieu(e, t) {
    return fetch("https://faas-sgp1-18bc02ac.doserverless.co/api/v1/web/fn-04566e3b-5665-42cf-b9d4-b8baba8366aa/default/qsb", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(e)
    }).then(e=>e.json()).then(t).catch(alert)
}
// Dưới đây trở đi chỉ có 1 hàm này

function renderXetThu(obj){
  return ` 
  <div class="form-group form-check"></div>

<div id = "xetThuForm">
<form id = "QSBForm" onsubmit = "return false">       
<div class="tab">
<button class="tablinks defaultOpen" onclick="openMyTab(event, 'osdyq')">ĐGNL</button>
<button class="tablinks " onclick="openMyTab(event, 'bzzyl')">Tổ hợp</button>
<button class="tablinks " onclick="openMyTab(event, 'hkemyi')">Thi TN</button>
<button class="tablinks " onclick="openMyTab(event, 'ixzxvy')">Học bạ</button>
<button class="tablinks " onclick="openMyTab(event, 'pqwlnhmp')">Tiếng Anh</button>
<button class="tablinks " onclick="openMyTab(event, 'wrzgqf')">Giải thưởng</button>
<button class="tablinks " onclick="openMyTab(event, 'edmcn')">Ưu tiên</button>
</div>

<div id="osdyq" class="tabcontent">
<p>Việc dự thi ĐGNL là cần thiết trừ các trường hợp bất khả kháng sẽ được quy đổi.</p>



<p>Nếu bạn dự thi ĐGNL nhiều lần, hãy <strong>nhập điểm cao nhất giữa các lần thi</strong>.</p>



<p>Hãy nhập điểm thi ĐGNL mà bạn đạt được, <strong>đừng cộng điểm ưu tiên</strong> vào nhé.</p>



<label for="lop10">Điểm thi ĐGNL (đừng cộng điểm ưu tiên)</label>
<input id="dgnl"  type="number" inputmode="decimal" step="any" max="1200">



<p><strong>Chú ý</strong>: Nếu không thi ĐGNL, hãy nhập 0.</p>

</div>

<div id="bzzyl" class="tabcontent">
<p>Hãy chọn 3 môn trong tổ hợp mà bạn muốn dùng để xét tuyển vào ngành này:</p>

${renderToHop(obj)}

<p>Một ngành/nhóm ngành có thể có nhiều tổ hợp môn xét tuyển nhưng có cùng một mức điểm trúng tuyển chung cho các tổ hợp môn. Do đó thí sinh nên chọn tổ hợp môn có tổng điểm cao nhất trong đợt điều chỉnh nguyện vọng.</p>

</div>

<div id="hkemyi" class="tabcontent">
<p>Tổng Điểm thi TỐT NGHIỆP THPT (của 3 môn thuộc tổ hợp môn xét tuyển), KHÔNG cộng điểm ưu tiên:</p>



<input  type="number" inputmode="decimal" step="any" id="thitn" placeholder="Tổng điểm thi 3 môn">



<p>Nếu chưa biết cách tính tổng, hãy nhập vào các ô dưới đây:</p>



<label for="thi1" class="mon1">Điểm thi môn 1:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleThi()" onchange = "handleThi()" id="thi1"><br>
<label for="thi2" class="mon2">Điểm thi môn 2:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleThi()" onchange = "handleThi()" id="thi2"><br>
<label for="thi3" class="mon3">Điểm thi môn 3:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleThi()" onchange = "handleThi()" id="thi3">



<p><strong>Lưu ý</strong>: Nếu có môn nào bạn <strong>không dự thi</strong>, tức là <strong>không đi thi</strong> (chẳng hạn môn Tiếng Anh), hãy nhập 0.</p>

</div>

<div id="ixzxvy" class="tabcontent">
<input type="text" id="hocba" placeholder="Tổng điểm học bạ 3 môn">



<p>Nếu chưa biết cách tính tổng điểm học bạ, hãy nhập tất cả các thông tin bên dưới đây để chúng tôi giúp bạn:</p>



<label for="hoc11" class="mon1">Điểm tổng kết môn 1 cả năm lớp 10:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc11"><br>
<label for="hoc21" class="mon2">Điểm tổng kết môn 2 cả năm lớp 10:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc21"><br>
<label for="hoc31" class="mon3">Điểm tổng kết môn 3 cả năm lớp 10:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc31"><br><br>

<label for="hoc12" class="mon1">Điểm tổng kết môn 1 cả năm lớp 11:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc12"><br>
<label for="hoc22" class="mon2">Điểm tổng kết môn 2 cả năm lớp 11:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc22"><br>
<label for="hoc32" class="mon3">Điểm tổng kết môn 3 cả năm lớp 11:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc32"><br><br>

<label for="hoc13" class="mon1">Điểm tổng kết môn 1 cả năm lớp 12:</label>
<input type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc13"><br>
<label for="hoc23" class="mon2">Điểm tổng kết môn 2 cả năm lớp 12:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc23"><br>
<label for="hoc33" class="mon3">Điểm tổng kết môn 3 cả năm lớp 12:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc33"><br>



<p><strong>Lưu ý</strong>: Các điểm được nhập phải <strong>hoàn toàn giống</strong> như trong học bạ THPT của bạn.</p>

</div>

<div id="pqwlnhmp" class="tabcontent">
<p>Học sinh có <strong>chứng chỉ tiếng Anh</strong> quốc tế còn thời hạn sử dụng:</p>



<p>Chọn mức điểm thi <strong>IELTS</strong> (nếu không thi thì chọn Không):</p>



<select id="ielts">
<option value="0">Không</option>
<option value="6.0">IELTS 6.0 hoặc trên 6.0</option>
<option value="5.5">IELTS 5.5</option>
<option value="5.0">IELTS 5.0</option>
<option value="4.0">Có IELTS nhỏ hơn 5.0</option>
</select>



<p>Nhập điểm thi <strong>TOEFL iBT</strong> (nếu không thi thì nhập 0):</p>



<input type="number" inputmode="decimal" step="any"  value="0" max="120"  min="0" id="toefl">



<p> Nhập điểm thi <strong>TOEIC 4 kỹ năng</strong> (nếu không thi thì nhập 0):</p>



<label for="toeic1">Điểm TOEIC nghe + đọc</label>
<input  type="number" inputmode="decimal" step="any" value="0" max="990"  min="0" id="toeic1"><br>
<label for="toeic2">Điểm TOEIC nói + viết</label>
<input  type="number" inputmode="decimal" step="any" value="0" max="400" min="0" id="toeic2"><br>

</div>

<div id="wrzgqf" class="tabcontent">
<p>Chọn giải thưởng <strong>Kỳ thi học sinh giỏi quốc gia</strong>:</p>



<div class="wp-block-group is-layout-constrained" bis_skin_checked="1"><div class="wp-block-group__inner-container" bis_skin_checked="1">
<select id="hsgqg">
<option value="0">Không</option>
<option value="nhat">Giải nhất</option>
<option value="nhi">Giải nhì</option>
<option value="ba">Giải ba</option>
<option value="kk">Giải Khuyến khích</option>
<option value="tv">Thành viên trong đội tuyển</option>
</select>
</div></div>



<div class="wp-block-group is-layout-constrained" bis_skin_checked="1"><div class="wp-block-group__inner-container" bis_skin_checked="1">
<p>Chọn giải thưởng <strong>Khoa học kỹ thuật</strong>:</p>



<select id="khkt">
<option value="0">Không</option>
<option value="nhat">Giải nhất</option>
<option value="nhi">Giải nhì</option>
<option value="ba">Giải ba</option>
<option value="kk">Giải KK</option>
</select>
</div></div>



<div class="wp-block-group is-layout-constrained" bis_skin_checked="1"><div class="wp-block-group__inner-container" bis_skin_checked="1">
<p>Chọn giải thưởng <strong>HSG cấp tỉnh/ thành phố</strong>:</p>



<select id="hsgtp">
<option value="0">Không</option>
<option value="nhat">Giải nhất</option>
<option value="nhi">Giải nhì</option>
<option value="ba">Giải ba</option>
<option value="kk">Giải Khuyến khích</option>
<option value="tv">Thành viên trong đội tuyển</option>
</select>
</div></div>



<div class="wp-block-group is-layout-constrained" bis_skin_checked="1"><div class="wp-block-group__inner-container" bis_skin_checked="1">
<p>Nhập điểm các <strong>chứng chỉ tuyển sinh quốc tế</strong> (nếu có SAT, GRE, ACT, SSAT, GMAT,…):</p>



<textarea id="sat" rows="4" cols="50" style="max-width:95%;" placeholder="ví dụ: SAT 1000 điểm, GRE 300 điểm"></textarea>
</div></div>



<div class="wp-block-group is-layout-constrained" bis_skin_checked="1"><div class="wp-block-group__inner-container" bis_skin_checked="1">
<p>Điền vào các <strong>Giải thưởng học thuật khác</strong> (nếu có):</p>



<textarea id="hocthuat" rows="4" cols="50" style="max-width:95%;" placeholder="ví dụ: giải nhì SRobot, giải ba Tin học trẻ"></textarea>
</div></div>



<div class="wp-block-group is-layout-constrained" bis_skin_checked="1"><div class="wp-block-group__inner-container" bis_skin_checked="1">
<p>Điền vào các <strong>thành tích văn thể mỹ, hoạt động xã hội, <strong>các thành tích</strong></strong> <strong>khác</strong> (nếu có):</p>



<textarea id="vannghe" rows="4" cols="50" style="max-width:95%;" placeholder="ví dụ: giải khuyến khích Văn nghệ 20/11"></textarea>
</div></div>



<p><strong>Lưu ý</strong>: Tất cả các thành tích và giải thưởng cần <strong>phải có bằng khen hoặc giấy chứng nhận</strong> cụ thể mới được công nhận nhé.</p>

</div>

<div id="edmcn" class="tabcontent">
<p>Xét cả hai loại: ưu tiên <strong>đối tượng</strong> và ưu tiên <strong>khu vực</strong>. Hãy hỏi bạn bè, ba mẹ, thầy cô của mình hoặc đọc hướng dẫn Cách xác định đối tượng ưu tiên xét học bạ để trả lời 2 câu hỏi sau nhé:</p>



<p>Bạn thuộc nhóm <strong>đối tượng</strong> ưu tiên nào ?</p>



<select id="doituong">
<option value="0"> Không</option>
<option value="1"> Nhóm ưu tiên 1 (đối tượng 1-4)</option>
<option value="5"> Nhóm ưu tiên 2 (đối tượng 5-7)</option>
</select>
<p>Bạn thuộc <strong>khu vực</strong> ưu tiên nào ?</p>
<select id="khuvuc">
<option value="3"> Khu vực 3 (không được ưu tiên)</option>
<option value="1"> Khu vực 1 </option>
<option value="2"> Khu vực 2 </option>
<option value="4"> Khu vực 2-NT</option>
</select>
</div>  


<div class="form-group form-check"></div>
<button class="btn btn-info" id = "tinhdiem" onclick = "getData('${obj.id}')">Xem kết quả</button>

</form>

</div>


<div id = "ajaxDiv3">
     `
}
