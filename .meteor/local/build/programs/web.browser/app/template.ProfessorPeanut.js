(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.DIV({
    "class": "navbar navbar-default",
    role: "navigation"
  }, "\n	    ", HTML.Raw('<div class="navbar-header">\n	        <a class="navbar-brand" href="#">Project name</a>\n	        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">\n	            <span class="sr-only">Toggle navigation</span>\n	            <span class="icon-bar"></span>\n	            <span class="icon-bar"></span>\n	            <span class="icon-bar"></span>\n	        </button>\n	    </div>'), "\n	    ", HTML.DIV({
    "class": "navbar-collapse collapse"
  }, "\n	        ", HTML.Raw('<ul class="nav navbar-nav">\n	            <li class="active"><a href="#">Link</a></li>\n	        </ul>'), "\n	        ", HTML.UL({
    "class": "nav navbar-nav navbar-right"
  }, "\n	            ", Spacebars.include(view.lookupTemplate("loginButtons")), " ", HTML.Raw("<!-- here -->"), "\n	        "), "\n	    "), "\n	"), HTML.Raw("\n	<h1>Professor Peanut</h1>") ];
}));
Meteor.startup(Template.body.renderToDocument);

})();
