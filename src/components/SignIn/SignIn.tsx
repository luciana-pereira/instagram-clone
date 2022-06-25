import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './SignIn.module.css';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/lucianapereiras/">
        Instagram por Luciana Pereira
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export const SignIn = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box //Estilo container geral rgFsT
          sx={{
            color: 'rgba(var(--i1d,38,38,38),1)',
            marginTop: '12px',
            maxWidth: '350px',
            flexGrow: 1,
          }}
        >
          <Box //Box2 gr27e
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(var(--d87,255,255,255),1)',
              border: '1px solid rgba(var(--b6a,219,219,219),1)',
              borderRadius: '1px',
              margin: '44px 0 10px',
              padding: ' 10px 0',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignContent: 'stretch',
                alignItems: 'stretch',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                flex: '0 0 auto',
                marginBottom: '12px',
                marginTop: '36px',
                cursor: 'pointer',
              }}
            >
              <h1 className={styles.title}>Instagram</h1>
            </Box>

            <Box //container form epjei
              sx={{
                marginBottom: '10px',
                maxWidth: '350px',
                width: '100%',
              }}
            >
              <form
                id="loginForm"
                method="post"
                style={{
                  //form hmkte
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignContent: 'stretch',
                    alignItems: 'stretch',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    flex: '0 0 auto',
                  }}
                >
                  <Box
                    sx={{
                      margin: '0 40px 6px',
                    }}
                  >
                    <Box
                      sx={{
                        alignItems: 'center',
                        borderRadius: '3px',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        fontSize: '14px',
                        position: 'relative',
                        width: '100%',
                      }}
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Telefone, nome de usuário ou email"
                        name="username"
                        autoComplete="username"
                        autoFocus
                      />
                    </Box>

                    <Box
                      sx={{
                        alignItems: 'center',
                        borderRadius: '3px',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        fontSize: '14px',
                        position: 'relative',
                        width: '100%',
                      }}
                    >
                      <TextField
                        margin="normal"
                        required
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                      <Button type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
                        Mostrar
                      </Button>
                    </Box>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Entrar
                    </Button>
                  </Box>
                </Box>

                <Link
                  href="#"
                  textAlign="center"
                  fontSize="12px"
                >
                  Esqueceu a senha?
                </Link>
              </form>
            </Box>
          </Box>

          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(var(--d87,255,255,255),1)',
              border: '1px solid rgba(var(--b6a,219,219,219),1)',
              borderRadius: '1px',
              margin: '0 0 10px',
              padding: '30px 0',
            }}
          >
            <Typography
              style={{
                fontSize: "14px",
                textAlign: "center"
              }}
            >
              Não tem uma conta?
            </Typography>
            <Link
              href="#"
              style={{
                fontSize: "14px",
                textAlign: "center",
                fontWeight: "bold",
                textDecoration: "none",
                color: "#0095f6",
              }}
            >
              Cadastre-se
            </Link>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};
