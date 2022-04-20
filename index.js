import express from 'express';
import holidays from './src/holydays.js';
import isTodayHoliday from './src/isTodayHoliday.js';
import monthHolidays from './src/monthHolidays.js';

const app = express();

app.listen(5000, () => {
    console.log('Is runing...');
})

app.get('/holidays', (request, promise) => {
    promise.send(holidays());
});

app.get('/is-today-holiday', (resquest, response) => {
    response.send(isTodayHoliday());
});

app.get('/holidays/:id', (request, response) => {
    const month = request.params.id[0];
    response.send(monthHolidays(month));
})