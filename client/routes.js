Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404'
});

Router.map(function () {

  this.route('posts', {
    path: '/',
    template: 'posts'
  });

  this.route('create', {
    path: '/create',
    template: 'create'
  });

  this.route('post', {
    path: '/post/:id',
    template: 'post',

    action: function() {
      Session.set("post", this.params.id);
      this.render();
    }
  });
});