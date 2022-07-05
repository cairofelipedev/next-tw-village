import React, { useState } from 'react'
import CustomModal from '@/components/CustomModal'
import Image from 'next/image'
import Link from 'next/link'

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
          src="/static/images/loc2.png"
          alt="Vercel Logo"
        />
        <h1 className="pb-4 font-extrabold">Localização</h1>
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
          <h1 className="text-center text-2xl font-bold text-white">Localização</h1>
          <h2 className="py-4 text-center text-xl text-white">
            BR 226, KM3, nº 4555, Bairro Jóia Timon - MA CEP 65638-899{' '}
          </h2>
          <Link href="https://goo.gl/maps/oewXwKAJ93vfRxrv7">
            <Image
              className="rounded"
              src="/static/images/maps.png"
              alt="avatar"
              width="700px"
              height="500px"
            />
          </Link>
        </div>
      </CustomModal>
    </>
  )
}
