//Helpers
Template.post.helpers({

	post:function(){
		var postId = Session.get("postId");
		var post = Posts.findOne({_id:postId});
		//var object = new Object();
		//if (post) {
		//	object.title = post.title;
		//	if (/<[a-z][\s\S]*>/i.test(post.content)) {//$(post.content).has("p") / post.content instanceof HTMLElement

			//			object.text = $(post.content).text();
					


		 		//	if (post.content.match(/<img src="(.*?)"/)) {
		 		//	object.image = post.content.match(/<img src="(.*?)"/)[1];
		 		//	}
	 		//}
	 		//else{
	 		//	console.log("it is not an html------------------------");
	 		//	object.text = post.content;
	 	//	}
		//}
		return post;
	},

	postDoc:function(){
		var post = Session.get("postId");
		return post;
	},

	answers:function(){
		var postId = Session.get("postId");
		return Answers.find({postID:postId});
	},

	images:function(){

		var images = Images.find().fetch({});
		console.log(images);
		return 	images;
	}

});

////////////////////
// EVENTS
//////////////////

Template.post.events({

	'click .js-vote-up':function(event){
		var postId = Session.get("postId");
		console.log(postId);
		var post = Posts.findOne({_id:postId});
		console.log(post);
		if (!post.rating) {
			var rating = 1;
		}

		else{
			var rating = post.rating + 1;
		}

		Meteor.call("updateVote", post._id, rating);

	},


	'click .js-vote-down':function(event){
		var postId = Session.get("postId");
		var post = Posts.findOne({_id:postId});

		if (!post.rating) {
			var rating = undefined;
		}

		else{
			var rating = post.rating - 1;
		}

		Meteor.call("updateVote", post._id, rating);
	},

	'click .js-answer':function(event){
		$(".answerPost").removeClass("css-hide-answer");
	}

});

Template.dropzone.events({
	'dropped #dropzone': function(event, temp) {
      console.log('files droped');
       FS.Utility.eachFile(event, function(file) {
        var id = Images.insert(file);
        console.log('Inserted file ');
        console.log(id);
      });
  }
});