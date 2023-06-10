"use client"

import Image from 'next/image'
import Alert from '../public/img/header/alert.svg'
import Sync from '../public/img/header/sync.svg'
import Down from '../public/img/header/down.svg'
import Img from '../public/img/header/img.svg'
import { Menu, Transition, Popover } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
import { RxCheck } from 'react-icons/rx'
import Prof from '../public/img/header/prof.svg'
import Share from '../public/img/header/shar.svg'
import Tag from '../public/img/header/tag.svg'
import Log from '../public/img/header/left.svg'



const Header = () => {
  return (
    <div className="flex justify-between items-center py-[20px] px-10 border-b-[1px]">
      <h2 className='text-[24px] text-primary font-extrabold'>Overview</h2>
      <div className="flex gap-x-5 items-center">
        {/* notification */}
        <div className='flex items-center'>
          <Popover className='relative'>
            <Popover.Button className='outline-none mr-3 cursor-pointer text-blak'>
              <Image src={Alert} alt='' />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform scale-95'
              enterTo='transform scale-100'
              leave='transform ease-in duration-75'
              leaveFrom='transform scale-100'
              leaveTo='transform scale-95'
            >
              <Popover.Panel className='absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded-sm max-w-xs sm:max-w-sm w-screen overflow-scroll'>
                <div className='relative p-3'>
                  <div className='flex justify-between items-center w-full'>
                    <p className='text-blak font-medium'>Notifications</p>
                    <a className='text-sm text-orange-500' href="#">Mark all as read</a>
                  </div>
                  <div className='mt-4 grid gap-4 grid-cols-1'>
                    <div className='flex'>
                      <div className='rounded-full shrink-0 bg-greenlight h-8 w-8 flex justify-center items-center'>
                          <RxCheck className='h-4 w-4 text-green ' />
                      </div>
                      <div className='ml-4'>
                        <p className='font-medium text-blak'>Notification Title</p>
                        <p className='text-sm text-sec truncate'>Test notification text for design</p>
                      </div>
                    </div>

                    <div className='flex'>
                      <div className='rounded-full shrink-0 bg-greenlight h-8 w-8 flex justify-center items-center'>
                          <RxCheck className='h-4 w-4 text-green ' />
                      </div>
                      <div className='ml-4'>
                        <p className='font-medium text-blak'>Notification Title</p>
                        <p className='text-sm text-sec truncate'>Test notification text for design</p>
                      </div>
                    </div>

                    <div className='flex'>
                      <div className='rounded-full shrink-0 bg-greenlight h-8 w-8 flex justify-center items-center'>
                          <RxCheck className='h-4 w-4 text-green ' />
                      </div>
                      <div className='ml-4'>
                        <p className='font-medium text-blak'>Notification Title</p>
                        <p className='text-sm text-sec truncate'>Test notification text for design</p>
                      </div>
                    </div>

                    <div className='flex'>
                      <div className='rounded-full shrink-0 bg-greenlight h-8 w-8 flex justify-center items-center'>
                          <RxCheck className='h-4 w-4 text-green ' />
                      </div>
                      <div className='ml-4'>
                        <p className='font-medium text-blak'>Notification Title</p>
                        <p className='text-sm text-sec truncate'>Test notification text for design</p>
                      </div>
                    </div>

                    <div className='flex'>
                      <div className='rounded-full shrink-0 bg-greenlight h-8 w-8 flex justify-center items-center'>
                          <RxCheck className='h-4 w-4 text-green ' />
                      </div>
                      <div className='ml-4'>
                        <p className='font-medium text-blak'>Notification Title</p>
                        <p className='text-sm text-sec truncate'>Test notification text for design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
        {/* identification */}
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex gap-x-2 w-full justify-center items-center'>
              <Image src={Sync} alt='' />
              <Image src={Down} alt='' />
            </Menu.Button>
          </div>
          <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform scale-95'
              enterTo='transform scale-100'
              leave='transform ease-in duration-75'
              leaveFrom='transform scale-100'
              leaveTo='transform scale-95'
            >
              <Menu.Items className='absolute left-0 w-44 z-50 mt-2 origin-top-right bg-white rounded shadow-sm'>
                <div className='p-1'>
                  <Menu.Item>
                    <Link href='#' className='flex hover bg-white text-blak rounded p-2 transition-colors items-center text-[14px] font-semibold'>PS Account No: 20983</Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
        </Menu>
        {/* profile */}
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex gap-x-2 w-full justify-center items-center'>
              <Image className='w-[40px]' src={Img} alt='' />
              <h2 className='text-[14px] text-primary font-semibold py-2'>Adenuga Adebambo</h2>
              <Image src={Down} alt='' />
            </Menu.Button>
          </div>
          <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform scale-95'
              enterTo='transform scale-100'
              leave='transform ease-in duration-75'
              leaveFrom='transform scale-100'
              leaveTo='transform scale-95'
            >
              <Menu.Items className='absolute right-0 w-64 z-50 mt-2 origin-top-right bg-white rounded shadow-sm'>
                <div className='p-1'>
                  <Menu.Item>
                    <Link href='#' className='flex hover bg-white text-blak rounded p-2 transition-colors items-center text-[14px] font-semibold'>PS Account No: 20983</Link>
                  </Menu.Item>
                </div>
                <div className='p-1'>
                  <Menu.Item>
                    <Link href='#' className='flex gap-x-4 hover bg-white text-blak rounded p-2 transition-colors items-center text-[14px] font-semibold'>
                      <Image src={Prof} alt='' />
                      <p className='text-[14px] text-blak font-semibold'>Profile</p>
                    </Link>
                  </Menu.Item>
                </div>
                <div className='p-1'>
                  <Menu.Item>
                    <Link href='#' className='flex gap-x-4 hover bg-white text-blak rounded p-2 transition-colors items-center text-[14px] font-semibold'>
                      <Image src={Share} alt='' />
                      <p className='text-[14px] text-blak font-semibold'>Share profile link</p>
                    </Link>
                  </Menu.Item>
                </div>
                <div className='p-1'>
                  <Menu.Item>
                    <Link href='#' className='flex gap-x-4 hover bg-white text-blak rounded p-2 transition-colors items-center text-[14px] font-semibold'>
                      <Image src={Tag} alt='' />
                      <p className='text-[14px] text-blak font-semibold'>Check out Special Promo</p>
                    </Link>
                  </Menu.Item>
                </div>
                <div className='p-1'>
                  <Menu.Item>
                    <Link href='#' className='flex gap-x-4 hover bg-white text-blak rounded p-2 transition-colors items-center text-[14px] font-semibold'>
                      <Image src={Log} alt='' />
                      <p className='text-[14px] text-[#FF5141] font-medium'>Log Out</p>
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
        </Menu>
      </div>
    </div>
  )
};

export default Header;
