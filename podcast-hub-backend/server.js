const express = require('express');
const app = new express();
const mongoose = require('mongoose');
const port = 5000;
const cors = require('cors');

const database = 'podcast-hub';
const mongoURI = `mongodb+srv://pdantkale22:Prathamesh@cluster0.wirxvmi.mongodb.net/Podcast?retryWrite=true&w=majority`;

const podcastRoutes = require('./routes/podcastRoutes');

app.use(cors());
app.use(express.json());

app.use('/', podcastRoutes);

mongoose.connect(mongoURI, { useNewUrlParser: true,useUnifiedTopology: true }, (err) => {
  if(err) console.log(`There has been an ${err}`);
  console.log('Connected to MongoDB');
})

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// })

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// added code 


//added code end

