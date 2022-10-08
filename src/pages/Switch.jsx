import React from 'react'

export const Switch = () => {
  return (
    <div>
      <div className='mt-20'>
        <aside class='overflow-hidden bg-[url(https://media.istockphoto.com/photos/abstract-blue-light-slash-banner-background-picture-id1402488419?k=20&m=1402488419&s=612x612&w=0&h=ez3GFSCrfjgHg0moRWH9lhG8gfeoLx8F3uWl7CWa0iQ=)] bg-cover bg-center bg-no-repeat'>
          <div class='bg-black/25 p-8   lg:py-20'>
            <div class=' flex mobile:block'>
              <div className='relative'>
                <a
                  class='inline-flex rounded-xl  border-0 bg-gray-100  w-72 py-7 shadow-2xl shadow-white absolute mobile:relative mobile:w-full left-left6 sm:w-72 sm:absolute lg:left-left6'
                  href='/download'
                ></a>
                <a
                  class='inline-flex rounded-xl  border-0 bg-gray-300 px-28 py-6 shadow-2xl shadow-white absolute mobile:top-[.4rem] mobile:relative mobile:w-full 
                    sm:absolute sm:w-[20%] sm:top-top1 left-left61  top-top1'
                  href='/download'
                >
                  <span class='text-sm font-medium'></span>
                </a>

                <a
                  class='inline-flex rounded-xl  border-0 bg-gray-400 px-20 py-5 shadow-2xl shadow-white absolute mobile:top-[1rem]         mobile:mb-[3rem] mobile:relative mobile:w-full 
                  sm:absolute sm:w-[15%] sm:top-top2 left-left62 top-top2'
                  href='/download'
                >
                  <span class='text-sm font-medium'></span>
                </a>
              </div>
              <div className=' text-center w-width1 mx-auto px-24 mobile:px-0 sm:w-full sm:pl-[15rem] md:w-[90%] lg:px-24 lg:w-width1'>
                <h2 className='text-ff leading-tight font-sans tracking-tighter  text-white'>
                  Now it's time to switch new ways
                  <span className=' font-bold'> to track your Money</span>
                </h2>

                <div class='mt-4 sm:mt-8'>
                  <a
                    href='#'
                    class='inline-flex items-center bg-blue-700 px-8 py-3 rounded-xl text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none focus:ring'
                  >
                    <span class='text-base font-medium'>
                      Start your free trial
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className='mt-16 flex gap-[1%] flex-wrap mobile:block mobile:leading-[3rem] lg:flex lg:gap-[1%]'>
              <div
                class='rounded-full hover:text-white  mobile:ml-0 mobile:my-2 lg:ml-[-10%]'
                href='/download'
              >
                <span class='block rounded-full bg-gray-800  px-8 py-2 text-medium font-medium text-white'>
                  <i class='bi bi-check-circle mr-4 text-2xl'></i>
                  Our Transactions
                </span>
              </div>
              <div
                class=' rounded-full hover:text-white mobile:my-2 '
                href='/download'
              >
                <span class='block rounded-full bg-gray-800  px-8 py-2 text-medium font-medium  text-white'>
                  <i class='bi bi-check-circle mr-4 text-2xl'></i>
                  Split Transactions
                </span>
              </div>
              <div
                class='rounded-full hover:text-white mobile:my-2 '
                href='/download'
              >
                <span class='block rounded-full bg-gray-800  px-8 py-2 text-medium font-medium  text-white'>
                  <i class='bi bi-check-circle mr-4 text-2xl'></i>
                  Account Transfers
                </span>
              </div>
              <div
                class='rounded-full hover:text-white mobile:my-2'
                href='/download'
              >
                <span class='block rounded-full bg-gray-800  px-8 py-2 text-medium font-medium text-white'>
                  <i class='bi bi-check-circle mr-4 text-2xl'></i>
                  Custom categories
                </span>
              </div>
              <div
                class=' rounded-full hover:text-white mobile:my-2'
                href='/download'
              >
                <span class='block rounded-full bg-gray-800  px-8 py-2 text-medium font-medium hover:bg-transparent text-white'>
                  <i class='bi bi-check-circle mr-4 text-2xl'></i>
                  Balance Warnings
                </span>
              </div>
              <div
                class='rounded-full hover:text-white mobile:mr-0 mobile:my-2 lg:mr-[-10%] '
                href='/download'
              >
                <span class='block rounded-full bg-gray-800  px-8 py-2 text-medium font-medium hover:bg-transparent text-white'>
                  <i class='bi bi-check-circle mr-4 text-2xl'></i>
                  Spend Transa
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
