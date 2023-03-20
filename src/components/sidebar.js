import React from "react";
import styled from "styled-components";
import { MdOutlineNextPlan, MdOutlineWbSunny } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
// import { FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
// import {BiCalendar} from "react-icons/bi"

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <H1>Microsoft Task</H1>
        <Search>
          <Div>
            <AiOutlineUser size={20} />
          </Div>
          <Input placeholder="adam smilga" />
          <Div>
            <BiSearch size={20} />
          </Div>
        </Search>
        <But>
          <MdOutlineWbSunny color="royalblue" size={20} />
          <P>My Day</P>
        </But>
        <But>
          <AiOutlineStar color="royalblue" size={20} />
          <P>Inportant</P>
        </But>
        <But>
          <MdOutlineNextPlan color="royalblue" size={20} />
          <P>Next Planned</P>
        </But>
        <But>
          <FiHome color="royalblue" size={20} />
          <P>Tasks</P>
        </But>
        <But>
          <Create>+</Create>
          <P1>New list</P1>
        </But>
      </Wrapper>
    </Container>
  );
};
export default Sidebar;

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid lightgrey;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;
const H1 = styled.div`
  font-size: 25px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;
const Search = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 13px;
`;
const Div = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 150px;
  height: 95%;
  border: none;
  outline: none;
  opacity: none;
  background-color: inherit;
  ::placeholder {
    color: black;
  }
`;
const But = styled.div`
  width: 100%;
  height: 30px;
  /* background-color: lightgrey; */
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 13px;
`;
const P = styled.div`
  font-size: 15px;
  margin-left: 10px;
`;
const P1 = styled.div`
  font-size: 15px;
  margin-left: 10px;
  margin-top: 5px;
`;
const Create = styled.div`
  color: royalblue;
  font-size: 30px;
`;
