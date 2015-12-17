Router.route('/', function() {
	this.render('home');
});
Router.route('/story');
Router.route('/work');
Router.route('/contact');



if(Meteor.isClient) {
	Template.home.rendered = function () {
		$("#home-car").slick({
				dots : true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 5000

		});
	},
	//Note must add new one of both of these for each gallery
	//Copy style change gallery1 to gallery#
	Template.work.rendered = function() {
		$("a[rel=gallery1]").fancybox({
				openEffect : 'none',
				closeEffect : 'none',
				helpers : {
					title: {
						type: 'outside'
					},
					thumbs: {
						width: 50,
						height: 50
					}
				}
		});
	},
	Template.work.events({
			'click a[rel=gallery1]' : function(e) {
				e.preventDefault();
			}
	})
}

if(Meteor.isServer) {
}
