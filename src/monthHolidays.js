import holidaysList from "./utils/holidayList.js";
import dateFomat from "./utils/dateFormat.js";
import getMonth from "./utils/getMonthName.js";

const monthHolidays = (number) => {
    const holidays = holidaysList.filter(holiday => {
        const date = new Date(holiday.date);
        if(parseInt(date.getMonth() + 1) === parseInt(number)) return true;
        else return false;
    });


    return {
        month: getMonth(number),
        holidays: holidays.map(holiday => {
            const {date, name} = holiday;
            return {date: dateFomat(date), name}
        })
    }
    
}

export default monthHolidays;