import { Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={WelcomeScreen}></Route>
			<Route path='/home' component={Home} />
		</div>
	);
}

export default App;
