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

	const send = async (fetchUrl: string, body: IFetchBody = { params: {} }, signal?: AbortSignal) => {
		try {
			setIsLoading(true)


			const url: URL = new URL(fetchUrl)


			const searchParams: URLSearchParams = new URLSearchParams(body.params)

			url.search = searchParams.toString()


			const res = await fetch(url, {
				signal,
			})

			if (res.ok) {
				const data = await res.json()
				setData(data)
			}

			setIsLoading(false)

		} catch (e) {
			if(signal?.aborted) return

			setData(null)

			if (e instanceof Error)
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
		const controller = new AbortController();
		const signal = controller.signal;

		send(url, body, signal)

		return () => controller.abort()
	}, [url, body])


	return {
		data,
		isLoading,
		error,
		refetch
	}
}