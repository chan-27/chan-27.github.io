const SocialIcons = () => {
    const styles = {
        icon: {
            textDecoration: "none",
            fontSize: "22px",
            padding: "10px",
            color: "white",
            transition: "0.2s ease-in",
        },
    };

    return (
        <div className="socialIcons" style={styles.socialIcons}>
            <a className="icon" style={styles.icon} href="https://github.com/chan27-2">
                <i className="fa-brands fa-github" aria-hidden="true" title="Sai Chandans' GitHub Profile"></i>
            </a>
            <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/saichandankadarla/">
                <i className="fa-brands fa-linkedin" aria-hidden="true" title="Sai Chandans' LinkedIn Profile"></i>
            </a>
            <a className="icon" style={styles.icon} href="https://twitter.com/Chandan27_2">
                <i className="fa-brands fa-twitter" aria-hidden="true" title="Sai Chandans' Twitter Profile"></i>
            </a>
        </div>
    );
};

export default SocialIcons;
