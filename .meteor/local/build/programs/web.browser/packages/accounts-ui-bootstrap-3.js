//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Session = Package.session.Session;
var Accounts = Package['accounts-base'].Accounts;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var $modal;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/accounts_ui.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (!Accounts.ui)                                                                                                      // 1
	Accounts.ui = {};                                                                                                     // 2
                                                                                                                       // 3
if (!Accounts.ui._options) {                                                                                           // 4
	Accounts.ui._options = {                                                                                              // 5
		requestPermissions: {},                                                                                              // 6
		extraSignupFields: []                                                                                                // 7
	};                                                                                                                    // 8
}                                                                                                                      // 9
                                                                                                                       // 10
Accounts.ui.navigate = function (route, hash) {                                                                        // 11
	// if router is iron-router                                                                                           // 12
	if(window.Router && _.isFunction(Router.go)) {                                                                        // 13
		Router.go(route, hash);                                                                                              // 14
	}                                                                                                                     // 15
}                                                                                                                      // 16
                                                                                                                       // 17
Accounts.ui.config = function(options) {                                                                               // 18
	// validate options keys                                                                                              // 19
	var VALID_KEYS = ['passwordSignupFields', 'requestPermissions', 'extraSignupFields', 'requestOfflineToken'];          // 20
	_.each(_.keys(options), function(key) {                                                                               // 21
		if (!_.contains(VALID_KEYS, key))                                                                                    // 22
			throw new Error("Accounts.ui.config: Invalid key: " + key);                                                         // 23
	});                                                                                                                   // 24
	                                                                                                                      // 25
	options.extraSignupFields = options.extraSignupFields || []                                                           // 26
	// deal with `passwordSignupFields`                                                                                   // 27
	if (options.passwordSignupFields) {                                                                                   // 28
		if (_.contains([                                                                                                     // 29
			"USERNAME_AND_EMAIL_CONFIRM",                                                                                       // 30
			"USERNAME_AND_EMAIL",                                                                                               // 31
			"USERNAME_AND_OPTIONAL_EMAIL",                                                                                      // 32
			"USERNAME_ONLY",                                                                                                    // 33
			"EMAIL_ONLY"                                                                                                        // 34
		], options.passwordSignupFields)) {                                                                                  // 35
			if (Accounts.ui._options.passwordSignupFields)                                                                      // 36
				throw new Error("Accounts.ui.config: Can't set `passwordSignupFields` more than once");                            // 37
			else                                                                                                                // 38
				Accounts.ui._options.passwordSignupFields = options.passwordSignupFields;                                          // 39
		} else {                                                                                                             // 40
			throw new Error("Accounts.ui.config: Invalid option for `passwordSignupFields`: " + options.passwordSignupFields);  // 41
		}                                                                                                                    // 42
	}                                                                                                                     // 43
                                                                                                                       // 44
	// deal with `requestPermissions`                                                                                     // 45
	if (options.requestPermissions) {                                                                                     // 46
		_.each(options.requestPermissions, function(scope, service) {                                                        // 47
			if (Accounts.ui._options.requestPermissions[service]) {                                                             // 48
				throw new Error("Accounts.ui.config: Can't set `requestPermissions` more than once for " + service);               // 49
			} else if (!(scope instanceof Array)) {                                                                             // 50
				throw new Error("Accounts.ui.config: Value for `requestPermissions` must be an array");                            // 51
			} else {                                                                                                            // 52
				Accounts.ui._options.requestPermissions[service] = scope;                                                          // 53
			}                                                                                                                   // 54
		});                                                                                                                  // 55
		if (typeof options.extraSignupFields !== 'object' || !options.extraSignupFields instanceof Array) {                  // 56
			throw new Error("Accounts.ui.config: `extraSignupFields` must be an array.");                                       // 57
		} else {                                                                                                             // 58
			if (options.extraSignupFields) {                                                                                    // 59
				_.each(options.extraSignupFields, function(field, index) {                                                         // 60
					if (!field.fieldName || !field.fieldLabel)                                                                        // 61
						throw new Error("Accounts.ui.config: `extraSignupFields` objects must have `fieldName` and `fieldLabel` attributes.");
					if (typeof field.visible === 'undefined')                                                                         // 63
						field.visible = true;                                                                                            // 64
					Accounts.ui._options.extraSignupFields[index] = field;                                                            // 65
				});                                                                                                                // 66
			}                                                                                                                   // 67
		}                                                                                                                    // 68
	}                                                                                                                     // 69
};                                                                                                                     // 70
                                                                                                                       // 71
Accounts.ui._passwordSignupFields = function() {                                                                       // 72
	return Accounts.ui._options.passwordSignupFields || "EMAIL_ONLY";                                                     // 73
};                                                                                                                     // 74
                                                                                                                       // 75
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/template.login_buttons.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("_loginButtons");                                                                                 // 2
Template["_loginButtons"] = new Template("Template._loginButtons", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 6
  }, function() {                                                                                                      // 7
    return [ "\n		", Blaze.If(function() {                                                                             // 8
      return Spacebars.call(view.lookup("loggingIn"));                                                                 // 9
    }, function() {                                                                                                    // 10
      return [ "\n			\n			", Blaze.If(function() {                                                                     // 11
        return Spacebars.call(view.lookup("dropdown"));                                                                // 12
      }, function() {                                                                                                  // 13
        return [ "\n				", Spacebars.include(view.lookupTemplate("_loginButtonsLoggingIn")), "\n			" ];                // 14
      }, function() {                                                                                                  // 15
        return [ "\n				", HTML.DIV({                                                                                  // 16
          "class": "login-buttons-with-only-one-button"                                                                // 17
        }, "\n					", Spacebars.include(view.lookupTemplate("_loginButtonsLoggingInSingleLoginButton")), "\n				"), "\n			" ];
      }), "\n		" ];                                                                                                    // 19
    }, function() {                                                                                                    // 20
      return [ "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedIn")), "\n		" ];                     // 21
    }), "\n	" ];                                                                                                       // 22
  }, function() {                                                                                                      // 23
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOut")), "\n	" ];                        // 24
  });                                                                                                                  // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
