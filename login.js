if (Meteor.isClient) {
	/*TEMPLATE HELPERS*/

	/*USER ACCOUNT CREATION, LOGIN, LOGOUT*/
	//Should we add error checking?
	Template.register.events({
		'submit form': function(e, template){
			e.preventDefault();
			var username_var = template.find("#register-username").value;
			var email_var = template.find("#register-email").value;
			var password_var = template.find("#register-password").value;
			var name_var = {
				first: template.find('#register-first-name').value,
				last: template.find('#register-last-name').value
			};
			var address_var = {
				houseNumber: template.find('#register-house-number').value,
				street: template.find('#register-street').value,
				city: template.find('#register-city').value,
				state: template.find('#register-state').value,
				zip: template.find('#register-zip').value,
			};
			var description_var = template.find('#register-description').value;

			Accounts.createUser({
				username: username_var,
				email: email_var,
				password: password_var,
				profile: {
					name: name_var,
					address: address_var,
					description: description_var
				},
			});
			//after account creation, log in user and redirect to homepage
			Meteor.loginWithPassword(email_var, password_var);
			Router.go('home');
		}
	});
	Template.login.events({
		'submit form': function(e, template){
			e.preventDefault();
			var email_var = template.find("#login-email").value;
			var password_var = template.find("#login-password").value;
			Meteor.loginWithPassword(email_var, password_var);
			$('#signupindropdowntoggle').dropdown('toggle');
		},
		'click #createaccount': function(e, template){
			$('#signupindropdowntoggle').dropdown('toggle');
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