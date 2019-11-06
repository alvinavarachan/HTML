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
    	console.log('AREA ' + a);
    	$("#area").val(a);

    	$("#result").show();
    });
  
});