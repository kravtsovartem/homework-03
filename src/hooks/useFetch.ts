import { useEffect, useState } from "react"

interface IFetchBody {
	params?: object | undefined
}

export default function useFetch(url: string, body?: IFetchBody) {

	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)


	
	const send = async (fetchUrl: string, body: IFetchBody = { params: {} }) => {
		try {
			setIsLoading(true)

			const url = new URL(fetchUrl)

			url.search = new URLSearchParams(body.params)

			const res = await fetch(url).then(res => res.json())

			setData(res)
			setIsLoading(false)
		} catch(e) {
			setData(null)
			setError(e)
			console.warn(e)
		}
	}

	const refetch = (body: IFetchBody) => {
		setData(null)
		send(url, body)
	}

	useEffect(() => {
		send(url, body)
	}, [url, body])


	return {
		data,
		isLoading,
		error,
		refetch
	}
}