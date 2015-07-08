$(document).ready(function(){

	var list = ["1", "2", "3", "4", "5", "6", "7"];		//create the playlist
	var activeItem = list[0];							//set active item 
	output(activeItem);									//output active item

	$("#forward").click(function(e){
		e.preventDefault();
		index = list.indexOf(activeItem);
		if(index >= 0 && index < list.length - 1){
			var nextItem = list[index + 1];
			activeItem = nextItem;
			output(activeItem);
			return activeItem;
		} else if (index = list.length - 1){
			activeItem = list[0];
			//console.log("jump to beginning");
			output(activeItem);
			return activeItem;
		}
	});

	$("#back").click(function(e){
		e.preventDefault();
		index = list.indexOf(activeItem);
		if(index > 0){
			var nextItem = list[index - 1];
			activeItem = nextItem;
			output(activeItem);
		} else {
			var last = list.length - 1;
			activeItem = list[last];
			//console.log("jump to end");
			output(activeItem);
		}
	});

	function output(item){
		console.log(item);
		$("body").append(item + " ");
		//console.log(activeItem + " " + list.indexOf(activeItem)
	}

});