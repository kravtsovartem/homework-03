import UseFetchPage from '@/pages/UseFetchPage'
import UseLocalStoragePage from '@/pages/UseLocalStoragePage'

const routes = [
  {
    path: '/',
    element: <UseFetchPage/>,
  },
  {
    path: '/useLocalStorage',
    element: <UseLocalStoragePage/>,
  },
]

export default routes
