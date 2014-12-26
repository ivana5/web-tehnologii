$(document).ready(function(){

	$('.kopce').on('click', function(){
			
			$(this).css('background', 'red');
	});

	var click = 0;

		$('.btn').on('click', function(){
			
			if(click == 0){

				$(this).css('background', 'blue')
				click = 1;
			}else if(click == 1){
			
				$(this).css('background', '');
				click = 0;
			}
		});
			$('#btn_2').on('click', function(){
				var vrednost = $('#eden').val();
				alert(vrednost);
			});

});


