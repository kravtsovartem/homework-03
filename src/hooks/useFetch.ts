import { useEffect, useState } from "react"

interface IFetchBody {
	params?: Record<string, string>
}

interface IUseFetch<T> {
  data: T | null
  isLoading: boolean
  error: string | null
  refetch: (params?: IFetchBody) => void
}

export default function useFetch<T>(url: string, body?: IFetchBody): IUseFetch<T> {

	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)



	const send = async (fetchUrl: string, body: IFetchBody = { params: {} }) => {
		try {
			setIsLoading(true)

			const url: URL = new URL(fetchUrl)


			const searchParams: URLSearchParams = new URLSearchParams(body.params)

			url.search = searchParams.toString()


			const res = await fetch(url).then(res => res.json())

			if(res.ok)
				setData(res)

			setIsLoading(false)

		} catch (e) {
			setData(null)
			
			if(e instanceof Error)
				setError(e.message)

			console.warn(e)
		} finally {
			setIsLoading(false)
		}
	}

	const refetch = (body) => {
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