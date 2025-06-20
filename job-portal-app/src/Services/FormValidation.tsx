export const signUpValidation = (name: string, value: string) => {
  switch (name) {
    case "name":
      if (value.length == 0) return "Name is required";
      return "";
    case "email":
      if (value.length == 0) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Email is Invalid";
      }
      return "";
    case "password":
      if (value.length == 0) return "Password is required";
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,15}$/.test(
          value
        )
      ) {
        return "Password must be 8–15 characters and include uppercase, lowercase, a digit, and a special character (e.g. @!#). No spaces allowed.";
      }
      return "";
    default:
      return "";
  }
};
