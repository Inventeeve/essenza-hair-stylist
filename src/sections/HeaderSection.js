import React from "react"
import logo from "../images/logo-sirio.png"

const Nav = [
  // { label: "Chi siamo", link: "#", type: "standard" },
  { label: "I nostri trattamenti", link: "#blurbs", type: "standard" },
  { label: "Listino prezzi", link: "#prices", type: "standard" },
  { label: "Contattaci", link: "#contacts", type: "accent" },
]

const HeaderSection = ({ data }) => (
  <>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl justify-center mx-auto">
        <div className="relative z-10 pb-8 bg-white">
          <div className="relative pt-6 sm:px-6 lg:px-8 w-full mx-auto">
            <nav className="relative flex justify-center items-center">
              <img className="h-20" src={logo} alt="sirio logo"/>
              <div className="hidden md:block md:ml-10 md:pr-4 text-center">
                {Nav.map((nav, index) => (
                  <a
                    key={index}
                    href={nav.link}
                    className={`${
                      nav.type === "accent"
                        ? `text-pink-600 hover:text-pink-900`
                        : `text-gray-500 hover:text-gray-900`
                    } mx-4 font-medium transition duration-150 ease-in-out`}
                  >
                    {nav.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-md">
              <div
                className="rounded-lg bg-white shadow-xs overflow-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div></div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      aria-label="Close menu"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {Nav.map((nav, key) => (
                    <a
                      key={key}
                      href={nav.link}
                      className={`${key > 1 && "mt-1"} ${
                        nav.type === "accent"
                          ? `text-pink-600 bg-gray-50 hover:bg-gray-100 hover:text-pink-700 focus:bg-gray-100 focus:text-pink-700 `
                          : `text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50 `
                      } focus:outline-none block px-3 py-2 rounded-md text-base font-medium  transition duration-150 ease-in-out`}
                      role="menuitem"
                    >
                      {nav.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 md:flex justify-between">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                {data.title}
                <br />
              </h2>
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-pink-600 sm:text-4xl sm:leading-none md:text-4xl">
                {data.subtitle}
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Sirio la stella del benessere e' un centro estetico sito in
                Cogliate specializzato in diverse tipologie di trattamenti
                estetici, personalizzati ed avanzati.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#blurbs"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-green transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Scopri di più
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#contacts"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-pink-700 bg-pink-100 hover:text-pink-600 hover:bg-pink-50 focus:outline-none focus:shadow-outline-green focus:border-pink-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Contattaci
                  </a>
                </div>
              </div>
            </div>
            <img
              className="w-full mx-auto sm:mx-0 my-6 sm:my-0"
              style={{ maxWidth: "300px" }}
              src={data.featuredImage}
              alt="featured"
            />
          </main>
        </div>
      </div>
    </div>
  </>
)

export default HeaderSection
