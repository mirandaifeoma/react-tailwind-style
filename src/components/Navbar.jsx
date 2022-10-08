import React from 'react';

export const Navbar = () => {
  return (
    <div className='w-full h-aut0 fixed top-0 z-50 bg-white'>
      <div>
        <header>
          <div className='max-w-screen-2xl px-4 mx-auto sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
              <div className='md:flex md:items-center md:gap-12'>
                <a className='flex items-center' href='/'>
                  <span className='sr-only'>Home</span>
                  <img
                    src='data:image/png;base64,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 '
                    alt=''
                    className='w-16 h-16'
                  />
                  <h1 className='text-black text-3xl font-bold font-sans'>
                    Fintechy
                  </h1>
                </a>
              </div>

              <div className='hidden md:block'>
                <nav aria-labelledby='header-navigation'>
                  <h2 className='sr-only' id='header-navigation'>
                    Header navigation
                  </h2>

                  <ul className='flex items-center gap-6 text-sm'>
                    <li>
                      <a
                        className='text-black transition hover:text-gray-500/75 text-[18px]'
                        href='/'
                      >
                        Home
                      </a>
                    </li>

                    <li>
                      <a
                        className='text-black transition hover:text-gray-500/75 text-[18px]'
                        href='/'
                      >
                        Features
                      </a>
                    </li>

                    <li>
                      <a
                        className='text-black transition hover:text-gray-500/75 text-[18px]'
                        href='/'
                      >
                        About Us
                      </a>
                    </li>

                    <li>
                      <a
                        className='text-black  transition hover:text-gray-500/75 text-[18px]'
                        href='/'
                      >
                        Testimonial
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className='flex items-center gap-4'>
                <div className='sm:gap-4 sm:flex'>
                  <a
                    className='px-5 py-2.5 text-[18px] text-black bg-transparent  border-black border-[1.5px] rounded-xl'
                    href='/'
                  >
                    Contact Us
                  </a>
                </div>

                <div className='block md:hidden'>
                  <button className='p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

