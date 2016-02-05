
Template.forum.helpers({

	 posts:function(){
	 	var posts = Posts.find({});
	 	var postsArray = [];
	 	posts.forEach(function(entry){
	 		var object = new Object();
	 		object._id = entry._id;
	 		object.title = entry.title;
	 		if (entry.content instanceof HTMLElement) {
	 			object.text =  $(entry.content).text();
	 		}
	 		else{
	 			object.text = entry.content;
	 		}

	 		if (entry.content.match(/<img src="(.*?)"/)) {
	 			object.image = entry.content.match(/<img src="(.*?)"/)[1];
	 		}
	 		console.log(object);
	 		postsArray.push(object);
	 	})
	 	return postsArray;
	 },// returns posts

});

Template.forum.events({

	"click .newPost":function(event){
		$("#allUsers").modal('show');
	}

});