Template.__checkName("_loginButtonsLoggedIn");                                                                         // 28
Template["_loginButtonsLoggedIn"] = new Template("Template._loginButtonsLoggedIn", (function() {                       // 29
  var view = this;                                                                                                     // 30
  return Blaze.If(function() {                                                                                         // 31
    return Spacebars.call(view.lookup("dropdown"));                                                                    // 32
  }, function() {                                                                                                      // 33
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedInDropdown")), "\n	" ];                 // 34
  }, function() {                                                                                                      // 35
    return [ "\n	", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedInSingleLogoutButton")), "\n	" ];        // 36
  });                                                                                                                  // 37
}));                                                                                                                   // 38
                                                                                                                       // 39
Template.__checkName("_loginButtonsLoggedOut");                                                                        // 40
Template["_loginButtonsLoggedOut"] = new Template("Template._loginButtonsLoggedOut", (function() {                     // 41
  var view = this;                                                                                                     // 42
  return Blaze.If(function() {                                                                                         // 43
    return Spacebars.call(view.lookup("services"));                                                                    // 44
  }, function() {                                                                                                      // 45
    return [ " \n		", Blaze.If(function() {                                                                            // 46
      return Spacebars.call(view.lookup("configurationLoaded"));                                                       // 47
    }, function() {                                                                                                    // 48
      return [ "\n			", Blaze.If(function() {                                                                          // 49
        return Spacebars.call(view.lookup("dropdown"));                                                                // 50
      }, function() {                                                                                                  // 51
        return [ " \n				", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutDropdown")), "\n			" ];       // 52
      }, function() {                                                                                                  // 53
        return [ "\n				", Spacebars.With(function() {                                                                 // 54
          return Spacebars.call(view.lookup("singleService"));                                                         // 55
        }, function() {                                                                                                // 56
          return [ " \n						", Blaze.If(function() {                                                                  // 57
            return Spacebars.call(view.lookup("loggingIn"));                                                           // 58
          }, function() {                                                                                              // 59
            return [ "\n							", Spacebars.include(view.lookupTemplate("_loginButtonsLoggingInSingleLoginButton")), "\n						" ];
          }, function() {                                                                                              // 61
            return [ "\n							", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutSingleLoginButton")), "\n						" ];
          }), "\n				" ];                                                                                              // 63
        }), "\n			" ];                                                                                                 // 64
      }), "\n		" ];                                                                                                    // 65
    }), "\n	" ];                                                                                                       // 66
  }, function() {                                                                                                      // 67
    return [ "\n		", HTML.DIV({                                                                                        // 68
      "class": "no-services"                                                                                           // 69
    }, "No login services configured"), "\n	" ];                                                                       // 70
  });                                                                                                                  // 71
}));                                                                                                                   // 72
                                                                                                                       // 73
Template.__checkName("_loginButtonsMessages");                                                                         // 74
Template["_loginButtonsMessages"] = new Template("Template._loginButtonsMessages", (function() {                       // 75
  var view = this;                                                                                                     // 76
  return [ Blaze.If(function() {                                                                                       // 77
    return Spacebars.call(view.lookup("errorMessage"));                                                                // 78
  }, function() {                                                                                                      // 79
    return [ "\n		", HTML.DIV({                                                                                        // 80
      "class": "alert alert-danger"                                                                                    // 81
    }, Blaze.View(function() {                                                                                         // 82
      return Spacebars.mustache(view.lookup("errorMessage"));                                                          // 83
    })), "\n	" ];                                                                                                      // 84
  }), "\n	", Blaze.If(function() {                                                                                     // 85
    return Spacebars.call(view.lookup("infoMessage"));                                                                 // 86
  }, function() {                                                                                                      // 87
    return [ "\n		", HTML.DIV({                                                                                        // 88
      "class": "alert alert-success no-margin"                                                                         // 89
    }, Blaze.View(function() {                                                                                         // 90
      return Spacebars.mustache(view.lookup("infoMessage"));                                                           // 91
    })), "\n	" ];                                                                                                      // 92
  }) ];                                                                                                                // 93
}));                                                                                                                   // 94
                                                                                                                       // 95
Template.__checkName("_loginButtonsLoggingIn");                                                                        // 96
Template["_loginButtonsLoggingIn"] = new Template("Template._loginButtonsLoggingIn", (function() {                     // 97
  var view = this;                                                                                                     // 98
  return [ Spacebars.include(view.lookupTemplate("_loginButtonsLoggingInPadding")), HTML.Raw('\n	<div class="loading">&nbsp;</div>\n	'), Spacebars.include(view.lookupTemplate("_loginButtonsLoggingInPadding")) ];
}));                                                                                                                   // 100
                                                                                                                       // 101
Template.__checkName("_loginButtonsLoggingInPadding");                                                                 // 102
Template["_loginButtonsLoggingInPadding"] = new Template("Template._loginButtonsLoggingInPadding", (function() {       // 103
  var view = this;                                                                                                     // 104
  return Blaze.Unless(function() {                                                                                     // 105
    return Spacebars.call(view.lookup("dropdown"));                                                                    // 106
  }, function() {                                                                                                      // 107
    return [ "\n		\n		", HTML.DIV({                                                                                    // 108
      "class": "login-buttons-padding"                                                                                 // 109
    }, "\n			", HTML.DIV({                                                                                             // 110
      "class": "login-button single-login-button",                                                                     // 111
      style: "visibility: hidden;",                                                                                    // 112
      id: "login-buttons-logout"                                                                                       // 113
    }, HTML.CharRef({                                                                                                  // 114
      html: "&nbsp;",                                                                                                  // 115
      str: " "                                                                                                         // 116
    })), "\n		"), "\n	" ];                                                                                             // 117
  }, function() {                                                                                                      // 118
    return [ "\n		\n		", HTML.DIV({                                                                                    // 119
      "class": "login-buttons-padding"                                                                                 // 120
    }), "\n	" ];                                                                                                       // 121
  });                                                                                                                  // 122
}));                                                                                                                   // 123
                                                                                                                       // 124
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/template.login_buttons_single.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("_loginButtonsLoggedOutSingleLoginButton");                                                       // 2
Template["_loginButtonsLoggedOutSingleLoginButton"] = new Template("Template._loginButtonsLoggedOutSingleLoginButton", (function() {
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("configured"));                                                                  // 6
  }, function() {                                                                                                      // 7
    return [ "\n		", HTML.BUTTON({                                                                                     // 8
      "class": function() {                                                                                            // 9
        return [ "login-button btn btn-block btn-", Spacebars.mustache(view.lookup("capitalizedName")) ];              // 10
      }                                                                                                                // 11
    }, "sign in with ", Blaze.View(function() {                                                                        // 12
      return Spacebars.mustache(view.lookup("capitalizedName"));                                                       // 13
    })), "\n	" ];                                                                                                      // 14
  }, function() {                                                                                                      // 15
    return [ "\n		", HTML.BUTTON({                                                                                     // 16
      "class": "login-button btn btn-block configure-button btn-danger"                                                // 17
    }, "Configure ", Blaze.View(function() {                                                                           // 18
      return Spacebars.mustache(view.lookup("capitalizedName"));                                                       // 19
    }), " Login"), "\n	" ];                                                                                            // 20
  });                                                                                                                  // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
Template.__checkName("_loginButtonsLoggingInSingleLoginButton");                                                       // 24
Template["_loginButtonsLoggingInSingleLoginButton"] = new Template("Template._loginButtonsLoggingInSingleLoginButton", (function() {
  var view = this;                                                                                                     // 26
  return HTML.DIV({                                                                                                    // 27
    "class": "login-text-and-button"                                                                                   // 28
  }, "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsLoggingIn")), "\n	");                                 // 29
}));                                                                                                                   // 30
                                                                                                                       // 31
Template.__checkName("_loginButtonsLoggedInSingleLogoutButton");                                                       // 32
Template["_loginButtonsLoggedInSingleLogoutButton"] = new Template("Template._loginButtonsLoggedInSingleLogoutButton", (function() {
  var view = this;                                                                                                     // 34
  return HTML.LI("\n		", HTML.A({                                                                                      // 35
    href: "#",                                                                                                         // 36
    id: "login-buttons-logout"                                                                                         // 37
  }, Blaze.View(function() {                                                                                           // 38
    return Spacebars.mustache(view.lookup("displayName"));                                                             // 39
  }), " sign Out"), "\n	");                                                                                            // 40
}));                                                                                                                   // 41
                                                                                                                       // 42
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/template.login_buttons_dropdown.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("_loginButtonsLoggedInDropdown");                                                                 // 2
Template["_loginButtonsLoggedInDropdown"] = new Template("Template._loginButtonsLoggedInDropdown", (function() {       // 3
  var view = this;                                                                                                     // 4
  return HTML.LI({                                                                                                     // 5
    id: "login-dropdown-list",                                                                                         // 6
    "class": "dropdown"                                                                                                // 7
  }, "\n		", HTML.A({                                                                                                  // 8
    "class": "dropdown-toggle",                                                                                        // 9
    "data-toggle": "dropdown"                                                                                          // 10
  }, "\n			", Blaze.View(function() {                                                                                  // 11
    return Spacebars.mustache(view.lookup("displayName"));                                                             // 12
  }), "\n			", Spacebars.With(function() {                                                                             // 13
    return Spacebars.call(view.lookup("user_profile_picture"));                                                        // 14
  }, function() {                                                                                                      // 15
    return [ "\n				", HTML.IMG({                                                                                      // 16
      src: function() {                                                                                                // 17
        return Spacebars.mustache(view.lookup("."));                                                                   // 18
      },                                                                                                               // 19
      width: "30px",                                                                                                   // 20
      "class": "img-circular",                                                                                         // 21
      alt: "#"                                                                                                         // 22
    }), "\n			" ];                                                                                                     // 23
  }), "\n			", HTML.Raw('<b class="caret"></b>'), "\n		"), "\n		", HTML.DIV({                                          // 24
    "class": "dropdown-menu col-sm-3"                                                                                  // 25
  }, "\n			", Blaze.If(function() {                                                                                    // 26
    return Spacebars.call(view.lookup("inMessageOnlyFlow"));                                                           // 27
  }, function() {                                                                                                      // 28
    return [ "\n				", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n			" ];                     // 29
  }, function() {                                                                                                      // 30
    return [ "\n				", Blaze.If(function() {                                                                           // 31
      return Spacebars.call(view.lookup("inChangePasswordFlow"));                                                      // 32
    }, function() {                                                                                                    // 33
      return [ "\n					", Spacebars.include(view.lookupTemplate("_loginButtonsChangePassword")), "\n				" ];           // 34
    }, function() {                                                                                                    // 35
      return [ "\n					", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedInDropdownActions")), "\n				" ];  // 36
    }), "\n			" ];                                                                                                     // 37
  }), "\n		"), "\n	");                                                                                                 // 38
}));                                                                                                                   // 39
                                                                                                                       // 40
Template.__checkName("_loginButtonsLoggedInDropdownActions");                                                          // 41
Template["_loginButtonsLoggedInDropdownActions"] = new Template("Template._loginButtonsLoggedInDropdownActions", (function() {
  var view = this;                                                                                                     // 43
  return [ Blaze.If(function() {                                                                                       // 44
    return Spacebars.call(view.lookup("additionalLoggedInDropdownActions"));                                           // 45
  }, function() {                                                                                                      // 46
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsAdditionalLoggedInDropdownActions")), "\n	" ];
  }), "\n\n	", Blaze.If(function() {                                                                                   // 48
    return Spacebars.call(view.lookup("allowChangingPassword"));                                                       // 49
  }, function() {                                                                                                      // 50
    return [ "\n		", HTML.BUTTON({                                                                                     // 51
      "class": "btn btn-default btn-block",                                                                            // 52
      id: "login-buttons-open-change-password"                                                                         // 53
    }, "change password"), "\n	" ];                                                                                    // 54
  }), HTML.Raw('\n\n	<button class="btn btn-block btn-primary" id="login-buttons-logout">sign out</button>') ];        // 55
}));                                                                                                                   // 56
                                                                                                                       // 57
Template.__checkName("_loginButtonsLoggedOutDropdown");                                                                // 58
Template["_loginButtonsLoggedOutDropdown"] = new Template("Template._loginButtonsLoggedOutDropdown", (function() {     // 59
  var view = this;                                                                                                     // 60
  return HTML.LI({                                                                                                     // 61
    id: "login-dropdown-list",                                                                                         // 62
    "class": "dropdown"                                                                                                // 63
  }, "\n		", HTML.A({                                                                                                  // 64
    "class": "dropdown-toggle",                                                                                        // 65
    "data-toggle": "dropdown"                                                                                          // 66
  }, "sign in", Blaze.Unless(function() {                                                                              // 67
    return Spacebars.call(view.lookup("forbidClientAccountCreation"));                                                 // 68
  }, function() {                                                                                                      // 69
    return " / up";                                                                                                    // 70
  }), HTML.Raw('<b class="caret"></b>')), "\n		", HTML.DIV({                                                           // 71
    "class": "dropdown-menu"                                                                                           // 72
  }, "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutAllServices")), "\n		"), "\n	");            // 73
}));                                                                                                                   // 74
                                                                                                                       // 75
Template.__checkName("_loginButtonsLoggedOutAllServices");                                                             // 76
Template["_loginButtonsLoggedOutAllServices"] = new Template("Template._loginButtonsLoggedOutAllServices", (function() {
  var view = this;                                                                                                     // 78
  return Blaze.Each(function() {                                                                                       // 79
    return Spacebars.call(view.lookup("services"));                                                                    // 80
  }, function() {                                                                                                      // 81
    return [ "\n	", Blaze.Unless(function() {                                                                          // 82
      return Spacebars.call(view.lookup("hasPasswordService"));                                                        // 83
    }, function() {                                                                                                    // 84
      return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n	" ];                       // 85
    }), "\n		", Blaze.If(function() {                                                                                  // 86
      return Spacebars.call(view.lookup("isPasswordService"));                                                         // 87
    }, function() {                                                                                                    // 88
      return [ "\n			", Blaze.If(function() {                                                                          // 89
        return Spacebars.call(view.lookup("hasOtherServices"));                                                        // 90
      }, function() {                                                                                                  // 91
        return [ " \n				", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutPasswordServiceSeparator")), "\n			" ];
      }), "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutPasswordService")), "\n		" ];          // 93
    }, function() {                                                                                                    // 94
      return [ "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutSingleLoginButton")), "\n		" ];   // 95
    }), "\n	" ];                                                                                                       // 96
  });                                                                                                                  // 97
}));                                                                                                                   // 98
                                                                                                                       // 99
Template.__checkName("_loginButtonsLoggedOutPasswordServiceSeparator");                                                // 100
Template["_loginButtonsLoggedOutPasswordServiceSeparator"] = new Template("Template._loginButtonsLoggedOutPasswordServiceSeparator", (function() {
  var view = this;                                                                                                     // 102
  return HTML.Raw('<div class="or">\n		<span class="hline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n		<span class="or-text">or</span>\n		<span class="hline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n	</div>');
}));                                                                                                                   // 104
                                                                                                                       // 105
Template.__checkName("_loginButtonsLoggedOutPasswordService");                                                         // 106
Template["_loginButtonsLoggedOutPasswordService"] = new Template("Template._loginButtonsLoggedOutPasswordService", (function() {
  var view = this;                                                                                                     // 108
  return Blaze.If(function() {                                                                                         // 109
    return Spacebars.call(view.lookup("inForgotPasswordFlow"));                                                        // 110
  }, function() {                                                                                                      // 111
    return [ "\n		", Spacebars.include(view.lookupTemplate("_forgotPasswordForm")), "\n	" ];                           // 112
  }, function() {                                                                                                      // 113
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n		", Blaze.Each(function() {  // 114
      return Spacebars.call(view.lookup("fields"));                                                                    // 115
    }, function() {                                                                                                    // 116
      return [ "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsFormField")), "\n		" ];                    // 117
    }), "\n		", HTML.BUTTON({                                                                                          // 118
      "class": "btn btn-primary col-sm-12",                                                                            // 119
      id: "login-buttons-password",                                                                                    // 120
      type: "button"                                                                                                   // 121
    }, "\n			", Blaze.If(function() {                                                                                  // 122
      return Spacebars.call(view.lookup("inSignupFlow"));                                                              // 123
    }, function() {                                                                                                    // 124
      return "\n				create\n			";                                                                                      // 125
    }, function() {                                                                                                    // 126
      return "\n				sign in\n			";                                                                                     // 127
    }), "\n		"), "\n		", Blaze.If(function() {                                                                         // 128
      return Spacebars.call(view.lookup("inLoginFlow"));                                                               // 129
    }, function() {                                                                                                    // 130
      return [ "\n			", HTML.DIV({                                                                                     // 131
        id: "login-other-options"                                                                                      // 132
      }, "\n			", Blaze.If(function() {                                                                                // 133
        return Spacebars.call(view.lookup("showForgotPasswordLink"));                                                  // 134
      }, function() {                                                                                                  // 135
        return [ "\n				", HTML.A({                                                                                    // 136
          id: "forgot-password-link",                                                                                  // 137
          "class": "pull-left"                                                                                         // 138
        }, "forgot password?"), "\n			" ];                                                                             // 139
      }), "\n			", Blaze.If(function() {                                                                               // 140
        return Spacebars.call(view.lookup("showCreateAccountLink"));                                                   // 141
      }, function() {                                                                                                  // 142
        return [ "\n				", HTML.A({                                                                                    // 143
          id: "signup-link",                                                                                           // 144
          "class": "pull-right"                                                                                        // 145
        }, "create account"), "\n			" ];                                                                               // 146
      }), "\n			"), "\n		" ];                                                                                          // 147
    }), "\n		", Blaze.If(function() {                                                                                  // 148
      return Spacebars.call(view.lookup("inSignupFlow"));                                                              // 149
    }, function() {                                                                                                    // 150
      return [ "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsBackToLoginLink")), "\n		" ];              // 151
    }), "\n	" ];                                                                                                       // 152
  });                                                                                                                  // 153
}));                                                                                                                   // 154
                                                                                                                       // 155
