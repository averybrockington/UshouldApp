import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SharedNavBarLanding from "../SharedNavBarLanding";
import { useUser } from "../../utils/UserContext";
import { loginUser, registerUser } from "../../utils/api";

/* ----------------- Styled Components ----------------- */
// (Reuse your existing styled-components from before)
const SignPageContainer = styled.div`

  width: 100%;
  min-height: 100vh;
  background: #FFF6EE;
  overflow: hidden;
`;

const CenterContainer = styled.div`
  padding-top: 150px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-top;
  min-height: 100vh;
  gap: 20px;
`;

const PageTitle = styled.span`
  padding-left: 35px;
  text-align: center;
  color: #72645B;
  font-size: 100px;
  font-family: Rubik;
  font-weight: 900;
  text-decoration: underline;
  text-transform: lowercase;
`;

const Text1 = styled.span`
  color: #A79285;
  font-size: 21px;
  font-weight: 900;
  display: block;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 10px;
  background: #fff;
  border: 3px solid #72645B;
  border-radius: 269.44px;
  width: 400px;
  font-size: 21px;
  font-weight: 600;
  text-align: center;
  color: #72645B;
`;

const StyledButton = styled.button`
  width: 425px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  background: transparent;
  border: none;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(114, 99, 91, 0.67);
    border-radius: 269.44px;
    z-index: 1;
  }

  span {
    z-index: 2;
    color: #FFF6EE;
    font-size: 23.5px;
    font-weight: 600;
    text-transform: lowercase;
    line-height: 1;
    text-align: center;
    width: 100%;
  }
`;

const Text3 = styled.span`
  color: #A79285;
  font-size: 21px;
  font-weight: 600;
  text-align: center;
  margin-top: 30px;
`;

const Text2 = styled.span`
  color: #72645B;
  font-size: 45px;
  font-family: Rubik;
  font-weight: 900;
  text-decoration: underline;
  margin-top: 100px;
`;

/* ----------------- Main Component ----------------- */
export default function LoginForm() {
  const { login } = useUser();
  const navigate = useNavigate();

  // Sign-in state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Create-account state
  const [firstName, setFirstName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  /* ----------------- Handlers ----------------- */
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser({ username, password });
      if (user.error) {
        alert(user.error);
      } else {
        login(user.username, user.name); // save in context
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const newUser = await registerUser({
        username: newUsername,
        email: `${newUsername}@example.com`, // placeholder if you don't have email field yet
        password: newPassword,
        name: firstName,
      });

      if (newUser.error) {
        alert(newUser.error);
      } else {
        login(newUser.username, newUser.name);
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
      alert("Could not create account. Try again.");
    }
  };

  return (
    <SignPageContainer>
      <SharedNavBarLanding />
      <CenterContainer>
        {/* --- Sign In --- */}
        <form onSubmit={handleSignIn}>
          <PageTitle>sign in</PageTitle>
          <Text1>Username:</Text1>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="enter username"
            required
          />
          <Text1>Password:</Text1>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
            required
          />
          <StyledButton type="submit">
            <span>sign in</span>
          </StyledButton>
        </form>

        <Text3>Don't have an account? Create one below!</Text3>

        <Text2>create account</Text2>
        {/* --- Create Account --- */}
        <form onSubmit={handleCreateAccount}>
          <Text1>First Name:</Text1>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="enter your first name"
            required
          />
          <Text1>Username:</Text1>
          <Input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="enter new username"
            required
          />
          <Text1>Password:</Text1>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="enter new password"
            required
          />
          <StyledButton type="submit">
            <span>create account</span>
          </StyledButton>
        </form>
      </CenterContainer>
    </SignPageContainer>
  );
}
