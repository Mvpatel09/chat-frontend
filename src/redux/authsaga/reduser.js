import actions from "./action";
import { toast } from "react-toastify";
const initState = {
  token: null,
  loading: false,
  islogin: false,
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
        islogin: true,
      };

      return {
        ...state,
        loading: false,
      };

    case actions.REGISTER_SUCCESS:
      toast.success('success')
      return {
        ...state,
        loading: false,
      };

    case actions.LOGOUT:
      return initState;

    case actions.ERROR:
      toast.error(action.message);

    case actions.LODER_ON:
      return {
        ...state,
        loading: true,
      };

    case actions.LODER_OFF:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
