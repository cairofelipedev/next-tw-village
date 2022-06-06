import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from 'next/image'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <header className="flex items-center justify-between bg-black py-5">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Image src="/static/favicons/logo.png" alt="avatar" width="50px" height="60px" />
              </div>
              <div>
                <Image
                  src="/static/images/logo_text.png"
                  alt="avatar"
                  width="150px"
                  height="60px"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            <Link
              href="#"
              className="p-1 font-medium uppercase text-white dark:text-gray-100 sm:p-4"
            >
              HOME
            </Link>
            <Link
              href="#"
              className="p-1 font-medium uppercase text-white dark:text-gray-100 sm:p-4"
            >
              CONTATO
            </Link>
            <div className="group inline-block">
              <button className="inline-flex items-center rounded py-2 px-6">
                <span className="mr-1 text-white">BENEFÍCIOS</span>
                <svg
                  className="h-4 w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute z-10 hidden rounded bg-white pt-1 shadow-md shadow-gray-300 group-hover:block dark:bg-gray-800">
                <li>
                  <button className="inline-flex items-center rounded py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#E96708"
                      className="bi bi-chevron-right font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <h1 className="ml-2 mr-5 text-sm">SEGURANÇA</h1>
                  </button>
                </li>
                <li>
                  <button className="inline-flex items-center rounded py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#E96708"
                      className="bi bi-chevron-right font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <h1 className="ml-2 mr-5 text-sm">LAZER E ESPORTE</h1>
                  </button>
                </li>
                <li>
                  <button className="inline-flex items-center rounded py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#E96708"
                      className="bi bi-chevron-right font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <h1 className="ml-2 mr-5 text-sm">EVENTOS</h1>
                  </button>
                </li>
                <li>
                  <button className="inline-flex items-center rounded py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#E96708"
                      className="bi bi-chevron-right font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <h1 className="ml-2 mr-5 text-sm">COMODIDADE</h1>
                  </button>
                </li>
                <li>
                  <button className="inline-flex items-center rounded py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#E96708"
                      className="bi bi-chevron-right font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <h1 className="ml-2 mr-5 text-sm">SAÚDE E BEM ESTAR</h1>
                  </button>
                </li>
              </ul>
            </div>
            <Link
              href="#"
              className="p-1 font-medium uppercase text-white dark:text-gray-100 sm:p-4"
            >
              PAGAMENTO
            </Link>
            <Link
              href="#"
              className="p-1 font-medium uppercase text-white dark:text-gray-100 sm:p-4"
            >
              LOCALIZAÇÃO
            </Link>
            <Link
              href="#"
              className="p-1 font-medium uppercase text-white dark:text-gray-100 sm:p-4"
            >
              ESTRUTURA
            </Link>
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
