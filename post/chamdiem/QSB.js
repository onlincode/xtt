var currentId,oldLabels={};function checkMyNumber(n){return Number(n.replace(",","."))}function handleThi(){let n=document.getElementById("thitn"),t=document.getElementById("thi1").value,e=document.getElementById("thi2").value,o=document.getElementById("thi3").value,h=checkMyNumber(t)+checkMyNumber(e)+checkMyNumber(o);n.value=h}function handleSum(){let n=document.getElementById("hocba"),t=document.getElementById("hoc11").value,e=document.getElementById("hoc12").value,o=document.getElementById("hoc13").value,h=document.getElementById("hoc21").value,c=document.getElementById("hoc22").value,l=document.getElementById("hoc23").value,a=document.getElementById("hoc31").value,u=document.getElementById("hoc32").value,p=document.getElementById("hoc33").value,d=checkMyNumber(t)+checkMyNumber(e)+checkMyNumber(o)+checkMyNumber(h)+checkMyNumber(c)+checkMyNumber(l)+checkMyNumber(a)+checkMyNumber(u)+checkMyNumber(p);n.value=d}function handleToHop(){let n={A00:["A00","To\xe1n","L\xfd","Ho\xe1"],A01:["A01","To\xe1n","L\xfd","Anh"],B00:["B00","To\xe1n","Ho\xe1","Sinh"],B08:["B08","To\xe1n","Sinh","Anh"],D01:["D01","To\xe1n","Văn","Anh"],D07:["D07","To\xe1n","Ho\xe1","Anh"],C01:["C01","To\xe1n","Văn","L\xfd"]};for(j=1;j<4;j++){let t=document.getElementsByClassName("mon"+j);for(i=0;i<t.length;i++)if(t[i]instanceof HTMLElement){let e=t[i].getAttribute("for");oldLabels[e]?t[i].innerText=oldLabels[e]:oldLabels[e]=t[i].innerText,quote=/môn\s\w+:/.test(t[i].innerText)?":":" ",t[i].innerText=t[i].innerText.replace(/môn\s\w+[\s:]/,"m\xf4n "+n[document.getElementById("tohop").value][j]+quote)}}}function scriptOnloadCallback(n){currentId=n.id,displayXetThu(n)}const sampleDiem={dgnl:"",tohop:"A00",thitn:"",thi1:"",thi2:"",thi3:"",hocba:"",hoc11:"",hoc12:"",hoc13:"",hoc21:"",hoc22:"",hoc23:"",hoc31:"",hoc32:"",hoc33:"",ielts:"0",toefl:"0",toeic1:"0",toeic2:"0",hsgqg:"0",khkt:"0",hsgtp:"0",sat:"",hocthuat:"",vannghe:"",doituong:"0",khuvuc:"3"};function displayXetThu(n){if(document.getElementById("ajaxDiv2").innerHTML)return alert("Bạn vui l\xf2ng nhập v\xe0o b\xean dưới");document.getElementById("ajaxDiv2").innerHTML=renderXetThu(n),document.getElementsByClassName("defaultOpen")[0].click(),handleToHop(),populateFormFromJson("QSBForm",sampleDiem)}function populateFormFromJson(n,t){var e=document.getElementById(n);for(var o in t)if(t.hasOwnProperty(o)){var h=e.elements[o];h&&$(h).val(t[o]).change()}}function displayKetQua(n){document.getElementById("ajaxDiv3").innerHTML=`
    <div class="form-group form-check"></div>   
<div class="progress">
 <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Thấp</div>
</div>
<div class="form-group form-check"></div>
`;var{dgnl:t,thitn:e,hocba:o,diemRaw:h,diemCong:c,diemUuTien:l,diemFull2022:a,diem2023:u,diemUuTien2023:p,diemFull2023:d}=n;let s=["Cột điểm thi ĐGNL: "+t,"Cột điểm thi Tốt nghiệp THPT: "+e,"Cột điểm học tập THPT: "+o,"Cột điểm cộng th\xe0nh t\xedch: "+c,"Cột điểm Ưu ti\xean: "+l,"Điểm x\xe9t tuyển 2022: "+a+" l\xe0m tr\xf2n: "+a.toFixed(3)],m=document.getElementById("ajaxDiv3");m.innerHTML+=s.map(n=>"<p>"+n+"</p>").join(""),alert(s.map(n=>n+"\n").join("")),document.getElementById("tinhdiem").disabled=!1}function getData(n){document.getElementById("tinhdiem").disabled=!0;let t=document.getElementById("dgnl").value,e=document.getElementById("tohop").value,o=document.getElementById("thitn").value,h=document.getElementById("thi1").value,c=document.getElementById("thi2").value,l=document.getElementById("thi3").value,a=document.getElementById("hocba").value,u=document.getElementById("hoc11").value,p=document.getElementById("hoc12").value,d=document.getElementById("hoc13").value,s=document.getElementById("hoc21").value,m=document.getElementById("hoc22").value,g=document.getElementById("hoc23").value,r=document.getElementById("hoc31").value,v=document.getElementById("hoc32").value,b=document.getElementById("hoc33").value,y=document.getElementById("ielts").value,k=document.getElementById("toefl").value,_=document.getElementById("toeic1").value,T=document.getElementById("toeic2").value,B=document.getElementById("hsgqg").value,f=document.getElementById("khkt").value,E=document.getElementById("hsgtp").value,I=document.getElementById("sat").value,x=document.getElementById("hocthuat").value,S=document.getElementById("vannghe").value,N=document.getElementById("doituong").value,L=document.getElementById("khuvuc").value;try{guiDulieu({ansReport:{userid,id:n,input:{dgnl:t,tohop:e,thitn:o,thi1:h,thi2:c,thi3:l,hocba:a,hoc11:u,hoc12:p,hoc13:d,hoc21:s,hoc22:m,hoc23:g,hoc31:r,hoc32:v,hoc33:b,ielts:y,toefl:k,toeic1:_,toeic2:T,hsgqg:B,khkt:f,hsgtp:E,sat:I,hocthuat:x,vannghe:S,doituong:N,khuvuc:L}}},displayKetQua)}catch(w){alert(w)}}function renderToHop(n){return`<select id="tohop" onchange="handleToHop()">
    <option value="A00">A00: To\xe1n, L\xfd, Ho\xe1</option>
    <option value="A01">A01: To\xe1n, L\xfd, Anh</option>
    <option value="B00">B00: To\xe1n, Ho\xe1, Sinh</option>
    <option value="B08">B08: To\xe1n, Sinh, Anh</option>
    <option value="D01">D01: To\xe1n, Văn, Anh</option>
    <option value="D07">D07: To\xe1n, Ho\xe1, Anh</option>
    <option value="C01">C01: To\xe1n, Văn, L\xfd</option>
    </select>`}function guiDulieu(n,t){return fetch("https://faas-sgp1-18bc02ac.doserverless.co/api/v1/web/fn-04566e3b-5665-42cf-b9d4-b8baba8366aa/xt/xetQSB",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(n=>n.json()).then(t).catch(alert)}function renderXetThu(n){return` 
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
<button class="tablinks " onclick="openMyTab(event, 'edmcn')">Ưu ti\xean</button>
</div>

<div id="osdyq" class="tabcontent">
<p>Việc dự thi ĐGNL l\xe0 cần thiết trừ c\xe1c trường hợp bất khả kh\xe1ng sẽ được quy đổi.</p>



<p>Nếu bạn dự thi ĐGNL nhiều lần, h\xe3y <strong>nhập điểm cao nhất giữa c\xe1c lần thi</strong>.</p>



<p>H\xe3y nhập điểm thi ĐGNL m\xe0 bạn đạt được, <strong>đừng cộng điểm ưu ti\xean</strong> v\xe0o nh\xe9.</p>



<label for="lop10">Điểm thi ĐGNL (đừng cộng điểm ưu ti\xean)</label>
<input id="dgnl"  type="number" inputmode="decimal" step="any" max="1200">



<p><strong>Ch\xfa \xfd</strong>: Nếu kh\xf4ng thi ĐGNL, h\xe3y nhập 0.</p>

</div>

<div id="bzzyl" class="tabcontent">
<p>H\xe3y chọn 3 m\xf4n trong tổ hợp m\xe0 bạn muốn d\xf9ng để x\xe9t tuyển v\xe0o ng\xe0nh n\xe0y:</p>

${renderToHop(n)}

<p>Một ng\xe0nh/nh\xf3m ng\xe0nh c\xf3 thể c\xf3 nhiều tổ hợp m\xf4n x\xe9t tuyển nhưng c\xf3 c\xf9ng một mức điểm tr\xfang tuyển chung cho c\xe1c tổ hợp m\xf4n. Do đ\xf3 th\xed sinh n\xean chọn tổ hợp m\xf4n c\xf3 tổng điểm cao nhất trong đợt điều chỉnh nguyện vọng.</p>

</div>

<div id="hkemyi" class="tabcontent">
<p>Tổng Điểm thi TỐT NGHIỆP THPT (của 3 m\xf4n thuộc tổ hợp m\xf4n x\xe9t tuyển), KH\xd4NG cộng điểm ưu ti\xean:</p>



<input  type="number" inputmode="decimal" step="any" id="thitn" placeholder="Tổng điểm thi 3 m\xf4n">



<p>Nếu chưa biết c\xe1ch t\xednh tổng, h\xe3y nhập v\xe0o c\xe1c \xf4 dưới đ\xe2y:</p>



<label for="thi1" class="mon1">Điểm thi m\xf4n 1:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleThi()" onchange = "handleThi()" id="thi1"><br>
<label for="thi2" class="mon2">Điểm thi m\xf4n 2:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleThi()" onchange = "handleThi()" id="thi2"><br>
<label for="thi3" class="mon3">Điểm thi m\xf4n 3:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleThi()" onchange = "handleThi()" id="thi3">



<p><strong>Lưu \xfd</strong>: Nếu c\xf3 m\xf4n n\xe0o bạn <strong>kh\xf4ng dự thi</strong>, tức l\xe0 <strong>kh\xf4ng đi thi</strong> (chẳng hạn m\xf4n Tiếng Anh), h\xe3y nhập 0.</p>

</div>

<div id="ixzxvy" class="tabcontent">
<input type="text" id="hocba" placeholder="Tổng điểm học bạ 3 m\xf4n">



<p>Nếu chưa biết c\xe1ch t\xednh tổng điểm học bạ, h\xe3y nhập tất cả c\xe1c th\xf4ng tin b\xean dưới đ\xe2y để ch\xfang t\xf4i gi\xfap bạn:</p>



<label for="hoc11" class="mon1">Điểm tổng kết m\xf4n 1 cả năm lớp 10:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc11"><br>
<label for="hoc21" class="mon2">Điểm tổng kết m\xf4n 2 cả năm lớp 10:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc21"><br>
<label for="hoc31" class="mon3">Điểm tổng kết m\xf4n 3 cả năm lớp 10:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc31"><br><br>

<label for="hoc12" class="mon1">Điểm tổng kết m\xf4n 1 cả năm lớp 11:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc12"><br>
<label for="hoc22" class="mon2">Điểm tổng kết m\xf4n 2 cả năm lớp 11:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc22"><br>
<label for="hoc32" class="mon3">Điểm tổng kết m\xf4n 3 cả năm lớp 11:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc32"><br><br>

<label for="hoc13" class="mon1">Điểm tổng kết m\xf4n 1 cả năm lớp 12:</label>
<input type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc13"><br>
<label for="hoc23" class="mon2">Điểm tổng kết m\xf4n 2 cả năm lớp 12:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc23"><br>
<label for="hoc33" class="mon3">Điểm tổng kết m\xf4n 3 cả năm lớp 12:</label>
<input  type="number" inputmode="decimal" step="any" oninput="handleSum()" onchange ="handleSum()" id="hoc33"><br>



<p><strong>Lưu \xfd</strong>: C\xe1c điểm được nhập phải <strong>ho\xe0n to\xe0n giống</strong> như trong học bạ THPT của bạn.</p>

</div>

<div id="pqwlnhmp" class="tabcontent">
<p>Học sinh c\xf3 <strong>chứng chỉ tiếng Anh</strong> quốc tế c\xf2n thời hạn sử dụng:</p>



<p>Chọn mức điểm thi <strong>IELTS</strong> (nếu kh\xf4ng thi th\xec chọn Kh\xf4ng):</p>



<select id="ielts">
<option value="0">Kh\xf4ng</option>
<option value="6.0">IELTS 6.0 hoặc tr\xean 6.0</option>
<option value="5.5">IELTS 5.5</option>
<option value="5.0">IELTS 5.0</option>
<option value="4.0">C\xf3 IELTS nhỏ hơn 5.0</option>
</select>



<p>Nhập điểm thi <strong>TOEFL iBT</strong> (nếu kh\xf4ng thi th\xec nhập 0):</p>



<input type="number" inputmode="decimal" step="any"  value="0" max="120"  min="0" id="toefl">



<p> Nhập điểm thi <strong>TOEIC 4 kỹ năng</strong> (nếu kh\xf4ng thi th\xec nhập 0):</p>



<label for="toeic1">Điểm TOEIC nghe + đọc</label>
<input  type="number" inputmode="decimal" step="any" value="0" max="990"  min="0" id="toeic1"><br>
<label for="toeic2">Điểm TOEIC n\xf3i + viết</label>
<input  type="number" inputmode="decimal" step="any" value="0" max="400" min="0" id="toeic2"><br>

</div>

<div id="wrzgqf" class="tabcontent">
<p>Chọn giải thưởng <strong>Kỳ thi học sinh giỏi quốc gia</strong>:</p>



<div class="wp-block-group is-layout-constrained" bis_skin_checked="1"><div class="wp-block-group__inner-container" bis_skin_checked="1">
<select id="hsgqg">
<option value="0">Kh\xf4ng</option>
<option value="nhat">Giải nhất</option>
<option value="nhi">Giải nh\xec</option>
<option value="ba">Giải ba</option>
<option value="kk">Giải Khuyến kh\xedch</option>
<option value="tv">Th\xe0nh vi\xean trong đội tuyển</option>
</select>
</div></div>



<div class="wp-block-group is-layout-constrained" bis_skin_checked="1"><div class="wp-block-group__inner-container" bis_skin_checked="1">
<p>Chọn giải thưởng <strong>Khoa học kỹ thuật</strong>:</p>



<select id="khkt">
<option value="0">Kh\xf4ng</option>
<option value="nhat">Giải nhất</option>
<option value="nhi">Giải nh\xec</option>
<option value="ba">Giải ba</option>
<option value="kk">Giải KK</option>
</select>
</div></div>



<div class="wp-block-group is-layout-constrained" bis_skin_checked="1"><div class="wp-block-group__inner-container" bis_skin_checked="1">
<p>Chọn giải thưởng <strong>HSG cấp tỉnh/ th\xe0nh phố</strong>:</p>



<select id="hsgtp">
<option value="0">Kh\xf4ng</option>
<option value="nhat">Giải nhất</option>
<option value="nhi">Giải nh\xec</option>
<option value="ba">Giải ba</option>
<option value="kk">Giải Khuyến kh\xedch</option>
<option value="tv">Th\xe0nh vi\xean trong đội tuyển</option>
</select>
</div></div>



<div class="wp-block-group is-layout-constrained" bis_skin_checked="1"><div class="wp-block-group__inner-container" bis_skin_checked="1">
<p>Nhập điểm c\xe1c <strong>chứng chỉ tuyển sinh quốc tế</strong> (nếu c\xf3 SAT, GRE, ACT, SSAT, GMAT,…):</p>



<textarea id="sat" rows="4" cols="50" style="max-width:95%;" placeholder="v\xed dụ: SAT 1000 điểm, GRE 300 điểm"></textarea>
</div></div>



<div class="wp-block-group is-layout-constrained" bis_skin_checked="1"><div class="wp-block-group__inner-container" bis_skin_checked="1">
<p>Điền v\xe0o c\xe1c <strong>Giải thưởng học thuật kh\xe1c</strong> (nếu c\xf3):</p>



<textarea id="hocthuat" rows="4" cols="50" style="max-width:95%;" placeholder="v\xed dụ: giải nh\xec SRobot, giải ba Tin học trẻ"></textarea>
</div></div>



<div class="wp-block-group is-layout-constrained" bis_skin_checked="1"><div class="wp-block-group__inner-container" bis_skin_checked="1">
<p>Điền v\xe0o c\xe1c <strong>th\xe0nh t\xedch văn thể mỹ, hoạt động x\xe3 hội, <strong>c\xe1c th\xe0nh t\xedch</strong></strong> <strong>kh\xe1c</strong> (nếu c\xf3):</p>



<textarea id="vannghe" rows="4" cols="50" style="max-width:95%;" placeholder="v\xed dụ: giải khuyến kh\xedch Văn nghệ 20/11"></textarea>
</div></div>



<p><strong>Lưu \xfd</strong>: Tất cả c\xe1c th\xe0nh t\xedch v\xe0 giải thưởng cần <strong>phải c\xf3 bằng khen hoặc giấy chứng nhận</strong> cụ thể mới được c\xf4ng nhận nh\xe9.</p>

</div>

<div id="edmcn" class="tabcontent">
<p>X\xe9t cả hai loại: ưu ti\xean <strong>đối tượng</strong> v\xe0 ưu ti\xean <strong>khu vực</strong>. H\xe3y hỏi bạn b\xe8, ba mẹ, thầy c\xf4 của m\xecnh hoặc đọc hướng dẫn C\xe1ch x\xe1c định đối tượng ưu ti\xean x\xe9t học bạ để trả lời 2 c\xe2u hỏi sau nh\xe9:</p>



<p>Bạn thuộc nh\xf3m <strong>đối tượng</strong> ưu ti\xean n\xe0o ?</p>



<select id="doituong">
<option value="0"> Kh\xf4ng</option>
<option value="1"> Nh\xf3m ưu ti\xean 1 (đối tượng 1-4)</option>
<option value="5"> Nh\xf3m ưu ti\xean 2 (đối tượng 5-7)</option>
</select>
<p>Bạn thuộc <strong>khu vực</strong> ưu ti\xean n\xe0o ?</p>
<select id="khuvuc">
<option value="3"> Khu vực 3 (kh\xf4ng được ưu ti\xean)</option>
<option value="1"> Khu vực 1 </option>
<option value="2"> Khu vực 2 </option>
<option value="4"> Khu vực 2-NT</option>
</select>
</div>  


<div class="form-group form-check"></div>
<button class="btn btn-info" id = "tinhdiem" onclick = "getData('${n.id}')">Xem kết quả</button>

</form>

</div>


<div id = "ajaxDiv3">
     `}
