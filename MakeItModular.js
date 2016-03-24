var makeitmodular = require('D:/Zeeshan/LearnYouNode/Modular.file1.js');

var directory =  process.argv[2] ;
var extension = process.argv[3];

makeitmodular.ACC(directory,extension,function(error,res){

    if(error)
    {
        console.log('directory Does Not Exist');
    }
    else
    {
        console.log("finished");
    }
});