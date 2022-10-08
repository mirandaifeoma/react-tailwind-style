import React from 'react';

export const Payment = () => {
  return (
    <div>
      <div className='md:mx-0 lg:ml-[4rem]'>
        <section>
          <div class='mx-auto max-w-screen-2xl px-4 py-16 mobile:pb-0 sm:px-6 md:pb-0 lg:px-8 lg:py-16'>
            <div class='grid grid-cols-1 lg:grid-cols-2'>
              <div class='relative z-10 lg:py-14 '>
                <div class='relative mobile:h-[20rem] sm:h-80 md:h-[30rem] lg:h-[28rem] bg-teal-50 overflow-hidden rounded-4xl'>
                  <img
                    alt='House'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS662x4wLGFrH6rSjejgdhmaeVis05f45MRK_-kj2Ii3YyMBjr7mCipe11OPr2Dyufkt74&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnz4O9oTEn9lyeuOWsbViZV5xp_OQBLtkaw&usqp=CAU'
                    class='absolute inset-0 h-full w-96 object-cover rounded-3xl mt-9 mx-auto '
                  />
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuVAoQxePrRqe-UyUKc-XDY4rC-jAR6LBPA&usqp=CAU'
                    alt=''
                    className='absolute mobile:w-[30%] mobile:h-[8rem] mobile:object-cover mobile:top-[8rem] mobile:left-[1rem] md:h-[11rem] lg:left-14 lg:top-20'
                  />
                </div>
                <img
                  src='data:image/jpeg;base64,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'
                  alt=''
                  className='absolute mobile:object-cover mobile:top-[8rem] mobile:left-[16rem] mobile:h-[40%] mobile:w-[30%] sm:left-[57%] sm:top-[7rem] sm:w-[40%] sm:h-[12rem]  md:left-[67%] md:top-[7rem]    md:w-[30%] md:h-[12rem] lg:top-96 lg:left-[17.5rem] lg:w-[50%] lg:h-[12rem]'
                />
              </div>

              <div class='relative  items-center bg-transparent'>
                {/* <span class='hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100'></span> */}

                <div class='p-8 sm:p-16 '>
                  <h2 class='text-ff leading-tight font-sans tracking-tighter'>
                    <span className=' font-bold'>Accept payment</span> from any
                    device from any country in this universe
                  </h2>

                  <p class='mt-4 text-gray-700'>
                    Payment through website, mobile apps or payment link. We
                    have a wide range of payment methods to support your
                    transaction in your company.
                  </p>

                  <div className=''>
                    <div className='flex my-5'>
                      <div className='w-7 h-7 bg-gradient-to-b from-gray-50 to-indigo-100 relative rounded-full p-1'>
                        <button className='p-1 bg-blue-800 rounded-sm  absolute top-3 left-left4'></button>
                      </div>
                      <h1 className='ml-3 text-lg tracking-tighter'>
                        Supporting more than 50+ country
                      </h1>
                    </div>
                    <div className='flex my-5'>
                      <div className='w-7 h-7 bg-gradient-to-b from-gray-50 to-indigo-100 relative rounded-full p-1'>
                        <button className='p-1 bg-blue-800 rounded-sm  absolute top-3 left-left4'></button>
                      </div>
                      <h1 className='ml-3 text-lg tracking-tighter'>
                        Open transaction with more than 10+ Currencies
                      </h1>
                    </div>
                    <div className='flex my-5'>
                      <div className='w-7 h-7 bg-gradient-to-b from-gray-50 to-indigo-100 relative rounded-full p-1'>
                        <button className='p-1 bg-blue-800 rounded-sm  absolute top-3 left-left4'></button>
                      </div>
                      <h1 className='ml-3 text-lg tracking-tighter'>
                        Customer service with 5+ Languages
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

