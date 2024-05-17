import "@/app/globals.css";
import RootLayout from "@/app/layout";
import styles from "./pages.module.css"



export default () => (
    <>
    <RootLayout>
        <div className={styles.columns}>
            <img className={styles.img2} src="/aron.jpeg" alt="Aron"/>
            <img className={styles.img2} src="/abby.jpeg" alt="Abby"/>
        </div>
    </RootLayout>
    </>
);