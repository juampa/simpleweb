const express = require('express');

const app = express();

var x = 0 ;

app.get('/', (req,res) => {
    res.send('Hi there ' + x);
    x = x +1 ;
});

app.listen(8080, () => {
    console.log('Listening on 8080 port');
})