const validationPassword = (password) => {
	const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;
	return re.test(String(password));
};

module.exports = {
	validationPassword,
};
