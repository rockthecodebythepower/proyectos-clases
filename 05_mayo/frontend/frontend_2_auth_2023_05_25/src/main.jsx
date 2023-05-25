import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserContextProvider} from "./contexts/usercontext.jsx";
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
							path="/gallery"
							element={
								<AuthRoute>
									<Gallery />
								</AuthRoute>
							}
						/>
						<Route
							path="/contact"
							element={
								<AuthRoute>
									<Contact />
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
