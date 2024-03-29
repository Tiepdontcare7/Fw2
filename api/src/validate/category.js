import Joi from "joi";

const schema = Joi.object({
  _id: Joi.string(),
  name: Joi.string().required().min(5).max(255),
  slug: Joi.string().required().min(5).max(255),
});

export default schema;
