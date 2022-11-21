
const middleman = (req, res, next) => {
    console.log(`${req.method} request to ${req.path}`);
    next();
  };

exports.middleman = middleman;