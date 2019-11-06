

 function  checkname() {
 	
 	var name= $("#name").val();
 	var len= name.length;

 	if (len >=1)
 	{
 		document.getElementById("fname").innerHTML = "" ;
 	}
 	else{
 		var t= ('<span class="fwarn glyphicon glyphicon-warning-sign"></span> Enter Valid Name');
 		document.getElementById("fname").innerHTML = t;
 		}
 };




 function  checkemail() {
 	
 	var ema= $("#email").val();
 	
 	if (ema.includes("@")&&  ema.includes("."))
 	{
 		document.getElementById("femail").innerHTML = "" ;
 	}
 	else{
 		var t= ('<span class="fwarn glyphicon glyphicon-warning-sign"></span> Enter Valid Email');
 		document.getElementById("femail").innerHTML = t;
 		
 		}
 };



 function  checkpass() {
 	
 	var pass= $("#pswd").val();
 	var len= pass.length;

 	if (len > 5)
 	{
 		document.getElementById("fpswd").innerHTML = "" ;
 	}
 	else{
 		var t= ('<span class="fwarn glyphicon glyphicon-warning-sign"></span> Enter Strong Password');
 		document.getElementById("fpswd").innerHTML = t;
 		}
 };




 function  checkrepass() {
 	
 	var pass= $("#pswd").val();
 	var repass= $("#cpswd").val();
 	var len= repass.length;

 	

 	if (pass==repass)
 	{

 		if (len <1)
	 	{
	 		var t= ('<span class="fwarn glyphicon glyphicon-warning-sign"></span> Re-Enter Password');
 			document.getElementById("fcpswd").innerHTML = t;
	 		
	 	}
	 	else
	 	{
	 		document.getElementById("fcpswd").innerHTML = "" ;

	 	}
 	}
 	else{
 			var t= ('<span class="fwarn glyphicon glyphicon-warning-sign"></span> Password Mismatch');
 			document.getElementById("fcpswd").innerHTML = t;
 		}
 };




 function  checkdate() {
 	
 	var ndate= $("#date").val();						//entered date		 
 	var year= Number(ndate.substr(0,4))					//year from entered date
 	var d= new Date();									//current date
 	var nyear= d.getFullYear();							//current year
 	var age= nyear-year;
 	
	if (ndate==(""))
 	{
 		document.getElementById("fdate").innerHTML = "This field is required" ;
 	}

 	if (age>=18)
 	{
 		document.getElementById("fdate").innerHTML = "" ;
 	}
 	else
 	{
 		
 		var t= ('<input type="checkbox"/> <span class="fwarn glyphicon glyphicon-warning-sign"></span>    You need a parents permission to join. Tick here if your child can join.');
 		document.getElementById("fdate").innerHTML = t;
 	}
 	
 	
 };




 	
 	


 