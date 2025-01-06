import { param } from "express-validator";
import moment from "moment";

export const createUserValidationSchema = {
  title: {
    notEmpty: { errorMessage: "title can not be empty" },
    isString: { errorMessage: "title should be string" },
    isLength: { max: 50, min: 2 },
  },
  description: {
    isString: { errorMessage: "description should be string" },
    isLength: {
      options: { max: 200 },
      errorMessage: "description can not be more than 200",
    },
  },
  dueDate: {
    notEmpty: { errorMessage: "Due Date can not be empty" },
    custom: {
      options: (value) => {
        const givenDate = moment(value);
        if (!value || !givenDate.isValid())
          throw new Error("dueDate is invalid");
        if (givenDate.isSameOrBefore(moment())) {
          throw new Error("dueDate should be a future date");
        } else {
          return true;
        }
      },
    },
  },
};

export const validateId = param("id").isString().withMessage("not a valied id");
