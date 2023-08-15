import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Input from "../components/Input";

export default function Form(props) {
  return (
    <Box component="form" noValidate autoComplete="off" maxWidth={256} sx={{
      margin: '64px auto 0'
    }}>
      <Input label="Username *" type="text" />
      <Input label="Password *" type="password" />
      <Button
        variant="contained"
        fullWidth
        onClick={() => props.setIsLoggedIn(true)}
        sx={{
          marginTop: "16px",
        }}
      >
        LOGIN
      </Button>
    </Box>
  );
}
