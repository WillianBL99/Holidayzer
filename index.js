import express from 'express';
import chalk from 'chalk';
import holidays from './src/holydays.js';
import isTodayHoliday from './src/isTodayHoliday.js';
import monthHolidays from './src/monthHolidays.js';

const app = express();

app.listen(5000, () => {
    console.log(chalk.bold.green('Is runing...'));
})

app.get('/holidays', (request, promise) => {
    promise.send(holidays());
});

app.get('/is-today-holiday', (resquest, response) => {
    response.send(isTodayHoliday());
});

app.get('/holidays/:numberMonth', (request, response) => {
    const {numberMonth} = request.params;
    response.send(monthHolidays(numberMonth));
})