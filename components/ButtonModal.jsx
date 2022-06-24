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
        <h5>Saiba Mais</h5>
      </button>
      <CustomModal visible={showModal} onClose={() => setShowModal(false)}>
        <div className="w-96 rounded bg-white p-5">
          <h1 className="text-2xl font-bold text-blue-500">Subscribe for our newsletter</h1>
          <p className="py-1 text-gray-500"></p>
          <input
            placeholder="example@email.com"
            type="email"
            className="mt-2 w-full rounded border border-gray-500 p-1"
          />
          <button className="mt-2 bg-blue-500 py-2 px-5 text-white">Subscribe</button>
        </div>
      </CustomModal>
    </>
  )
}
