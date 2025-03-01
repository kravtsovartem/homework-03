import { useLayoutEffect, useReducer } from "react"

type IUseToggle<T> = [T, (name?: string) => void]

interface IAction<T> {
	type: string,
	payload: T,
	value?: string
}

type IState<T> = T

interface IActions {
	[key: string]: () => boolean | []
	boolean: () => boolean
	array: () => []
}

const reducer = <T>(state: IState<T>, action: IAction<T>): T => {
	
	const actions: IActions = {
		'boolean'(): boolean {
			return !action.payload
		},
		'array'(): [] {
			const { payload, value } = action
			if(!Array.isArray(payload))
				return []
			
			let nextIndex = payload.indexOf(value ?? state)

			if(!value)
				nextIndex = nextIndex >= payload.length - 1 ? 0 : nextIndex  + 1
			
			return payload[nextIndex]
		}
	}

	return actions[action.type]() as T
}

export default function useToggle<T>(initState: T): IUseToggle<T> {
	const [state, dispatch] = useReducer(reducer, initState)

	useLayoutEffect(() => {
		if(Array.isArray(initState))
			toggle(initState[0])
	}, [])

	const toggle = (name?: string) => {

		const isArray = Array.isArray(initState)
		const isBool = typeof(initState) === 'boolean'
		
		if(isArray)
			dispatch({
				type: 'array',
				payload: initState,
				value: name
			})

		if(isBool) {
			dispatch({
				type: 'boolean',
				payload: state,
			})
		}
	}

	return [state, toggle]
}