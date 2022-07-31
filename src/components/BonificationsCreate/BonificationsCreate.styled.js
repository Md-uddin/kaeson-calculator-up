import styled from "styled-components";

export const BonificationsCreateWrapper = styled.div`
  background-color: #fff;
  display: flex;

  input[type="text"] {
    border-radius: 5px;
    border: 3px solid grey;
    font-size: 1rem;
    padding: 0.5rem;
    flex: 1;
    margin-right: 1rem;

    &:hover,
    &:focus {
      border-color: goldenrod;
      outline: none;
    }
  }
  button {
    border-radius: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  margin-right: 1rem;
  @media (max-width: 400px) {
    margin-right: 0.5rem;
  }
`;

export const Icon = styled.div`
  align-items: center;
  border: 1px solid grey;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  height: 30px;
  justify-content: center;
  line-height: 1;
  margin-left: 0.5rem;
  width: 30px;

  @media (max-width: 400px) {
    width: 25px;
    height: 25px;
    margin-left: 0.35rem;
    font-size: 1.25rem;
  }
`;
