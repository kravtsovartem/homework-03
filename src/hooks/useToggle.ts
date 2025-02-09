import { useEffect, useLayoutEffect, useReducer, useState } from "react"


const reducer = (state: boolean | [] | string, action: { type: string, payload: boolean | [], value?: string }) => {
	
	const actions = {
		'boolean'() {
			return action.payload
		},
		'array'() {
			const { payload, value } = action

			let nextIndex = payload.indexOf(value ?? state)

			if(!value)
				nextIndex = nextIndex >= payload.length - 1 ? 0 : nextIndex  + 1
			
			return payload[nextIndex]
		}
	}

	return actions[action.type]()
}

export default function useToggle(initState = false) {
	const [state, dispatch] = useReducer(reducer, initState)
	const [booleanValue, setBooleanValue] = useState(initState)

	useLayoutEffect(() => {
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
				payload: booleanValue,
			})
			setBooleanValue(!booleanValue)
		}
	}

	return [state, toggle]
}