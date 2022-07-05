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
          width={100}
          height={50}
          src="/static/images/lazer2.png"
          alt="Vercel Logo"
        />
        <h1 className="pb-4 font-extrabold">Lazer e Esporte</h1>
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
          <h1 className="text-center text-2xl font-bold text-white">Lazer e Esporte</h1>
          <h2 className="py-4 text-center text-xl text-white">
            Pratique seus esportes favoritos com segurança e estrutura de ponta
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc pl-4">
              <li className="text-orange-500">
                <p className="py-1 text-white">Campos de futebol</p>
              </li>
              <li className="text-orange-500">
                <p className="py-1 text-white">Ginásio Coberto com Quadra Polesportiva</p>
              </li>
              <li className="text-orange-500">
                <p className="py-1 text-white">Quadra de Tênis</p>
              </li>
              <li className="text-orange-500">
                <p className="py-1 text-white">2 Quadras de Vôlei de Areia</p>
              </li>
              <li className="text-orange-500">
                <p className="py-1 text-white">Pista de Skate</p>
              </li>
              <li className="text-orange-500">
                <p className="py-1 text-white">Piscina Semi olimpica (25m) com Seis Rais</p>
              </li>
              <li className="text-orange-500">
                <p className="py-1 text-white">Piscina de Hidroginástica</p>
              </li>
              <li className="text-orange-500">
                <p className="py-1 text-white">8 Áreas com Churrasqueira</p>
              </li>
            </ul>
            <ul className="list-disc pl-4">
              <li className="text-orange-500">
                <p className="py-1 text-white">Piscina infantil</p>
              </li>
              <li className="text-orange-500">
                <p className="py-1 text-white">Área de Lazer com Piscina para adultos</p>
              </li>
              <li className="text-orange-500">
                <p className="py-1 text-white">Playground</p>
              </li>
              <li className="text-orange-500">
                <p className="py-1 text-white">Pista de Cooper e Ciclovia (4km)</p>
              </li>
              <li className="text-orange-500">
                <p className="py-1 text-white">Lago</p>
              </li>
              <li className="text-orange-500">
                <p className="py-1 text-white">Salão de Jogos</p>
              </li>
              <li className="text-orange-500">
                <p className="py-1 text-white">Quadra de Beach Tênis</p>
              </li>
            </ul>
          </div>
          <Image
            className="rounded"
            src="/static/images/img64.jpg"
            alt="avatar"
            width="700px"
            height="350px"
          />
        </div>
      </CustomModal>
    </>
  )
}
