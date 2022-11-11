import Layout from "./components/layout/Layout";
import ThemeProvider from "./contextapis/ThemeProvider";
import HomePage from "./pages/home/HomePage";
// import HomePage from "./pages/home/HomePage";
import "./styles/global/App.css";

function App() {
	return (
		<>
			<ThemeProvider>
				<Layout>
					<HomePage />
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default App;
