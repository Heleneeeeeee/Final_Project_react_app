import Footer from "../../component/guest/Footer";
import Header from "../../component/guest/Header";
import "./ContactPage.scss"


const ContactPage = () => {
    return (
        <>
          <Header />
          <main className="homepage">
            <section>
              <h1 className="contact_title">Contactez-nous</h1>
              <div className="container-img">
                <img className="homepage-img" src="assets/images/contact.png" alt="" />
              </div>
            </section>
            <section>
              <form className="contact" action="" method="">
                <label for="name">Nom:</label>
                <input className="contact-input" type="text" id="name" name="name" required />
    
                <label for="email">Email:</label>
                <input  className="contact-input" type="email" id="email" name="email" required />
    
                <label for="message">Message:</label>
                <textarea  id="message" name="message" style={{ height: '500px' }} required></textarea>
    
                <input className="button" type="submit" value="envoyer" />
              </form>
            </section>
          </main>
          <Footer />
        </>
      );
    };
export default ContactPage;