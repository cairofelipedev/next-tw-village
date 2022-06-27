import React, { useState } from 'react'
import CustomModal from '@/components/CustomModal'
import Image from 'next/image'

export default function ButtonModal() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button
        className="mb-4 w-full rounded-md bg-black py-10 px-10 text-white md:m-2 md:w-1/3"
        onClick={() => setShowModal(true)}
      >
        <Image
          className="icon-button"
          width={50}
          height={50}
          src="/static/images/seguranca.jpg"
          alt="Vercel Logo"
        />
        <h1 className="pb-4 font-extrabold">Segurança</h1>
        <div className="flex items-center justify-center">
          <h5>Saiba Mais</h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-arrow-right-short text-orange-500"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </div>
      </button>
      <CustomModal visible={showModal} onClose={() => setShowModal(false)}>
        <div className="w-96 rounded bg-black p-5 md:w-1/2">
          <h1 className="text-center text-2xl font-bold text-white">Segurança</h1>
          <h2 className="py-4 text-center text-xl text-white">
            Viver com segurança aqui no Residencial Village Cajueiro
          </h2>
          <ul className="list-disc pl-4">
            <li className="text-orange-500">
              <p className="py-1 text-white">Muro de Contorno</p>
            </li>
            <li className="text-orange-500">
              <p className="py-1 text-white">Instalação de Cerca Elétrica sobre o Muro</p>
            </li>
            <li className="text-orange-500">
              <p className="py-1 text-white">Sistema de Vigilância com Monitoramento</p>
            </li>
            <li className="text-orange-500">
              <p className="py-1 text-white">Guaritas Social e de Serviço</p>
            </li>
          </ul>
          <Image
            className="rounded"
            src="/static/images/img68.jpg"
            alt="avatar"
            width="600px"
            height="300px"
          />
        </div>
      </CustomModal>
    </>
  )
}
