function loadpage(page){
	$.ajax({
		url:'assets/pages/'+page+'.html',
		dataType:'html',
		cache: false,
		success: function(response){
			$('.main_content').html(response);
		}
	})
}

$(document).ready(function(){
	$('.home_link').click(function(){
		loadpage('home');
	})
	$('.about_link').click(function(){
		loadpage('about');
	})
		$('.skills_link').click(function(){
		loadpage('skills');
	})
	$('.contact_link').click(function(){
		loadpage('contact');
	})

});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

