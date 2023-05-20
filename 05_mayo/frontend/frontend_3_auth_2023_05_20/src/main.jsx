import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Content from "./pages/Content/Content.jsx";
import Login from "./pages/Login/Login.jsx";
import About from "./pages/About/About.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import {UserContextProvider} from "./context/userContext.jsx";
import AuthRoute from "./components/AuthRoute/AuthRoute.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserContextProvider>
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route
							path="/content"
							element={
								<AuthRoute>
									<Content />
								</AuthRoute>
							}
						/>
						<Route
							path="/about"
							element={
								<AuthRoute>
									<About />
								</AuthRoute>
							}
						/>
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</UserContextProvider>
	</React.StrictMode>
);
