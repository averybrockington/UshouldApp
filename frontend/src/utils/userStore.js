

import React from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
// HashMap: username → { password, firstName }
export const userStore = new Map();

//adds a new user to the userStore
export function addUser(username, password, firstName) {
  if (userStore.has(username)) return false;

  userStore.set(username, {
    password: password,
    firstName: firstName,
  });

  return true;
}

//checks login credentials
export function validateUser(username, password) {
  if (!userStore.has(username)) return false;

  return userStore.get(username).password === password;
}
