import styles from './Nav.module.css' 
import Link from 'next/link'
export default function Nav() {
  return (
    <>
      <div className={styles.topnav}>
        <img src='/Gopher.png' alt="Netlify Logo" href="/home" className={styles.flogo} />
        <Link href="/">Imperium</Link>
        <Link href="/about">About</Link>
        <Link href="/market">Target Audience</Link>
        <Link href="/testamonials">Testimonials</Link>
        <Link href="/contact">Contact</Link>
        <div className={styles.rightalignment}>
          <Link href="/pricing">Plans</Link>
          <Link href="/join">Join</Link>
          <Link href="/service/home">Log In</Link>
        </div>
      </div>
    </>  
  )
}