Meteor.methods({

	postEntry:function(newPost){
		console.log("I am called");
		if (this.userId) {
			newPost.user  = this.userId;
			newPost._id = Posts.insert(newPost);
		}
	},

	answerEntry:function(newAnswer){
		console.log("I am inserting a new answer");
		if (this.userId) {
			newAnswer.user = this.userId;
			newAnswer._id = Answers.insert(newAnswer);
		}
	}

});