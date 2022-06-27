import * as React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import styles from './SignIn.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import AppleStore from '../../assets/store.jpg'
import GoogleStore from '../../assets/google-store.png'
import Facebook from '../../assets/facebook.png';

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
    <div className={styles.signInContainer}>
      <Box className={styles.signInContent}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          className={styles.form}
        >
          <Box className={styles.logoContainer}>
            <img
              alt={'logo Instagram'}
              className={styles.logo}
              src={
                '	https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png'
              }
            />
          </Box>

          <Box className={styles.formContainer}>
            <form id="loginForm" method="post" className={styles.formContent}>
              <Box className={styles.content}>
                <Box className={styles.inputContent}>
                  <Input
                    type={'text'}
                    name={'username'}
                    value={undefined}
                    onChange={() => {}}
                    onBlur={() => {}}
                    label={'Telefone, nome de usuário ou email'}
                  />
                  {/* {error && <p className={styles.error}>Campo obrigatório</p>} */}
                </Box>

                <Box className={styles.inputContent}>
                  <Input
                    type={'password'}
                    name={'password'}
                    value={undefined}
                    onChange={() => {}}
                    onBlur={() => {}}
                    label={'Senha*'}
                  />
                </Box>
                <Button children={'Entrar'} />
                <Box className={styles.lineContainer}>
                  <div className={styles.line}></div>
                  <div className={styles.or}>ou</div>
                  <div className={styles.line}></div>
                </Box>

                <Box className={styles.facebookContainer}>
                  <div className={styles.facebookContent}>
                    <span className={styles.iconContent}>
                      <img
                        className={styles.icon}
                        src={Facebook}
                        alt="icone facebook"
                      />
                    </span>
                    <span className={styles.text}>Entrar com o Facebook</span>
                  </div>
                </Box>
              </Box>

              <Link
                href="#"
                sx={{
                  color: '#00376b',
                  fontSize: '10px',
                  lineHeight: '16px',
                  marginTop: '12px',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                Esqueceu a senha?
              </Link>
            </form>
          </Box>
        </Box>

        <Box
          className={styles.registerContainer}
        >
          <Box
            className={styles.registerContent}
          >
            <p
              className={styles.registerText}
            >
              Não tem uma conta?
              {" "}
              <a
                href="#"
                className={styles.registerLink}
              >
                Cadastre-se
              </a>
            </p>
          </Box>
        </Box>

        <Box>
          <p className={styles.textApp}>
            Obtenha o aplicativo
          </p>

          <div className={styles.logoApp}>
              <img
                className={styles.iconApp}
                src={AppleStore}
                alt="Baixar na App store"
              />
              {" "}
              <img
                className={styles.iconApp}
                src={GoogleStore}
                alt="Baixar no Google play"
              />
          </div>
        </Box>
      </Box>
    </div>
  );
};
