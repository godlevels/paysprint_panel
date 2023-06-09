import Image from 'next/image'
import Down from '../public/img/recenttrans/down.svg'
import Search from '../public/img/recenttrans/search.svg'
import Left from '../public/img/recenttrans/left.svg'



const recentTransactions = [
  {
    image: Left,
    desc: 'Received NGN 30,000 in wallet for intern - allowance for March 2023 from OACO Professional services',
    date: '12/06/2020',
    time: '5:45 am',
    amount: '₦1,000,000',
    status: 'Successful',
  },
  {
    image: Left,
    desc: 'Received NGN 30,000 in wallet for intern - allowance for March 2023 from OACO Professional services',
    date: '12/06/2020',
    time: '5:45 am',
    amount: '₦1,000,000',
    status: 'Successful',
  },
  {
    image: Left,
    desc: 'Received NGN 30,000 in wallet for intern - allowance for March 2023 from OACO Professional services',
    date: '12/06/2020',
    time: '5:45 am',
    amount: '₦1,000,000',
    status: 'Successful',
  },
]


const RecentTransactions = () => {
  return (
    <div className='w-full md:col-span-2 relative'>
      <h1 className='text-[20px] text-blak font-semibold mb-4'>Recent Transactions</h1>
      <div className='h-[80vh] m-auto border rounded-lg bg-white px-6 py-4'>
        <div className='flex flex-col md:flex-row items-center gap-8 lg:justify-between border-b pb-3'>
          <div className='flex items-center gap-1 text-sec font-medium border rounded-md px-4 cursor-pointer'>
          <h1 className='text-[12px]'>All</h1>
          <Image src={Down} className='w-[10px]' />
          </div>
          
          <div className='leading-3 lg:leading-10 flex items-center gap-1 text-sec font-medium border rounded-md px-4 cursor-pointer'>
          <Image src={Search} className='w-[10px]' />
          <h1 className='text-[12px]'>Search transactions</h1>
          </div>
        </div>


        <div className='flex flex-col'>
          <div className='flex justify-between items-center text-primary border-b text-[14px] font-semibold mt-2'>
            <h1>Decription</h1>
            <h1>Date</h1>
            <h1>Amount</h1>
          </div>

          <div>
            {recentTransactions.map((data, i) => {
              const {image, desc, date, time, amount, status} = data
              return (
                <div className='flex lg:justify-between items-center text-primary border-b text-[14px] font-semibold mt-2' key={i}>
                  <div className='flex w-[200px] items-center gap-1'>
                    <Image src={image} className='rounded-full bg-lime-100' />
                    <h1 className='text-[12px] text-blak font-semibold'>{desc}</h1>
                  </div>
                  <div>
                    <h1 className='text-[14px] text-blak font-semibold'>{date}</h1>
                    <h1 className='text-[14px] text-sec font-semibold'>{time}</h1>
                  </div>
                  <div>
                    <h1 className='text-[14px] text-blak font-bold'>{amount}</h1>
                    <h1 className='text-[10px] text-green bg-lime-100/100 font-semibold px-4 rounded-2xl'>{status}</h1>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentTransactions
