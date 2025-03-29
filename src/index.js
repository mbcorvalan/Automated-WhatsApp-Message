const express = require('express');
const app = express();
const whatsappRoutes = require('./routes/routes');

app.use(express.json());

app.use('/api/whatsapp', whatsappRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
