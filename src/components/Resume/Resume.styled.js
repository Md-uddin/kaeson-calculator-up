import styled from "styled-components";

export const ResumeContainer = styled.div`
  background-color: #fff;
`;

export const Raw = styled.div`
  align-items: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  width: 100%;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #fafafa;
  }

  input {
    border-radius: 5px;
    border: 3px solid grey;
    font-size: 1rem;
    padding: 0.5rem;
    text-align: right;

    &:hover,
    &:focus {
      border-color: goldenrod;
      outline: none;
    }
  }
`;

export const Title = styled.div`
  font-size: 1em;
`;
