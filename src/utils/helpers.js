export function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export function checkPhoneNumber(input) {
	const phoneN = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
	if (input.match(phoneN)) {
		return true;
	}
	return false;
}

export function retrieveObjFromId(id, arr) {
	for(const element of arr) {
		if(element.id === Number(id)){
			return element;
		}
	}
}

export function descriptionShort(str){
	const pattern = /(^(?:\S+\s+\n?){1,20})/;
	return str.match(pattern)[0] + "...";
}