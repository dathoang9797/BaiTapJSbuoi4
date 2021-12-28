const canhThuNhatEl = document.getElementById('canh1');
const canhThuHaiEl = document.getElementById('canh2');
const canhThuBaEl = document.getElementById('canh3');
const btnResultEl = document.getElementById('btnResult');
const outPutResultEl = document.getElementById('outputResult');
const tamGiacCan = 'Tam giác cân';
const tamGiacDeu = 'Tam giác đều';
const tamGiacVuong = 'Tam giác vuông';
const tamGiacNhon = 'Tam giác Nhọn';
const tamGiacTu = 'Tam giác Tù';

btnResultEl.addEventListener('click', function (e) {
  e.preventDefault();
  const canh1 = Math.floor(+canhThuNhatEl.value.replace(',', '.'));
  const canh2 = Math.floor(+canhThuHaiEl.value.replace(',', '.'));
  const canh3 = Math.floor(+canhThuBaEl.value.replace(',', '.'));

  if (canh1 < canh2 + canh3 && canh2 < canh1 + canh3 && canh3 < canh1 + canh2) {
    if (canh1 === canh2 && canh1 === canh3) {
      outPutResultEl.innerText = tamGiacDeu;
    } else if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
      outPutResultEl.innerText = tamGiacCan;
    } else if (canh1 * canh1 == canh2 * canh2 + canh3 * canh3 || canh2 * canh2 == canh1 * canh1 + canh3 * canh3 || canh3 * canh3 == canh1 * canh1 + canh2 * canh2) {
      outPutResultEl.innerText = tamGiacVuong;
    } else if (canh1 * canh1 > canh2 * canh2 + canh3 * canh3 || canh2 * canh2 > canh1 * canh1 + canh3 * canh3 || canh3 * canh3 > canh1 * canh1 + canh2 * canh2) {
      outPutResultEl.innerText = tamGiacTu;
    } else outPutResultEl.innerText = tamGiacNhon;
  } else {
    outPutResultEl.innerText = 'Đây không phải là tam giác';
  }
});
