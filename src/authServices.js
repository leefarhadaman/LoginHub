
export const UserAuth = async (username, password) => {
    // Here, we will mock an API call
    const demoUser = {
      username: 'user123',
      password: 'password123'
    };
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(username === demoUser.username && password === demoUser.password);
      }, 1000);
    });
  };
  
  export const ExtranetAuth = async (username, password) => {
    const demoExtranetUser = {
      username: 'extranetUser',
      password: 'extranetPass'
    };
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(username === demoExtranetUser.username && password === demoExtranetUser.password);
      }, 1000);
    });
  };
  