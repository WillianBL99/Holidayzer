import holidaysList from "./utils/holidayList.js";
import dateFomat from "./utils/dateFormat.js";
import getMonth from "./utils/getMonthName.js";

const monthHolidays = (number) => {
    const holidays = holidaysList.filter(holiday => {
        const date = new Date(holiday.date);
        if(parseInt(date.getMonth() + 1) === parseInt(number)) return true;
        else return false;
    });


    const page = holidays.map(holiday => {
        const dateAux = dateFomat(new Date(holiday.date));
        return `<li>${dateAux} - ${holiday.name}</li>`
    }
    );

    return `
        <h1>Feriados do mês de ${getMonth(number)}</h1>
        <ul>
        ${page.join('')}
        </ul>
    `
}

export default monthHolidays;