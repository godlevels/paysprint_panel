import Image from 'next/image'
import Arrow from '../public/img/topcards/arrow.svg'
import { AiOutlineArrowRight } from 'react-icons/ai'



const TopCards = () => {

  
  return (
    <div className='mt-4 mb-8 mx-10'>
      <div className='flex justify-between'>
        <h1 className='text-[18px] text-blak font-semibold'>Welcome Ifeoluwa</h1>
        <button className='bg-green flex gap-x-2 items-center text-white text-[14px] px-4 py-2 rounded-md'>Withdraw funds <AiOutlineArrowRight className='flex items-center' /> </button>
      </div>
      <div className="grid lg:grid-cols-6 gap-4 p-4">
        <div className="lg:col-span-2 col-span-1 bg-white w-full border p-4 rounded-lg">
          <h1 className='text-[16px] text-sec font-semibold'>Available balance</h1>
          <div className="flex justify-between">
            <h1 className='text-[32px] text-black font-bold'>₦00,00</h1>
            <h2 className='flex gap-2 items-center text-green'>2.34% <span><Image src={Arrow} alt='' /></span></h2>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-1 bg-white w-full border p-4 rounded-lg">
          <h1 className='text-[16px] text-sec font-semibold'>Withdrawals</h1>
          <div className="flex justify-between">
            <h1 className='text-[32px] text-black font-bold'>01</h1>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-1 bg-white w-full border p-4 rounded-lg">
          <h1 className='text-[16px] text-sec font-semibold'>Total points</h1>
          <div className="flex justify-between">
            <h1 className='text-[32px] text-black font-bold'>1400</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCards
