exports.check = function(req, res, next) {
	console.log(req.session.user);
	if (req.session && req.session.user) {
		//Check if the user is logged in or not
		next();
	}
	//else redirect here
	else
		res.status(401).json("Unauthorized access");
};
