import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='footerimg'>
                <img src="src/assets/footer.png" alt="src/assets/footer.png" />
            </div>

            <footer>
                <div class="footer-content">

                    <p>&copy; 2024 Fashion E-Commerce. All rights reserved.</p>
                    <p>Contact us: support@fashionstore.com</p>
                    <p>Follow us on social media:
                        <a href="https://facebook.com" target="_blank">Facebook</a> |
                        <a href="https://twitter.com" target="_blank">Twitter</a> |
                        <a href="https://instagram.com" target="_blank">Instagram</a>
                    </p>
                    <p>Terms of Service | Privacy Policy</p>
                </div>


                <div class="footer-products">
                    <p><strong>Clothing Categories</strong></p>
                    <ul>
                        <li><a href="#">Men's Clothing</a></li>
                        <li><a href="#">Women's Clothing</a></li>
                        <li><a href="#">Kids' Clothing</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Footwear</a></li>
                    </ul>
                    <p><strong>Featured Products</strong></p>
                    <ul>
                        <li><a href="#">Men's Casual T-Shirt</a></li>
                        <li><a href="#">Women's Floral Dress</a></li>
                        <li><a href="#">Leather Jacket</a></li>
                        <li><a href="#">Running Shoes</a></li>
                    </ul>
                    </div >
            </footer>

        </div >
      
    )
}

export default Footer
