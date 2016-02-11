Meteor.publish('users', function(){

	return Meteor.users.find({});

});

Meteor.publish('posts', function(){

	return Posts.find({});

});

Meteor.publish('notifications', function(){
	return Notifications.find({});
});

Meteor.publish('top', function(){
	return Top.find({});
});

Meteor.publish('answers', function(){
	return Answers.find({});
});

Meteor.publish("images", function () {
	//var Collection = Images.find({}).fetch({});
	//console.log(Collection);
  return Images.find({});
});

Images.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  },
  'update': function(){
  	return true;
  },
  'download':function(){
  	return true;
  }
});

