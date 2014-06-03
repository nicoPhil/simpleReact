function personModel(notifyChangeCallback){
	var self = this;
	var personList = [];

	self.getPersonList = function(){
		return personList;
	}

	self.addPerson = function(p){
		personList.push(p);
		notifyChangeCallback();
	}

	self.removePerson = function(id){
		var index = -1;
		for(var i=0;i<personList.length;i++){
			if(personList[i].id === id){
				index = i;
				break;
			}
		}
		if(index === -1){
			return;
		}

		personList.splice(index,1);
		notifyChangeCallback();
	}
};