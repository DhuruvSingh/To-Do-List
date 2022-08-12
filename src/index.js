import './style.css';

const arrayList = [
  {
    description: 'Morning exercise',
    complete: false,
    index: 0,
  },
  {
    description: 'Take a bath',
    complete: false,
    index: 1,
  },
  {
    description: 'Have Breakfast',
    complete: false,
    index: 2,
  },
];

function displayList() {
  document.getElementById('ul-container-list').innerHTML = arrayList.map((items) => `<li id="listElement${items.index}"><input name="listElement${items.index}" type="checkbox"> ${items.description} <i class="fas fa-ellipsis-v"></i></li>`).join('');
}
displayList();

document.getElementById('ul-container-list').addEventListener('click', (e) => {
  document.getElementById(`${e.target.name}`).classList.toggle('text-crossLine');
});

document.getElementById('clearbtn-list').addEventListener('click', () => {
  document.getElementById('ul-container-list').innerHTML = (
    '<li class="testing-btn"> Testing delete list for 2 seconds </li>'
  );
  setInterval(displayList, 2000);
});