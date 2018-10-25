class Logger {
	render () {
		/**
		 * Makes <li>a</li> list.
		**/
		this._list.innerHTML = `<li>${this._messages.join("</li><li>")}</li>`;
	}

	/**
	 * @param {HTMLElement} list - container which will contain the messages.
	**/
	constructor (list, config) {
		if (!(list instanceof HTMLUListElement)) {
			throw new TypeError("Incorrect argument.");
		}

		if (config == null || config.constructor != Object) {
			arguments.length >= 2 && console.warn("Config is not an object.");
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