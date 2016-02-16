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
		else{
			return;
		}
	},


	answerEntry:function(newAnswer){
		console.log("I am inserting a new answer");
		if (this.userId) {
			newAnswer.user = this.userId;
			var id = newAnswer.postID;
			var user = Meteor.users.findOne({_id:this.userId});
			newAnswer.username = user.profile.username;
			newAnswer._id = Answers.insert(newAnswer);
            Meteor.call("updateAnswers", id);
		}
		else{
			return;
		}
	},

	updateVote:function(postId, rating){
		if(this.userId){
			Posts.update(
				{"_id": postId},
				{$set: {rating:rating}}
			);
		}
		else{
			return;
		}
	},

	updateAnswers:function(postId){

		if(this.userId){
			var post = Posts.findOne({_id:postId});
			var answers = post.answers;
			if(answers){
				Posts.update(
					{"_id": postId},
					{$set: {answers:answers}}
				);
			}
			else{
				Posts.update(
					{"_id": postId},
					{$set: {answers:1}}
				);
			}
		}
	},

    //UPDATE USER RATING
    updateUserRating:function(userId, voteType){
        var user = Meteor.users.findOne({_id:userId});
        if(user){
            if(voteType=="positive"){
                if(user.rating){
                    var rating = user.rating + 5;
                }
                else{
                    var rating = 5;
                }
                Meteor.users.update(
                    {"_id": user._id},
                    {$set:{rating:rating}}
                );
            }

            else if(voteType == "negative"){
                if(user.rating){
                    var rating = user.rating - 5;
                }
                else{
                    var rating = 0;
                }
                Meteor.users.update(
                    {"_id": user._id},
                    {$set:{rating:rating}}
                );
            }
        }//user
    }


});