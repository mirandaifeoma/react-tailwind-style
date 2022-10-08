import React from 'react';

export const Focused = () => {
  return (
    <div>
      <div className='ml-left5 lg:mt-16'>
        <section>
          <div className='mx-auto max-w-screen-2xl px-4 py-16 mobile:py-0 mobile:px-0 sm:px-6 sm:py-0 lg:px-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='relative  items-center bg-transparent'>
                {/* <span className='hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100'></span> */}

                <div className='p-8 mobile:mb-0 sm:p-0 '>
                  <h2 className='text-ff leading-tight font-sans tracking-tighter'>
                    Stay focused on your
                    <span className=' font-bold'> financial goals</span>
                  </h2>

                  <p className='mt-4 text-gray-700'>
                    Improve your spending habits with custom goals that keep
                    your going. Save for a home, conquer debt, and prepare for
                    the future.
                  </p>

                  <div className='flex mt-8 '>
                    <img
                      src='https://media.istockphoto.com/photos/portrait-of-a-confident-young-businessman-standing-with-his-arms-in-picture-id1391718981?b=1&k=20&m=1391718981&s=170667a&w=0&h=5d95EBImyoEm7hhfgqm5tQgsJ1iTvvzbKqLLqMu-vZA='
                      alt='fine man'
                      className='w-24 h-24 rounded-full object-cover mt-4 '
                    />

                    <div className='p-4 text-left'>
                      <h5 className='text-lg text-black mb-4 '>
                        "Fintechy has helped reduce <br /> our fees by over
                        17%".
                      </h5>

                      <ul className='flex text-xs text-black font-thin mb-2'>
                        <li>
                          <a href='#' className='text-sm font-normal'>
                            Darrell Steward
                          </a>
                        </li>
                        <li className='marker:black list-disc ml-4'>
                          <a href='#' className='text-sm font-normal'>
                            CEO
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative z-10 lg:py-14 '>
                <div className='relative h-64  sm:h-80  bg-transparent'>
                  <img
                    alt='House'
                    src='data:image/png;base64,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'
                    className='absolute inset-0 h-full w-96 object-cover rounded-3xl mt-9 mx-auto  lg:h-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


