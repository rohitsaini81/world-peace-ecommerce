import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const AboutSection = (props) => {
    const marginTop = props.margin ? "mt-20" : "mt-0";

  return (
    <footer className={`bg-white text-gray-800 shadow-md p-8 h-[70vh] flex flex-col justify-between ${marginTop}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Shop</a></li>
            <li><a href="#" className="hover:text-blue-600">Cart</a></li>
            <li><a href="#" className="hover:text-blue-600">Checkout</a></li>
            <li><a href="#" className="hover:text-blue-600">My Account</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
          </ul>
        </div>

        {/* Site Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Site Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Shipping Details</a></li>
            <li><a href="#" className="hover:text-blue-600">Offers & Coupons</a></li>
            <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Help</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600">Returns</a></li>
            <li><a href="#" className="hover:text-blue-600">Support</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm border-t pt-4">
        <p>Copyright © 2025 | <a href="https://tutabaale.shop" className="text-blue-600 hover:underline">tutabaale.shop</a></p>
      </div>
    </footer>
  );
};

export default AboutSection;
