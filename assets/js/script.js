let calendar = document.querySelector('.calendar');

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                    'September', 'October', 'November', 'December'];

let isLeapYear = (year) =>{
  return (year %4 === 0 && year %100 !== 0 && year %400 !== 0) || (year % 100 === 0 && year %400 === 0);
};

let getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};

let generateCalendar = (month, year) => {
  let calendar_days = calendar.querySelector('.calendar_days');
  let calendar_header_year = calendar.querySelector('#year');
  
  let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  calendar_days.innerHTML = '';
  
  let currDate = new Date();
  if (!month) month = currDate.getMonth();
  if (!year) year = currDate.getFullYear();
  
  let curr_month = `${month_names[month]}`;
  month_picker.innerHTML = curr_month;
  calendar_header_year.innerHTML = year;
  
  // get first day of month
  let first_day = new Date(year,month,1);

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() -1; i++){
    let day = document.createElement('div');
    if (i >= first_day.getDay()){
      day.classList.add('calendar-day-hover');
      day.innerHTML = i - first_day.getDay() + 1;
      day.innerHTML += `<span></span>
                        <span></span>
                        <span></span>
                        <span></span>`;
      if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()){
        day.classList.add('curr-date');
      }
    }
    calendar_days.appendChild(day);
  }
};

let month_list = calendar.querySelector('.month_list');

month_names.forEach((e, index) =>{
  let month_name = document.createElement('div');
  month_name.innerHTML = `<div data-month="${index}">${e}</div>`;
  month_name.querySelector('div').onclick = () => {
    month_list.classList.remove('show');
    curr_month.value = index;
    generateCalendar(index, curr_year.value);
  };
  month_list.appendChild(month_name);
});

let month_picker = calendar.querySelector('#month_picker');

month_picker.onclick = () =>{
  month_list.classList.add('show');
};

let currDate = new Date();

let curr_month = {value: currDate.getMonth()};
let curr_year = {value: currDate.getFullYear()};

generateCalendar(curr_month.value, curr_year.value);

document.querySelector('#prev-year').onclick = () => {
  --curr_year.value;
  generateCalendar(curr_month.value, curr_year.value);
};

document.querySelector('#next_year').onclick = () => {
  ++curr_year.value;
  generateCalendar(curr_month.value, curr_year.value);
};

let dark_mode_toggle = document.querySelector('.dark_mode_switch');

dark_mode_toggle.onclick = () => {
  document.querySelector('body').classList.toggle('light');
  document.querySelector('body').classList.toggle('dark');
};