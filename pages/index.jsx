import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Footer from '@/components/Footer'
import CarouselBanners from '@/components/CarouselBanners'
import ButtonModal from '@/components/ButtonModal'
import ButtonModal2 from '@/components/ButtonModal2'
import ButtonModal3 from '@/components/ButtonModal3'
import ButtonModal4 from '@/components/ButtonModal4'
import ButtonModal5 from '@/components/ButtonModal5'
import ButtonModal6 from '@/components/ButtonModal6'
import Image from 'next/image'

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <CarouselBanners />
      <div className="gap-4 p-6 md:grid md:grid-cols-2 md:p-10">
        <div>
          <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-orange-500 sm:text-4xl sm:leading-10 md:text-left">
            Residencial Cajueiro
          </h1>
          <p className="pt-4 text-2xl font-semibold leading-7 text-white dark:text-gray-800">
            Projetado para você morar bem com qualidade de vida.
          </p>
          <div className="pt-4">
            <Image
              className="rounded"
              src="/static/images/img70.jpg"
              alt="avatar"
              width="750px"
              height="300px"
            />
          </div>
          <h1 className="text-center text-3xl font-bold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-2xl md:leading-14">
            LIGUE AGORA: (86) 988562017
          </h1>
          <div className="container mt-2">
            <div>
              <div className="mb-6 rounded bg-black p-4 px-4 shadow-lg md:p-8">
                <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3">
                  <div className="flex flex-col items-center justify-center text-white">
                    <Image
                      className="icon-button"
                      width={50}
                      height={70}
                      src="/static/images/assistant.png"
                      alt="Vercel Logo"
                    />
                    <p className="text-center text-lg font-medium">NÓS LIGAMOS</p>
                    <p className="text-center text-2xl font-medium">PRA VOCÊ</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm md:grid-cols-5">
                      <div className="md:col-span-5">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="mt-1 h-10 w-full rounded border bg-gray-50"
                          value=""
                          placeholder="SEU NOME"
                        />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="mt-2 h-10 w-full rounded border bg-gray-50 px-4"
                          value=""
                          placeholder="SEU NÚMERO"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <div className="">
                          <button className="w-full rounded bg-orange-500 py-2 px-4 font-bold text-white hover:bg-orange-700">
                            Enviar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:ml-5">
          <ButtonModal />
          <ButtonModal2 />
          <ButtonModal3 />
          <ButtonModal4 />
          <ButtonModal5 />
          <ButtonModal6 />
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl font-medium">
          As melhores condições e vantagens de um empreendimento completo de alto padrão.
        </h1>
        <div className="gap-4 pt-8 md:grid md:grid-cols-4">
          <div>
            <div className="flex flex-col items-center justify-center text-black">
              <Image
                className="icon-button"
                width={100}
                height={100}
                src="/static/images/icon-argumento-1.png"
                alt="Vercel Logo"
              />
              <p className="text-center text-lg font-medium text-white dark:text-gray-800">
                Financiamento
              </p>
              <p className="text-center text-2xl font-medium text-white dark:text-gray-800">
                PRÓPRIO
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center text-black">
              <Image
                className="icon-button"
                width={100}
                height={100}
                src="/static/images/icon-argumento-2.png"
                alt="Vercel Logo"
              />
              <p className="text-center text-lg font-medium text-white dark:text-gray-800">
                Prestações
              </p>
              <p className="text-center text-2xl font-medium text-white dark:text-gray-800">
                EM ATÉ 180 MESES
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center text-black">
              <Image
                className="icon-button"
                width={100}
                height={100}
                src="/static/images/icon-argumento-3.png"
                alt="Vercel Logo"
              />
              <p className="text-center text-lg font-medium text-white dark:text-gray-800">
                Localização
              </p>
              <p className="text-center text-2xl font-medium text-white dark:text-gray-800">
                PRIVILEGIADA
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center text-black">
              <Image
                className="icon-button"
                width={100}
                height={100}
                src="/static/images/icon-argumento-4.png"
                alt="Vercel Logo"
              />
              <p className="text-center text-lg font-medium text-white dark:text-gray-800">Ótima</p>
              <p className="text-center text-2xl font-medium text-white dark:text-gray-800">
                VALORIZAÇÃO
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl pt-8">
        <div className="space-y-2 p-2 pb-2 md:space-y-2">
          <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-orange-500  dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            GALERIA DE FOTOS
          </h1>
        </div>
        <section className="body-font">
          <div className="container mx-auto px-5 py-10">
            <div className="-m-4 flex flex-wrap">
              <div className="p-1">
                <div className="gap-x-4 gap-y-1 md:grid md:grid-cols-6">
                  <div className="col-span-2">
                    <Image
                      className="rounded"
                      src="/static/images/img67.jpg"
                      alt="avatar"
                      width="750px"
                      height="300px"
                    />
                  </div>
                  <div className="col-span-2">
                    <Image
                      className="rounded"
                      src="/static/images/img66.jpg"
                      alt="avatar"
                      width="750px"
                      height="300px"
                    />
                  </div>
                  <div className="col-span-2">
                    <Image
                      className="rounded"
                      src="/static/images/img64.jpg"
                      alt="avatar"
                      width="750px"
                      height="300px"
                    />
                  </div>
                  <div className="col-span-2">
                    <Image
                      className="rounded"
                      src="/static/images/img64.jpg"
                      alt="avatar"
                      width="750px"
                      height="300px"
                    />
                  </div>
                  <div className="col-span-2">
                    <Image
                      className="rounded"
                      src="/static/images/img70.jpg"
                      alt="avatar"
                      width="750px"
                      height="300px"
                    />
                  </div>
                  <div className="col-span-2">
                    <Image
                      className="rounded"
                      src="/static/images/img66.jpg"
                      alt="avatar"
                      width="750px"
                      height="300px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
