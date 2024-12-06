import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { Button, Checkbox, Form, Input } from "antd";
import Image from "material-ui-image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IMAGES } from "../../configs/images";
import { loginApi } from "../../queries/Login/api";
import ForgotPassword from "./ForgotPassword";
import "./styles.scss";

export type FieldType = {
  email?: string;
  password?: string;
  // remember?: string;
};

const Login: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const { handleSubmit } = useForm<FieldType>();

  // Handle form submission
  const onSubmit: SubmitHandler<FieldType> = async (data) => {
    const isAuthenticated = await loginApi(data);
    if (isAuthenticated) {
      window.location.href = `http://localhost:3000/dashboard`;
    } else {
      alert("Invalid credentials");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="xs" className="login-container">
      <Box className="login-container_box">
        <Stack className="img-container" sx={{ flexDirection: "row" }}>
          <Image
            src={IMAGES.logo}
            style={{
              display: "block",
              paddingTop: "2px",
              backgroundColor: "transparent",
            }}
            imageStyle={{
              height: "45px",
              width: "auto",
              position: "relative",
              borderRadius: "30%",
            }}
            disableSpinner={true}
            disableTransition={true}
          />
          <Stack>
            <Typography
              color="#009DC3"
              fontWeight={700}
              variant="h5"
              fontFamily={"Poppins"}
            >
              WMS
            </Typography>
          </Stack>
        </Stack>

        <Typography
          fontWeight={600}
          variant="h4"
          fontFamily={"Poppins"}
          marginBottom={3}
        >
          Sign in
        </Typography>

        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item<FieldType>
            // name="remember"
            valuePropName="checked"
            label={null}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <Checkbox>Remember me</Checkbox>

              <Link
                href="#"
                variant="body2"
                color="textSecondary"
                sx={{
                  fontWeight: 500,
                  "&:hover": {
                    color: "#006882",
                  },
                }}
                onClick={handleClickOpen}
              >
                Forgot password?
              </Link>
              <ForgotPassword open={open} handleClose={handleClose} />
            </Stack>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        {/* <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Don't have an account?{" "}
          <Link
            href="#"
            variant="body2"
            sx={{
              fontWeight: 500,
              "&:hover": {
                color: "#006882",
              },
            }}
          >
            Sign up
          </Link>
        </Typography>

        <Divider sx={{ my: 2 }}>or</Divider> */}

        {/* Social Login Buttons */}
        {/* <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              style={{
                color: "#000",
                borderColor: "#ddd",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              Sign in with Google
            </Button>
          </Grid>
        </Grid> */}
      </Box>
    </Container>
  );
};

export default Login;
