import { Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Route exact path='/' component={WelcomeScreen} />
			<Route path='/home' component={Home} />
		</div>
	);
}

export default App;
