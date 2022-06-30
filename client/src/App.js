import { Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import WelcomeScreen from "./components/WelcomeScreen";
import RecipeDetail from "./components/RecipeDetail";
import Search from "./components/Search";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Route exact path='/' component={WelcomeScreen} />
			<Route exact path='/home' component={Search} />
			<Route exact path='/home' component={Home} />
			<Route
				exact
				path='/home/:id'
				render={({ match }) => <RecipeDetail match={match} />}
			/>
		</div>
	);
}

export default App;
