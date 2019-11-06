$ (document).ready(function(){
	
	$ ("#t1").hide(); $ ("#t2").hide(); $ ("#t3").hide(); 
	$ ("#t4").hide(); $ ("#t5").hide(); $ ("#t6").hide();


	$("#name").keyup(function()
	{
	 	
		var name= $("#name").val();
	 	var len= name.length;

	 	if (len >=1)
	 	{
	 		$ ("#t1").show();
	 	}
	 	else
	 	{

	 		$ ("#t1").hide();
	 	}

	});


	$("#email").keyup(function()
	{

		var ema= $("#email").val();
	 	
	 	if (ema.includes("@") &&  ema.includes("."))
	 	{
	 		$ ("#t2").show();
	 	}
	 	else
	 	{
	 		$ ("#t2").hide();
	 	}
 	});	



 	$("#pswd").keyup(function()
 	{

		var pass= $("#pswd").val();
	 	var len= pass.length;

	 	if (len > 5)
	 	{
	 		$ ("#t3").show();
	 	}
	 	else
	 	{
			$ ("#t3").hide();
		}

 	});




 	$("#cpswd").keyup(function()
 	{

	 	var pass= $("#pswd").val();
	 	var repass= $("#cpswd").val();
	 	var len= repass.length;

	 	

	 	if (pass==repass)
	 	{

	 		if (len <1)
		 	{
		 		$ ("#t4").hide();
		 	}
		 	else
		 	{
		 		$ ("#t4").show();

		 	}
	 	}
	 	else
	 	{
	 		$ ("#t4").hide();
	 	}


 	});


 	$("#date").keyup(function()
 	{
		var ndate= $("#date").val();						//entered date 
	 	var year= Number(ndate.substr(0,4))					//year from entered date
	 	var d= new Date();									//current date
	 	var nyear= d.getFullYear();							//current year
	 	var age= nyear-year;
	 	console.log(age);

	 	if (age>=18)
	 	{
	 		$ ("#t5").show();
	 	}
	 	else
	 	{
	 		$ ("#t5").hide();
	 	}


 	});

});




$("#bio").keyup(function()
 	{
	var maxlen=150;
 	var tex= $("#bio").val();
 	var len= tex.length;
 	document.getElementById("fbio").innerHTML = len;
 	if (len>150)
 	{
 		var t= ('<span class="fwarn glyphicon glyphicon-warning-sign"></span> Word length Exceeded 150');
 		document.getElementById("fbio").innerHTML = t;
 		
 	}
 	if (len<=150 && len>=1)
 	{
 		$ ("#t6").show();
 	}
 });


