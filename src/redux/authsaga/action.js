const actions = {
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGOUT_REQUEST: "LOGOUT_REQUEST",
    REGISTER_REQUEST: "REGISTER_REQUEST",
    LODER_ON: "LODER_ON", 
    LODER_OFF: "LODER_OFF",
    LOGOUT: "LOGOUT",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    LOGIN_ERROR: "LOGIN_ERROR",
    ERROR: "ERROR",

    loginSaga: (payload,navigate) => ({
      type: actions.LOGIN_REQUEST,
      payload:payload,
      navigate:navigate
    }),
    registerSaga: (payload,navigate) => ({
      type: actions.REGISTER_REQUEST,
      payload:payload,
      navigate:navigate
    }),
    logoutSaga: (navigate) => ({
      type: actions.LOGOUT_REQUEST,
      navigate:navigate
    }),
  };
  export default actions;