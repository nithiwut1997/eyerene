import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme, Typography } from "@mui/material";
import { NextPage } from "next";

const OverFlowContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
`;

const SuccessPageContainer = styled.div`
  display: flex;
  height: 100%;
  padding-top: 128px;
  justify-content: center;
  align-items: center;
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
  opacity: 0.7;
  border-radius: 8px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    min-width: 100%;
  }
`;

const SuccessLogo = styled.img`
  flex: 1;
  width: 280px;
`;

export const SuccessPage: NextPage = () => {
  return (
    <OverFlowContainer
      css={css`
        background-image: url("/static/images/bg-success.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
      `}
    >
      <SuccessPageContainer>
        <FormContainer>
          <SuccessLogo src="/static/images/success-logo.png" alt="" />
          <Typography variant="subtitle1" align="center">
            ถือว่าเราเป็นแฟนกันแล้วนะ :)
          </Typography>
        </FormContainer>
      </SuccessPageContainer>
    </OverFlowContainer>
  );
};
