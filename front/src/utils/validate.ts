type UserInfomation = {
  email: string;
  password: string;
};

function validateUser(values: UserInfomation) {
  const errors = {
    email: '',
    password: '',
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Invalid email address.';
  }
  if (!(values.password.length >= 8 && values.password.length <= 20)) {
    errors.password =
      'Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character';
  }

  return errors;
}

function validateLogin(values: UserInfomation) {
  return validateUser(values);
}

function validateSignup(values: UserInfomation & {passwordConfirm: string}) {
  const errors = validateUser(values);
  const signupErrors = {...errors, passwordConfirm: ''};

  if (values.password !== values.passwordConfirm) {
    signupErrors.passwordConfirm = 'The passwords do not match.';
  }

  return signupErrors;
}

export {validateLogin, validateSignup};
