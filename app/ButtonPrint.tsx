'use client'

import { GoFilePdf } from 'react-icons/go'

export default function ButtonResume({}: {}) {
  function print() {
    window.print()
  }

  return (
    <button
      onClick={print}
      className="flex gap-2 px-4 py-2 items-center rounded-full leading-none font-medium !text-black !bg-white action-outline mst"
    >
      <GoFilePdf />
      Resume
    </button>
  )
}
