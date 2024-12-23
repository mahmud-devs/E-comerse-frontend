import * as Yup from "yup";

const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
const passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const loginValidationSchema = Yup.object({
  emailorphone: Yup.string()
    .matches(emailFormat, "Invalid email format")
    .required("Email Missing !!"),

  Password: Yup.string()
    .min(8, "password Length must be over 8 chractar")
    .max(14, "Passowrd length cannot be over 14")
    .matches(
      passwordFormat,
      "password must include 1 special character, 1 number, Uppercase and lowecase",
    )
    .required("Password Required !!"),
});
