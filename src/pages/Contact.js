const Contact = () => {
  return (
    <div>
      <div id="contact-header">
        <h1 className="text-center">Contact Us</h1>
        <h3 className="text-center">
          Get in touch with our travel experts to plan your perfect getaway
        </h3>
      </div>
      <div id="contactUsSection">
        <div>
          ` <h2>GET IN TOUCH</h2>
          <form>
            <div>
              <div>
                <label>First Name</label>
                <input type="text" name="firstName" required />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" name="lastName" required />
              </div>
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label>Message</label>
              <textarea name="message" rows="4" required></textarea>
            </div>
            <div>
              <button type="button">Send Message</button>
            </div>
          </form>
        </div>
        <div>
          <h2>Contact Us</h2>
         <div>
           <div>
            <div>image</div>
            <div>
              <p>Phone</p>
              <p>Customer Support (24/7):</p>
              <p>+64 27 658 0080</p>
            </div>
          </div>
          <div>
            <div>image</div>
            <div>
              <p>Email</p>
              <p>For general inquiries:</p>
              <p>info@kiwiadventurestour.co.nz</p>
              <p>For booking assistance:</p>
              <p>info@kiwiadventurestour.co.nz</p>
            </div>
          </div>
          <div>
            <div>
              image
            </div>
            <div>
              <p>Office Location</p>
              <p>152 Condell Avenue, Papanui,</p>
              <p>Christchurch, 8053</p>
              <p>New Zealand</p>
            </div>
          </div>
         </div>
         <div>
          <h3>Office Hours:</h3>
          <p>Monday - Friday</p>
          <p>8AM-5PM</p>
         </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
