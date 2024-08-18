import styles from './Footer.module.css'

function Footer() {
    return (
        <section id="footer" className={styles.container}>
            <p>
                &copy; 2024 Reva Mahto.
                <br />
                All rights reserved.
            </p>
        </section>
    )
}

export default Footer