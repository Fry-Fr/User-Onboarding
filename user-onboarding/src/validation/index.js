import * as yup from 'yup'

export default yup.object().shape({
    name:  yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    termsOfService: yup.boolean().oneOf([true])
})