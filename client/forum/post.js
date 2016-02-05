//Helpers
Template.post.helpers({

	post:function(){
		var postId = Session.get("postId");
		var post = Posts.findOne({_id:postId});
		var object = new Object();
		if (post) {
			object.title = post.title;
			if (/<[a-z][\s\S]*>/i.test(post.content)) {//$(post.content).has("p") / post.content instanceof HTMLElement

						object.text = $(post.content).text();
					


		 			if (post.content.match(/<img src="(.*?)"/)) {
		 			object.image = post.content.match(/<img src="(.*?)"/)[1];
		 			}
	 		}
	 		else{
	 			console.log("it is not an html------------------------");
	 			object.text = post.content;
	 		}
		}
		return object;
	}

});

////////////////////
// EVENTS
//////////////////

Template.post.events({



});

