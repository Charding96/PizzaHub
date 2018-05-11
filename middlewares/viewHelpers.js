const helpers = {};

helpers.register = () => {
  return (req, res, next) => {
    res.locals.cur_user = req.user;
    console.log("********Only if you login " + req.user);
    next();
  }
};

helpers.isAuthor = (curUser, Author) => {
	return curUser.username == Author.username;
};

module.exports = helpers;
