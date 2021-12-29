const soNguyenThuNhatEl = document.getElementById('soNguyen1');
const soNguyenThuHaiEl = document.getElementById('soNguyen2');
const soNguyenThuBaEl = document.getElementById('soNguyen3');
const btnResultEl = document.getElementById('btnResult');
const outPutResultEl = document.getElementById('outputResult');

/**
 *  Chúng ta sẽ lấy giá trị của 3 số nguyên sau đó so sánh từng lượt 3 giá trị nếu giá trị nào nhỏ hơn 1 thì sẽ bỏ qua tiếp tục so sánh các giá các số nguyên còn lại vì số âm và số 0  vì nó ko phải là chẵn và cungr ko phải lẽ, sau khi thõa mãn điều kiện trên và bắt đầu so sánh nếu số nào chia hết cho 2 là chẵn và ngược lại là lẽ ,sau đó đếm số chẵn lẽ thông qua biến let countChan ,countLe
 *
 **/

btnResultEl.addEventListener('click', function (e) {
  e.preventDefault();
  let countChan = 0;
  let countLe = 0;
  const soNguyenThuNhatVal = Math.floor(+soNguyenThuNhatEl.value.replace(',', '.'));
  const soNguyenThuHaiVal = Math.floor(+soNguyenThuHaiEl.value.replace(',', '.'));
  const soNguyenThuBaVal = Math.floor(+soNguyenThuBaEl.value.replace(',', '.'));

  if (soNguyenThuNhatVal >= 1) {
    if (soNguyenThuNhatVal % 2 === 0) {
      countChan++;
    } else {
      countLe++;
    }
  }

  if (soNguyenThuHaiVal >= 1) {
    if (soNguyenThuHaiVal % 2 === 0) {
      countChan++;
    } else {
      countLe++;
    }
  }

  if (soNguyenThuBaVal >= 1) {
    if (soNguyenThuBaVal % 2 === 0) {
      countChan++;
    } else {
      countLe++;
    }
  }

  outPutResultEl.innerHTML = `<p>Có ${countChan} số chẵn</p>
  <p>Có ${countLe} số lẽ</p>`;
});
