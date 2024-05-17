import styles from './Footer.module.css'
export default function Footer() {
  return (
    <>
        <footer className={styles.App_footer}>
        <img src='/Gopher.png' alt="Netlify Logo" href="#home" className={styles.flogo} />
          <p>This is a active website currently in use for school project. This domain is in use. Site last update 17.05.2024 (dd/mm/yyyy). <br /> We accept no liability in any form for the this website/web application. For more information contact: eric.benni@opp.eduvantaa.fi.</p>
        </footer>
    </>  
  )
}