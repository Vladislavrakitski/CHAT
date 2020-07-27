export class LocalStorage {
	static STORAGE = localStorage;

	static get(name) {
		const value = LocalStorage.STORAGE.getItem(name);
		if (value) {
			try {
				return JSON.parse(value);
			} catch (e) {
				return value;
			}
		} else return undefined;
	}

	static set(name, val) {
		if (val && name) {
			LocalStorage.STORAGE.setItem(name, JSON.stringify(val));
		}
	}

	static remove(name) {
		if (name) {
			LocalStorage.STORAGE.removeItem(name);
		}
	}

	static clear() {
		LocalStorage.STORAGE.clear();
	}
}
