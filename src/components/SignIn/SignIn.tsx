import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './SignIn.module.css';
import Input from '../Forms/Input';
import Copyright from '../Copyright/Copyright';
import Button from '../Forms/Button';

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
        <Box
          sx={{
            color: 'rgba(var(--i1d,38,38,38),1)',
            marginTop: '12px',
            maxWidth: '350px',
            flexGrow: 1,
          }}
        >
          <Box
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

            <Box
              sx={{
                marginBottom: '10px',
                // maxWidth: '350px',
                width: '100%',
              }}
            >
              <form
                id="loginForm"
                method="post"
                style={{
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
                      <Input
                        placeholder={'Telefone, nome de usuário ou email'}
                        type={'text'} name={'username'}
                        value={undefined}
                        onChange={() => {}}
                        error={'Campo obrigatório'}
                        onBlur={() => {}} />
                      {/* <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Telefone, nome de usuário ou email"
                        name="username"
                        autoComplete="username"
                        autoFocus
                      /> */}
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
                      <Input
                        type={'password'}
                        name={'password'}
                        value={undefined}
                        onChange={() => {}}
                        error={'Campo obrigatório'}
                        onBlur={() => {}}
                        placeholder={'Senha*'}
                      />
                      {/* <TextField
                        margin="normal"
                        required
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      /> */}
                    </Box>
                    <Button children={'Entrar'} />
                    {/* <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Entrar
                    </Button> */}
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