Template.__checkName("_forgotPasswordForm");                                                                           // 156
Template["_forgotPasswordForm"] = new Template("Template._forgotPasswordForm", (function() {                           // 157
  var view = this;                                                                                                     // 158
  return HTML.DIV({                                                                                                    // 159
    "class": "login-form"                                                                                              // 160
  }, "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), HTML.Raw('\n		<div id="forgot-password-email-label-and-input"> \n			<input id="forgot-password-email" type="email" placeholder="E-mail" class="form-control">\n		</div>\n		<button class="btn btn-primary login-button-form-submit col-sm-12" id="login-buttons-forgot-password">reset password</button>\n		'), Spacebars.include(view.lookupTemplate("_loginButtonsBackToLoginLink")), "\n	");
}));                                                                                                                   // 162
                                                                                                                       // 163
Template.__checkName("_loginButtonsBackToLoginLink");                                                                  // 164
Template["_loginButtonsBackToLoginLink"] = new Template("Template._loginButtonsBackToLoginLink", (function() {         // 165
  var view = this;                                                                                                     // 166
  return HTML.Raw('<button id="back-to-login-link" class="btn btn-default col-sm-12">cancel</button>');                // 167
}));                                                                                                                   // 168
                                                                                                                       // 169
Template.__checkName("_loginButtonsFormField");                                                                        // 170
Template["_loginButtonsFormField"] = new Template("Template._loginButtonsFormField", (function() {                     // 171
  var view = this;                                                                                                     // 172
  return Blaze.If(function() {                                                                                         // 173
    return Spacebars.call(view.lookup("visible"));                                                                     // 174
  }, function() {                                                                                                      // 175
    return [ "\n		", HTML.INPUT({                                                                                      // 176
      id: function() {                                                                                                 // 177
        return [ "login-", Spacebars.mustache(view.lookup("fieldName")) ];                                             // 178
      },                                                                                                               // 179
      type: function() {                                                                                               // 180
        return Spacebars.mustache(view.lookup("inputType"));                                                           // 181
      },                                                                                                               // 182
      placeholder: function() {                                                                                        // 183
        return Spacebars.mustache(view.lookup("fieldLabel"));                                                          // 184
      },                                                                                                               // 185
      "class": "form-control"                                                                                          // 186
    }), "\n	" ];                                                                                                       // 187
  });                                                                                                                  // 188
}));                                                                                                                   // 189
                                                                                                                       // 190
Template.__checkName("_loginButtonsChangePassword");                                                                   // 191
Template["_loginButtonsChangePassword"] = new Template("Template._loginButtonsChangePassword", (function() {           // 192
  var view = this;                                                                                                     // 193
  return [ Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n	", Blaze.Each(function() {             // 194
    return Spacebars.call(view.lookup("fields"));                                                                      // 195
  }, function() {                                                                                                      // 196
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsFormField")), "\n	" ];                        // 197
  }), HTML.Raw('\n	<button class="btn btn-primary" id="login-buttons-do-change-password">change password</button>\n	<button class="btn btn-default" id="login-buttons-cancel-change-password">cancel</button>') ];
}));                                                                                                                   // 199
                                                                                                                       // 200
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/template.login_buttons_dialogs.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.body.addContent((function() {                                                                                 // 2
  var view = this;                                                                                                     // 3
  return [ Spacebars.include(view.lookupTemplate("_resetPasswordDialog")), "\n	", Spacebars.include(view.lookupTemplate("_enrollAccountDialog")), "\n	", Spacebars.include(view.lookupTemplate("_justVerifiedEmailDialog")), "\n	", Spacebars.include(view.lookupTemplate("_configureLoginServiceDialog")), HTML.Raw("\n\n	<!-- if we're not showing a dropdown, we need some other place to show messages -->\n	"), Spacebars.include(view.lookupTemplate("_loginButtonsMessagesDialog")) ];
}));                                                                                                                   // 5
Meteor.startup(Template.body.renderToDocument);                                                                        // 6
                                                                                                                       // 7
Template.__checkName("_resetPasswordDialog");                                                                          // 8
Template["_resetPasswordDialog"] = new Template("Template._resetPasswordDialog", (function() {                         // 9
  var view = this;                                                                                                     // 10
  return Blaze.If(function() {                                                                                         // 11
    return Spacebars.call(view.lookup("inResetPasswordFlow"));                                                         // 12
  }, function() {                                                                                                      // 13
    return [ "\n		", HTML.DIV({                                                                                        // 14
      "class": "modal",                                                                                                // 15
      id: "login-buttons-reset-password-modal"                                                                         // 16
    }, "\n			", HTML.DIV({                                                                                             // 17
      "class": "modal-dialog"                                                                                          // 18
    }, "\n				", HTML.DIV({                                                                                            // 19
      "class": "modal-content"                                                                                         // 20
    }, "\n					", HTML.DIV({                                                                                           // 21
      "class": "modal-header"                                                                                          // 22
    }, "\n						", HTML.BUTTON({                                                                                       // 23
      type: "button",                                                                                                  // 24
      "class": "close",                                                                                                // 25
      "data-dismiss": "modal",                                                                                         // 26
      "aria-hidden": "true"                                                                                            // 27
    }, HTML.CharRef({                                                                                                  // 28
      html: "&times;",                                                                                                 // 29
      str: "×"                                                                                                         // 30
    })), "\n						", HTML.H4({                                                                                         // 31
      "class": "modal-title"                                                                                           // 32
    }, "reset your password"), "\n					"), "\n					", HTML.DIV({                                                       // 33
      "class": "modal-body"                                                                                            // 34
    }, "\n						", HTML.INPUT({                                                                                        // 35
      id: "reset-password-new-password",                                                                               // 36
      "class": "form-control",                                                                                         // 37
      type: "password",                                                                                                // 38
      placeholder: "New Password"                                                                                      // 39
    }), "\n						", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n					"), "\n					", HTML.DIV({ // 40
      "class": "modal-footer"                                                                                          // 41
    }, "\n						", HTML.A({                                                                                            // 42
      "class": "btn btn-default",                                                                                      // 43
      id: "login-buttons-cancel-reset-password"                                                                        // 44
    }, "close"), "\n						", HTML.BUTTON({                                                                             // 45
      "class": "btn btn-primary",                                                                                      // 46
      id: "login-buttons-reset-password-button"                                                                        // 47
    }, "\n							set password\n						"), "\n					"), "\n				"), HTML.Comment(" /.modal-content "), "\n			"), HTML.Comment(" /.modal-dalog "), "\n		"), HTML.Comment(" /.modal "), "\n	" ];
  });                                                                                                                  // 49
}));                                                                                                                   // 50
                                                                                                                       // 51
Template.__checkName("_enrollAccountDialog");                                                                          // 52
Template["_enrollAccountDialog"] = new Template("Template._enrollAccountDialog", (function() {                         // 53
  var view = this;                                                                                                     // 54
  return Blaze.If(function() {                                                                                         // 55
    return Spacebars.call(view.lookup("inEnrollAccountFlow"));                                                         // 56
  }, function() {                                                                                                      // 57
    return [ "\n		", HTML.DIV({                                                                                        // 58
      "class": "modal",                                                                                                // 59
      id: "login-buttons-enroll-account-modal"                                                                         // 60
    }, "\n			", HTML.DIV({                                                                                             // 61
      "class": "modal-dialog"                                                                                          // 62
    }, "\n				", HTML.DIV({                                                                                            // 63
      "class": "modal-content"                                                                                         // 64
    }, "\n					", HTML.DIV({                                                                                           // 65
      "class": "modal-header"                                                                                          // 66
    }, "\n						", HTML.BUTTON({                                                                                       // 67
      type: "button",                                                                                                  // 68
      "class": "close",                                                                                                // 69
      "data-dismiss": "modal",                                                                                         // 70
      "aria-hidden": "true"                                                                                            // 71
    }, HTML.CharRef({                                                                                                  // 72
      html: "&times;",                                                                                                 // 73
      str: "×"                                                                                                         // 74
    })), "\n						", HTML.H4({                                                                                         // 75
      "class": "modal-title"                                                                                           // 76
    }, "choose a password"), "\n					"), "\n					", HTML.DIV({                                                         // 77
      "class": "modal-body"                                                                                            // 78
    }, "\n						", HTML.INPUT({                                                                                        // 79
      id: "enroll-account-password",                                                                                   // 80
      "class": "form-control",                                                                                         // 81
      type: "password",                                                                                                // 82
      placeholder: "New Password"                                                                                      // 83
    }), "\n						", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n					"), "\n					", HTML.DIV({ // 84
      "class": "modal-footer"                                                                                          // 85
    }, "\n						", HTML.A({                                                                                            // 86
      "class": "btn btn-default",                                                                                      // 87
      id: "login-buttons-cancel-enroll-account-button"                                                                 // 88
    }, "close"), "\n						", HTML.BUTTON({                                                                             // 89
      "class": "btn btn-primary",                                                                                      // 90
      id: "login-buttons-enroll-account-button"                                                                        // 91
    }, "\n							set password\n						"), "\n					"), "\n				"), HTML.Comment(" /.modal-content "), "\n			"), HTML.Comment(" /.modal-dalog "), "\n		"), HTML.Comment(" /.modal "), "\n	" ];
  });                                                                                                                  // 93
}));                                                                                                                   // 94
                                                                                                                       // 95
Template.__checkName("_justVerifiedEmailDialog");                                                                      // 96
Template["_justVerifiedEmailDialog"] = new Template("Template._justVerifiedEmailDialog", (function() {                 // 97
  var view = this;                                                                                                     // 98
  return Blaze.If(function() {                                                                                         // 99
    return Spacebars.call(view.lookup("visible"));                                                                     // 100
  }, function() {                                                                                                      // 101
    return [ "\n		", HTML.DIV({                                                                                        // 102
      "class": "modal",                                                                                                // 103
      id: "login-buttons-email-address-verified-modal"                                                                 // 104
    }, "\n			", HTML.DIV({                                                                                             // 105
      "class": "modal-dialog"                                                                                          // 106
    }, "\n				", HTML.DIV({                                                                                            // 107
      "class": "modal-content"                                                                                         // 108
    }, "\n					", HTML.DIV({                                                                                           // 109
      "class": "modal-body"                                                                                            // 110
    }, "\n						", HTML.H4(HTML.B("email address verified")), "\n					"), "\n					", HTML.DIV({                        // 111
      "class": "modal-footer"                                                                                          // 112
    }, "\n						", HTML.BUTTON({                                                                                       // 113
      "class": "btn btn-info login-button",                                                                            // 114
      id: "just-verified-dismiss-button",                                                                              // 115
      "data-dismiss": "modal"                                                                                          // 116
    }, "dismiss"), "\n					"), "\n				"), "\n			"), "\n		"), "\n	" ];                                                  // 117
  });                                                                                                                  // 118
}));                                                                                                                   // 119
                                                                                                                       // 120
Template.__checkName("_configureLoginServiceDialog");                                                                  // 121
Template["_configureLoginServiceDialog"] = new Template("Template._configureLoginServiceDialog", (function() {         // 122
  var view = this;                                                                                                     // 123
  return Blaze.If(function() {                                                                                         // 124
    return Spacebars.call(view.lookup("visible"));                                                                     // 125
  }, function() {                                                                                                      // 126
    return [ "\n	", HTML.DIV({                                                                                         // 127
      "class": "modal",                                                                                                // 128
      id: "configure-login-service-dialog-modal"                                                                       // 129
    }, "\n			", HTML.DIV({                                                                                             // 130
      "class": "modal-dialog"                                                                                          // 131
    }, "\n					", HTML.DIV({                                                                                           // 132
      "class": "modal-content"                                                                                         // 133
    }, "\n							", HTML.DIV({                                                                                         // 134
      "class": "modal-header"                                                                                          // 135
    }, "\n									", HTML.H4({                                                                                        // 136
      "class": "modal-title"                                                                                           // 137
    }, "Configure Service"), "\n							"), "\n							", HTML.DIV({                                                     // 138
      "class": "modal-body"                                                                                            // 139
    }, "\n									", HTML.DIV({                                                                                       // 140
      id: "configure-login-service-dialog",                                                                            // 141
      "class": "accounts-dialog accounts-centered-dialog"                                                              // 142
    }, "\n											", Spacebars.include(view.lookupTemplate("configurationSteps")), "\n											", HTML.P("\n											Now, copy over some details.\n											"), "\n											", HTML.P("\n											", HTML.TABLE("\n													", HTML.COLGROUP("\n															", HTML.COL({
      span: "1",                                                                                                       // 144
      "class": "configuration_labels"                                                                                  // 145
    }), "\n															", HTML.COL({                                                                                // 146
      span: "1",                                                                                                       // 147
      "class": "configuration_inputs"                                                                                  // 148
    }), "\n													"), "\n													", Blaze.Each(function() {                                                 // 149
      return Spacebars.call(view.lookup("configurationFields"));                                                       // 150
    }, function() {                                                                                                    // 151
      return [ "\n													", HTML.TR("\n															", HTML.TD("\n																	", HTML.LABEL({             // 152
        "for": function() {                                                                                            // 153
          return [ "configure-login-service-dialog-", Spacebars.mustache(view.lookup("property")) ];                   // 154
        }                                                                                                              // 155
      }, Blaze.View(function() {                                                                                       // 156
        return Spacebars.mustache(view.lookup("label"));                                                               // 157
      })), "\n															"), "\n															", HTML.TD("\n																	", HTML.INPUT({                      // 158
        id: function() {                                                                                               // 159
          return [ "configure-login-service-dialog-", Spacebars.mustache(view.lookup("property")) ];                   // 160
        },                                                                                                             // 161
        type: "text"                                                                                                   // 162
      }), "\n															"), "\n													"), "\n													" ];                                               // 163
    }), "\n											"), "\n											"), "\n									"), "\n							"), "\n							", HTML.DIV({                      // 164
      "class": "modal-footer new-section"                                                                              // 165
    }, "\n									", HTML.DIV({                                                                                       // 166
      "class": "login-button btn btn-danger configure-login-service-dismiss-button"                                    // 167
    }, "\n											I'll do this later\n									"), "\n									", HTML.DIV({                                        // 168
      "class": function() {                                                                                            // 169
        return [ "login-button login-button-configure btn btn-success ", Blaze.If(function() {                         // 170
          return Spacebars.call(view.lookup("saveDisabled"));                                                          // 171
        }, function() {                                                                                                // 172
          return "login-button-disabled";                                                                              // 173
        }) ];                                                                                                          // 174
      },                                                                                                               // 175
      id: "configure-login-service-dialog-save-configuration"                                                          // 176
    }, "\n											Save Configuration\n									"), "\n							"), "\n					"), "\n			"), "\n	"), "\n	" ];             // 177
  });                                                                                                                  // 178
}));                                                                                                                   // 179
                                                                                                                       // 180
