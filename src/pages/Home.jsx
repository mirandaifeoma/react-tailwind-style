import React from 'react';
import {Navbar} from '../components/Navbar';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='mobile:mt-14 lg:mt-[5rem]'>
        <aside>
          <div class='mx-auto max-w-screen-xl px-4 py-8 mobile:px-0 md:px-6  lg:px-8'>
            <div class='grid grid-cols-1 gap-4 mobile:grid-cols-1 lg:grid-cols-2'>
              <div class='bg-transparent p-8 mobile:p-4 md:p-12 lg:px-16 lg:py-24'>
                <div class='mx-auto max-w-xl mobile:text-center md:text-left'>
                  <h1 className='text-2xl  text-black   capitalize mobile:leading-[1] md:text-[2.25rem] lg:text-[3rem]'>
                    smart banking to{' '}
                    <span className='font-bold  text-black  md:text-4xl lg:text-ff '>
                      {' '}
                      manage your money & transactions
                    </span>
                  </h1>
                  <p class=' text-gray-800 mobile:mt-4 mobile:block text-[17px]'>
                    We will help you manage your money and transactions easily
                    follow the instruction you can manage your money here.
                  </p>

                  <div class='mt-4  md:mt-8'>
                    <a
                      href='#'
                      className='inline-block px-6 py-3 text-sm font-extralight text-white transition bg-blue-700 rounded-lg '
                    >
                      start your free trial
                    </a>
                  </div>
                </div>
              </div>

              <div class='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2'>
                <div>
                  <img
                    src='https://media.istockphoto.com/photos/confused-young-man-using-smart-phone-picture-id1371301003?k=20&m=1371301003&s=612x612&w=0&h=AXcu1BD9yeWkPr0MZXSH_F71sR9jk6CraHr-lVADxQk='
                    alt=''
                    className='w-20 h-20 rounded-full object-cover absolute top-[19rem] left-left'
                  />
                  <img
                    alt='Student'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0X8A4hySZF9lrO-Hjk10tUxlk82MB0Sx9A&usqp=CAU'
                    className='object-cover w-full h-40 sm:h-56 md:h-50'
                  />
                  <div>
                    <div className='columns-2 gap-8 mt-6 overflow-hidden'>
                      <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8nng-8fy3sEScTE4sVm9U5lh8mEQ8EH7fQ&usqp=CAU'
                        alt=''
                      />
                      <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8nng-8fy3sEScTE4sVm9U5lh8mEQ8EH7fQ&usqp=CAU'
                        alt=''
                      />
                    </div>
                    <div className='bg-blue-700 absolute top-top left-left2 rounded-3xl w-80 p-4 mobile:left-[1%] mobile:w-[50%] mobile:p-2 mobile:top-[42rem] md:w-[97%] md:top-[50rem] md:px-4 lg:w-80 lg:top-top lg:left-left'>
                      <div className='border-b border-gray-400 border-solid text-white py-2  text-left mobile:py-1 md:py-3 md:px-2'>
                        <h1>Manage Transaction</h1>
                      </div>
                      <div className='mt-4 flex my-3 mobile:my-2 md:my-6'>
                        <div className='flex'>
                          <img
                            src='https://media.istockphoto.com/photos/young-man-dressed-in-blue-blazer-and-shirt-wearing-glasses-looking-picture-id1237258334?k=20&m=1237258334&s=612x612&w=0&h=6A5-I0c0psDsGgm7lr6Iq-s1qJlQevkuxM4U0n9lOFk='
                            alt=''
                            className='w-9 h-9 rounded-full object-cover'
                          />
                          <div className='ml-2 mt-2'>
                            <div className='bg-blue-500 w-28 mb-1 py-1 rounded'></div>
                            <div className='bg-blue-500 w-20 mb-1 py-1 rounded'></div>
                          </div>
                        </div>
                        <div className='  text-gray-400 border  border-gray-500 ml-18 w-8  h-8 rounded-full ml-20 mobile:ml-2 sm:ml-[5rem] md:ml-[33rem] lg:ml-20 lg:w-8'>
                          <i className='bi bi-trash3 ml-2'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  src='https://media.istockphoto.com/photos/african-american-guy-gesturing-yes-shouting-shaking-fists-yellow-picture-id1326421768?b=1&k=20&m=1326421768&s=170667a&w=0&h=ed44-HwG-9JmQCF68k7ltaZzaYYbcbwf58dBFJwHFAE='
                  alt=''
                  className='w-20 h-20 rounded-full object-cover absolute top-[4.5rem]  mobile:right-[2%] mobile:top-[19.5rem]  sm:right-[2rem] sm:top-[18.5rem] md:top-[60rem]  md:left-[10%] lg:left-[60rem]  lg:top-[5rem]'
                />
                <a
                  href='#'
                  className='block overflow-hidden  px-4 md:h-[40rem]'
                >
                  <img
                    alt='Office'
                    src='https://media.istockphoto.com/photos/shot-of-a-handsome-young-man-holding-a-cellphone-while-standing-a-picture-id1357914742?k=20&m=1357914742&s=612x612&w=0&h=lMy1uxsRjHDcluasW9r0VIuN1m3aSHXyyjlMAg4XJaQ='
                    className='object-cover w-full h-56 mt-14 rounded-t-3xl md:h-[25rem] lg:h-[18rem]'
                  />

                  <div className='px-4 py-3 bg-gray-900 mobile:rounded-b-3xl text-left md:h-[10rem] lg:h-[8rem]'>
                    <h5 className='text-lg text-center text-white mb-4 '>
                      "A well-executed user experience builds trust".
                    </h5>

                    <ul className='flex justify-around text-xs text-white font-thin mb-2'>
                      <li>
                        <a href='#'>Ronald Richards</a>
                      </li>
                      <li className='marker:text-white list-disc'>
                        <a href='#'>Web Designer</a>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className=' mx-auto max-w-screen-xl px-4 text-center h-fit bg-slate-50 my-16 py-10 border-0 sm:my-4 lg:pr-[3rem] lg:pl-[6rem]'>
        <h1 className='text-2xl font-medium mb-9'>
          More than 10,000+ teams are using Fintechy
        </h1>
        <div className='flex justify-between'>
          <div className='flex  font-medium text-gray-800 font-seri sm:text-[3vmin] lg:text-4xl'>
            <i className='bi bi-bullseye'></i>
            <h1 className='ml-1'>UTOSIA</h1>
          </div>
          <div className='flex font-normal text-gray-800 font-serif sm:text-[3vmin] lg:text-4xl'>
            <i className='bi bi-house-fill'></i>
            <h1 className='ml-1'>treva</h1>
          </div>
          <div className='flex font-medium text-gray-600 font-serif sm:text-[3vmin] lg:text-4xl'>
            <i className='bi bi-cone-striped'></i>
            <h1 className='ml-1'>nirastate</h1>
          </div>
          <div className='flex font-medium text-gray-800 font-serif sm:text-[3vmin] lg:text-4xl'>
            <h1>velocity</h1>
            <i className='bi bi-9-circle-fill ml-1'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

