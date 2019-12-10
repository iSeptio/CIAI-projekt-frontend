import React, { useState } from "react";
import Client from "./Client/ClientPage";
import Admin from "./Admin/AdminPage";
import Veterinarian from "./Veterinarian/VeterinarianPage";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    switch (email) {
      case "admin@mail.pt":
        if (password === "imadmin123") {
          window.location.href = "/admin";
        }
        break;

      case "client@mail.pt":
        if (password === "kotek321") {
          window.location.href = "/client";
        }
        break;

      case "veterinary@mail.pt":
        if (password === "iliketobeavet") {
          window.location.href = "/veterinary";
        }
        break;
    }
  }
  return (
    <div>
      <Container fixed>
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-required"
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button size="large" type="submit" disabled={!validateForm()}>
            Log in
          </Button>
        </form>
      </Container>
    </div>
  );
}
