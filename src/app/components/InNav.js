import styles from './Nav.module.css' 
import Link from 'next/link'
export default function Nav() {
  return (
    <>
      <div className={styles.topnav}>
        <img src='/Gopher.png' alt="Netlify Logo" href="/home" className={styles.flogo} />
        <Link href="/service/home">Front page</Link>
        <Link href="/service/tracker">Work Tracker</Link>
        <Link href="/service/crm">CRM</Link>
        <Link href="/service/hr">HR</Link>
        <Link href="/service/finances">Finances</Link>
        <Link href="/service/marketing">Marketing</Link>
        <div className={styles.rightalignment}>
          <Link href="/service/settings">Settings</Link>
          <Link href="/service/help">Help</Link>
          <Link href="/">Log out</Link>
        </div>
      </div>
    </>  
  )
}