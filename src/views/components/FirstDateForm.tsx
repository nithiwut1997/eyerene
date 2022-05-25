import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { DialogError } from "./DialogError";

const FirstDateFormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  space-between: 10px;
  margin-top: 24px;
`;

export const FirstDateForm = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <FirstDateFormContainer>
      <Typography align="center" variant="subtitle1">
        เป็นแฟนกันนะ
      </Typography>
      <ButtonContainer>
        <Button
          variant="contained"
          style={{ marginRight: 32 }}
          onClick={() => router.push("/success")}
        >
          ตกลง
        </Button>
        <Button variant="outlined" onClick={() => setOpenDialog(true)}>
          ปฏิเสธ
        </Button>
      </ButtonContainer>

      <DialogError
        open={openDialog}
        onClose={handleCloseDialog}
        onClickButton={handleCloseDialog}
      >
        แจ้งให้ทราบเฉย ๆ ห้ามปฏิเสธ!!
      </DialogError>
    </FirstDateFormContainer>
  );
};
