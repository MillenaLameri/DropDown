import { AuthForm } from "../login/components/AuthForm";
import { AuthContainer } from "./components/AuthContainer";

export const Register = () => {
  return (
    <AuthContainer>
      <AuthForm isRegister />
    </AuthContainer>
  );
};
