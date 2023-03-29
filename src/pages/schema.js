import * as yup from "yup"

export const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "name must be at least 2 characters")
      .required("Must add name"),
    toppings:yup
      .string()
      .required(""),
    pepperoni: yup
      .boolean()
      .oneOf([true], ""),
     sausage: yup
     .boolean()
     .oneOf([true], ""),
      veggies: yup
      .boolean()
     .oneOf([true], ""),
      extracheese: yup
      .boolean()
     .oneOf([true], ""),
    instructions: yup
    .string()
    .required("")
  });