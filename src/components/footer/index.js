// Footer.js
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              {/* Column1 */}
              <div className="footer-pad">
                <h4>POPULAR CATEGORIES</h4>
                <ul className="list-unstyled">
                  <li><a href="#">cars</a></li>
                  <li><a href="#">flats for rent</a></li>
                  <li><a href="#">mobiles phones</a></li>
                  <li><a href="#">jobs</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              {/* Column2 */}
              <div className="footer-pad">
                <h4>TRENDING SEARCHES</h4>
                <ul className="list-unstyled">
                  <li><a href="#">bikes</a></li>
                  <li><a href="#">watches</a></li>
                  <li><a href="#">books</a></li>
                  <li><a href="#">dogs</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              {/* Column3 */}
              <div className="footer-pad">
                <h4>ABOUT US</h4>
                <ul className="list-unstyled">
                  <li><a href="#">About EMPG</a></li>
                  <li><a href="#">OLX Blog</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">OLX for Businesses</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              {/* Column4 */}
              <div className="footer-pad">
                <h4>OLX</h4>
                <ul className="list-unstyled">
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Sitemap</a></li>
                  <li><a href="#">Terms of use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {/* Column5 */}
              <h4>Follow Us</h4>
              <ul className="social-network social-circle">
                <li><a href="https://www.facebook.com/olxpakistan" target="_blank" rel="noopener noreferrer"><img src="../images/Facebook_f_logo_(2021).svg.png" alt="Facebook" width="20px" height="20px" /></a></li>
                <li><a href="https://www.instagram.com/olx.pakistan/" target="_blank" rel="noopener noreferrer"><img src="../images/c8952d6e421a83d298a219edee783167.jpg" alt="Instagram" width="20px" height="20px" /></a></li>
                <li><a href="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ" target="_blank" rel="noopener noreferrer"><img src="../images/6a4204f04496559aa27101d25983d0f0.png" alt="YouTube" width="20px" height="20px" /></a></li>
                <li><a href="https://twitter.com/OLX_Pakistan" target="_blank" rel="noopener noreferrer"><img src="../images/Popular-Logo-Twitter-icon-transparent-PNG.png" alt="Twitter" width="20px" height="20px" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;