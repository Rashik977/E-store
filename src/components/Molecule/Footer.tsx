import Image from "../Atomic/Image";
import Text from "../Atomic/Text";
import TextInput from "../Atomic/TextInput";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__section">
          <div className="footer__title">
            <Text type="h5">Account</Text>
          </div>

          <ul className="footer__list">
            <li className="footer__item">
              <Text type="h6">Log In</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">Sign Up</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">Redeem a Gift Card</Text>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <div className="footer__title">
            <Text type="h5">Company</Text>
          </div>
          <ul className="footer__list">
            <li className="footer__item">
              <Text type="h6">About</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">Environmental Initiatives</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">Factories</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">DEI</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">Careers</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">International</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">Accessibility</Text>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <div className="footer__title">
            <Text type="h5">Get Help</Text>
          </div>
          <ul className="footer__list">
            <li className="footer__item">
              <Text type="h6">Help Center</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">Return Policy</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">Shipping Info</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">Bulk Orders</Text>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <div className="footer__title">
            <Text type="h5">Connect</Text>
          </div>
          <ul className="footer__list">
            <li className="footer__item">
              <Text type="h6">Facebook</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">Instagram</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">Twitter</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">Affiliates</Text>
            </li>
            <li className="footer__item">
              <Text type="h6">Our Stores</Text>
            </li>
          </ul>
        </div>
        <div className="footer__newsletter">
          <TextInput type="email" placeholder="Email Address" />
          <button className="footer__button">
            <Image src="/icons/ArrowRight.svg" height="24px" width="24px" />
          </button>
        </div>
      </div>
      <div className="footer__bottom">
        <ul className="footer__legal-list">
          <li className="footer__legal-item">
            <Text type="p">Privacy Policy</Text>
          </li>
          <li className="footer__legal-item">
            <Text type="p">Terms of Service</Text>
          </li>
          <li className="footer__legal-item">
            <Text type="p">Do Not Sell or Share My Personal Information</Text>
          </li>
          <li className="footer__legal-item">
            <Text type="p">CA Supply Chain Transparency</Text>
          </li>
          <li className="footer__legal-item">
            <Text type="p">Vendor Code of Conduct</Text>
          </li>
          <li className="footer__legal-item">
            <Text type="p">Sitemap Pages</Text>
          </li>
          <li className="footer__legal-item">
            <Text type="p">Sitemap Products</Text>
          </li>
        </ul>
        <div className="footer__copyright">
          <Text type="p">© 2023 All Rights Reserved</Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
