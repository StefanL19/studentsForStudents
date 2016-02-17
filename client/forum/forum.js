


Template.allPostsPagination.helpers({

	 posts:function(){
	 	var posts = Posts.find({});
	 	return posts;
	 	//var postsArray = [];
	 //	posts.forEach(function(entry){
	 	//	var object = new Object();
	 	//	object._id = entry._id;
	 	//	object.title = entry.title;
	 	//	if (entry.content instanceof HTMLElement) {
	 	//		object.text =  $(entry.content).text();
	 	//	}
	 	//	else{
	 	//		object.text = entry.content;
	 	//	}

	 	//	if (entry.content.match(/<img src="(.*?)"/)) {
	 	//		object.image = entry.content.match(/<img src="(.*?)"/)[1];
	 	//	}
	 	//	console.log(object);
	 	//	postsArray.push(object);
	 	//})
	 	
	 },// returns posts

	username:function(){
		var id = this.user;
		var user = Meteor.users.findOne({_id:id});
		if(user){
			return user.profile.username;
		}
		else{
			return;
		}
	}

});

Template.forum.events({

	"click .js-new-post":function(event){
		$("#allUsers").modal('show');
	},

	"click .js-search-posts":function(event){
		var valueSearch = $(".js-input-search").val();
		Session.set("searchInput", valueSearch);
	}

});