import Image from 'next/image'
import Right from '../public/img/wallet/right.svg'


const WalletSetup = () => {
  return (
    <div className='flex flex-col gap-y-[15px]'>
      <div className='mb-3'>
        <button className='text-[12px] text-white flex gap-2 px-[84px] py-2 rounded-lg items-center bg-primary font-medium'>Redeem points <Image src={Right} className='w-[30px]' /></button>
      </div>

      <div className='border rounded-lg flex flex-col px-4 py-2'>
        <h1 className='text-[14px] text-primary font-bold'>PaySprint E-store</h1>
        <p className='text-[14px] text-sec font-medium'>Shop with ease on paysprint E-store</p>
        <div className='flex'>
          <button className='text-[12px] text-sec px-[74px] py-2 rounded-s-lg items-center bg-[#F7F7F7] font-medium'> Visit store</button>
          <Image src={Right} /> 
        </div>
      </div>

      <div className='border rounded-lg flex flex-col gap-y-4 px-4 py-2'>
        <h1 className='text-[16px] text-primary font-bold'>Quick wallet set-up</h1>
        <div className='flex justify-between items-center'>
          <h1 className='text-[12px] text-sec font-medium'>Identity Verification</h1>
          <h2 className='text-[#B58400] text-[10px] font-semibold bg-[#fae4ab] rounded-2xl px-5'>Pending</h2>
        </div>

        <div className='flex justify-between items-center'>
          <h1 className='text-[12px] text-sec font-medium'>Add card/ Bank account</h1>
          <h2 className='text-green text-[10px] font-semibold bg-lime-100 rounded-2xl px-5'>Successful</h2>
        </div>

        <div className='flex justify-between items-center'>
          <h1 className='text-[12px] text-sec font-medium'>Set transaction pin</h1>
          <h2 className='text-green text-[10px] font-semibold bg-lime-100 rounded-2xl px-5'>Successful</h2>
        </div>

        <div className='flex justify-between items-center'>
          <h1 className='text-[12px] text-sec font-medium'>Set transaction pin</h1>
          <h2 className='text-green text-[10px] font-semibold bg-lime-100 rounded-2xl px-5'>Successful</h2>
        </div>

        <div className='flex justify-between items-center'>
          <h1 className='text-[12px] text-sec font-medium'>Bank verification (BVN)</h1>
          <h2 className='text-[#9C0D00] text-[10px] font-semibold bg-[#fbd0cc] rounded-2xl px-5'>Failed</h2>
        </div>
      </div>
    </div>
  )
}

export default WalletSetup
