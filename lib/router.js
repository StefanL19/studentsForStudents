Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function(){
	this.render("navbar", {to: "navbar"});
});

Router.route('/dashboard', function(){
	this.render("navbar", {to:"navbar"});
	this.render("dashboard", {to:"main"});
});


Router.route('/forum', function(){
	this.render("navbar", {to:"navbar"});
	this.render("forum", {to:"main"});
});

Router.route('/forum/:_id', function(){
	Session.set("postId", this.params._id);
	this.render("navbar", {to:"navbar"});
	this.render("post", {to:"main"});
});