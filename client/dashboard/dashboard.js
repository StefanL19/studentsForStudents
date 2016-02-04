Template.dashboard.helpers({

	userInfo:function(){
		var user = Meteor.user();
		console.log(user);
		return user;
	}

});



Template.dashboard.events({



});