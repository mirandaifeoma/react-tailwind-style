import React from 'react';

export const Teams = () => {
  return (
    <div>
      <div className='mobile:mt-[10rem]'>
        <aside className='bg-transparent'>
          <div className=''>
            <div className='mx-auto relative '>
              <h2 className='text-ff leading-tight font-sans tracking-tighter mobile:mx-3 lg:px-80'>
                Hear what teams around the world
                <span className=' font-bold'> saying about Fintechy</span>
              </h2>
              <div className=' pl-72 pr-64 mobile:px-[3rem] lg:pl-72 lg:pr-64'>
                <div className='my-10'>
                  <i class='bi bi-star-fill text-xl text-indigo-500'></i>
                  <i class='bi bi-star-fill ml-3 text-xl text-indigo-500'></i>
                  <i class='bi bi-star-fill ml-3 text-xl text-indigo-500'></i>
                  <i class='bi bi-star-fill ml-3 text-xl text-indigo-500'></i>
                  <i class='bi bi-star-fill ml-3 text-xl text-indigo-200'></i>
                </div>
                <p className=' text-gray-700 sm:mt-4 sm:block italic text-2xl font-medium leading-tighter font-sans'>
                  The Fintechy app is sleekly designed, easy to use, and gives
                  me a one-stop view of my finances across all accounts,
                  including an easy way to keep track of my debt accounts.
                </p>
                <div className='flex mt-5'>
                  <img
                    src='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
                    alt=''
                    className='w-10 h-10 rounded-full object-cover'
                  />
                  <ul className='flex text-xs text-black font-thin mt-2 ml-4'>
                    <li>
                      <a href='#' className='text-lg font-normal '>
                        Darrell Steward
                      </a>
                    </li>
                    <li className='marker:black list-disc ml-4'>
                      <a href='#' className='text-lg font-normal'>
                        <span className='text-xl font-normal'> CEO</span> at
                        Treva
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='float-right mr-16'>
                  <i class='bi bi-arrow-left text-indigo-300'></i>
                  <i class='bi bi-arrow-right ml-4 w-28 text-indigo-300'></i>
                </div>
              </div>
              <i
                class='bi bi-quote text-8xl text-indigo-100 absolute top-36 left-40  mobile:left-[1%] mobile:top-[17rem] mobile1:top-[13rem] mobilel:top-[10rem] lg:top-36 lg:left-40
                md:top-[10rem] sm:top-[10rem]'
              ></i>
              <i class='bi bi-quote text-8xl text-indigo-100 rotate-180 absolute right-40 bottom-14 mobile:right-[0%]  mobile:bottom-[1rem] lg:right-40 lg:bottom-14'></i>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

