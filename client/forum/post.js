//Helpers
Template.post.helpers({

	post:function(){
		var postId = Session.get("postId");
		var post = Posts.findOne({_id:postId});
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
	},

	username:function(){
		var id = Session.get("postId");
		var post = Posts.findOne({_id:id});
		if(post){
			var userId = post.user;
			var user = Meteor.users.findOne({_id:userId});
			if(user){
				return user.profile.username;
			}
		}
	}

});

////////////////////
// EVENTS
//////////////////

Template.post.events({

	'click .js-vote-up':function(event){
		var postId = Session.get("postId");
		var post = Posts.findOne({_id:postId});
		if (!post.rating) {
			var rating = 1;
		}

		else{
			var rating = post.rating + 1;
		}
        var user = post.user;
		Meteor.call("updateVote", post._id, rating);
        Meteor.call("updateUserRating", user, "positive");

	},


	'click .js-vote-down':function(event){
		var postId = Session.get("postId");
		var post = Posts.findOne({_id:postId});
        var userId = post.user;
		if (!post.rating) {
			var rating = 0;
		}

		else{
			var rating = post.rating - 1;
		}

		Meteor.call("updateVote", post._id, rating);
        Meteor.call("updateUserRating", userId, "negative");
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