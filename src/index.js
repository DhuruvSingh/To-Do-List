// import _ from 'lodash';
// import { add } from 'lodash';
import './styles.css';
// eslint-disable-next-line
import Checkbox from './checkbox.js';
import Crud from './add&delete.js';
// eslint-disable-next-line
import Modal from './popupOption.js';

export default function displayList(input) {
  document.getElementById('ul-container-list').innerHTML = input.map((items, index) => `
  <li id="${index}"><input id="listElement${index}" name='${index}' type="checkbox" value=${items.complete}> 
  <input id='input${index}' value="${items.description}" type="text" disabled="disabled" class='input-list'> 
  <i id="iconDots${index}" class="fas fa-ellipsis-v"></i></li>
  `).join('');
}

window.addEventListener('DOMContenLoaded', displayList(Crud.add()));
window.addEventListener('DOMContenLoaded', Checkbox.testCheckbox());

document.getElementById('input-list').addEventListener('change', () => {
  displayList(Crud.add());
});

const refreshIcons = document.getElementById('refresh-list');
const updatingMessage = document.getElementById('updating-list-message');
refreshIcons.addEventListener('click', () => {
  displayList(Crud.add());
  Crud.showChecked();
  updatingMessage.classList.remove('display-none');
  refreshIcons.classList.add('fa-spin');
  setTimeout(() => {
    refreshIcons.classList.remove('fa-spin');
    updatingMessage.classList.add('display-none');
  }, 1000);
});

document.getElementById('ul-container-list').addEventListener('click', (e) => {
  const { id } = e.target;
  let firstTime = true;
  const regex = /(?<=iconDots)\d+$/;

  if (firstTime) {
    if (regex.test(id)) {
      firstTime = false;
      const index = id.match(regex)[0];
      Modal.startModal(index);
    }
  } else {
    firstTime = true;
  }
});

document.getElementById('clearbtn-list').addEventListener('click', () => Checkbox.cleanAllChecked());