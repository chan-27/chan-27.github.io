import Typewriter from "typewriter-effect";
import SocialIcons from "../../components/SocialIcons";
import "./landing.css"
import {Web3Button} from "@web3modal/react";
import {motion} from "framer-motion";

const Landing = ({ name }) => {
    const styles = {
        landing: {
            height: "calc(100% - 93px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },

        landingImage: {
            position: "absolute",
            bottom: "0",
            opacity: "0.3",
            height: "100%",

        },

        textContainer: {
            display: "flex",
            flexDirection: "column",
            letterSpacing: "1px",
            textAlign: "center",
            zIndex: "1",
            color: "#fff",
            textShadow: "1px 1px 3px #000",
        },

        name: {
            color: "#fff",
            fontWeight: "700",
            marginTop: "-100px",
            paddingBottom: "28px",
        },

        web3Wallet: {
            marginTop: "30px"
    }
    };

    return (
        <section className="landing" style={styles.landing}>
            <div className="textContainer" style={styles.textContainer}>
                <h1 className="name" style={styles.name}>
                    {name}
                </h1>
                <div className="description">
                    <Typewriter
                        className="description"
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("I'm a Developer")
                                .start();
                        }}
                    />
                </div>
                <div className="web3-wallet" style={styles.web3Wallet}>
                    <Web3Button />
                </div>
            </div>

            <div className="image-container">
                <motion.img
                    className="landingImage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={styles.landingImage}
                    src={"https://wallpaperaccess.com/full/5506731.jpg"}
                    alt="Michael Yeates"
                />
            </div>
            <SocialIcons />
        </section>
    );
};

export default Landing;
