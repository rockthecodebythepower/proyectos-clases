
import {
	Button,
    AlertDialogBody,
	AlertDialogFooter,
	useDisclosure,
	AlertDialog,
	AlertDialogContent,
	AlertDialogOverlay,
    AlertDialogHeader
} from "@chakra-ui/react";
import {useRef} from "react";
function AlertDialogExample() {
	const {isOpen, onOpen, onClose} = useDisclosure();
	const cancelRef = useRef();

	return (
		<>
			<Button colorScheme="red" onClick={onOpen}>
				Delete Customer
			</Button>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Delete Customer
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You can't undo this action afterwards.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button colorScheme="red" onClick={onClose} ml={3}>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}

export default AlertDialogExample;
