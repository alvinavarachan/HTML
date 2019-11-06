$(document).ready(function(){
	var l,b,a;
 
    $("#result").hide();
    $("#btn").click(function(e){
    	e.preventDefault();
        console.group();
    	l=$ ("#len").val();
    	console.log('LENGTH ' + l);
    	b=$ ("#bre").val();
    	console.log('BREADTH ' + b);
    	a=l*b;
    	console.warn('AREA ' + a);
    	$("#area").val(a);

        console.groupEnd();

    	$("#result").show();
    });
  
});




