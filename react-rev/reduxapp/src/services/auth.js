
export const isAuthenticated = () => {
    if(localStorage.getItem('token') !== null){
      return localStorage.getItem("token");
    }else{
      return false
    }
  };
  