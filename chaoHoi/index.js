const outPutResultEl = document.getElementById('outputResult');
const person = prompt('Who use this machine:', '').toLocaleLowerCase();

switch (person) {
  case 'bố':
    outPutResultEl.innerText = 'Xin chào ' + person;
    break;
  case 'mẹ':
    outPutResultEl.innerText = 'Xin chào ' + person;
    break;
  case 'anh trai':
    outPutResultEl.innerText = 'Xin chào ' + person;
    break;
  case 'em gái':
    outPutResultEl.innerText = 'Xin chào ' + person;
    break;
  default:
    outPutResultEl.innerText = 'Unknown';
    break;
}
