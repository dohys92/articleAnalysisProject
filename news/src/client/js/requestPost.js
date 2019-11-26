function validateRequest(req, res, text) {
    if(!req.body.text) {
        return res.status(400).json({
           message: 'Invalid input'
        })
    }
    return next();
}

function registerPostHandler(req, res) {
		res.send(req.body)
}

export { validateRequest }
export { registerPostHandler }