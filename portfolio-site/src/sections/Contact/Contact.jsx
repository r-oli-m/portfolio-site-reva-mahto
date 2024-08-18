import styles from './Contact.module.css'
function Contact() {
    return (
        <section id="contact" className={styles.container}>
            <h1 className='sectionTitle'>Contact</h1>
            <form action="https://formspree.io/f/mwpeqdqw" method='post'>
                <div className="formGroup">
                    <label htmlFor="name" hidden>Name</label> {/* why even label if hidden? */}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name'
                        required />
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder='E-mail'
                        required />
                </div>
                <div className="formGroup">
                    <label htmlFor="message" hidden>Message</label>
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        placeholder='Message'
                        required />
                </div>

                <div>
                    <button className="hover" type='submit'>Send</button>
                </div>

            </form>
        </section>


    )
}

export default Contact