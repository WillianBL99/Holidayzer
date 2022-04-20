import holidaysList from './holidayList.js';

const holidays = () => {
    const today = new Date().toLocaleDateString();
    let holidayName;
    let page;
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
        page = `Sim, hoje é ${holidayName}`;

    } else page = 'Não, hoje não é feriado';

    return `
        <h1>Hojé é feriado?</h1>
        <h3>${page}</h3>
    `
}


export default holidays;