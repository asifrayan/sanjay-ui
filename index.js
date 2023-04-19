const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-field');
const btnFilterOpen = document.querySelector('.btn-filter-open');
const btnFilterClose = document.querySelector('.btn-filter-close');
const filtersContainer = document.querySelector('.filters-container');
const radioContainer = document.querySelector('.radio-container');
const selectInputYear = document.querySelector('.year');
const selectInputMonth = document.querySelector('.month');
const fromDatePicker = document.querySelector('.from-date');
const toDatePicker = document.querySelector('.to-date');
const selectInputEmpType = document.querySelector('.emp-type');
const selectInputGrade = document.querySelector('.grade');
const selectInputVacancy = document.querySelector('.vacancy');
const selectInputLocation = document.querySelector('.location');
const btnApplyFilters = document.querySelector('.btn-apply');

fromDatePicker.disabled = true;
toDatePicker.disabled = true;

btnFilterOpen.addEventListener('click', (e) => {
  e.preventDefault();
  btnFilterOpen.classList.add('d-none');
  filtersContainer.classList.remove('d-none');
  btnFilterClose.classList.remove('d-none');
});

btnFilterClose.addEventListener('click', (e) => {
  e.preventDefault();
  btnFilterClose.classList.add('d-none');
  btnFilterOpen.classList.remove('d-none');
  filtersContainer.classList.add('d-none');
});

radioContainer.addEventListener('click', (e) => {
  const radioClickedId = e.target.id;
  if (radioClickedId === 'yearMonthRadio') {
    selectInputYear.disabled = false;
    selectInputMonth.disabled = false;
    fromDatePicker.disabled = true;
    toDatePicker.disabled = true;
  } else {
    fromDatePicker.disabled = false;
    toDatePicker.disabled = false;
    selectInputYear.disabled = true;
    selectInputMonth.disabled = true;
  }
});

searchForm.addEventListener('change', (e) => {
  e.preventDefault();
  console.log(e.target.type);
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
