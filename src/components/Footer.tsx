

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-3">
          <div>
            <h4 className="font-bold mb-2">Resource</h4>
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Menu</h4>
            <ul>
              <li>Cake</li>
              <li>Sandwich</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <p>+123456789</p>
            <p>Email: info@breadtalks.com</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  