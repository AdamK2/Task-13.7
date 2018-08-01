var fs = require('fs');
var colors = require('colors');

fs.readdir('./modules', 'utf-8', function(err, data) {
    console.log('Pliki przed zapisem!'.red);
    console.log(data);
    fs.writeFile('./tekst.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.red);          
    });
});


