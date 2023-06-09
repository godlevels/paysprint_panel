import Image from 'next/image'
import Alert from '../public/img/header/alert.svg'
import Sync from '../public/img/header/sync.svg'
import Down from '../public/img/header/down.svg'
import Img from '../public/img/header/img.svg'



const Header = () => {
  return (
    <div className="flex justify-between items-center py-[26px] px-10 border-b-[1px]">
      <h2>Overview</h2>
      <div className="flex gap-x-5 items-center">
        <div className='cursor-pointer'>
          <Image src={Alert} alt='' />
        </div>
        <div className='flex gap-x-2 cursor-pointer'>
          <Image src={Sync} alt='' />
          <Image src={Down} alt='' />
        </div>
        <div className='flex gap-x-2 cursor-pointer'>
          <Image className='w-[40px]' src={Img} alt='' />
          <h2 className='text-[14px] text-primary font-semibold'>Adenuga Adebambo</h2>
          <Image src={Down} alt='' />
        </div>
      </div>
    </div>
  )
};

export default Header;
