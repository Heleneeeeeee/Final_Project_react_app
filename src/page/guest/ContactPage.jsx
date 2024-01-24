import Footer from "../../component/guest/Footer";
import Header from "../../component/guest/Header";
import "./ContactPage.scss"


const ContactPage = () => {
    return (
        <>
          <Header />
          <main className="homepage">
            <section>
              <div className="container-img">
                <img className="homepage-img" src="src\assets\img\images\contact.png" alt="" />
              </div>
            </section>
            <section className="contact">
              <h2>Contact CSE FOJL</h2>
              <div>
                  <p>Mail:</p>
                  <p>cse.jennylepreux@adgessa.fr</p>
              </div>
              <div className="contactAdress">
                  <p>Adresse :</p>
                  <p>155 Avenue Aristide Briand</p>
                  <p>33700 Mérignac </p>
              </div>
            </section>
          </main>
          <Footer />
        </>
      );
    };
export default ContactPage;