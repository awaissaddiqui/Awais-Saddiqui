import * as Yup from 'yup';

export const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
};
export const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').max(50, 'Name should not exceed 50 characters'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    subject: Yup.string().required('Subject is required').max(50, 'Subject should not exceed 50 characters'),
    message: Yup.string().required('Message is required').max(500, 'Message should not exceed 500 characters')
})

