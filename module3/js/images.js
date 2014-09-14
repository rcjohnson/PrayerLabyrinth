$(document).ready(function() {
	showImages();
})

function getInstagramImages() {
	var jqxhr = $.getJSON( "https://api.instagram.com/v1/users/30926734/media/recent/?client_id=dff7ea4f038d43c78ea89b23b19234ec&callback=?", function() {
	  console.log( "success" );
	})
	  .done(function(data) {
	    $.each( data.data, function( i, item ) {
	    	console.log( "item " + item.images.standard_resolution.url  + " " + i );
	        setTimeout(function() {changeImg(i, "", item.images.standard_resolution.url);}, i * 3000 + 4000);
	    });
	  })
	  .fail(function() {
	    console.log( "error" );
	  })
	  .always(function() {
	    console.log( "complete" );
	  });
}

function getImages(num) {
	img = Math.floor(Math.random() * 8);
	num = Math.ceil(Math.random() * 152);
	hideImg(img, function() {changeImg(img, num)});
}

function showImages() {
	setTimeout(function() {showImg(1);},500);
	setTimeout(function() {showImg(4);},1000);
	setTimeout(function() {showImg(0);},1500);
	setTimeout(function() {showImg(2);},2000);
	setTimeout(function() {showImg(5);},2500);
	setTimeout(function() {showImg(7);},3000);
	setTimeout(function() {showImg(3);},3500);
	setTimeout(function() {showImg(6);},4000);

	setTimeout(function() {setInterval(function() {getImages();}, 3000);}, 5000);
	setTimeout(function() {scrollToForm();}, 15*1000);
	getInstagramImages();
}

function changeImg(pos, img, url) {
	if (url) {
		$("#img"+pos).attr("src", url);
	} else {
		$("#img"+pos).attr("src", "http://prayerlabyrinth.com/labyrinth/module3/img/" + img + ".jpg");
	}
	showImg(pos);
}

function showImg(num, cb) {
	return $("#img"+num).fadeIn(1000, cb);
}
function hideImg(num, cb) {
	return $("#img"+num).fadeOut(1000, cb);
}
function scrollToForm() {
	$('html, body').animate({scrollTop: $("#img1").offset().top+50}, 10 * 1000);
}