import * as Yup from "yup";

const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
const passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const bdPhoneNumberRegex = /^(?:\+?88)?01[3-9]\d{8}$/;

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
// ========================          ==============================================
export const signUpValidationSchema = Yup.object({
  email: Yup.string()
    .matches(emailFormat, "Invalid email format")
    .required("Email Missing !!"),

  password: Yup.string()
    .min(8, "password Length must be over 8 chractar")
    .max(14, "Passowrd length cannot be over 14")
    .matches(
      passwordFormat,
      "password must include 1 special character, 1 number, Uppercase and lowecase",
    )
    .required("Password Required !!"),

  firstName: Yup.string().required("First name missing!!"),

  phone: Yup.string()
    .matches(bdPhoneNumberRegex, "invalide phone number")
    .required("phone number requires!!"),
});
// ===========================================================================
export const contactValidationSchema = Yup.object({
  name: Yup.string().required("Name is Required !!"),
  email: Yup.string()
    .matches(emailFormat, "Invalid email address !!")
    .required("Email is Required !!"),
  phone: Yup.string()
    .required("Phone Number is Required !!")
    .matches(bdPhoneNumberRegex, "Invalid Phone Number !!"),
  message: Yup.string().required("Message is Required !!"),
});

// =============== checkOUt validation =============

export const checkOutValidationSchema = Yup.object().shape({
  userinfo: Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    email: Yup.string()
      .matches(emailFormat, "Invalid email format")
      .required("Email is required"),
    mobile: Yup.string()
      .matches(/^(?:\+?88)?01[3-9]\d{8}$/, "Invalid mobile number")
      .required("Mobile number is required"),
    address1: Yup.string().required("Address 1 is required"),
    address2: Yup.string().required("Address 2 is required"),
    town: Yup.string().required("Town is required"),
    district: Yup.string().required("District is required"),
    postalcode: Yup.string()
      .matches(/^\d{5,6}$/, "Invalid postal code")
      .required("Postal code is required"),
  }),
});
