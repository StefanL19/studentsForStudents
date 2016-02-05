Meteor.methods({

	postEntry:function(newPost){
		console.log("I am called");
		if (this.userId) {
			newPost.user  = this.userId;
			newPost._id = Posts.insert(newPost);
		}
	},



});