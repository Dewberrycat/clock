var hour, minute;


document.addEventListener("DOMContentLoaded", function() {
	setInterval(function() {
		hour = (new Date()).getHours();
		minute = (new Date()).getMinutes();
		hour = hour < 10 ? (hour = "0"+hour) : hour;
		minute = minute < 10 ? (minute = "0"+minute) : minute;
		time.innerHTML = hour+":"+minute;
	}, 1000);

});