import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-[#F8F8F8] px-4 py-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <img
              className="w-[150px]"
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
              alt=""
            />
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <div>
              <select className="w-[150px] bg-[#F8F8F8] p-1 outline-none border-[1px] border-[gray] rounded-md">
                <option value="IND">India</option>
                <option value="UAE">UAE</option>
              </select>
            </div>
            <div>
              <select className="w-[150px] bg-[#F8F8F8] p-1 outline-none border-[1px] border-[gray] rounded-md">
                <option value="ENG">English</option>
                <option value="HIN">Hindi</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <ul className="flex flex-col gap-1">
              <li className="text-black font-normal uppercase">ABOUT ZOMATO</li>
              <li className="text-gray-500 text-sm">Who We Are</li>
              <li className="text-gray-500 text-sm">Blog</li>
              <li className="text-gray-500 text-sm">Work With Us</li>
              <li className="text-gray-500 text-sm">Investor Relations</li>
              <li className="text-gray-500 text-sm">Refort Fraud</li>
              <li className="text-gray-500 text-sm">Press Kit</li>
              <li className="text-gray-500 text-sm">Contact Us</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-1">
              <li className="text-black font-normal uppercase">ZOMAVERSE</li>
              <li className="text-gray-500 text-sm">Zomato</li>
              <li className="text-gray-500 text-sm">Blinkit</li>
              <li className="text-gray-500 text-sm">Fidding India</li>
              <li className="text-gray-500 text-sm">Hyperpure</li>
              <li className="text-gray-500 text-sm">Zomaland</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-1">
              <li className="text-black font-normal uppercase">
                {" "}
                FOR RESTAURANTS
              </li>
              <li className="text-gray-500 text-sm">Partners With Us</li>
              <li className="text-gray-500 text-sm">Apps For You</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-1">
              <li className="text-black font-normal uppercase">LEARN MORE</li>
              <li className="text-gray-500 text-sm">Privacy</li>
              <li className="text-gray-500 text-sm">Security</li>
              <li className="text-gray-500 text-sm">Terms</li>
              <li className="text-gray-500 text-sm">Sitemap</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li className="text-black font-normal uppercase">Social Links</li>
              <li className="flex gap-2">
                <FaLinkedin
                  className="text-black text-3xl rounded-full"
                />
                <FaSquareInstagram
                  className="text-black text-3xl rounded-full"
                />
                <FaTwitterSquare
                  className="text-black text-3xl rounded-full"
                />
                <FaFacebookSquare
                  className="text-black text-3xl rounded-full"
                />
              </li>
              <li className="text-gray-500 text-sm">
                <img
                  className="w-[150px]"
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                  alt=""
                />
              </li>
              <li className="text-gray-500 text-sm">
                <img
                  className="w-[150px]"
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-300 w-full h-[1px]"></div>

        <div className="text-center text-gray-600 text-[14px]">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2024 © Zomato™ Ltd. All
          rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
