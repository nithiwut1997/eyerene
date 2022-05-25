import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Theme, Typography } from "@mui/material";
import { NextPage } from "next";
import { FirstDateForm } from "views/components";

const OverFlowContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
`;

const HomePageContainer = styled.div`
  display: flex;
  height: 100%;
  padding-top: 128px;
  justify-content: center;
  align-items: start;
  background-color: rgba(210, 208, 208, 0.5);
`;

const FormContainer = styled.div<{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36%;
  min-width: 500px;
  padding: 32px 24px;
  background: #c0c0c0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 8px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    min-width: 100%;
  }
`;

export const HomePage: NextPage = () => {
  return (
    <OverFlowContainer
      css={css`
        background-image: url("/static/images/bg.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        overflow: hidden;
      `}
    >
      <HomePageContainer>
        <FormContainer>
          <FirstDateForm />
        </FormContainer>
      </HomePageContainer>
    </OverFlowContainer>
  );
};
