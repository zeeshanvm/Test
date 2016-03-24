var fs = require('fs');

var ad = function Process(directory,extension,callback){
    fs.readdir(directory,function(err,res)
    {
        if (err){
            return err;
        }
        else{
            for(i=0 ; i<res.length ; i++)
            {
                var a = res[i];

                var sub = a.substr(a.length - extension.length);

                if (extension == sub) {
                    console.log(res[i]);
                }

            }

        }
    });



}
module.exports.ACC = ad;

