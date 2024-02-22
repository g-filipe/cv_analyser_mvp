import { createRoot } from "react-dom/client";
import Title from "./Title";
import styled from "styled-components";

const root = createRoot(document.body);
const App = () => {
  return (
    <>
      <Title />

      <InteractScreen>
        <JobTitleBox>
          <JobTitleInput placeholder="Título da vaga" />
          <JobTitleEditButton> Editar</JobTitleEditButton>
        </JobTitleBox>
        <DirectoryBox>
          <DirectoryButton>Selecione o diretório</DirectoryButton>
          <DirectoryPath>~/Desktop/lab-fg/analyser/cv_analyser </DirectoryPath>
        </DirectoryBox>
      </InteractScreen>
    </>
  );
};
root.render(<App />);

const InteractScreen = styled.div`
  display: flex;
  flex-direction: column;
`;
const JobTitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6%;
  margin-bottom: 2%;
`;

const JobTitleEditButton = styled.button`
  background-color: #5b5c63;
  cursor: pointer;
  color: #ffffff;
  font-size: 0.75rem;
  border-radius: 7px;
  border: none;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.363);
  width: 10%;
  height: 25px;
  height: 30px;
  margin-left: 1.5%;

  &:hover {
    background-color: #232429;
    color: #ffffff;
    font-weight: 500;
    transition: all 0.3s ease;
  }
`;
const JobTitleInput = styled.input`
  height: 25px;
  width: 80%;
  border-radius: 4px;
  font-weight: 600;

  &::placeholder {
    font-weight: 100;
  }
`;

const DirectoryBox = styled.div`
  display: flex;
  align-items: center;
`;

const DirectoryPath = styled.div`
  margin-top: 3%;
  margin-left: 3%;
  color: #3c9bfb;
  font-size: 0.75rem;
`;

const DirectoryButton = styled.button`
  background-color: #5b5c63;
  cursor: pointer;
  color: #ffffff;
  font-size: 0.75rem;
  border-radius: 7px;
  border: none;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.363);
  width: 30%;
  height: 30px;
  margin-top: 3%;

  &:hover {
    background-color: #232429;
    color: #ffffff;
    font-weight: 500;
    transition: all 0.3s ease;
  }
`;
