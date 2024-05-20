import "@/app/globals.css";
import RootLayout from "@/app/layout";
import styles from "./pages.module.css"
import Box1 from "@/app/components/TBox2";

export default () => (
    <>
    <RootLayout>

        <div className={styles.smallerversion}>
            <Box1/>
        </div>
        <div className={styles.container}>
            <form herf="/">
                <div className={styles.forms}>
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.."></input>
                    
                    <label for="company">Company(Optional)</label>
                    <input type="text" id="company" name="company" placeholder="Company name..."></input>
                    <label for="country">Topic</label>
                    <br/>
                    <select className={styles.forms} id="country" name="country">
                        <option value="usa">'I don't know if this is a good fit for me...'</option>
                        <option value="usa">Technical issues</option>
                        <option value="canada">Pricing</option>
                        <option value="usa">Other</option>
                    </select>
                </div>
                <div>
                    <label for="subject">Details</label>
                    <br/>
                    <textarea className={styles.fdescription} id="Details" name="Details" placeholder="How can we help you..."></textarea>
                </div>
                <div className={styles.forms}>
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
        
    </RootLayout>
    </>
);