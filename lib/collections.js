Posts = new Mongo.Collection("posts");
Answers = new Mongo.Collection("answers");
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
    type: String,
    label: "Question: ",
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor' // optional
      }
    }
  },

  tag:{
  	type:String,
  	label:"Tag"
  },

	rating: {
		type: Number,
		optional: true
	}
});

Posts.attachSchema(PostsSchema);


AnswersSchema = new SimpleSchema({
  title: {
    type: String,
    optional: true
  },
  user: {
    type: String,
    optional: true
  },

  username:{
    type: String,
    optional:true
  },

  postID:{
    type: String,
    optional: true
  },

  content: {
    type: String,
    label: "Answer: "
  },  

  rating: {
    type: Number,
    optional: true
  }

});

Answers.attachSchema(AnswersSchema);


Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/public"})]
});

