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
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                
                <input type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
        
    </RootLayout>
    </>
);