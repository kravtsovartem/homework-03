import './App.css'
import { Link } from 'react-router-dom'
import ViewRouter from './router'

export default function App() {
  return (
    <div>
			<div>
				<Link to="/">
					<button>useFetch</button>
				</Link>
				<Link to="/useLocalStorage">
					<button>useLocalStorage</button>
				</Link>
				<hr />
			</div>

      <div>
        <ViewRouter />
      </div>
    </div>
  )
}
