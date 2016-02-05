Posts = new Mongo.Collection("posts");
Notifications = new Mongo.Collection("notifications");
Top = new Mongo.Collection("top");

PostsSchema = new SimpleSchema({

	user: {
		type: String,
		optional: true
	},

	title:{
		type: String
	},

	content: {
		type: String
	},

	rating: {
		type: Number,
		optional: true
	}
});

Posts.attachSchema(PostsSchema);
