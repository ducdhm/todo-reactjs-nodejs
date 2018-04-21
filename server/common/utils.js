exports.errorJson = function (res, message, error) {
    res.status(500).json({
        status: false,
        message: message,
        error: error
    });
};