var pageLoader = (function()
{	var ov = document.createElement("div");
	ov.className = "page-loader";
	ov.innerHTML = '<div class="loader"><p></p></div>';
	document.getElementsByTagName('body')[0].appendChild(ov);
	
	var info = document.createElement("div");
	info.className = "info";
	ov.appendChild(info);

	return {	
		show: function() 
		{	ov.style.display = 'block';
			setTimeout (function(){ ov.className = "page-loader"; }, 500);
		},
		hide: function() 
		{	ov.className = "page-loader hidden";
			setTimeout (function(){ ov.style.display = 'none'; }, 500);
		},
		info: function(i)
		{	info.innerHTML = i || "";
		}
	};
})();