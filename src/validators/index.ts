import * as yup from "yup";

const validators = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(6),
});

export default validators;