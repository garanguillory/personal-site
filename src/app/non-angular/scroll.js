$(document)
	.ready(function (){
				$('a[ng-href^="#"]').click(function(event) {
				    var target = $( $(this).attr('ng-href') );

				    if( target.length ) {
				        event.preventDefault();
				        $('html, body').animate({
				            scrollTop: target.offset().top
				        }, 800);
				    }
				});

	});

	// projects-image
	// $scope.notecard.images = [
	// 	'assets/images/notecard/notecard-profile-view.jpg',
	// 	'assets/images/notecard/notecard-newdeck-view.jpg',
	// 	'assets/images/notecard/notecard-deck-view.jpg',
	// 	'assets/images/notecard/notecard-study-view.jpg',
	// 	'assets/images/notecard/notecard-editdeck-view.jpg'
	// 	];

	// var images = [
	//  	'assets/images/notecard/notecard-profile-view.jpg',
	//  	'assets/images/notecard/notecard-newdeck-view.jpg',
	//  	'assets/images/notecard/notecard-deck-view.jpg',
	//  	'assets/images/notecard/notecard-study-view.jpg',
	//  	'assets/images/notecard/notecard-editdeck-view.jpg'
	// ];

	// $(".projects-image").hover(
	// 	function(){
	// 		$(this).attr('src', function(){
	// 			var index = 0;
	// 			if(index < images.length){
	// 				for(var i=0; i<images.length; i++){
	// 					++index
	// 					setTimeout(5000);
	// 					console.log(images[i])
	// 					return images[i];
	// 				}
	// 			} else {
	// 				index = 0;
	// 			}
	// 		});
	// 		console.log(this);
	// 	}
		// function(){
		//   $(this).filter(':not(:animated)').animate({
		//      marginLeft:'20px'
		//   },'slow');
		// // This only fires if the row is not undergoing an animation when you mouseover it
		// },
		// function() {
		//   $(this).animate({
		//      marginLeft:'0px'
		//   },'slow');
		// }
	// );