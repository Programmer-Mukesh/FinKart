import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, Container, Button, Paper } from "@mui/material";
import { app } from "../firebase.config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import UserLogin from "../components/login_register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [pageLogin, setPageLogin] = useState(true);
  const router = useRouter();

  const handleAction = (id) => {
    const authentication = getAuth();

    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          router.push("/home");
          sessionStorage.setItem("User", JSON.stringify(response.user));
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            setError("Please check the Password");
          } else if (
            error.code === "auth/user-not-found" ||
            error.code === "auth/invalid-email"
          ) {
            setError("Please check the Email");
          } else {
            alert(error);
          }
        });
    } else {
      if (name.length > 3) {
        createUserWithEmailAndPassword(authentication, email, password)
          .then((response) => {
            router.push("/home");
            let user = { ...response.user, userName: name };
            sessionStorage.setItem("User", JSON.stringify(user));
          })
          .catch((error) => {
            if (error.code === "auth/wrong-password") {
              setError("Please check the Password");
            } else if (
              error.code === "auth/user-not-found" ||
              error.code === "auth/invalid-email"
            ) {
              setError("Please check the Email");
            } else {
              alert(error);
            }
          });
      } else {
        setError("Enter correct Full Name");
      }
    }
  };

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("User"));
    if (user) {
      router.push("/home");
    }
  }, []);

  return (
    <Container className="loginContainer">
      {pageLogin ? (
        <UserLogin
          title="Login"
          subTitle="Get access to all our products"
          email={email}
          setEmail={setEmail}
          setPassword={setPassword}
          password={password}
          handleAction={() => handleAction(1)}
          btnText="Login"
          pageLogin={pageLogin}
          setPageLogin={setPageLogin}
          error={error}
        />
      ) : (
        <UserLogin
          title="Looks like you're new here!"
          subTitle="Sign up with your email to get started"
          email={email}
          setEmail={setEmail}
          name={name}
          setName={setName}
          setPassword={setPassword}
          password={password}
          handleAction={() => handleAction(2)}
          btnText="Register"
          pageLogin={pageLogin}
          setPageLogin={setPageLogin}
          error={error}
        />
      )}
    </Container>
  );
};

export default Login;
