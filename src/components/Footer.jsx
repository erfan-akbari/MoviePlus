import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa"

import ContentWrapper from "./ContentWrapper"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-primary-200 py-8 mt-10'>
      <ContentWrapper>
        <ul className="text-white flex items-center justify-center gap-5 text-sm sm:text-lg">
          <li className="hover:text-primary-pink">
            <Link to={''} >terms Of Use</Link>
          </li>
          <li className="hover:text-primary-pink">
            <Link to={''} >Privacy-Policy</Link>
          </li>
          <li className="hover:text-primary-pink">
            <Link to={''} >Abote</Link>
          </li>
          <li className="hover:text-primary-pink">
            <Link to={''} >Blog</Link>
          </li>
          <li className="hover:text-primary-pink">
            <Link to={''} >FAQ</Link>
          </li>
        </ul>
        <div className="text-xs/[18px] sm:text-sm text-stone-400 text-center my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi qui modi dolor voluptate autem inventore libero, voluptatibus quam tenetur voluptas! Eum esse, laboriosam voluptates deserunt tempore nihil dicta illo aut alias? Ipsam cum dolorum aspernatur minima aut quae, consequatur commodi odit deserunt praesentium temporibus provident
        </div>
        <div className="flex items-center justify-center gap-5 text-white">
          <span className="block p-4 bg-primary rounded-full shadow-md hover:shadow-primary-pink hover:text-primary-pink">
            <FaFacebookF />
          </span>
          <span className="block p-4 bg-primary rounded-full shadow-md hover:shadow-primary-pink hover:text-primary-pink">
            <FaInstagram />
          </span>
          <span className="block p-4 bg-primary rounded-full  shadow-md hover:shadow-primary-pink  hover:text-primary-pink">
            <FaTwitter />
          </span>
          <span className="block p-4 bg-primary rounded-full  shadow-md hover:shadow-primary-pink hover:text-primary-pink">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  )
}

export default Footer;