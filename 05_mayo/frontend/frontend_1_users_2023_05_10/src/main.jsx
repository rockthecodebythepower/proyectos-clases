import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Docs from "./pages/Docs/Docs.jsx";
import About from "./pages/About/About.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserContextProvider} from "./context/userContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserContextProvider>
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Home />} />
						<Route path="/docs" element={<Docs />} />
						<Route path="/about" element={<About />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</UserContextProvider>
	</React.StrictMode>
);
