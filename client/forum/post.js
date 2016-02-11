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
	},

	postDoc:function(){
		var post = Session.get("postId");
		return post;
	},

	answers:function(){
		var postId = Session.get("postId");
		console.log("this is the postId: ");
		console.log(postId);
		console.log("these are the answers: ");
		console.log(Answers.find({postID:postId}));
		return Answers.find({postID:postId});
	}

});

////////////////////
// EVENTS
//////////////////

Template.post.events({



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