import holidaysList from './utils/holidayList.js';
import dateFomat from './utils/dateFormat.js';

const holidays = () => {
    return holidaysList.map(holiday => {
        const {date, name} = holiday;
        const dateAux = dateFomat(date);
        return {date: dateAux, name};
    });
}


export default holidays;