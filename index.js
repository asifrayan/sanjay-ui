const filterBtn = document.querySelector('.filter-icon');
const closeBtn = document.querySelector('.cross-icon');
const filtersContainer = document.querySelector('.filters-container');
const radioContainer = document.querySelector('.radio-container');
const selectGroupOne = document.querySelector('.select-group-one');
const selectGroupTwo = document.querySelector('.select-group-two');
const filterRadio_1 = document.querySelector('#radio-1');
const filterRadio_2 = document.querySelector('#radio-2');
const applyFilterBtn = document.querySelector('.btn-apply');
const form = document.querySelector('.form');

let selectValues = {};

const savedRadioValue = localStorage.getItem('radioValue') || 'radio-1';
const savedSelectValues =
  JSON.parse(localStorage.getItem('selectValues')) || {};

console.log('Saved value:', savedSelectValues);

filterRadio_1.checked = savedRadioValue === 'radio-1' ? true : false;
filterRadio_2.checked = savedRadioValue === 'radio-2' ? true : false;

window.addEventListener('load', () => {
  Array.from(selectGroupOne.children).forEach(function (childElement) {
    childElement.value =
      savedSelectValues[childElement.name] || childElement.value;
  });

  Array.from(selectGroupTwo.children).forEach(function (childElement) {
    childElement.value =
      savedSelectValues[childElement.name] || childElement.value;
  });
});

radioContainer.addEventListener('change', handleRadioChange);

function disableSelectInputsDisabledState() {
  if (filterRadio_1.checked) {
    Array.from(selectGroupTwo.children).forEach(function (childElement) {
      childElement.disabled = true;
    });
  } else if (filterRadio_2.checked) {
    Array.from(selectGroupOne.children).forEach(function (childElement) {
      childElement.disabled = true;
    });
  }
}

function enableSelectInputsDisabledState() {
  if (filterRadio_1.checked) {
    Array.from(selectGroupOne.children).forEach(function (childElement) {
      childElement.disabled = false;
    });
  } else if (filterRadio_2.checked) {
    Array.from(selectGroupTwo.children).forEach(function (childElement) {
      childElement.disabled = false;
    });
  }
}

enableSelectInputsDisabledState();
disableSelectInputsDisabledState();

// Function to handle radio button change event
function handleRadioChange(event) {
  localStorage.setItem('radioValue', event.target.id);
  enableSelectInputsDisabledState();
  disableSelectInputsDisabledState();
}

function saveSelectInputValues() {
  console.log('Select Values: ', selectValues);
  localStorage.setItem('selectValues', JSON.stringify(selectValues));
}

function handleFormChange(e) {
  if (e.target.type === 'select-one') {
    selectValues = { ...selectValues, [e.target.name]: e.target.value };
    saveSelectInputValues();
  }
}

form.addEventListener('change', handleFormChange);

// Add event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Create an object to store the form data
  const formData = {};

  // Loop through form elements and retrieve values
  const formElements = form.elements;
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

    // Skip disabled elements
    if (element.disabled || element.name === 'filter-radio') {
      continue;
    }

    // Get element name and value
    const key = element.name;
    const value = element.value;

    // Store key and value in formData object
    formData[key] = value;
  }

  console.log(formData);
});

filterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  filterBtn.classList.add('hide');
  closeBtn.classList.remove('hide');
  filtersContainer.classList.remove('hide');
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  closeBtn.classList.add('hide');
  filterBtn.classList.remove('hide');
  filtersContainer.classList.add('hide');
});
