import { LoadingButton } from '@mui/lab';
import { Card, Checkbox, Grid, TextField } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { Paragraph } from '../../Typography';
import {useAuth} from '../../../hooks';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import {validationSchema, inititalValues} from "./Login.form";
import { Auth } from "../../../api";
import { useState } from 'react';
import { Form } from "semantic-ui-react";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)',
}));

const LoginRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

const authController = new Auth();
const defaultTheme = createTheme();

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: inititalValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        setError("");
        const response = await authController.login(formValue);

        authController.setAccessToken(response.access);
        authController.setRefreshToken(response.refresh);

        login(response.access);
        navigate("/home");
      } catch (error) {
        console.error(error);
        setError("Error en el servidor", error);
      }
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://wareup.com.uy/wp-content/uploads/2021/07/banner-1.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar sesión
            </Typography>
            <ContentBox>
                  <Form onSubmit={formik.handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.errors.email}
                      helperText={formik.errors.email}
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Contraseña"
                      variant="outlined"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik.errors.password}
                      helperText={formik.errors.password}
                      sx={{ mb: 1.5 }}
                    />

                    <FlexBox justifyContent="space-between">
                      <FlexBox gap={1}>
                        <Checkbox
                          size="small"
                          name="remember"
                          onChange={formik.handleChange}
                          checked={formik.values.remember}
                          sx={{ padding: 0 }}
                        />

                        <Paragraph>Recuerdame</Paragraph>
                      </FlexBox>

                      <NavLink
                        to="/users/forgot-password"
                        style={{ color: "green" }}
                      >
                        ¿Olvidaste tu contraseña?
                      </NavLink>
                    </FlexBox>
                    
                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={formik.isSubmitting}
                      variant="contained"
                      sx={{ my: 2 }}
                    >
                      Login
                    </LoadingButton>

                    <LoadingButton
                      color="primary"
                      variant="outlined"
                      onClick={() => navigate("/")}
                      sx={{ my: 2, ml: 1 }}
                    >
                      Cancelar
                    </LoadingButton>
                    <Paragraph>
                      ¿No tienes una cuenta?
                      <NavLink
                        to="/users/register"
                        style={{ color: "green", marginLeft: 5 }}
                      > 
                        Registrarse
                      </NavLink>
                    </Paragraph>
                    <p className="register-form__error">{error}</p>
                  </Form>
            </ContentBox>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}