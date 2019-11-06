 $(document).ready(function()
    {
        $('#text1').keyup(function()
        {
          $('.box2').html($(this).val());
        });

    });

    $(document).ready(function()
    {
 		$('#text1,#text2').keyup(function()
        {
        	var a= $("#text2").val();
    		$('.box2').append('<style >'+a+'</style>');
          
        });
    });


     $(document).ready(function()
    {
        $('#text1,#text2,#text3').keyup(function()
        {
            var b= $("#text3").val();
            $('.box2').append('<script >'+b+'</script>');
          
        });
    });