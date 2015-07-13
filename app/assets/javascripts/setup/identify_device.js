function identifyDevice(){
	var device = navigator.userAgent;
	var check = 
		{
			mobile: device.match(/(iPhone|iPod|iPad|BlackBerry|Android)/)
		};
		
	if (check.mobile){
		$("html").addClass("mobile");
		return 'mobile';
	} else {
		$("html").addClass("dektop");
		return 'desktop';
	}
}

function showDeviceSpecificElements(){
	if (identifyDevice() === 'mobile')
		$(".desktop-only").remove();
	else
		$(".mobile-only").remove();
}