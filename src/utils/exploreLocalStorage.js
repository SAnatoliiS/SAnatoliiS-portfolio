const writeItemsToLocalStorage = items => {
	const itemsAsString = JSON.stringify(items);
	localStorage.setItem('items', itemsAsString);
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
	try {
		const storageItems = readItemsFromLocalStorage();
		// console.log('newItems = ', storageItems);
		const newItems = storageItems ? [...storageItems, item] : [item];
		writeItemsToLocalStorage(newItems);
	} catch (e) {
		//Do nothing
	}
};

export const removeItemFromLocalStorage = id => {
	try {
		const storageItems = readItemsFromLocalStorage();
		const newItems = storageItems.filter(item => item.id !== id);
		writeItemsToLocalStorage(newItems);
	} catch (e) {
		alert(e);
	}
};
export const resetItemsInLocalStorage = () => {
	try {
		writeItemsToLocalStorage([]);
	} catch (e) {
		alert(e);
	}
};
