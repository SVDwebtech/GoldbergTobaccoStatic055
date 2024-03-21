const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname,'public')));

// app.use(() => {
//       console.log("Received a new request!");
// });

// home // working with templates
app.get('/', (req, res) => {
      // res.sendFile(path.join(__dirname, 'public/html/index.html'));
      const welcome = "This is the new home of Goldberg Tobacco Wholesalers";
      res.render('home', {data: welcome});
});
//working with params
app.get('/dog/:kennel/germansheppard/:sex', (req, res) => {
      const {kennel, sex} = req.params;
      res.send(`<h1>Welcome to ${kennel}. This is a ${sex} germansheppard!</h1>`);
});
//working with query strings
app.get('/search', (req, res) => {
      const {q} = req.query;
      res.send(`<h1>Search results for: ${q}.</h1>`);
});
// respond to any and all requests
app.get('*', (req, res) => {
      res.send("I do not know that path!");
})

app.listen(3000, () => {
      console.log("Listening on Port:3000");
});