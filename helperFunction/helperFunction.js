
const successResponse = (res, message, statusCode = 200,data) => {
  res.status(statusCode).json({
    success: true,
    message: message,
    data
  });
};

const errorResponse = (res, message, statusCode = 500, error = null) => {
  res.status(statusCode).json({
    success: false,
    message: message,
    error
  });
};

module.exports = {
  successResponse,
  errorResponse
};
