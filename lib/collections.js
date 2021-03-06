Posts = new Mongo.Collection("posts");
Answers = new Mongo.Collection("answers");
Notifications = new Mongo.Collection("notifications");
Top = new Mongo.Collection("top");
this.PostsPages = new Meteor.Pagination(Posts, {
    templateName: "forum",
    itemTemplate: "allPostsPagination",
    perPage: 5,
    availableSettings: {
        filters: true
    }
});

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
    label: "Question:"
  },

  tag:{
  	type:String,
  	label:"Tag"
  },

	rating: {
		type: Number,
		optional: true
	},

    date: {
        type: Date,
        optional: true
    },

    answers: {
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


//Images = new FS.Collection("images", {
 // stores: [new FS.Store.FileSystem("images", {path: "/public"})]
//});



var images = new FS.Store.Dropbox("collection", {

});


Images = new FS.Collection("pictures", {
  stores: [images],
  filter: {
    allow: {
      contentTypes: ['image/*']
    }
  }
});

