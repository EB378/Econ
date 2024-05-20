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
        <div className={styles.plans}>
            <div className={styles.iplans}>
                <h1>Basic</h1>
                <br/>
                <p>
                    - Basic CRM
                    <br/>
                    - Basic Finance Tracker
                    <br/>
                    - Basic Task Board
                    <br/>
                    - Basic tool support
                    <br/>
                    - Up to 10 users assosiated per company
                    <br/>
                    - Full intercompatibility with Google, Notion, Hubspot, and More
                </p>
                <br/>
                <br/>
                <h2>54.30 €<sub>/Monthly</sub></h2>
                <button>Select</button>
            </div>
            <div className={styles.iplans}>
                <h1>Premium</h1>
                <br/>
                <p>
                    - Full CRM
                    <br/>
                    - Basic Finance Tracker
                    <br/>
                    - Monthly Calls with an expert
                    <br/>
                    - up to 5 Advanced Task Board
                    <br/>
                    - Full tool support
                    <br/>
                    - Limited marketing templates
                    <br/>
                    - Exclusive accsess to Networking events
                    <br/>
                    - Full HR Support
                    <br/>
                    - Up to 50 users assosiated per company
                    <br/>
                    - Full intercompatibility with Google, Notion, Hubspot, and More
                </p>
                <br/>
                <br/>
                <h2>99.99 €<sub>/Monthly</sub></h2>
                <button>Select</button>
            </div>
            <div className={styles.iplans}>
                <h1>Ultra</h1>
                <br/>
                <p>
                    Full consulting at anytime
                    <br/>
                    - Full CRM
                    <br/>
                    - Full Finance Tracker
                    <br/>
                    - Unlimited Advanced Task Board(s)
                    <br/>
                    - Full tool support
                    <br/>
                    - Unlimited marketing templates
                    <br/>
                    - Unlimited users and Network
                    <br/>
                    - Full HR Support
                    <br/>
                    - Exclusive accsess to Networking events
                    <br/>
                    - On-call Support with our buisness experts
                    <br/>
                    - Accountability roster
                    <br/>
                    - Full intercompatibility with Google, Notion, Hubspot, and More
                </p>
                <br/>
                <br/>
                <h2>199.99 €<sub>/Monthly</sub></h2>
                <button>Select</button>
            </div>
        </div>
    </RootLayout>
    </>
);