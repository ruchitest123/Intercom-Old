var action = {
	handleError: function() {
		var response = JSON.parse(responseBody);
		if (response.type && response.type == 'error.list') {
			var errStr = "Intercom : ";
                        var i;
			for (i=0; i< response.errors.lenght; i++) {
				errStr = errStr + response.errors[i].code + " : " + response.errors[i].message + " ";
			}
			throw errStr;
		}
		return responseBody;
	}
};