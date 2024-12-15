const { body, param, validationResult } = require('express-validator');

const validateCreateUser = [
    body('name').isString().notEmpty().withMessage('Name is required and should be a string'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('dob').isNumeric().notEmpty().withMessage("Date of Birth is required"),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters'),
];

const validateUpdateUser = [
    param('id').isInt().withMessage('User ID must be an integer'),
    body('name').optional().isString().notEmpty().withMessage('Name should be a string'),
    body('email').optional().isEmail().withMessage('Valid email is required'),
    body('dob').optional().isNumeric().withMessage('Date of Birth is required'),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validateCreateUser, validateUpdateUser, validate };