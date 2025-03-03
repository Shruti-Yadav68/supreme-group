import logo from "../../assets/Images/Supreme_logo.svg"

function Footer() {
  return (
    <>
      <footer className="text-black bg-white py-10 flex w-full items-center justify-center bg-footer bg-no-repeat bg-cover bg-right-bottom blade-top-padding blade-bottom-padding border-t border-opacity-10 border-gray">
        <div className="w-container max-w-screen-lg  py-10">
          <div>
            <div>
              <a className="" href="/">
                {" "}
                <span>
                  <img
                    src={logo}
                    className="h-10 md:h-12 xlg:h-12"
                    alt="Supreme logo"
                    title="logo"
                  />
                </span>
              </a>
            </div>
            <div className="md:flex hidden md:flex-row flex-col items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-4 2xl:mt-10 mt-8">
              <ul className="grid sm:gap-5 gap-3 text-black list-none">
                <li className="mb-2 sg-translate font-semibold uppercase text-opacity-90">
                  Applications
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/applications/apparel"
                  >
                    <span className="sg-translate">Apparel</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/applications/automotive"
                  >
                    <span className="sg-translate">Automotive</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/applications/filtration"
                  >
                    <span className="sg-translate"> Filtration</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/applications/customised-nonwoven"
                  >
                    <span className="sg-translate">Customised Nonwoven</span>
                  </a>
                </li>
              </ul>
              <ul className="grid sm:gap-5 gap-3 text-black list-none">
                <li className="mb-2 sg-translate uppercase font-bold">
                  Company
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black undefined text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/who-we-are"
                  >
                    <span className="sg-translate">Who We Are</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black undefined text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/global-competency"
                  >
                    <span className="sg-translate">Global Compentency</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black undefined text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/innovation"
                  >
                    <span className="sg-translate">Innovation</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black undefined text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/esg-impact"
                  >
                    <span className="sg-translate">ESG Impact</span>
                  </a>
                </li>
              </ul>
              <ul className="grid sm:gap-5 gap-3 text-black list-none">
                <li className="mb-2 sg-translate font-semibold uppercase text-opacity-90">
                  MORE
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black undefined text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/contact-us"
                  >
                    <span className="sg-translate">Contact Us</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/careers"
                  >
                    <span className="sg-translate">Careers</span>
                  </a>
                </li>
              </ul>
              <ul className="grid sm:gap-5 gap-3 text-black list-none">
                <li className="mb-2 sg-translate font-semibold uppercase text-opacity-90">
                  Follow Us
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/supreme-group-company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap xl:text-base text-sm text-black hover:text-black font-normal transition-all duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 md:hidden items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-6 2xl:mt-10 mt-8">
              <ul className="grid sm:gap-5 gap-3 text-black list-none">
                <li className=" font-semibold uppercase text-opacity-90">
                  Applications
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/applications/apparel"
                  >
                    <span className="sg-translate">Apparel</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/applications/automotive"
                  >
                    <span className="sg-translate">Automotive</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/applications/filtration"
                  >
                    <span className="sg-translate"> Filtration</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/applications/customised-nonwoven"
                  >
                    <span className="sg-translate">Customized Nonwoven</span>
                  </a>
                </li>
              </ul>
              <ul className="grid sm:gap-5 gap-3 text-black list-none">
                <li className="uppercase font-bold">Company</li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black undefined text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/who-we-are"
                  >
                    <span className="sg-translate">Who we are</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black undefined text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/global-competency"
                  >
                    <span className="sg-translate">Global Compentency</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black undefined text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/innovation"
                  >
                    <span className="sg-translate">Innovation</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black undefined text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/esg-impact"
                  >
                    <span className="sg-translate">ESG Impact</span>
                  </a>
                </li>
              </ul>
              <ul className="grid sm:gap-5 gap-3 text-black list-none">
                <li className="font-semibold uppercase text-opacity-90">
                  MORE
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black undefined text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/contact-us"
                  >
                    <span className="sg-translate">Contact Us</span>
                  </a>
                </li>
                <li>
                  <a
                    className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100"
                    href="/careers"
                  >
                    <span className="sg-translate">Careers</span>
                  </a>
                </li>
              </ul>
              <ul className="grid sm:gap-5 gap-3 text-black list-none">
                <li className="font-semibold uppercase text-opacity-90">
                  Follow Us
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/supreme-group-company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap xl:text-base text-sm text-black hover:text-black font-normal transition-all duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex gap-3 md:flex-row flex-col  justify-between items-center blade-top-padding-xl">
            <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
              ©2024. All Rights Reserved.
            </h6>
            <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
              Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
            </h6>
            <h6 className="md:hidden block text-sm text-black whitespace-nowrap">
              ©2024. All Rights Reserved.
            </h6>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
