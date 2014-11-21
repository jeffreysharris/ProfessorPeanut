if (Meteor.isClient) {
	/*TEMPLATE HELPERS*/
	Template.navItems.helpers({
	    activeIfTemplateIs: function (template) {
	      var currentRoute = Router.current();
	      return currentRoute &&
	      template === currentRoute.lookupTemplate() ? 'active' : '';
	    }
	  });

	/*USER ACCOUNT CREATION, LOGIN, LOGOUT*/
	Template.register.events({
		'submit form': function(e, template){
			e.preventDefault();
			var username_var = template.find("#register-username").value;
			var email_var = template.find("#register-email").value;
			var password_var = template.find("#register-password").value;
			Accounts.createUser({
				username: username_var,
				email: email_var,
				password: password_var
			});
			console.log("Submitted")
		}
	});
	Template.login.events({
		'submit form': function(e, template){
			e.preventDefault();
			var email_var = template.find("#login-email").value;
			var password_var = template.find("#login-password").value;
			Meteor.loginWithPassword(email_var, password_var);
			console.log("Submitted")
		}
	});
	Template.dashboard.events({
		'click .logout' : function(e){
			e.preventDefault();
			Meteor.logout();
		}
	});
};

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
};