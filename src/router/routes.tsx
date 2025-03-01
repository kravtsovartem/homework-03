import UseFetchPage from '@/pages/UseFetchPage'
import UseLocalStoragePage from '@/pages/UseLocalStoragePage'
import UseHover from '@/pages/UseHover'

const routes = [
  {
    path: '/',
    element: <UseFetchPage/>,
  },
  {
    path: '/useLocalStorage',
    element: <UseLocalStoragePage/>,
  },
  {
    path: '/useHover',
    element: <UseHover/>,
  },
]

export default routes
