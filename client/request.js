Template.requests.events({
	'click .previous' : function(e, template){
		if(Number(Session.get('currentPage')) >  19){
			Session.set('currentPage', Number(Session.get('currentPage')) - 20);
		}
	},
	'click .next' : function(e, template){
		Session.set('currentPage', Number(Session.get('currentPage')) + 20);
	}
});