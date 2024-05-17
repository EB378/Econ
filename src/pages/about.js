import "@/app/globals.css";
import RootLayout from "@/app/layout";
import styles from "./pages.module.css"
import Box1 from "@/app/components/Box1";

export default () => (
    <>
    <RootLayout>
        <div className={styles.smallerversion}>
            <Box1/>
        </div>
        <div className={styles.testamonials}>
            <div className={styles.bg2}>
                <div className={styles.textpadding}>
                    <h2 className={styles.title1}>About us</h2>
                    <p>Welcome to Imperium, where we turn business challenges into opportunities for growth and success. With a wealth of experience in business administration, we are dedicated to providing top-tier services that enhance the efficiency, productivity, and profitability of your organization.</p>
                    <br/>
                    <br/>
                </div>
            </div>
            <div className={styles.bg1}>
                <div className={styles.textpadding}>
                    <h3 className={styles.title1}>Our Mission</h3>
                    <p>Our mission is to empower businesses by delivering customized administrative solutions that streamline operations, foster innovation, and drive sustainable growth. We are committed to understanding the unique needs of each client and providing tailored strategies that ensure long-term success.</p>
                    <br/>
                    <br/>
                </div>
            </div>
            <br/>
            <div className={styles.bg2}>
                <div className={styles.textpadding}>
                    <h3 className={styles.title1}>Our Vision</h3>
                    <p>We envision a business world where every company, regardless of size or industry, can achieve its full potential through strategic administration and effective management. Our goal is to be the trusted partner that businesses rely on for expert guidance and support in navigating the complexities of today’s market.</p>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    </RootLayout>
    </>
);