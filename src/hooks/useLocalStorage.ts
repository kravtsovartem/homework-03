import { useState } from "react";
function getValueStorage(key: string): LocalStorageReturnValue {
	const saveValue: string = JSON.parse(localStorage.getItem(key) || 'null')

	if (!saveValue)
		return null

	return saveValue
}

const useLocalStorage: UseLocalStorage = (key) => {

	const [value, setValue] = useState<LocalStorageReturnValue>(() => getValueStorage(key))

	const setItem = (value: LocalStorageSetValue) => {
		localStorage.setItem(key, JSON.stringify(value))
		setValue(getValueStorage(key))
	}

	const removeItem = (): void => {
		localStorage.removeItem(key)
		setValue(null)
	}


	return [value, { setItem, removeItem }]
}

export default useLocalStorage