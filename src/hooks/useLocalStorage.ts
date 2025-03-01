import { useState } from "react";
function getValueStorage(key: string): LocalStorageReturnValue {
	const saveValue: string | null = localStorage.getItem(key)

	return saveValue
}

const useLocalStorage: UseLocalStorage = (key) => {

	const [value, setValue] = useState<LocalStorageReturnValue>(() => getValueStorage(key))

	const setItem = (value: LocalStorageSetValue) => {
		localStorage.setItem(key, value)
		setValue(value)
	}

	const removeItem = (): void => {
		localStorage.removeItem(key)
		setValue(null)
	}


	return [value, { setItem, removeItem }]
}

export default useLocalStorage