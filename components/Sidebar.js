import Link from "next/link"
import Image from 'next/image'
import Logo from '../public/img/sidebar/logo.svg'
import Wallet from '../public/img/sidebar/wallet.svg'
import Swap from '../public/img/sidebar/swap.svg'
import Pay from '../public/img/sidebar/pay.svg'
import Tag from '../public/img/sidebar/tag.svg'
import { RxDashboard } from 'react-icons/rx'
import Set from '../public/img/sidebar/set.svg'
import Log from '../public/img/sidebar/log-out.svg'

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
      <div className='fixed w-[280px] h-screen px-4 bg-white border-r-[1px] flex flex-col'>
          <div className="flex justify-center items-center mb-10 py-6 border-b-[1px]">
            <Link href='/'>
              <Image src={Logo} alt="" />
            </Link>
          </div>
          <div className="flex justify-center flex-col gap-y-4 items-center">
            <Link href='/'>
              <div className="bg-white text-sec flex items-center cursor-pointer">
                <RxDashboard className="w-[20px]" />
                <h2 className="text-[16px] font-medium">Overview</h2>
              </div>
            </Link>
            <Link href='/wallet'>
              <div className="bg-white text-sec flex items-center transition-all ease-in duration-300 cursor-pointer">
                <Image src={Wallet} alt="" className="w-[20px]" />
                <h2 className="text-[16px] font-medium">Wallet</h2>
              </div>
            </Link>
            <Link href='/transactions'>
              <div className="bg-white text-sec flex items-center transition-all ease-in duration-300 cursor-pointer">
                <Image src={Swap} alt="" className="w-[20px]" />
                <h2 className="text-[16px] font-medium">Transactions</h2>
              </div>
            </Link>
            <Link href='/services'>
              <div className="bg-white text-sec flex items-center transition-all ease-in duration-300 cursor-pointer">
                <Image src={Pay} alt="" className="w-[20px]" />
                <h2 className="text-[16px] font-medium">Services</h2>
              </div>
            </Link>
            <Link href='/promotions'>
              <div className="bg-white text-sec flex items-center transition-all ease-in duration-300 cursor-pointer">
                <Image src={Tag} alt="" className="w-[20px]" />
                <h2 className="text-[16px] font-medium">Promotions</h2>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-y-4 justify-center text-center mt-36">
            <div className="flex justify-center gap-x-4 items-center">
              <Image className="w-[18px]" src={Set} alt="" />
              <h1 className="text-[16px] text-sec font-semibold">Settings</h1>
            </div>
            
            <div className="flex justify-center gap-x-4 items-center">
              <Image className="w-[18px]" src={Log} alt="" />
              <h1 className="text-[16px] text-[#FF5141] font-semibold">Logout</h1>
            </div>
          </div>
      </div>
      <main className='ml-[280px] w-full'>{children}</main>
    </div>
  )
}

export default Sidebar
