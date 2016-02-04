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