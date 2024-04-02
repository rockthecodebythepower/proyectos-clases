const isAdmin = async (req, res, next) => {
  if (req.user.rol === "admin") {
    next();
  } else {
    return res.status(401).json("Unauthoraized");
  }
};

module.exports = { isAdmin }