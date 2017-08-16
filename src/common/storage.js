import _ from 'underscore'

class Storage {
	constructor(){
		this.storage = window.localStorage;
	}
	setByKey(key, value) {
		this.storage.setItem(key, JSON.stringify(value));
	}
	removeByKey(key) {
		this.storage.removeItem(key);
	}
	getByKey(key) {
		return this.storage[key];
	}
	getByPrefix(prefix) {
		let storage = this.storage;
		let self = this;
		return _.reduce(_.keys(storage), function(data, value){
			value.indexOf(prefix) !== -1  ? data.push(JSON.parse(self.getByKey.call(self,value))) : '';
			return data;
		}, []);
	}
}

function getUniqueString () {
	return Math.random().toString(36).slice(2)
}



export {Storage, getUniqueString};