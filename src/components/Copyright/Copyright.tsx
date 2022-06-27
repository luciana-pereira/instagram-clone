import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import styles from './Copyright.module.css';


const Copyright = (props: any) => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <ul className={styles.footerText}>
          <li>Meta</li>
          <li>Sobre</li>
          <li>Blog</li>
          <li>Carreiras</li>
          <li>Ajuda</li>
          <li>API</li>
          <li>Privacidade</li>
          <li>Termos</li>
          <li>Principais contas</li>
          <li>Hashtags</li>
          <li>Localizações</li>
          <li>Instagram Lite</li>
          <li>Carregamento de contatos e não usuários</li>
        </ul>
        <ul className={styles.footerText}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li>Dança</li>
          <li>Comida e bebida</li>
          <li>Casa e jardim</li>
          <li>Música</li>
          <li>Artes visuais</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <p
        className={styles.copyrightText}
      >
        {'Copyright © '}
        <a color="inherit" href="https://www.linkedin.com/in/lucianapereiras/">
          Instagram <b>"Clone"</b> por Luciana Pereira
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </p>
    </footer>
  );
};

export default Copyright;
