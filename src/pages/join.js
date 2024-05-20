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
        <div className={styles.container}>
            <form herf="/">
                <div className={styles.forms}>
                    <label for="name">Full Name*</label>
                    <input type="text" id="name" name="name" placeholder="Your name.."></input>
                    <label for="company">Email*</label>
                    <input type="text" id="email" name="email" placeholder="e.g. John.doe@gmail.com"></input>
                    <label for="country">Select a Plan</label>
                    <br/>
                    <select className={styles.forms} id="country" name="country">
                        <option value="usa">*Choose a plan*</option>
                        <option value="usa">Basic Plan 54.30€/Month</option>
                        <option value="canada">Premium Plan 99.99€/Month</option>
                        <option value="usa">Ultra Plan 199.99€/Month</option>
                    </select>
                </div>
                <div className={styles.forms}>
                    <input type="submit" value="Submit"></input>
                </div>
                <h3>After submitting complete sign up from link in email.</h3>
            </form>
        </div>
        
    </RootLayout>
    </>
);