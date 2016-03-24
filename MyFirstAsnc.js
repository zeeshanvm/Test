var fs = require('fs');

var path = process.argv[2];
fs.exists(path,function(exist){
    if(exist)
    {

        var Buffer = fs.readFile(path,'utf-8',function(err,res){
            if(err)
            {
                console.log('directory Does Not Exist');
                console.log(err);
            }
            else
            {
                var reading = res.toString();
                var val = reading.split('\n');
                console.log(val.length-1);
            }
        });



    }
    else{
        console.log(err);



    }
});

//