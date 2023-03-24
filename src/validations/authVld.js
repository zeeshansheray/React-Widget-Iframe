import * as yup from 'yup';

const LoginVld = yup.object({
    email    : yup.string().email().required(),
})


const verificationVld = yup.object({
    verificationCode: yup.string().min(6).required(),
})

const SignupVld = yup.object({
    firstName  : yup.string().required('This field is required'),
    email      : yup.string().email().required('This field is required'),
    phone      : yup.string().required().matches(/^\d{1,10}$/, 'Phone number is not valid'),
    dialingCode: yup.string().matches(/^(\+?\d{1,3}|\d{1,4})$/).required(),
    lastName   : yup.string().required()
})


export {
    LoginVld,
    SignupVld,
    verificationVld,
}