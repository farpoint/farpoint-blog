Template.create.events({
	'click button': function(e, t) {
		var d = new Date();

		var post = {
			title: t.find('#title').value,
			content: t.find('#content').value,
			createdOn: d.getTime()
		};

		var i = Posts.insert(post);

		Router.go('post', {id: i});

		e.preventDefault();
	}
});

Template.posts.posts = function() {
	return Posts.find({},{sort: {createdOn: -1}});
}

Template.posts.hasPosts = function() {
	return Posts.find().count() > 1;
}

Template.post.post = function() {
  return Posts.findOne(Session.get("post"));
}