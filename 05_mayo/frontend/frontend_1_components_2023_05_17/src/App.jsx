import "./App.css";
import Heading from "./components/Heading/Heading";
import Flex from "./components/Flex/Flex";
import Avatar from "./components/Avatar/Avatar";
import AlertDialogExample from "./components/Dialog/Dialog";

const App = () => {
	return (
		<>
			<Heading
				type="h2"
				size="xl"
				color="crimson"
				align="center"
				textcase="capitalize"
			>
				titulo
			</Heading>
			<Flex justify="center" gap="1rem" align="center" wrap>
				<Avatar
					alt="Tony Stark"
					size="md"
					bordered
					color="crimson"
					src="https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
				/>
				<Heading
					type="h2"
					size="xl"
					color="crimson"
					align="center"
					textcase="capitalize"
				>
					adios
				</Heading>
				<Heading
					type="h2"
					size="xl"
					color="crimson"
					align="center"
					textcase="capitalize"
				>
					que tal
				</Heading>
				<Heading
					type="h2"
					size="xl"
					color="crimson"
					align="center"
					textcase="capitalize"
				>
					hola
				</Heading>
				<Avatar
					alt="Tony Stark"
					size="md"
					bordered
					color="crimson"
					src="https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
				/>
			</Flex>
			<AlertDialogExample />
		</>
	);
};

export default App;