Template.__checkName("_loginButtonsMessagesDialog");                                                                   // 181
Template["_loginButtonsMessagesDialog"] = new Template("Template._loginButtonsMessagesDialog", (function() {           // 182
  var view = this;                                                                                                     // 183
  return Blaze.If(function() {                                                                                         // 184
    return Spacebars.call(view.lookup("visible"));                                                                     // 185
  }, function() {                                                                                                      // 186
    return [ "\n		", HTML.DIV({                                                                                        // 187
      "class": "accounts-dialog accounts-centered-dialog",                                                             // 188
      id: "login-buttons-message-dialog"                                                                               // 189
    }, "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n			", HTML.DIV({                   // 190
      "class": "login-button",                                                                                         // 191
      id: "messages-dialog-dismiss-button"                                                                             // 192
    }, "Dismiss"), "\n		"), "\n	" ];                                                                                   // 193
  });                                                                                                                  // 194
}));                                                                                                                   // 195
                                                                                                                       // 196
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/login_buttons_session.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
	var VALID_KEYS = [                                                                                                    // 2
		'dropdownVisible',                                                                                                   // 3
                                                                                                                       // 4
		// XXX consider replacing these with one key that has an enum for values.                                            // 5
		'inSignupFlow',                                                                                                      // 6
		'inForgotPasswordFlow',                                                                                              // 7
		'inChangePasswordFlow',                                                                                              // 8
		'inMessageOnlyFlow',                                                                                                 // 9
                                                                                                                       // 10
		'errorMessage',                                                                                                      // 11
		'infoMessage',                                                                                                       // 12
                                                                                                                       // 13
		// dialogs with messages (info and error)                                                                            // 14
		'resetPasswordToken',                                                                                                // 15
		'enrollAccountToken',                                                                                                // 16
		'justVerifiedEmail',                                                                                                 // 17
                                                                                                                       // 18
		'configureLoginServiceDialogVisible',                                                                                // 19
		'configureLoginServiceDialogServiceName',                                                                            // 20
		'configureLoginServiceDialogSaveDisabled'                                                                            // 21
	];                                                                                                                    // 22
                                                                                                                       // 23
	var validateKey = function (key) {                                                                                    // 24
		if (!_.contains(VALID_KEYS, key))                                                                                    // 25
			throw new Error("Invalid key in loginButtonsSession: " + key);                                                      // 26
	};                                                                                                                    // 27
                                                                                                                       // 28
	var KEY_PREFIX = "Meteor.loginButtons.";                                                                              // 29
                                                                                                                       // 30
	// XXX we should have a better pattern for code private to a package like this one                                    // 31
	Accounts._loginButtonsSession = {                                                                                     // 32
		set: function(key, value) {                                                                                          // 33
			validateKey(key);                                                                                                   // 34
			if (_.contains(['errorMessage', 'infoMessage'], key))                                                               // 35
				throw new Error("Don't set errorMessage or infoMessage directly. Instead, use errorMessage() or infoMessage().");  // 36
                                                                                                                       // 37
			this._set(key, value);                                                                                              // 38
		},                                                                                                                   // 39
                                                                                                                       // 40
		_set: function(key, value) {                                                                                         // 41
			Session.set(KEY_PREFIX + key, value);                                                                               // 42
		},                                                                                                                   // 43
                                                                                                                       // 44
		get: function(key) {                                                                                                 // 45
			validateKey(key);                                                                                                   // 46
			return Session.get(KEY_PREFIX + key);                                                                               // 47
		},                                                                                                                   // 48
                                                                                                                       // 49
		closeDropdown: function () {                                                                                         // 50
			this.set('inSignupFlow', false);                                                                                    // 51
			this.set('inForgotPasswordFlow', false);                                                                            // 52
			this.set('inChangePasswordFlow', false);                                                                            // 53
			this.set('inMessageOnlyFlow', false);                                                                               // 54
			this.set('dropdownVisible', false);                                                                                 // 55
			this.resetMessages();                                                                                               // 56
		},                                                                                                                   // 57
                                                                                                                       // 58
		infoMessage: function(message) {                                                                                     // 59
			this._set("errorMessage", null);                                                                                    // 60
			this._set("infoMessage", message);                                                                                  // 61
			this.ensureMessageVisible();                                                                                        // 62
		},                                                                                                                   // 63
                                                                                                                       // 64
		errorMessage: function(message) {                                                                                    // 65
			this._set("errorMessage", message);                                                                                 // 66
			this._set("infoMessage", null);                                                                                     // 67
			this.ensureMessageVisible();                                                                                        // 68
		},                                                                                                                   // 69
                                                                                                                       // 70
		// is there a visible dialog that shows messages (info and error)                                                    // 71
		isMessageDialogVisible: function () {                                                                                // 72
			return this.get('resetPasswordToken') ||                                                                            // 73
				this.get('enrollAccountToken') ||                                                                                  // 74
				this.get('justVerifiedEmail');                                                                                     // 75
		},                                                                                                                   // 76
                                                                                                                       // 77
		// ensure that somethings displaying a message (info or error) is                                                    // 78
		// visible.  if a dialog with messages is open, do nothing;                                                          // 79
		// otherwise open the dropdown.                                                                                      // 80
		//                                                                                                                   // 81
		// notably this doesn't matter when only displaying a single login                                                   // 82
		// button since then we have an explicit message dialog                                                              // 83
		// (_loginButtonsMessageDialog), and dropdownVisible is ignored in                                                   // 84
		// this case.                                                                                                        // 85
		ensureMessageVisible: function () {                                                                                  // 86
			if (!this.isMessageDialogVisible())                                                                                 // 87
				this.set("dropdownVisible", true);                                                                                 // 88
		},                                                                                                                   // 89
                                                                                                                       // 90
		resetMessages: function () {                                                                                         // 91
			this._set("errorMessage", null);                                                                                    // 92
			this._set("infoMessage", null);                                                                                     // 93
		},                                                                                                                   // 94
                                                                                                                       // 95
		configureService: function (name) {                                                                                  // 96
			this.set('configureLoginServiceDialogVisible', true);                                                               // 97
			this.set('configureLoginServiceDialogServiceName', name);                                                           // 98
			this.set('configureLoginServiceDialogSaveDisabled', true);                                                          // 99
			setTimeout(function(){                                                                                              // 100
				$('#configure-login-service-dialog-modal').modal();                                                                // 101
			}, 500)                                                                                                             // 102
		}                                                                                                                    // 103
	};                                                                                                                    // 104
}) ();                                                                                                                 // 105
                                                                                                                       // 106
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/login_buttons.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {                                                                                                          // 1
	if (!Accounts._loginButtons)                                                                                          // 2
		Accounts._loginButtons = {};                                                                                         // 3
                                                                                                                       // 4
	// for convenience                                                                                                    // 5
	var loginButtonsSession = Accounts._loginButtonsSession;                                                              // 6
                                                                                                                       // 7
	UI.registerHelper("loginButtons", function () {                                                                       // 8
		return Template._loginButtons;                                                                                       // 9
	});                                                                                                                   // 10
                                                                                                                       // 11
	// shared between dropdown and single mode                                                                            // 12
	Template._loginButtons.events({                                                                                       // 13
		'click #login-buttons-logout': function() {                                                                          // 14
			Meteor.logout(function() {                                                                                          // 15
				loginButtonsSession.closeDropdown();                                                                               // 16
			});                                                                                                                 // 17
		}                                                                                                                    // 18
	});                                                                                                                   // 19
                                                                                                                       // 20
	//                                                                                                                    // 21
	// loginButtonLoggedOut template                                                                                      // 22
	//                                                                                                                    // 23
                                                                                                                       // 24
	Template._loginButtonsLoggedOut.dropdown = function() {                                                               // 25
		return Accounts._loginButtons.dropdown();                                                                            // 26
	};                                                                                                                    // 27
                                                                                                                       // 28
	Template._loginButtonsLoggedOut.services = function() {                                                               // 29
		return Accounts._loginButtons.getLoginServices();                                                                    // 30
	};                                                                                                                    // 31
                                                                                                                       // 32
	Template._loginButtonsLoggedOut.singleService = function() {                                                          // 33
		var services = Accounts._loginButtons.getLoginServices();                                                            // 34
		if (services.length !== 1)                                                                                           // 35
			throw new Error(                                                                                                    // 36
				"Shouldn't be rendering this template with more than one configured service");                                     // 37
		return services[0];                                                                                                  // 38
	};                                                                                                                    // 39
                                                                                                                       // 40
	Template._loginButtonsLoggedOut.configurationLoaded = function() {                                                    // 41
		return Accounts.loginServicesConfigured();                                                                           // 42
	};                                                                                                                    // 43
                                                                                                                       // 44
                                                                                                                       // 45
	//                                                                                                                    // 46
	// loginButtonsLoggedIn template                                                                                      // 47
	//                                                                                                                    // 48
                                                                                                                       // 49
	// decide whether we should show a dropdown rather than a row of                                                      // 50
	// buttons                                                                                                            // 51
	Template._loginButtonsLoggedIn.dropdown = function() {                                                                // 52
		return Accounts._loginButtons.dropdown();                                                                            // 53
	};                                                                                                                    // 54
                                                                                                                       // 55
	Template._loginButtonsLoggedIn.displayName = function() {                                                             // 56
		return Accounts._loginButtons.displayName();                                                                         // 57
	};                                                                                                                    // 58
                                                                                                                       // 59
                                                                                                                       // 60
                                                                                                                       // 61
	//                                                                                                                    // 62
	// loginButtonsMessage template                                                                                       // 63
	//                                                                                                                    // 64
                                                                                                                       // 65
	Template._loginButtonsMessages.errorMessage = function() {                                                            // 66
		return loginButtonsSession.get('errorMessage');                                                                      // 67
	};                                                                                                                    // 68
                                                                                                                       // 69
	Template._loginButtonsMessages.infoMessage = function() {                                                             // 70
		return loginButtonsSession.get('infoMessage');                                                                       // 71
	};                                                                                                                    // 72
                                                                                                                       // 73
	//                                                                                                                    // 74
	// loginButtonsLoggingInPadding template                                                                              // 75
	//                                                                                                                    // 76
                                                                                                                       // 77
	Template._loginButtonsLoggingInPadding.dropdown = function() {                                                        // 78
		return Accounts._loginButtons.dropdown();                                                                            // 79
	};                                                                                                                    // 80
                                                                                                                       // 81
	//                                                                                                                    // 82
	// helpers                                                                                                            // 83
	//                                                                                                                    // 84
                                                                                                                       // 85
	Accounts._loginButtons.displayName = function() {                                                                     // 86
		var user = Meteor.user();                                                                                            // 87
		if (!user)                                                                                                           // 88
			return '';                                                                                                          // 89
                                                                                                                       // 90
		if (user.profile && user.profile.name)                                                                               // 91
			return user.profile.name;                                                                                           // 92
		if (user.username)                                                                                                   // 93
			return user.username;                                                                                               // 94
		if (user.emails && user.emails[0] && user.emails[0].address)                                                         // 95
			return user.emails[0].address;                                                                                      // 96
                                                                                                                       // 97
		return '';                                                                                                           // 98
	};                                                                                                                    // 99
                                                                                                                       // 100
	Accounts._loginButtons.getLoginServices = function() {                                                                // 101
		// First look for OAuth services.                                                                                    // 102
		var services = Package['accounts-oauth'] ? Accounts.oauth.serviceNames() : [];                                       // 103
                                                                                                                       // 104
		// Be equally kind to all login services. This also preserves                                                        // 105
		// backwards-compatibility. (But maybe order should be                                                               // 106
		// configurable?)                                                                                                    // 107
		services.sort();                                                                                                     // 108
                                                                                                                       // 109
		// Add password, if it's there; it must come last.                                                                   // 110
		if (this.hasPasswordService())                                                                                       // 111
			services.push('password');                                                                                          // 112
                                                                                                                       // 113
		return _.map(services, function(name) {                                                                              // 114
			return {                                                                                                            // 115
				name: name                                                                                                         // 116
			};                                                                                                                  // 117
		});                                                                                                                  // 118
	};                                                                                                                    // 119
                                                                                                                       // 120
	Accounts._loginButtons.hasPasswordService = function() {                                                              // 121
		return !!Package['accounts-password'];                                                                               // 122
	};                                                                                                                    // 123
                                                                                                                       // 124
	Accounts._loginButtons.dropdown = function() {                                                                        // 125
		return this.hasPasswordService() || Accounts._loginButtons.getLoginServices().length > 1;                            // 126
	};                                                                                                                    // 127
                                                                                                                       // 128
	// XXX improve these. should this be in accounts-password instead?                                                    // 129
	//                                                                                                                    // 130
	// XXX these will become configurable, and will be validated on                                                       // 131
	// the server as well.                                                                                                // 132
	Accounts._loginButtons.validateUsername = function(username) {                                                        // 133
		if (username.length >= 3) {                                                                                          // 134
			return true;                                                                                                        // 135
		} else {                                                                                                             // 136
			loginButtonsSession.errorMessage("Username must be at least 3 characters long");                                    // 137
			return false;                                                                                                       // 138
		}                                                                                                                    // 139
	};                                                                                                                    // 140
	Accounts._loginButtons.validateEmail = function(email) {                                                              // 141
		if (Accounts.ui._passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL" && email === '')                           // 142
			return true;                                                                                                        // 143
                                                                                                                       // 144
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                                                                                                       // 146
		if (re.test(email)) {                                                                                                // 147
			return true;                                                                                                        // 148
		} else {                                                                                                             // 149
			loginButtonsSession.errorMessage("Invalid email");                                                                  // 150
			return false;                                                                                                       // 151
		}                                                                                                                    // 152
	};                                                                                                                    // 153
	Accounts._loginButtons.validatePassword = function(password) {                                                        // 154
		if (password.length >= 6) {                                                                                          // 155
			return true;                                                                                                        // 156
		} else {                                                                                                             // 157
			loginButtonsSession.errorMessage("Password must be at least 6 characters long");                                    // 158
			return false;                                                                                                       // 159
		}                                                                                                                    // 160
	};                                                                                                                    // 161
                                                                                                                       // 162
	Accounts._loginButtons.rendered = function () {                                                                       // 163
		debugger;                                                                                                            // 164
	};                                                                                                                    // 165
                                                                                                                       // 166
})();                                                                                                                  // 167
                                                                                                                       // 168
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/login_buttons_single.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
	// for convenience                                                                                                    // 2
	var loginButtonsSession = Accounts._loginButtonsSession;                                                              // 3
                                                                                                                       // 4
	Template._loginButtonsLoggedOutSingleLoginButton.events({                                                             // 5
		'click .login-button': function () {                                                                                 // 6
			var serviceName = this.name;                                                                                        // 7
			loginButtonsSession.resetMessages();                                                                                // 8
			var callback = function (err) {                                                                                     // 9
				if (!err) {                                                                                                        // 10
					loginButtonsSession.closeDropdown();                                                                              // 11
				} else if (err instanceof Accounts.LoginCancelledError) {                                                          // 12
					// do nothing                                                                                                     // 13
				} else if (err instanceof Accounts.ConfigError) {                                                                  // 14
					loginButtonsSession.configureService(serviceName);                                                                // 15
				} else {                                                                                                           // 16
					loginButtonsSession.errorMessage(err.reason || "Unknown error");                                                  // 17
				}                                                                                                                  // 18
			};                                                                                                                  // 19
                                                                                                                       // 20
			var loginWithService = Meteor["loginWith" + capitalize(serviceName)];                                               // 21
                                                                                                                       // 22
			var options = {}; // use default scope unless specified                                                             // 23
			if (Accounts.ui._options.requestPermissions[serviceName])                                                           // 24
				options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];                                 // 25
                                                                                                                       // 26
			loginWithService(options, callback);                                                                                // 27
		}                                                                                                                    // 28
	});                                                                                                                   // 29
                                                                                                                       // 30
	Template._loginButtonsLoggedOutSingleLoginButton.configured = function () {                                           // 31
		return !!Accounts.loginServiceConfiguration.findOne({service: this.name});                                           // 32
	};                                                                                                                    // 33
                                                                                                                       // 34
	Template._loginButtonsLoggedOutSingleLoginButton.capitalizedName = function () {                                      // 35
		if (this.name === 'github')                                                                                          // 36
			// XXX we should allow service packages to set their capitalized name                                               // 37
			return 'GitHub';                                                                                                    // 38
		else                                                                                                                 // 39
			return capitalize(this.name);                                                                                       // 40
	};                                                                                                                    // 41
                                                                                                                       // 42
	// XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js                                        // 43
	var capitalize = function(str){                                                                                       // 44
		str = str == null ? '' : String(str);                                                                                // 45
		return str.charAt(0).toUpperCase() + str.slice(1);                                                                   // 46
	};                                                                                                                    // 47
}) ();                                                                                                                 // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/login_buttons_dropdown.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {                                                                                                          // 1
                                                                                                                       // 2
	// for convenience                                                                                                    // 3
	var loginButtonsSession = Accounts._loginButtonsSession;                                                              // 4
                                                                                                                       // 5
	// events shared between loginButtonsLoggedOutDropdown and                                                            // 6
	// loginButtonsLoggedInDropdown                                                                                       // 7
	Template._loginButtons.events({                                                                                       // 8
		'click input': function(event){                                                                                      // 9
			event.stopPropagation();                                                                                            // 10
		},                                                                                                                   // 11
		'click #login-name-link, click #login-sign-in-link': function(event) {                                               // 12
			event.stopPropagation();                                                                                            // 13
			loginButtonsSession.set('dropdownVisible', true);                                                                   // 14
			Meteor.flush();                                                                                                     // 15
		},                                                                                                                   // 16
		'click .login-close': function() {                                                                                   // 17
			loginButtonsSession.closeDropdown();                                                                                // 18
		}                                                                                                                    // 19
	});                                                                                                                   // 20
                                                                                                                       // 21
	Template._loginButtons.toggleDropdown = function() {                                                                  // 22
		toggleDropdown();                                                                                                    // 23
	};                                                                                                                    // 24
                                                                                                                       // 25
	//                                                                                                                    // 26
	// loginButtonsLoggedInDropdown template and related                                                                  // 27
	//                                                                                                                    // 28
                                                                                                                       // 29
	Template._loginButtonsLoggedInDropdown.events({                                                                       // 30
		'click #login-buttons-open-change-password': function(event) {                                                       // 31
			event.stopPropagation();                                                                                            // 32
			loginButtonsSession.resetMessages();                                                                                // 33
			loginButtonsSession.set('inChangePasswordFlow', true);                                                              // 34
			Meteor.flush();                                                                                                     // 35
		}                                                                                                                    // 36
	});                                                                                                                   // 37
                                                                                                                       // 38
	Template._loginButtonsLoggedInDropdown.displayName = function() {                                                     // 39
		return Accounts._loginButtons.displayName();                                                                         // 40
	};                                                                                                                    // 41
                                                                                                                       // 42
	Template._loginButtonsLoggedInDropdown.inChangePasswordFlow = function() {                                            // 43
		return loginButtonsSession.get('inChangePasswordFlow');                                                              // 44
	};                                                                                                                    // 45
                                                                                                                       // 46
	Template._loginButtonsLoggedInDropdown.inMessageOnlyFlow = function() {                                               // 47
		return loginButtonsSession.get('inMessageOnlyFlow');                                                                 // 48
	};                                                                                                                    // 49
                                                                                                                       // 50
	Template._loginButtonsLoggedInDropdown.dropdownVisible = function() {                                                 // 51
		return loginButtonsSession.get('dropdownVisible');                                                                   // 52
	};                                                                                                                    // 53
                                                                                                                       // 54
	Template._loginButtonsLoggedInDropdownActions.allowChangingPassword = function() {                                    // 55
		// it would be more correct to check whether the user has a password set,                                            // 56
		// but in order to do that we'd have to send more data down to the client,                                           // 57
		// and it'd be preferable not to send down the entire service.password document.                                     // 58
		//                                                                                                                   // 59
		// instead we use the heuristic: if the user has a username or email set.                                            // 60
		var user = Meteor.user();                                                                                            // 61
		return user.username || (user.emails && user.emails[0] && user.emails[0].address);                                   // 62
	};                                                                                                                    // 63
                                                                                                                       // 64
                                                                                                                       // 65
	Template._loginButtonsLoggedInDropdownActions.additionalLoggedInDropdownActions = function () {                       // 66
	  return Template._loginButtonsAdditionalLoggedInDropdownActions !== undefined;                                       // 67
	};                                                                                                                    // 68
                                                                                                                       // 69
	//                                                                                                                    // 70
	// loginButtonsLoggedOutDropdown template and related                                                                 // 71
	//                                                                                                                    // 72
                                                                                                                       // 73
	Template._loginButtonsLoggedOutDropdown.events({                                                                      // 74
		'click #login-buttons-password': function(event) {                                                                   // 75
			event.stopPropagation();                                                                                            // 76
			loginOrSignup();                                                                                                    // 77
		},                                                                                                                   // 78
                                                                                                                       // 79
		'keypress #forgot-password-email': function(event) {                                                                 // 80
			event.stopPropagation();                                                                                            // 81
			if (event.keyCode === 13)                                                                                           // 82
				forgotPassword();                                                                                                  // 83
		},                                                                                                                   // 84
                                                                                                                       // 85
		'click #login-buttons-forgot-password': function(event) {                                                            // 86
			event.stopPropagation();                                                                                            // 87
			forgotPassword();                                                                                                   // 88
		},                                                                                                                   // 89
                                                                                                                       // 90
		'click #signup-link': function(event) {                                                                              // 91
			event.stopPropagation();                                                                                            // 92
			loginButtonsSession.resetMessages();                                                                                // 93
                                                                                                                       // 94
			// store values of fields before swtiching to the signup form                                                       // 95
			var username = trimmedElementValueById('login-username');                                                           // 96
			var email = trimmedElementValueById('login-email');                                                                 // 97
			var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                           // 98
			// notably not trimmed. a password could (?) start or end with a space                                              // 99
			var password = elementValueById('login-password');                                                                  // 100
                                                                                                                       // 101
			loginButtonsSession.set('inSignupFlow', true);                                                                      // 102
			loginButtonsSession.set('inForgotPasswordFlow', false);                                                             // 103
                                                                                                                       // 104
			// force the ui to update so that we have the approprate fields to fill in                                          // 105
			Meteor.flush();                                                                                                     // 106
                                                                                                                       // 107
			// update new fields with appropriate defaults                                                                      // 108
			if (username !== null)                                                                                              // 109
				document.getElementById('login-username').value = username;                                                        // 110
			else if (email !== null)                                                                                            // 111
				document.getElementById('login-email').value = email;                                                              // 112
			else if (usernameOrEmail !== null)                                                                                  // 113
				if (usernameOrEmail.indexOf('@') === -1)                                                                           // 114
					document.getElementById('login-username').value = usernameOrEmail;                                                // 115
				else                                                                                                               // 116
					document.getElementById('login-email').value = usernameOrEmail;                                                   // 117
		},                                                                                                                   // 118
		'click #forgot-password-link': function(event) {                                                                     // 119
			event.stopPropagation();                                                                                            // 120
			loginButtonsSession.resetMessages();                                                                                // 121
                                                                                                                       // 122
			// store values of fields before swtiching to the signup form                                                       // 123
			var email = trimmedElementValueById('login-email');                                                                 // 124
			var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                           // 125
                                                                                                                       // 126
			loginButtonsSession.set('inSignupFlow', false);                                                                     // 127
			loginButtonsSession.set('inForgotPasswordFlow', true);                                                              // 128
                                                                                                                       // 129
			// force the ui to update so that we have the approprate fields to fill in                                          // 130
			Meteor.flush();                                                                                                     // 131
			//toggleDropdown();                                                                                                 // 132
                                                                                                                       // 133
			// update new fields with appropriate defaults                                                                      // 134
			if (email !== null)                                                                                                 // 135
				document.getElementById('forgot-password-email').value = email;                                                    // 136
			else if (usernameOrEmail !== null)                                                                                  // 137
				if (usernameOrEmail.indexOf('@') !== -1)                                                                           // 138
					document.getElementById('forgot-password-email').value = usernameOrEmail;                                         // 139
		},                                                                                                                   // 140
		'click #back-to-login-link': function(event) {                                                                       // 141
			event.stopPropagation();                                                                                            // 142
			loginButtonsSession.resetMessages();                                                                                // 143
                                                                                                                       // 144
			var username = trimmedElementValueById('login-username');                                                           // 145
			var email = trimmedElementValueById('login-email') || trimmedElementValueById('forgot-password-email'); // Ughh. Standardize on names?
                                                                                                                       // 147
			loginButtonsSession.set('inSignupFlow', false);                                                                     // 148
			loginButtonsSession.set('inForgotPasswordFlow', false);                                                             // 149
                                                                                                                       // 150
			// force the ui to update so that we have the approprate fields to fill in                                          // 151
			Meteor.flush();                                                                                                     // 152
                                                                                                                       // 153
			if (document.getElementById('login-username'))                                                                      // 154
				document.getElementById('login-username').value = username;                                                        // 155
			if (document.getElementById('login-email'))                                                                         // 156
				document.getElementById('login-email').value = email;                                                              // 157
			// "login-password" is preserved thanks to the preserve-inputs package                                              // 158
			if (document.getElementById('login-username-or-email'))                                                             // 159
				document.getElementById('login-username-or-email').value = email || username;                                      // 160
		},                                                                                                                   // 161
		'keypress #login-username, keypress #login-email, keypress #login-username-or-email, keypress #login-password, keypress #login-password-again': function(event) {
			if (event.keyCode === 13)                                                                                           // 163
				loginOrSignup();                                                                                                   // 164
		}                                                                                                                    // 165
	});                                                                                                                   // 166
                                                                                                                       // 167
	// additional classes that can be helpful in styling the dropdown                                                     // 168
	Template._loginButtonsLoggedOutDropdown.additionalClasses = function() {                                              // 169
		if (!Accounts.password) {                                                                                            // 170
			return false;                                                                                                       // 171
		} else {                                                                                                             // 172
			if (loginButtonsSession.get('inSignupFlow')) {                                                                      // 173
				return 'login-form-create-account';                                                                                // 174
			} else if (loginButtonsSession.get('inForgotPasswordFlow')) {                                                       // 175
				return 'login-form-forgot-password';                                                                               // 176
			} else {                                                                                                            // 177
				return 'login-form-sign-in';                                                                                       // 178
			}                                                                                                                   // 179
		}                                                                                                                    // 180
	};                                                                                                                    // 181
                                                                                                                       // 182
	Template._loginButtonsLoggedOutDropdown.dropdownVisible = function() {                                                // 183
		return loginButtonsSession.get('dropdownVisible');                                                                   // 184
	};                                                                                                                    // 185
                                                                                                                       // 186
	Template._loginButtonsLoggedOutDropdown.hasPasswordService = function() {                                             // 187
		return Accounts._loginButtons.hasPasswordService();                                                                  // 188
	};                                                                                                                    // 189
                                                                                                                       // 190
	Template._loginButtonsLoggedOutDropdown.forbidClientAccountCreation = function() {                                    // 191
		return Accounts._options.forbidClientAccountCreation;                                                                // 192
	};                                                                                                                    // 193
                                                                                                                       // 194
	Template._loginButtonsLoggedOutAllServices.services = function() {                                                    // 195
		return Accounts._loginButtons.getLoginServices();                                                                    // 196
	};                                                                                                                    // 197
                                                                                                                       // 198
	Template._loginButtonsLoggedOutAllServices.isPasswordService = function() {                                           // 199
		return this.name === 'password';                                                                                     // 200
	};                                                                                                                    // 201
                                                                                                                       // 202
	Template._loginButtonsLoggedOutAllServices.hasOtherServices = function() {                                            // 203
		return Accounts._loginButtons.getLoginServices().length > 1;                                                         // 204
	};                                                                                                                    // 205
                                                                                                                       // 206
	Template._loginButtonsLoggedOutAllServices.hasPasswordService = function() {                                          // 207
		return Accounts._loginButtons.hasPasswordService();                                                                  // 208
	};                                                                                                                    // 209
                                                                                                                       // 210
	Template._loginButtonsLoggedOutPasswordService.fields = function() {                                                  // 211
		var loginFields = [{                                                                                                 // 212
			fieldName: 'username-or-email',                                                                                     // 213
			fieldLabel: 'Username or Email',                                                                                    // 214
			visible: function() {                                                                                               // 215
				return _.contains(                                                                                                 // 216
					["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL"],                              // 217
					Accounts.ui._passwordSignupFields());                                                                             // 218
			}                                                                                                                   // 219
		}, {                                                                                                                 // 220
			fieldName: 'username',                                                                                              // 221
			fieldLabel: 'Username',                                                                                             // 222
			visible: function() {                                                                                               // 223
				return Accounts.ui._passwordSignupFields() === "USERNAME_ONLY";                                                    // 224
			}                                                                                                                   // 225
		}, {                                                                                                                 // 226
			fieldName: 'email',                                                                                                 // 227
			fieldLabel: 'Email',                                                                                                // 228
			inputType: 'email',                                                                                                 // 229
			visible: function() {                                                                                               // 230
				return Accounts.ui._passwordSignupFields() === "EMAIL_ONLY";                                                       // 231
			}                                                                                                                   // 232
		}, {                                                                                                                 // 233
			fieldName: 'password',                                                                                              // 234
			fieldLabel: 'Password',                                                                                             // 235
			inputType: 'password',                                                                                              // 236
			visible: function() {                                                                                               // 237
				return true;                                                                                                       // 238
			}                                                                                                                   // 239
		}];                                                                                                                  // 240
                                                                                                                       // 241
		var signupFields = [{                                                                                                // 242
			fieldName: 'username',                                                                                              // 243
			fieldLabel: 'Username',                                                                                             // 244
			visible: function() {                                                                                               // 245
				return _.contains(                                                                                                 // 246
					["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],             // 247
					Accounts.ui._passwordSignupFields());                                                                             // 248
			}                                                                                                                   // 249
		}, {                                                                                                                 // 250
			fieldName: 'email',                                                                                                 // 251
			fieldLabel: 'Email',                                                                                                // 252
			inputType: 'email',                                                                                                 // 253
			visible: function() {                                                                                               // 254
				return _.contains(                                                                                                 // 255
					["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "EMAIL_ONLY"],                                               // 256
					Accounts.ui._passwordSignupFields());                                                                             // 257
			}                                                                                                                   // 258
		}, {                                                                                                                 // 259
			fieldName: 'email',                                                                                                 // 260
			fieldLabel: 'Email (optional)',                                                                                     // 261
			inputType: 'email',                                                                                                 // 262
			visible: function() {                                                                                               // 263
				return Accounts.ui._passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL";                                      // 264
			}                                                                                                                   // 265
		}, {                                                                                                                 // 266
			fieldName: 'password',                                                                                              // 267
			fieldLabel: 'Password',                                                                                             // 268
			inputType: 'password',                                                                                              // 269
			visible: function() {                                                                                               // 270
				return true;                                                                                                       // 271
			}                                                                                                                   // 272
		}, {                                                                                                                 // 273
			fieldName: 'password-again',                                                                                        // 274
			fieldLabel: 'Password (again)',                                                                                     // 275
			inputType: 'password',                                                                                              // 276
			visible: function() {                                                                                               // 277
				// No need to make users double-enter their password if                                                            // 278
				// they'll necessarily have an email set, since they can use                                                       // 279
				// the "forgot password" flow.                                                                                     // 280
				return _.contains(                                                                                                 // 281
					["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],                                   // 282
					Accounts.ui._passwordSignupFields());                                                                             // 283
			}                                                                                                                   // 284
		}];                                                                                                                  // 285
                                                                                                                       // 286
		signupFields = Accounts.ui._options.extraSignupFields.concat(signupFields);                                          // 287
                                                                                                                       // 288
		return loginButtonsSession.get('inSignupFlow') ? signupFields : loginFields;                                         // 289
	};                                                                                                                    // 290
                                                                                                                       // 291
	Template._loginButtonsLoggedOutPasswordService.inForgotPasswordFlow = function() {                                    // 292
		return loginButtonsSession.get('inForgotPasswordFlow');                                                              // 293
	};                                                                                                                    // 294
                                                                                                                       // 295
	Template._loginButtonsLoggedOutPasswordService.inLoginFlow = function() {                                             // 296
		return !loginButtonsSession.get('inSignupFlow') && !loginButtonsSession.get('inForgotPasswordFlow');                 // 297
	};                                                                                                                    // 298
                                                                                                                       // 299
	Template._loginButtonsLoggedOutPasswordService.inSignupFlow = function() {                                            // 300
		return loginButtonsSession.get('inSignupFlow');                                                                      // 301
	};                                                                                                                    // 302
                                                                                                                       // 303
	Template._loginButtonsLoggedOutPasswordService.showForgotPasswordLink = function() {                                  // 304
		return _.contains(                                                                                                   // 305
			["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "EMAIL_ONLY"],                  // 306
			Accounts.ui._passwordSignupFields());                                                                               // 307
	};                                                                                                                    // 308
                                                                                                                       // 309
	Template._loginButtonsLoggedOutPasswordService.showCreateAccountLink = function() {                                   // 310
		return !Accounts._options.forbidClientAccountCreation;                                                               // 311
	};                                                                                                                    // 312
                                                                                                                       // 313
	Template._loginButtonsFormField.inputType = function() {                                                              // 314
		return this.inputType || "text";                                                                                     // 315
	};                                                                                                                    // 316
                                                                                                                       // 317
                                                                                                                       // 318
	//                                                                                                                    // 319
	// loginButtonsChangePassword template                                                                                // 320
	//                                                                                                                    // 321
	Template._loginButtonsChangePassword.events({                                                                         // 322
		'keypress #login-old-password, keypress #login-password, keypress #login-password-again': function(event) {          // 323
			if (event.keyCode === 13)                                                                                           // 324
				changePassword();                                                                                                  // 325
		},                                                                                                                   // 326
		'click #login-buttons-do-change-password': function(event) {                                                         // 327
			event.stopPropagation();                                                                                            // 328
			changePassword();                                                                                                   // 329
		},                                                                                                                   // 330
		'click #login-buttons-cancel-change-password': function(event) {                                                     // 331
			event.stopPropagation();                                                                                            // 332
			loginButtonsSession.resetMessages();                                                                                // 333
			Accounts._loginButtonsSession.set('inChangePasswordFlow', false);                                                   // 334
			Meteor.flush();                                                                                                     // 335
		}                                                                                                                    // 336
	});                                                                                                                   // 337
                                                                                                                       // 338
	Template._loginButtonsChangePassword.fields = function() {                                                            // 339
		return [{                                                                                                            // 340
			fieldName: 'old-password',                                                                                          // 341
			fieldLabel: 'Current Password',                                                                                     // 342
			inputType: 'password',                                                                                              // 343
			visible: function() {                                                                                               // 344
				return true;                                                                                                       // 345
			}                                                                                                                   // 346
		}, {                                                                                                                 // 347
			fieldName: 'password',                                                                                              // 348
			fieldLabel: 'New Password',                                                                                         // 349
			inputType: 'password',                                                                                              // 350
			visible: function() {                                                                                               // 351
				return true;                                                                                                       // 352
			}                                                                                                                   // 353
		}, {                                                                                                                 // 354
			fieldName: 'password-again',                                                                                        // 355
			fieldLabel: 'New Password (again)',                                                                                 // 356
			inputType: 'password',                                                                                              // 357
			visible: function() {                                                                                               // 358
				// No need to make users double-enter their password if                                                            // 359
				// they'll necessarily have an email set, since they can use                                                       // 360
				// the "forgot password" flow.                                                                                     // 361
				return _.contains(                                                                                                 // 362
					["USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],                                                                 // 363
					Accounts.ui._passwordSignupFields());                                                                             // 364
			}                                                                                                                   // 365
		}];                                                                                                                  // 366
	};                                                                                                                    // 367
                                                                                                                       // 368
                                                                                                                       // 369
	//                                                                                                                    // 370
	// helpers                                                                                                            // 371
	//                                                                                                                    // 372
                                                                                                                       // 373
	var elementValueById = function(id) {                                                                                 // 374
		var element = document.getElementById(id);                                                                           // 375
		if (!element)                                                                                                        // 376
			return null;                                                                                                        // 377
		else                                                                                                                 // 378
			return element.value;                                                                                               // 379
	};                                                                                                                    // 380
                                                                                                                       // 381
	var trimmedElementValueById = function(id) {                                                                          // 382
		var element = document.getElementById(id);                                                                           // 383
		if (!element)                                                                                                        // 384
			return null;                                                                                                        // 385
		else                                                                                                                 // 386
			return element.value.replace(/^\s*|\s*$/g, ""); // trim;                                                            // 387
	};                                                                                                                    // 388
                                                                                                                       // 389
	var loginOrSignup = function() {                                                                                      // 390
		if (loginButtonsSession.get('inSignupFlow'))                                                                         // 391
			signup();                                                                                                           // 392
		else                                                                                                                 // 393
			login();                                                                                                            // 394
	};                                                                                                                    // 395
                                                                                                                       // 396
	var login = function() {                                                                                              // 397
		loginButtonsSession.resetMessages();                                                                                 // 398
                                                                                                                       // 399
		var username = trimmedElementValueById('login-username');                                                            // 400
		var email = trimmedElementValueById('login-email');                                                                  // 401
		var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                            // 402
		// notably not trimmed. a password could (?) start or end with a space                                               // 403
		var password = elementValueById('login-password');                                                                   // 404
                                                                                                                       // 405
		var loginSelector;                                                                                                   // 406
		if (username !== null) {                                                                                             // 407
			if (!Accounts._loginButtons.validateUsername(username))                                                             // 408
				return;                                                                                                            // 409
			else                                                                                                                // 410
				loginSelector = {                                                                                                  // 411
					username: username                                                                                                // 412
				};                                                                                                                 // 413
		} else if (email !== null) {                                                                                         // 414
			if (!Accounts._loginButtons.validateEmail(email))                                                                   // 415
				return;                                                                                                            // 416
			else                                                                                                                // 417
				loginSelector = {                                                                                                  // 418
					email: email                                                                                                      // 419
				};                                                                                                                 // 420
		} else if (usernameOrEmail !== null) {                                                                               // 421
			// XXX not sure how we should validate this. but this seems good enough (for now),                                  // 422
			// since an email must have at least 3 characters anyways                                                           // 423
			if (!Accounts._loginButtons.validateUsername(usernameOrEmail))                                                      // 424
				return;                                                                                                            // 425
			else                                                                                                                // 426
				loginSelector = usernameOrEmail;                                                                                   // 427
		} else {                                                                                                             // 428
			throw new Error("Unexpected -- no element to use as a login user selector");                                        // 429
		}                                                                                                                    // 430
                                                                                                                       // 431
		Meteor.loginWithPassword(loginSelector, password, function(error, result) {                                          // 432
			if (error) {                                                                                                        // 433
				loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                 // 434
			} else {                                                                                                            // 435
				loginButtonsSession.closeDropdown();                                                                               // 436
			}                                                                                                                   // 437
		});                                                                                                                  // 438
	};                                                                                                                    // 439
                                                                                                                       // 440
	var toggleDropdown = function() {                                                                                     // 441
		$('#login-dropdown-list .dropdown-menu').dropdown('toggle');                                                         // 442
	};                                                                                                                    // 443
                                                                                                                       // 444
	var signup = function() {                                                                                             // 445
		loginButtonsSession.resetMessages();                                                                                 // 446
                                                                                                                       // 447
		var options = {}; // to be passed to Accounts.createUser                                                             // 448
                                                                                                                       // 449
		var username = trimmedElementValueById('login-username');                                                            // 450
		if (username !== null) {                                                                                             // 451
			if (!Accounts._loginButtons.validateUsername(username))                                                             // 452
				return;                                                                                                            // 453
			else                                                                                                                // 454
				options.username = username;                                                                                       // 455
		}                                                                                                                    // 456
                                                                                                                       // 457
		var email = trimmedElementValueById('login-email');                                                                  // 458
		if (email !== null) {                                                                                                // 459
			if (!Accounts._loginButtons.validateEmail(email))                                                                   // 460
				return;                                                                                                            // 461
			else                                                                                                                // 462
				options.email = email;                                                                                             // 463
		}                                                                                                                    // 464
                                                                                                                       // 465
		// notably not trimmed. a password could (?) start or end with a space                                               // 466
		var password = elementValueById('login-password');                                                                   // 467
		if (!Accounts._loginButtons.validatePassword(password))                                                              // 468
			return;                                                                                                             // 469
		else                                                                                                                 // 470
			options.password = password;                                                                                        // 471
                                                                                                                       // 472
		if (!matchPasswordAgainIfPresent())                                                                                  // 473
			return;                                                                                                             // 474
                                                                                                                       // 475
		// prepare the profile object                                                                                        // 476
		options.profile = {};                                                                                                // 477
                                                                                                                       // 478
		// define a proxy function to allow extraSignupFields set error messages                                             // 479
		var errorFn = function(errorMessage) {                                                                               // 480
			Accounts._loginButtonsSession.errorMessage(errorMessage);                                                           // 481
		};                                                                                                                   // 482
                                                                                                                       // 483
		var invalidExtraSignupFields = false;                                                                                // 484
                                                                                                                       // 485
		// parse extraSignupFields to populate account's profile data                                                        // 486
		_.each(Accounts.ui._options.extraSignupFields, function(field, index) {                                              // 487
			var value = elementValueById('login-' + field.fieldName);                                                           // 488
			if (typeof field.validate === 'function') {                                                                         // 489
				if (field.validate(value, errorFn)) {                                                                              // 490
					options.profile[field.fieldName] = elementValueById('login-' + field.fieldName);                                  // 491
				} else {                                                                                                           // 492
					invalidExtraSignupFields = true;                                                                                  // 493
				}                                                                                                                  // 494
			} else {                                                                                                            // 495
				options.profile[field.fieldName] = elementValueById('login-' + field.fieldName);                                   // 496
			}                                                                                                                   // 497
		});                                                                                                                  // 498
                                                                                                                       // 499
		if (invalidExtraSignupFields)                                                                                        // 500
			return;                                                                                                             // 501
                                                                                                                       // 502
		Accounts.createUser(options, function(error) {                                                                       // 503
			if (error) {                                                                                                        // 504
				loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                 // 505
			} else {                                                                                                            // 506
				loginButtonsSession.closeDropdown();                                                                               // 507
			}                                                                                                                   // 508
		});                                                                                                                  // 509
	};                                                                                                                    // 510
                                                                                                                       // 511
	var forgotPassword = function() {                                                                                     // 512
		loginButtonsSession.resetMessages();                                                                                 // 513
                                                                                                                       // 514
		var email = trimmedElementValueById("forgot-password-email");                                                        // 515
		if (email.indexOf('@') !== -1) {                                                                                     // 516
			Accounts.forgotPassword({                                                                                           // 517
				email: email                                                                                                       // 518
			}, function(error) {                                                                                                // 519
				if (error)                                                                                                         // 520
					loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                // 521
				else                                                                                                               // 522
					loginButtonsSession.infoMessage("Email sent");                                                                    // 523
			});                                                                                                                 // 524
		} else {                                                                                                             // 525
			loginButtonsSession.infoMessage("Email sent");                                                                      // 526
		}                                                                                                                    // 527
	};                                                                                                                    // 528
                                                                                                                       // 529
	var changePassword = function() {                                                                                     // 530
		loginButtonsSession.resetMessages();                                                                                 // 531
                                                                                                                       // 532
		// notably not trimmed. a password could (?) start or end with a space                                               // 533
		var oldPassword = elementValueById('login-old-password');                                                            // 534
                                                                                                                       // 535
		// notably not trimmed. a password could (?) start or end with a space                                               // 536
		var password = elementValueById('login-password');                                                                   // 537
		if (!Accounts._loginButtons.validatePassword(password))                                                              // 538
			return;                                                                                                             // 539
                                                                                                                       // 540
		if (!matchPasswordAgainIfPresent())                                                                                  // 541
			return;                                                                                                             // 542
                                                                                                                       // 543
		Accounts.changePassword(oldPassword, password, function(error) {                                                     // 544
			if (error) {                                                                                                        // 545
				loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                 // 546
			} else {                                                                                                            // 547
				loginButtonsSession.infoMessage("Password changed");                                                               // 548
                                                                                                                       // 549
				// wait 3 seconds, then expire the msg                                                                             // 550
				Meteor.setTimeout(function() {                                                                                     // 551
					loginButtonsSession.resetMessages();                                                                              // 552
				}, 3000);                                                                                                          // 553
			}                                                                                                                   // 554
		});                                                                                                                  // 555
	};                                                                                                                    // 556
                                                                                                                       // 557
	var matchPasswordAgainIfPresent = function() {                                                                        // 558
		// notably not trimmed. a password could (?) start or end with a space                                               // 559
		var passwordAgain = elementValueById('login-password-again');                                                        // 560
		if (passwordAgain !== null) {                                                                                        // 561
			// notably not trimmed. a password could (?) start or end with a space                                              // 562
			var password = elementValueById('login-password');                                                                  // 563
			if (password !== passwordAgain) {                                                                                   // 564
				loginButtonsSession.errorMessage("Passwords don't match");                                                         // 565
				return false;                                                                                                      // 566
			}                                                                                                                   // 567
		}                                                                                                                    // 568
		return true;                                                                                                         // 569
	};                                                                                                                    // 570
})();                                                                                                                  // 571
                                                                                                                       // 572
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/login_buttons_dialogs.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
	// for convenience                                                                                                    // 2
	var loginButtonsSession = Accounts._loginButtonsSession;                                                              // 3
                                                                                                                       // 4
                                                                                                                       // 5
	//                                                                                                                    // 6
	// populate the session so that the appropriate dialogs are                                                           // 7
	// displayed by reading variables set by accounts-urls, which parses                                                  // 8
	// special URLs. since accounts-ui depends on accounts-urls, we are                                                   // 9
	// guaranteed to have these set at this point.                                                                        // 10
	//                                                                                                                    // 11
                                                                                                                       // 12
	if (Accounts._resetPasswordToken) {                                                                                   // 13
		loginButtonsSession.set('resetPasswordToken', Accounts._resetPasswordToken);                                         // 14
	}                                                                                                                     // 15
                                                                                                                       // 16
	if (Accounts._enrollAccountToken) {                                                                                   // 17
		loginButtonsSession.set('enrollAccountToken', Accounts._enrollAccountToken);                                         // 18
	}                                                                                                                     // 19
                                                                                                                       // 20
	// Needs to be in Meteor.startup because of a package loading order                                                   // 21
	// issue. We can't be sure that accounts-password is loaded earlier                                                   // 22
	// than accounts-ui so Accounts.verifyEmail might not be defined.                                                     // 23
	Meteor.startup(function () {                                                                                          // 24
		if (Accounts._verifyEmailToken) {                                                                                    // 25
			Accounts.verifyEmail(Accounts._verifyEmailToken, function(error) {                                                  // 26
				Accounts._enableAutoLogin();                                                                                       // 27
				if (!error)                                                                                                        // 28
					loginButtonsSession.set('justVerifiedEmail', true);                                                               // 29
				// XXX show something if there was an error.                                                                       // 30
			});                                                                                                                 // 31
		}                                                                                                                    // 32
	});                                                                                                                   // 33
                                                                                                                       // 34
                                                                                                                       // 35
	//                                                                                                                    // 36
	// resetPasswordDialog template                                                                                       // 37
	//                                                                                                                    // 38
	Template._resetPasswordDialog.rendered = function() {                                                                 // 39
		var $modal = $(this.find('#login-buttons-reset-password-modal'));                                                    // 40
		$modal.modal();                                                                                                      // 41
	}                                                                                                                     // 42
                                                                                                                       // 43
	Template._resetPasswordDialog.events({                                                                                // 44
		'click #login-buttons-reset-password-button': function (event) {                                                     // 45
			event.stopPropagation();                                                                                            // 46
			resetPassword();                                                                                                    // 47
		},                                                                                                                   // 48
		'keypress #reset-password-new-password': function (event) {                                                          // 49
			if (event.keyCode === 13)                                                                                           // 50
				resetPassword();                                                                                                   // 51
		},                                                                                                                   // 52
		'click #login-buttons-cancel-reset-password': function (event) {                                                     // 53
			event.stopPropagation();                                                                                            // 54
			loginButtonsSession.set('resetPasswordToken', null);                                                                // 55
			Accounts._enableAutoLogin();                                                                                        // 56
			$('#login-buttons-reset-password-modal').modal("hide");                                                             // 57
		}                                                                                                                    // 58
	});                                                                                                                   // 59
                                                                                                                       // 60
	var resetPassword = function () {                                                                                     // 61
		loginButtonsSession.resetMessages();                                                                                 // 62
		var newPassword = document.getElementById('reset-password-new-password').value;                                      // 63
		if (!Accounts._loginButtons.validatePassword(newPassword))                                                           // 64
			return;                                                                                                             // 65
                                                                                                                       // 66
		Accounts.resetPassword(                                                                                              // 67
			loginButtonsSession.get('resetPasswordToken'), newPassword,                                                         // 68
			function (error) {                                                                                                  // 69
				if (error) {                                                                                                       // 70
					loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                // 71
				} else {                                                                                                           // 72
					loginButtonsSession.set('resetPasswordToken', null);                                                              // 73
					Accounts._enableAutoLogin();                                                                                      // 74
					$('#login-buttons-reset-password-modal').modal("hide");                                                           // 75
				}                                                                                                                  // 76
			});                                                                                                                 // 77
	};                                                                                                                    // 78
                                                                                                                       // 79
	Template._resetPasswordDialog.inResetPasswordFlow = function () {                                                     // 80
		return loginButtonsSession.get('resetPasswordToken');                                                                // 81
	};                                                                                                                    // 82
                                                                                                                       // 83
                                                                                                                       // 84
	//                                                                                                                    // 85
	// enrollAccountDialog template                                                                                       // 86
	//                                                                                                                    // 87
                                                                                                                       // 88
	Template._enrollAccountDialog.events({                                                                                // 89
		'click #login-buttons-enroll-account-button': function () {                                                          // 90
			enrollAccount();                                                                                                    // 91
		},                                                                                                                   // 92
		'keypress #enroll-account-password': function (event) {                                                              // 93
			if (event.keyCode === 13)                                                                                           // 94
				enrollAccount();                                                                                                   // 95
		},                                                                                                                   // 96
		'click #login-buttons-cancel-enroll-account-button': function () {                                                   // 97
			loginButtonsSession.set('enrollAccountToken', null);                                                                // 98
			Accounts._enableAutoLogin();                                                                                        // 99
			$modal.modal("hide");                                                                                               // 100
		}                                                                                                                    // 101
	});                                                                                                                   // 102
                                                                                                                       // 103
	Template._enrollAccountDialog.rendered = function() {                                                                 // 104
		$modal = $(this.find('#login-buttons-enroll-account-modal'));                                                        // 105
		$modal.modal();                                                                                                      // 106
	};                                                                                                                    // 107
                                                                                                                       // 108
	var enrollAccount = function () {                                                                                     // 109
		loginButtonsSession.resetMessages();                                                                                 // 110
		var password = document.getElementById('enroll-account-password').value;                                             // 111
		if (!Accounts._loginButtons.validatePassword(password))                                                              // 112
			return;                                                                                                             // 113
                                                                                                                       // 114
		Accounts.resetPassword(                                                                                              // 115
			loginButtonsSession.get('enrollAccountToken'), password,                                                            // 116
			function (error) {                                                                                                  // 117
				if (error) {                                                                                                       // 118
					loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                // 119
				} else {                                                                                                           // 120
					loginButtonsSession.set('enrollAccountToken', null);                                                              // 121
					Accounts._enableAutoLogin();                                                                                      // 122
					$modal.modal("hide");                                                                                             // 123
				}                                                                                                                  // 124
			});                                                                                                                 // 125
	};                                                                                                                    // 126
                                                                                                                       // 127
	Template._enrollAccountDialog.inEnrollAccountFlow = function () {                                                     // 128
		return loginButtonsSession.get('enrollAccountToken');                                                                // 129
	};                                                                                                                    // 130
                                                                                                                       // 131
                                                                                                                       // 132
	//                                                                                                                    // 133
	// justVerifiedEmailDialog template                                                                                   // 134
	//                                                                                                                    // 135
                                                                                                                       // 136
	Template._justVerifiedEmailDialog.events({                                                                            // 137
		'click #just-verified-dismiss-button': function () {                                                                 // 138
			loginButtonsSession.set('justVerifiedEmail', false);                                                                // 139
		}                                                                                                                    // 140
	});                                                                                                                   // 141
                                                                                                                       // 142
	Template._justVerifiedEmailDialog.visible = function () {                                                             // 143
		if (loginButtonsSession.get('justVerifiedEmail')){                                                                   // 144
			setTimeout(function(){$('#login-buttons-email-address-verified-modal').modal()}, 500)                               // 145
		}                                                                                                                    // 146
		return loginButtonsSession.get('justVerifiedEmail');                                                                 // 147
	};                                                                                                                    // 148
                                                                                                                       // 149
                                                                                                                       // 150
	//                                                                                                                    // 151
	// loginButtonsMessagesDialog template                                                                                // 152
	//                                                                                                                    // 153
                                                                                                                       // 154
	// Template._loginButtonsMessagesDialog.rendered = function() {                                                       // 155
	//   var $modal = $(this.find('#configure-login-service-dialog-modal'));                                              // 156
	//   $modal.modal();                                                                                                  // 157
	// }                                                                                                                  // 158
                                                                                                                       // 159
	Template._loginButtonsMessagesDialog.events({                                                                         // 160
		'click #messages-dialog-dismiss-button': function () {                                                               // 161
			loginButtonsSession.resetMessages();                                                                                // 162
		}                                                                                                                    // 163
	});                                                                                                                   // 164
                                                                                                                       // 165
	Template._loginButtonsMessagesDialog.visible = function () {                                                          // 166
		var hasMessage = loginButtonsSession.get('infoMessage') || loginButtonsSession.get('errorMessage');                  // 167
		return !Accounts._loginButtons.dropdown() && hasMessage;                                                             // 168
	};                                                                                                                    // 169
                                                                                                                       // 170
                                                                                                                       // 171
	//                                                                                                                    // 172
	// configureLoginServiceDialog template                                                                               // 173
	//                                                                                                                    // 174
                                                                                                                       // 175
	Template._configureLoginServiceDialog.events({                                                                        // 176
		'click .configure-login-service-dismiss-button': function (event) {                                                  // 177
			event.stopPropagation();                                                                                            // 178
			loginButtonsSession.set('configureLoginServiceDialogVisible', false);                                               // 179
			$('#configure-login-service-dialog-modal').modal('hide');                                                           // 180
		},                                                                                                                   // 181
		'click #configure-login-service-dialog-save-configuration': function () {                                            // 182
			if (loginButtonsSession.get('configureLoginServiceDialogVisible') &&                                                // 183
					! loginButtonsSession.get('configureLoginServiceDialogSaveDisabled')) {                                           // 184
				// Prepare the configuration document for this login service                                                       // 185
				var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');                               // 186
				var configuration = {                                                                                              // 187
					service: serviceName                                                                                              // 188
				};                                                                                                                 // 189
				_.each(configurationFields(), function(field) {                                                                    // 190
					configuration[field.property] = document.getElementById(                                                          // 191
						'configure-login-service-dialog-' + field.property).value                                                        // 192
						.replace(/^\s*|\s*$/g, ""); // trim;                                                                             // 193
				});                                                                                                                // 194
                                                                                                                       // 195
				// Configure this login service                                                                                    // 196
				Meteor.call("configureLoginService", configuration, function (error, result) {                                     // 197
					if (error)                                                                                                        // 198
						Meteor._debug("Error configuring login service " + serviceName, error);                                          // 199
					else                                                                                                              // 200
						loginButtonsSession.set('configureLoginServiceDialogVisible', false);                                            // 201
						$('#configure-login-service-dialog-modal').modal('hide');                                                        // 202
				});                                                                                                                // 203
			}                                                                                                                   // 204
		},                                                                                                                   // 205
		// IE8 doesn't support the 'input' event, so we'll run this on the keyup as                                          // 206
		// well. (Keeping the 'input' event means that this also fires when you use                                          // 207
		// the mouse to change the contents of the field, eg 'Cut' menu item.)                                               // 208
		'input, keyup input': function (event) {                                                                             // 209
			// if the event fired on one of the configuration input fields,                                                     // 210
			// check whether we should enable the 'save configuration' button                                                   // 211
			if (event.target.id.indexOf('configure-login-service-dialog') === 0)                                                // 212
				updateSaveDisabled();                                                                                              // 213
		}                                                                                                                    // 214
	});                                                                                                                   // 215
                                                                                                                       // 216
	// check whether the 'save configuration' button should be enabled.                                                   // 217
	// this is a really strange way to implement this and a Forms                                                         // 218
	// Abstraction would make all of this reactive, and simpler.                                                          // 219
	var updateSaveDisabled = function () {                                                                                // 220
		var anyFieldEmpty = _.any(configurationFields(), function(field) {                                                   // 221
			return document.getElementById(                                                                                     // 222
				'configure-login-service-dialog-' + field.property).value === '';                                                  // 223
		});                                                                                                                  // 224
                                                                                                                       // 225
		loginButtonsSession.set('configureLoginServiceDialogSaveDisabled', anyFieldEmpty);                                   // 226
	};                                                                                                                    // 227
                                                                                                                       // 228
	// Returns the appropriate template for this login service.  This                                                     // 229
	// template should be defined in the service's package                                                                // 230
	var configureLoginServiceDialogTemplateForService = function () {                                                     // 231
		var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');                                 // 232
		return Template['configureLoginServiceDialogFor' + capitalize(serviceName)];                                         // 233
	};                                                                                                                    // 234
                                                                                                                       // 235
	var configurationFields = function () {                                                                               // 236
		var template = configureLoginServiceDialogTemplateForService();                                                      // 237
		return template.fields();                                                                                            // 238
	};                                                                                                                    // 239
                                                                                                                       // 240
	Template._configureLoginServiceDialog.configurationFields = function () {                                             // 241
		return configurationFields();                                                                                        // 242
	};                                                                                                                    // 243
                                                                                                                       // 244
	Template._configureLoginServiceDialog.visible = function () {                                                         // 245
		return loginButtonsSession.get('configureLoginServiceDialogVisible');                                                // 246
	};                                                                                                                    // 247
                                                                                                                       // 248
	Template._configureLoginServiceDialog.configurationSteps = function () {                                              // 249
		// renders the appropriate template                                                                                  // 250
		return configureLoginServiceDialogTemplateForService();                                                              // 251
	};                                                                                                                    // 252
                                                                                                                       // 253
	Template._configureLoginServiceDialog.saveDisabled = function () {                                                    // 254
		return loginButtonsSession.get('configureLoginServiceDialogSaveDisabled');                                           // 255
	};                                                                                                                    // 256
                                                                                                                       // 257
                                                                                                                       // 258
	// XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js                                        // 259
	var capitalize = function(str){                                                                                       // 260
		str = str == null ? '' : String(str);                                                                                // 261
		return str.charAt(0).toUpperCase() + str.slice(1);                                                                   // 262
	};                                                                                                                    // 263
                                                                                                                       // 264
}) ();                                                                                                                 // 265
                                                                                                                       // 266
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['accounts-ui-bootstrap-3'] = {};

})();
