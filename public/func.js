let number = 6;
function checkData() {
  const year = document.getElementById('year');
  const name = document.getElementById('name');
  const ymd = document.getElementById('ymd');
  const department = document.getElementById('department');
  let reg = true;
  //year check
  if (!(year.value == '2020' || year.value == '2021' || year.value == '2022')) {
    reg = false;
  }
  if (name.value.length == 0) reg = false;
  if (ymd.value.length == 0) reg = false;
  if (department.value.length == 0) reg = false;

  if (reg === true) {
    addCertification(year, name, ymd, department);
  }
  else {
    alert('데이터를 올바르게 입력해주세요!');
  }
}

/*
function merge(year) {
  let table = document.getElementById("table");
  let rowList = table.rows;
  let cell2020 = 0;
  let cell2021 = 0;
  let cell2022 = 0;

  for (let i = 1; i < rowList.length; i++) {
    let row = rowList[i];
    switch (row.cells[0].outerText) {
      case '2020':
        cell2020++;
        break;
      case '2021':
        cell2021++;
        break;
      case '2022':
        cell2022++;
        break;
    }
  }
}*/

function addCertification(year, name, ymd, department) {
  console.log(year.value);
  const table = document.querySelector('table');
  const tr_02 = table.insertRow();
  const td_03 = tr_02.insertCell(0);
  td_03.textContent = year.value;
  const td_04 = tr_02.insertCell(1);
  td_04.textContent = number;
  const td_05 = tr_02.insertCell(2);
  td_05.textContent = name.value;
  const td_06 = tr_02.insertCell(3);
  td_06.textContent = ymd.value;
  const td_07 = tr_02.insertCell(4);
  td_07.textContent = department.value;
  number++;
}

function showForm(self) {
  let con = document.getElementById('cont');
  if (con.style.display == 'none' || con.style.display === '') {
    // 처음에 값이 없는 상태에서 버튼을 눌러야만 들어오기 때문에 두 번 클릭해야 펼쳐진다. 
    // 이 문제를 해결하기 위해 값이 없을 때를 포함시킨다.
    con.style.display = 'block';
    self.value = "자격증 접기";
  } else {
    con.style.display = "none";
    self.value = "자격증 추가하기";
  }
}

function nightDayHandler(self) {
  let target = document.querySelector('#wrapper');
  if (self.value === 'bright') {
    target.style.backgroundColor = 'white';
    //target.style.Color = 'black';
    self.value = 'dark';
  } else {
    target.style.backgroundColor = 'black';
    target.style.Color = 'snow';
    // let alist = document.querySelectorAll('a');
    // for (let i=0; i<alist.length; i++){
    //   alist[i].style.color='powderblue'
    // }
    self.value = 'bright';
  }
}

function doLogin() {
  const idValue = document.getElementById('id').value;
  alert(`Hello ${idValue}!`);
}

