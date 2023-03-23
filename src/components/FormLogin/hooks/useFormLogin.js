import {useDispatch} from "react-redux";
import {login} from '../../../redux/actions/userActions';
import {useNavigate} from "react-router-dom";
export const useFormLogin = (form) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const saveAuthUser = (userAuth) => {
        localStorage.setItem('auth', JSON.stringify(userAuth))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const user = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        dispatch(login(user)).then((res) => {
            saveAuthUser(res)
            navigate('/')
        }).catch(err => {
            alert(err.response.data.message)
        })

    }
    return {
        handleSubmit
    }
}