 $(document).ready(function() {
  
$('#view_bio').css("background-color","rgba(0,0,0,1)");

$('#contact').click(function(){
     $('#bio, #download_list, #resume1, .content2').fadeOut(500);
	 $('#contact_me').fadeIn(500);
	 $('#top_menu').css("background","#343434");
	 $('.bottoms').css("background","#e1e3e4");
	 $(this).css("background-color","rgba(0,0,0,1)");
	 $('#view_bio, #downloads, #resume').css("background-color","#343434");
     });
	 
 
$('#view_bio').click(function(){
     $('#bio').fadeIn(500);
	 $('#contact_me, #download_list, #resume1, .content2').fadeOut(500);
	 $('#top_menu').css("background","#343434");
	 $('.bottoms').css("background","#e1e3e4");
	 $(this).css("background-color","rgba(0,0,0,1)");
	 $('#contact, #downloads, #resume').css("background-color","#343434");
     });
	 
$('#downloads').click(function(){
     $('#download_list').fadeIn(500);
	 $('#contact_me, #bio, #resume1, .content2').fadeOut(500);
	 $('#top_menu').css("background","#343434");
	 $('.bottoms').css("background","#e1e3e4");
	 $(this).css("background-color","rgba(0,0,0,1)");
	 $('#contact, #view_bio, #resume').css("background-color","#343434");	 
     });
	 
$('#resume').click(function(){
     $('#resume1').fadeIn(500);
	 $('#contact_me, #bio, #download_list, .content2').fadeOut(500);
	 $('#top_menu').css("background","#343434");
	 $('.bottoms').css("background","#e1e3e4");
	 $(this).css("background-color","rgba(0,0,0,1)");
	 $('#contact, #view_bio, #downloads').css("background-color","#343434");	 
     });
	 
	 
	 
	 //////////////////////////////


	 	 
$('#web').click(function(){
     $('#websites').fadeIn(500);
	 $('.content, #logos, #digitals').fadeOut(500);
	 $('#top_menu').css("background","#343434");
	 $('#logo,#digital').css("background","#e1e3e4");///moreee
	 $(this).css("background","rgba(0,0,0,.2)");
	 $('#contact, #view_bio, #downloads, #resume').css("background-color","#343434");	 
     });
	 
	 
$('#logo').click(function(){
     $('#logos').fadeIn(500);
	 $('.content, #websites, #digitals').fadeOut(500);
	 $('#top_menu').css("background","#343434");
	 
	 $('#web,#digital').css("background","#e1e3e4");
	 
	 $(this).css("background","rgba(0,0,0,.2)");
	 $('#contact, #view_bio, #downloads, #resume').css("background-color","#343434");	 
     });
	 
	 
$('#digital').click(function(){
     $('#digitals').fadeIn(500);
	 $('.content, #websites , #logos').fadeOut(500);
	 $('#top_menu').css("background","#343434");
	 
	 $('#web, #logo').css("background","#e1e3e4");
	 
	 $(this).css("background","rgba(0,0,0,.2)");
	 $('#contact, #view_bio, #downloads, #resume').css("background-color","#343434");	 
     });
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	     });
 
  



