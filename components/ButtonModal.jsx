import React, { useState } from 'react'
import CustomModal from '@/components/CustomModal'

export default function ButtonModal() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button className="bg-black py-10 px-10 text-white" onClick={() => setShowModal(true)}>
        Segurança
      </button>
      <CustomModal visible={showModal} onClose={() => setShowModal(false)}>
        <div className="z-1 w-96 rounded bg-white p-5">
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
