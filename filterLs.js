var fs = require('fs');

var path = process.argv[2];
var extension = process.argv[3];
extension= '.'+extension
//var path = 'D:/Zeeshan/LearnYouNode/';
//console.log(path);
fs.readdir(path,function(err,res){
    if(err)
    {
        console.log(err);
    }
    else{
        for(i=0 ; i<res.length ; i++)
        {
            var a = res[i];

            var sub = a.substr(a.length - extension.length);

            if (extension === sub) {
                console.log(res[i]);
            }

        }
    }
});


