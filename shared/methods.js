Meteor.methods({

	postEntry:function(newPost){
		console.log("I am called");
		if (this.userId) {
			newPost.user  = this.userId;
			newPost.date = new Date();
			newPost.rating = 0;
			newPost.answers = 0;
			newPost._id = Posts.insert(newPost);
		}
	},

	answerEntry:function(newAnswer){
		console.log("I am inserting a new answer");
		if (this.userId) {
			newAnswer.user = this.userId;
			var user = Meteor.users.findOne({_id:this.userId});
			newAnswer.username = user.profile.username;
			newAnswer._id = Answers.insert(newAnswer);
		}
	},

	updateVote:function(postId, rating){
		Posts.update(
			{"_id": postId},
			{$set: {rating:rating}}
		);
	},


});