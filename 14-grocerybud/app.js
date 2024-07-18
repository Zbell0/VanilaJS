// ****** select items **********

const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
// edit option
let editElement;
let editFlag = false;
let editID = '';
// ****** event listeners **********

// submit form
form.addEventListener('submit', addItem);

clearBtn.addEventListener('click', clearItems);

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);
    list.appendChild(element);
    displayAlert('item added to the list', 'success');
    container.classList.add('show-container');
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    console.log('editing');
  } else {
    displayAlert('please enter value', 'danger');
  }
}

function clearItems() {
  const items = document.querySelectorAll('.grocery-item');
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('empty list', 'danger');
  setBackToDefault();
  // localStorage.removeItem('list')
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
  displayAlert('item removed', 'danger');
  setBackToDefault();
  // removeFromLocalStorage(id)
}
function editItem() {
  console.log('edit item');
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.textContent = ' ';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
  console.log(items);
}

function removeFromLocalStorage(id) {}
