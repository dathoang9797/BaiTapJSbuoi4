const soNguyenThuNhatEl = document.getElementById('soNguyen1');
const soNguyenThuHaiEl = document.getElementById('soNguyen2');
const soNguyenThuBaEl = document.getElementById('soNguyen3');
const btnResultEl = document.getElementById('btnResult');
const outPutResultEl = document.getElementById('outputResult');

/**
 *  Chúng ta sẽ lấy giá trị của 3 số nguyên sau đó so sánh từng lượt 3 giá trị lấy giá trị thứ 1 so sánh 2 cái còn lại với để tìm giá trị nhỏ nhất sau đó tiếp tục so sánh 2 giá trị lớn hơn nó để tìm ra giá trị nhỏ nhất ,dùng toán từ && vì nếu điều kiện đầu tiên mà false nó sẽ return lập tực mà không cần so sánh biểu thức còn lại  điều kiện nào đúng sẽ so sánh và trả về kết quả sau đó return sẽ thoát khỏi hàm và ko chạy các if  còn lại vì đã thõa mãn điều kiện tốt cho performance. 
 *
 **/

btnResultEl.addEventListener('click', function (e) {
  e.preventDefault();
  const soNguyenThuNhatVal = Math.floor(+soNguyenThuNhatEl.value.replace(',', '.'));
  const soNguyenThuHaiVal = Math.floor(+soNguyenThuHaiEl.value.replace(',', '.'));
  const soNguyenThuBaVal = Math.floor(+soNguyenThuBaEl.value.replace(',', '.'));

  if (soNguyenThuNhatVal <= soNguyenThuHaiVal && soNguyenThuNhatVal <= soNguyenThuBaVal) {
    if (soNguyenThuHaiVal <= soNguyenThuBaVal) {
      outPutResultEl.innerText = `${soNguyenThuNhatVal},${soNguyenThuHaiVal},${soNguyenThuBaVal}`;
    } else {
      outPutResultEl.innerText = `${soNguyenThuNhatVal},${soNguyenThuBaVal},${soNguyenThuHaiVal}`;
    }
    return;
  }

  if (soNguyenThuHaiVal <= soNguyenThuNhatVal && soNguyenThuHaiVal <= soNguyenThuBaVal) {
    if (soNguyenThuNhatVal <= soNguyenThuBaVal) {
      outPutResultEl.innerText = `${soNguyenThuHaiVal},${soNguyenThuNhatVal},${soNguyenThuBaVal}`;
    } else {
      outPutResultEl.innerText = `${soNguyenThuHaiVal},${soNguyenThuBaVal},${soNguyenThuNhatVal}`;
    }
    return;
  }

  if (soNguyenThuBaVal <= soNguyenThuHaiVal && soNguyenThuBaVal <= soNguyenThuNhatVal) {
    if (soNguyenThuNhatVal <= soNguyenThuHaiVal) {
      outPutResultEl.innerText = `${soNguyenThuBaVal},${soNguyenThuNhatVal},${soNguyenThuHaiVal}`;
    } else {
      outPutResultEl.innerText = `${soNguyenThuBaVal},${soNguyenThuHaiVal},${soNguyenThuNhatVal}`;
    }
    return;
  }
});
