
const jwt = require('jsonwebtoken');

const verifyToken = (roles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    // Check if the authorization header is present and valid
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1]; // Extract token from header

    try {
      const decoded = jwt.verify(token, 'jwt_secret_key'); // Decode the token using the secret key
      req.user = decoded; // Attach user info to the request object

      // If roles are specified, ensure the user's role matches one of the allowed roles
      if (roles.length && !roles.includes(decoded.role)) {
        if (decoded.role === 'provider' || decoded.role === 'user') {
          return res.status(403).json({
            message: `Forbidden: Access restricted to ${decoded.role}s only`,
          });
        } else {
          return res.status(403).json({
            message: 'Forbidden: Insufficient role permissions',
          });
        }
      }

      next(); // Proceed to the next middleware or route handler
    } catch (err) {
      // Catch any error during token verification and return an appropriate message
      return res.status(401).json({
        message: 'Unauthorized: Invalid or expired token',
      });
    }
  };
};

module.exports = verifyToken;
