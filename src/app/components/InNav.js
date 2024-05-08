import styles from './Nav.module.css' 
import Link from 'next/link'
export default function Nav() {
  return (
    <>
      <div className={styles.topnav}>
        <img src='/Gopher.png' alt="Netlify Logo" href="/home" className={styles.flogo} />
        <Link href="/home">Front page</Link>
        <Link href="/tracker">Work Tracker</Link>
        <Link href="/crm">CRM</Link>
        <Link href="/hr">HR</Link>
        <Link href="/finances">Finances</Link>
        <Link href="/marketing">Marketing</Link>
        <div className={styles.rightalignment}>
          <Link href="/settings">Settings</Link>
          <Link href="/help">Help</Link>
          <Link href="/">Log out</Link>
        </div>
      </div>
    </>  
  )
}