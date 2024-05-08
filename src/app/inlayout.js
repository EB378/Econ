import "./globals.css";
import styles from "@/app/page.module.css";
import Nav from '@/app/components/InNav';
import Footer from '@/app/components/Footer';

 export default function inRootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Imperium BCMA</title>
      </head>
      <body>
        <Nav />
        <main className={styles.main}>
          <div className="App">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
