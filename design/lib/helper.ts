

export function formatDate(date: Date, minus: number, format: string) {
    const dateF = (date.getDate() - minus);
    var dateS = dateF.toString();
    if (dateF < 10){
      dateS = `0${dateS}`;
    }
    const monthF = (date.getMonth() + 1);
    var monthS = monthF.toString();
    if (monthF < 10){
      monthS = `0${monthF}`;
    }
    return format.replace('mm', monthS)
    .replace('yyyy', date.getFullYear().toString())
      .replace('dd', dateS);
}

export function dayToPresent(massDate: string, time: string):number {
  var firstDate = new Date(massDate+"T"+time)
  var present_date = new Date()
  var difference_In_Days = (firstDate.getTime()-present_date.getTime()) / (1000 * 3600 * 24)
  return difference_In_Days
}

export function getDateFromDateByHour(eventDateTime: string, hours: number):string{
  var date = new Date(eventDateTime)
  date.setHours(date.getHours() - hours)
  var minute_number = date.getMinutes()
  var minute_string = minute_number.toString();
  if (minute_number < 10){
    minute_string = `0${minute_string}`;
  }
  var result = formatDate(date,0,"HH:MM dd-mm-yyyy").replace('HH',date.getHours().toString()).replace('MM',minute_string)
  return result
}