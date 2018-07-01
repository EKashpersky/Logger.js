class Logger {
	render () {
		let html = "";
		for (const message of Object.values(this._messages)) {
			html += `<li>${message}</li>`;
		}
		this._list.innerHTML = html;
	}

	/**
	 * @param {HTMLElement} list - container which will contain the messages.
	**/
	constructor (list, config) {
		if (!(list instanceof HTMLUListElement)) {
			throw new TypeError("Incorrect argument.");
		}

		if (config == null || config.constructor != Object) {
			console.warn("Config is not an object.");
			config = {};
		}

		this._config = config;
		this._list = list;
		this._messages = [];
	}

	/**
	 * @param {Object} message
	**/
	log (message) {
		this._messages.push(message);
		if (this._config.instantRender) {
			this.render();
		}
	}

	/**
	 * Cleans the stack of messages.
	**/
	clean () {
		this._messages = [];
	}

}