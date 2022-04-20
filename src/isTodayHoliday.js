import holidaysList from './utils/holidayList.js';
import dateFomat from './utils/dateFormat.js';

const isTodayHoliday = () => {
    const today = new Date().toLocaleDateString();
    let holidayName;
    let info;
    const isHoliday = holidaysList.some(
        holiday => {
            if(holiday.date === today){
                holidayName = holiday.name;
                return true;
            }
            return false;
        }
    );

    if(isHoliday) {
        const holiday = holidaysList.filter(hd => hd === today);
        info = `Sim, hoje é ${holidayName}`;

    } else info = 'Não, hoje não é feriado';

    return {date: dateFomat(today), info};
}

export default isTodayHoliday;