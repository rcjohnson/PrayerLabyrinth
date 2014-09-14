$(document).ready(function() {
	showImages();
})

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

	setTimeout(function() {setInterval(function() {getImages();}, 3000);}, 4000);
	setTimeout(function() {scrollToForm();}, 15*1000);
}

function changeImg(pos, img) {
	$("#img"+pos).attr("src", "http://prayerlabyrinth.com/labyrinth/module3/img/" + img + ".jpg");
	showImg(pos);
}

function showImg(num, cb) {
	return $("#img"+num).fadeIn(1000, cb);
}
function hideImg(num, cb) {
	return $("#img"+num).fadeOut(1000, cb);
}
function scrollToForm() {
	$('html, body').animate({scrollTop: $("#theForm").offset().top}, 10 * 1000);
}