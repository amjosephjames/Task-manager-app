import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/sidebar";
import Create from "../components/create";
import axios from "axios";
const Dashboard = () => {
  const [task, setTask] = useState([]);
  const viewTask = async () => {
    await axios
      .get("https://my-task-manager-lvbe.onrender.com/api/task/")
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    viewTask();
  });
  return (
    <>
      <Container>
        <Sidebar />
        <Wrapper>
          <Top>
            <Tophold>
              <Unknown></Unknown>
              <H1>Tasks</H1>
            </Tophold>
          </Top>
          <Holder>
            <Wrapping>
              <Create />
              <Form>
                {task.map((props) => (
                  <Box key={props._id}>
                    <Boxhold>
                      <Circle></Circle>
                      <Task>{props.title}</Task>
                      {/* <BsToggleOff size={20} margin-left={20} /> */}
                    </Boxhold>
                  </Box>
                ))}
              </Form>
            </Wrapping>
          </Holder>
        </Wrapper>
      </Container>
    </>
  );
};
export default Dashboard;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Top = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: royalblue;
`;
const Tophold = styled.div`
  width: 95%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Unknown = styled.div`
  width: 0px;
  height: 0px;
`;
const H1 = styled.div`
  color: white;
  font-size: 25px;
`;

const Holder = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: royalblue; */
`;
const Wrapping = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Form = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;
const Box = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const Boxhold = styled.div`
  /* width: 90%; */
  height: 90%;
  width: 99%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Circle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid black;
`;
const Task = styled.div`
  font-size: 14px;
  color: black;
  margin-left: 10px;
`;
