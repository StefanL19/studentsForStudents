
Template.forum.helpers({

	 posts:function(){
	 	var posts = Posts.find({});
	 	var postsArray = [];
	 	posts.forEach(function(entry){
	 		var object = new Object();
	 		object.title = entry.title;
	 		object.text =  $(entry.content).text();
	 		object.image = entry.content.match(/<img src="(.*?)"/)[1];
	 		console.log(object);
	 		postsArray.push(object);
	 	});
	 	return postsArray;
	 },// returns posts

});

Template.forum.events({

	"click .newPost":function(event){
		$("#allUsers").modal('show');
	}

});