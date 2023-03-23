import {createUser} from '../../../redux/actions/userActions';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export const useForm = (form) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);

        const user = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            password: formData.get('password'),
            cellPhone: formData.get('phone'),
        }
        dispatch(createUser(user)).then(() => {
            navigate('/login')
        }).catch(err => {
            alert(err.response.data.message)
        })
    }

    return {
        handleSubmit
    }
}