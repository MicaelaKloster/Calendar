let calendar = document.querySelector('.calendar');

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                    'September', 'October', 'November', 'December'];

isLeapYear = (year) =>{
  return (year %4 === 0 && year %100 !== 0 && year %400 !== 0) || (year % 100 === 0 && year %400 === 0);
};

getMayDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
}

generateCalendar = (month, year) => {
  let calendar_days = calendar.querySelector('.calendar-days');
  let calendar_header_year = calendar.querySelector('#year');
  
  let days_of_month = [31, getMayDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  calendar_days.innerHTML = '';
  
  let currDate = new Date()
  if (!month) month = currDate.getMonth();
  if (!year) year = currDate.getFullYear();
  
  let curr_month = `${month_names[month]}`;
  month_picker.innerHTML = curr_month;
  calendar_header_year.innerHTML = year;
  
  // get first day of month
  
}
