const { body } = require("express-validator");

exports.uservalidation = (method) => {
  let error = [];
  switch (method) {
    case "signup": {
      error = [
        body('phone').notEmpty().withMessage('this field is required').isLength({ min: 10 }).withMessage('mobile number must be at least 10 characters long'),
        body("password").notEmpty().withMessage('this field is required').isLength({ min: 6 }).withMessage('password must be at least 6 characters long'),
      ];
      break;
    }
    case "signin": {
      error = [
        body('phone').notEmpty().withMessage('this field is required').isLength({ min: 10 }).withMessage('mobile number must be at least 10 characters long'),
        body("password").notEmpty().withMessage('this field is required').isLength({ min: 6 }).withMessage('password must be at least 6 characters long'),
      ];
      break;
    }
    case "save": {
      error = [
        body("title").trim().notEmpty().withMessage('this field is required'),
        body("genre").trim().notEmpty().withMessage('this field is required'),
        body("author").trim().notEmpty().withMessage('this field is required'),
        body("publicationDate").trim().notEmpty().withMessage('this field is required'),
      ];
      break;
    }
    
  }
  return error;
};
