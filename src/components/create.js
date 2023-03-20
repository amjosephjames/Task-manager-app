import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const createTask = async () => {
    await axios
      .post("https://my-task-manager-lvbe.onrender.com/api/task/create", {
        title,
      })
      .then((res) => {
        console.log(res);
      });

    navigate("/dashboard");
  };
  return (
    <Container>
      <Div>
        <Input
          placeholder="what to do"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </Div>
      <Button onClick={createTask}>+</Button>
    </Container>
  );
};
export default Create;

const Container = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  border: 1px solid black;
`;
const Div = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 10px;
`;
const Input = styled.input`
  width: 90%;
  height: 90%;
  background-color: inherit;
  opacity: none;
  border: none;
  outline: none;
  ::placeholder {
    color: black;
    font-size: 14px;
  }
`;
