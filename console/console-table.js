

$(document).ready(function(){
    var l,b,a;
 
    $("#result").hide();
    $("#btn").click(function(e){
        e.preventDefault();
        l=$ ("#len").val();
        console.log('LENGTH ' + l);
        b=$ ("#bre").val();
        console.log('BREADTH ' + b);
        a=l*b;
        console.warn('AREA ' + a);
        $("#area").val(a);

        $("#result").show();


        var details = {                 // Store details 
        "1":{"Name":"Alvin" ,
        "Mob": "9744719229",
        "Address": "Vallieadath"},
        "2":{"Name":"Sreejith" ,
        "Mob": "8086054619",
        "Address": "Urulichalil"},
        "3":{"Name":"Abhijith",
        "Mob": "8944653377",
        "Address": "Thychalil"},
        "4":{"Name":"Aswinth",
        "Mob": "9948768541",
        "Address": "Geethavilasam"}
};

console.table(details);                   // Write data content to console

    });
  
});

