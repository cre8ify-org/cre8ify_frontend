// src/actions/userActions.js
export const setRegistered = (isRegistered: any) => {
    return {
      type: "SET_REGISTERED",
      payload: isRegistered,
    };
  };
  