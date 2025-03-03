
const express = require('express');
const apiRoute = require('./routes/routes');
const cron = require('node-cron');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/whatsapp", apiRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


/*cron.schedule('* * * * *', () => {
  console.log('Cron job running every minute');
});*/
