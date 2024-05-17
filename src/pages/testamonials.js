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
        <h1 className={styles.testamonials1}>T E S T I M O N I A L S</h1>
        <div className={styles.testamonials}>
            <div className={styles.bg2}>
                <div className={styles.textpadding}>
                    <h3>John Thompson, CEO of Thompson Tech Solutions</h3>
                    <p>"As the CEO of a rapidly growing tech company, I sought the expertise of this business administration firm to streamline our operations and enhance our strategic planning. The team exceeded my expectations with their comprehensive approach and attention to detail. They not only optimized our processes but also introduced innovative strategies that significantly boosted our productivity and profitability. I highly recommend their services to any business aiming for excellence and sustainable growth."</p>
                    <br/>
                </div>
            </div>
            <div className={styles.bg1}>
                <div className={styles.textpadding}>
                    <br/>
                    <h3>Michael Carter, Founder of Carter & Co. Financial Advisors</h3>
                    <p>"Partnering with this business administration company has been a game-changer for my financial advisory firm. Their deep understanding of business dynamics and exceptional management skills have been instrumental in our expansion and success. The team's proactive solutions and dedication to our goals have helped us navigate complex challenges with ease. I couldn't be more pleased with the results and look forward to continuing our collaboration."</p>
                    <br/>
                </div>
            </div>
            <br/>
            <div className={styles.bg2}>
                <div className={styles.textpadding}>
                    <h3>Sarah Mitchell, Director of Operations at GreenEarth Innovations</h3>
                    <p>"Working with this business administration company has been a transformative experience for GreenEarth Innovations. As the Director of Operations, I was impressed by their ability to quickly identify areas for improvement and implement effective solutions. Their professionalism, expertise, and personalized approach have significantly enhanced our operational efficiency and overall performance. I highly recommend their services to any organization looking to achieve operational excellence and sustainable growth."</p>
                    <br/>
                </div>
            </div>
        </div>
    </RootLayout>
    </>
);