import "@/app/globals.css";
import RootLayout from "@/app/layout";
import styles from "./pages.module.css"
import Box1 from "@/app/components/Box1";
import { redirect } from 'next/navigation'


const onButtonClick = () => {
    redirect('/service/home')
}

export default () => (
    <>
    <RootLayout>

        <div className={styles.smallerversion}>
            <Box1/>
        </div>
        <div className={styles.container}>
                <div className={styles.forms}>
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Username"></input>
                    
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"></input>
                    <br/>
                    </div>
                <div className={styles.forms}>
                    <input onClick={onButtonClick} type="button" value="Log In"></input>
                </div>
        </div> 
    </RootLayout>
    </>
);