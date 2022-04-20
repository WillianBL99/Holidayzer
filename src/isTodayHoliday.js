import holidaysList from './utils/holidayList.js';
import dateFomat from './utils/dateFormat.js';

const isTodayHoliday = () => {
    const page = holidaysList.map(holiday => {
        const {date, name} = holiday;
        const dateAux = dateFomat(new Date(date));
        return `<li>${dateAux} - ${name}</li>`;
    })

    return `
        <h1>Feriados</h1>
        <ul>${page.join('')}</ul>
    `;
}

export default isTodayHoliday;