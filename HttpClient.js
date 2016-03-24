

var http = require('http');
var url = process.argv[2];
var option = {
    host : url,
    port : 80,


}
console.log("here goes option links\n" ,option);

http.get(option,function(res){
   console.log("oh boy");
    res.on("error",function(error)
    {
        console.log("sadasd",error);
    });
    res.on('data',function(data)
    {
        console.log(data.toString());
    });

});



