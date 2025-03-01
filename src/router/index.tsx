import { useRoutes } from 'react-router-dom'
import routes from './routes'

function ViewRouter() {
  let element = useRoutes(routes)

  return <div>{ element }</div>
}

export default ViewRouter
