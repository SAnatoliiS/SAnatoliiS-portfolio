const writeItemsToLocalStorage = items => {
	try {
		const itemsAsString = JSON.stringify(items);
		localStorage.setItem('items', itemsAsString);
	} catch (e) {
		//Do nothing
	}
};

export const readItemsFromLocalStorage = () => {
	try {
		const storage = localStorage.getItem('items');
		return JSON.parse(storage);
	} catch (e) {
		//Do nothing
	}
};

export const addItemToLocalStorage = item => {
	const storageItems = readItemsFromLocalStorage();
	const newItems = storageItems ? [...storageItems, item] : [item];
	writeItemsToLocalStorage(newItems);
};

export const removeItemFromLocalStorage = id => {
	const storageItems = readItemsFromLocalStorage();
	const newItems = storageItems.filter(item => item.id !== id);
	writeItemsToLocalStorage(newItems);
};

export const resetItemsInLocalStorage = () => {
	writeItemsToLocalStorage([]);
};
