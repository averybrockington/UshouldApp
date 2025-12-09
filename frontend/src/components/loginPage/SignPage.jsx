import React from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import SharedNavBarLanding from "../SharedNavBarLanding";
import { useState } from "react";
import { useUser } from "../utils/UserContext";
import { validateUser, addUser, userStore } from "../utils/userStore";

/* ----------------- Styled Components ----------------- */

const SignPageContainer = styled.div`
  width: 1544px;
  height: 2330px;
  position: relative;
  background: #FFF6EE;
  overflow: hidden;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;       // centers horizontally
  justify-content: center;   // centers vertically
  min-height: 180vh;         // full viewport height
  gap: 20px;                 // space between elements
`;
//title
const PageTitle = styled.span`
  display: block;
  text-align: center;
  color: #72645B;
  font-size: 100.28px;
  font-family: Rubik;
  font-weight: 900;
  text-decoration: underline;
  text-transform: lowercase;
  line-height: 150.42px;
`;
const Text1 = styled.span`
  text-align: center;
  color: #A79285;
  font-size: 21px;
  font-weight: 900;
  line-height: 27.93px;
  display: flex;
  margin-top: 10px  
`;
const Text2 = styled.span`
  text-align: center;
  color: #72645B;
  font-size: 45px;
  font-family: Rubik;
  font-weight: 900;
  line-height: 27.93px;
  margin-top: 150px;
  text-decoration: underline;
  font-transform: lowercase;
  `;

const Input = styled.input`
  padding: 10px;
  background:  #ffffffff;
  border: 3px solid #72645B;
  border-radius: 269.44px;
  width:400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #A79285;
  font-size: 21.55px;
  font-weight: 600;
  line-height: 32.33px;
  text-align: center;`;

/* ---------- BUTTON COMPONENTS ---------- */
//sign in button


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
  padding: 0;
  font-family: Rubik;

  /* Background layer */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(114, 99, 91, 0.67);
    border-radius: 269.44px;
    z-index: 1;
  }

  /* Text */
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



//create account button
const Text3 = styled.span`
  text-align: center;
  color: #A79285;
  font-size: 21px;
  font-weight: 600;
  line-height: 27.93px;
`;

//create account stuff 
// Input for first name
const FirstNameInput = styled.input`
  padding: 10px 20px;
  background: #ffffff;
  border: 3px solid #72645B;
  border-radius: 269.44px;
  width: 400px;
  color: #72645B;
  font-size: 21.55px;
  font-weight: 600;
  line-height: 32.33px;
  text-align: center;
`;




// --- Main Component ---
export default function LoginForm() {
  const { login } = useUser();
  const navigate = useNavigate();
// State for sign in
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


/// State for create account
  const [firstName, setFirstName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");


  // Handlers

  // Sign In Handler
  const handleSignIn = (e) => {
  e.preventDefault();
  const isValid = validateUser(username, password);
  if (isValid) {
    const userData = userStore.get(username);
    login(username, userData.firstName);
    console.log("Login successful!");
    navigate("/home");
  } else {
    alert("Invalid username or password.");
  }
};
// Create Account Handler
const handleCreateAccount = (e) => {
  e.preventDefault();
  const success = addUser(newUsername, newPassword, firstName);
  if (!success) {
    alert("Username already exists!");
    return;
  }
  console.log("Account created!");
  login(newUsername, firstName);
  navigate("/home");
};


  return (
    <SignPageContainer>
      <SharedNavBarLanding  />
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

        <Text3> Dont have an account? Create one below!</Text3>



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
          <Text1>Username:</Text1 >
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