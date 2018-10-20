
(function ($) {
    $('.validate-form').on('submit',function(){
		var email= $('#emailid').val();
		if(checkEmail(email)==false){
			alert('Please provide a valid email address');
		}else{
			var url = "https://script.google.com/macros/s/AKfycbzNZfGZUOO4j-Xs8CxEmYqfg_9HEiIDK1ThJ0mmsitfvHXGPRpk/exec?callback=ctrlq&email="+email+"&action=insert";
        $.ajax({ url:url, type: 'GET'}).done(function(data) {
	       alert("done ; "+data);
        	}).error(function(data){
            	alert("error ; "+data);
	        });
		}
    });
	  function ctrlq(e){
            alert("Congrats! You Have Subscrible SuccessFully! ");
          }
function checkEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
    return false;
 }
}
})(jQuery);