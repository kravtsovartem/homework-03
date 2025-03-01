
type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
	value: LocalStorageReturnValue,
	{
		setItem: (value: LocalStorageSetValue) => void;
		removeItem: () => void;
	},
];

type WindowScrollCoords = {
	x: number
	y: number
}

type WindowScrollToOptions = {
	x?: number
	y?: number
}

type UseWindowScroll = [
	WindowScrollCoords,
	(options: WindowScrollToOptions) => void
]