import React from 'react';

export const Footer = () => {
  return (
    <div className=' '>
      {/* <p>mobile:mr-0 md:mr-24</p> */}
      {/* <footer class='bg-white'>
        <div class='mx-auto max-w-screen-xl px-4 pt-16 pb-6  sm:px-6 lg:px-8 lg:pt-24'>
          <div class='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            <div>
              <div class='flex justify-center text-teal-600  ml-16 mobile:ml-0 sm:justify-start md:block md:ml-0 lg:ml-16 lg:flex'>
                <a className='flex items-center' href='/'>
                  <span className='sr-only'>Home</span>
                  <img
                    src='data:image/png;base64,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 '
                    alt=''
                    className='w-16 h-16'
                  />
                  <h1 className='text-black text-3xl font-bold font-sans '>
                    Fintechy
                  </h1>
                </a>
              </div>

              <div className='ml-20 md:text-right'>
                <p class='mx-auto mt-2 max-w-md text-center leading-relaxed text-gray-700 text-lg sm:mx-0 sm:max-w-xs sm:text-left md:max-w-[100%] '>
                  Authorised and regulated by the Financial Conduct Authority
                </p>
              </div>
            </div>

            <div class='flex justify-between  sm:grid-cols-2 md:grid-cols-3 lg:col-span-2'>
              <div class='text-center sm:text-left'>
                <p class='font-medium text-gray-700 text-2xl'>Company</p>

                <nav class='mt-4'>
                  <ul class='space-y-2 text-sm'>
                    <li>
                      <a
                        class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                        href='/'
                      >
                        About Us
                      </a>
                    </li>

                    <li>
                      <a
                        class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                        href='/'
                      >
                        Features
                      </a>
                    </li>

                    <li>
                      <a
                        class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                        href='/'
                      >
                        Blog
                      </a>
                    </li>

                    <li>
                      <a
                        class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                        href='/'
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class='text-center sm:text-left'>
                <p class=' font-medium text-gray-700 text-2xl'>Help</p>

                <nav class='mt-4'>
                  <ul class='space-y-2 text-sm'>
                    <li>
                      <a
                        class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                        href='/'
                      >
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a
                        class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                        href='/'
                      >
                        Community
                      </a>
                    </li>

                    <li>
                      <a
                        class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                        href='/'
                      >
                        Help Center
                      </a>
                    </li>

                    <li>
                      <a
                        class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                        href='/'
                      >
                        Contact Support
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class='text-center sm:text-left'>
                <p class='text-2xl font-medium text-gray-700'>
                  Subscribe to our newsletter
                </p>
                <p class='text-gray-700 transition hover:text-gray-700/75 text-lg mt-3'>
                  *Only valuable resource no bullshit
                </p>
                <div className='mt-4'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter your e-mail'
                    className='bg-gray-50 px-8 py-4 rounded-xl mobile:px-0 sm:px-8'
                  />
                  <button className='bg-black px-6 py-2 ml-4 rounded-xl'>
                    <i
                      class='fa fa-angle-right text-white text-3xl'
                      aria-hidden='true'
                    ></i>
                  </button>
                </div>

                <ul class='mt-8 flex justify-center gap-6 mobile:gap-3 sm:justify-start md:gap-8'>
                  <li>
                    <a
                      href='/'
                      rel='noreferrer'
                      target='_blank'
                      class='text-black transition hover:text-teal-700/75'
                    >
                      <span class='sr-only'>Facebook</span>
                      <svg
                        class='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      rel='noreferrer'
                      target='_blank'
                      class='text-black transition hover:text-teal-700/75'
                    >
                      <span class='sr-only'>Instagram</span>
                      <svg
                        class='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      rel='noreferrer'
                      target='_blank'
                      class='text-black transition hover:text-teal-700/75'
                    >
                      <span class='sr-only'>Twitter</span>
                      <svg
                        class='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      rel='noreferrer'
                      target='_blank'
                      class='text-black transition hover:text-teal-700/75'
                    >
                      <span class='sr-only'>GitHub</span>
                      <svg
                        class='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      rel='noreferrer'
                      target='_blank'
                      class='text-black transition hover:text-teal-700/75'
                    >
                      <span class='sr-only'>Dribbble</span>
                      <svg
                        class='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class='mt-12 border-t border-gray-100 pt-6'>
            <div class='text-center sm:flex sm:justify-between sm:text-left'>
              <p class='text-sm text-gray-500'>
                <span class='block sm:inline'>All rights reserved.</span>

                <a
                  class='inline-block text-teal-600 underline transition hover:text-teal-600/75'
                  href='/'
                >
                  Terms & Conditions
                </a>

                <span>&middot;</span>

                <a
                  class='inline-block text-teal-600 underline transition hover:text-teal-600/75'
                  href='/'
                >
                  Privacy Policy
                </a>
              </p>

              <p class='mt-4 text-sm text-gray-500 sm:order-first sm:mt-0'>
                &copy; 2022 Company Name
              </p>
            </div>
          </div>
        </div>
      </footer> */}

      {/* --------------------------------------- */}

      <footer class='bg-gray-100'>
        <div class='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
          <div class='lg:grid lg:grid-cols-2'>
            <div class='border-b border-gray-800 py-16 lg:order-last lg:border-b-0 lg:border-l lg:py-24 lg:pl-12'>
              <div class='mt-12 space-y-4 lg:mt-0'>
                <span class='rounded bg-teal-500 lg:block lg:h-1 lg:w-10'></span>

                <div class='text-center lg:text-left'>
                  <p class='text-2xl font-medium text-gray-700'>
                    Subscribe to our newsletter
                  </p>
                  <p class='text-gray-700 transition hover:text-gray-700/75 text-lg mt-3'>
                    *Only valuable resource no bullshit
                  </p>
                </div>

                <form class='mt-6'>
                  <div class='relative mx-auto max-w-lg lg:mx-0'>
                    <label class='sr-only' for='email'>
                      {' '}
                      Email{' '}
                    </label>

                    <input
                      class='w-full rounded-md border-none bg-gray-800 py-4 pl-3 pr-16 text-sm text-black'
                      id='email'
                      type='email'
                      placeholder='Enter your email'
                    />

                    <button
                      class='absolute top-1/2 right-1.5 -translate-y-1/2 rounded bg-indigo-600 p-3 text-white transition hover:bg-indigo-700'
                      type='button'
                    >
                      <svg
                        class='h-4 w-4'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                        />
                      </svg>
                    </button>
                  </div>
                </form>
                <ul class='mt-8 flex justify-center gap-6 mobile:gap-3 sm:justify-start md:gap-8'>
                  <li>
                    <a
                      href='/'
                      rel='noreferrer'
                      target='_blank'
                      class='text-black transition hover:text-teal-700/75'
                    >
                      <span class='sr-only'>Facebook</span>
                      <svg
                        class='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      rel='noreferrer'
                      target='_blank'
                      class='text-black transition hover:text-teal-700/75'
                    >
                      <span class='sr-only'>Instagram</span>
                      <svg
                        class='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      rel='noreferrer'
                      target='_blank'
                      class='text-black transition hover:text-teal-700/75'
                    >
                      <span class='sr-only'>Twitter</span>
                      <svg
                        class='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      rel='noreferrer'
                      target='_blank'
                      class='text-black transition hover:text-teal-700/75'
                    >
                      <span class='sr-only'>GitHub</span>
                      <svg
                        class='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      rel='noreferrer'
                      target='_blank'
                      class='text-black transition hover:text-teal-700/75'
                    >
                      <span class='sr-only'>Dribbble</span>
                      <svg
                        class='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class='pt-16 pb-8 lg:pt-24 lg:pr-12'>
              <div class='flex justify-center black'>
                <img
                  src='data:image/png;base64,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 '
                  alt=''
                  className='w-16 h-16'
                />
                <h1 className='text-black text-3xl font-bold font-sans mt-[1rem]'>
                  Fintechy
                </h1>

                <div className='ml-20 md:text-right'>
                  <p class='mx-auto mt-2 max-w-md text-center leading-relaxed text-gray-700 text-lg sm:mx-0 sm:max-w-xs sm:text-left md:max-w-[100%] '>
                    Authorised and regulated by the Financial Conduct Authority
                  </p>
                </div>
              </div>

              <div class='grid grid-cols-1 gap-8 sm:grid-cols-3 lg:mt-12'>
                <div class='text-center lg:text-left'>
                  <p class='font-medium text-gray-700 text-2xl'>Company</p>

                  <nav class='mt-4'>
                    <ul class='space-y-2 text-sm'>
                      <li>
                        <a
                          class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                          href='/'
                        >
                          About Us
                        </a>
                      </li>

                      <li>
                        <a
                          class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                          href='/'
                        >
                          Features
                        </a>
                      </li>

                      <li>
                        <a
                          class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                          href='/'
                        >
                          Blog
                        </a>
                      </li>

                      <li>
                        <a
                          class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                          href='/'
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div class='text-center lg:text-left'>
                  <p class=' font-medium text-gray-700 text-2xl'>Help</p>

                  <nav class='mt-4'>
                    <ul class='space-y-2 text-sm'>
                      <li>
                        <a
                          class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                          href='/'
                        >
                          FAQs
                        </a>
                      </li>

                      <li>
                        <a
                          class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                          href='/'
                        >
                          Community
                        </a>
                      </li>

                      <li>
                        <a
                          class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                          href='/'
                        >
                          Help Center
                        </a>
                      </li>

                      <li>
                        <a
                          class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                          href='/'
                        >
                          Contact Support
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div class='text-center lg:text-left'>
                  <p class=' font-medium text-gray-700 text-2xl'>Contact</p>

                  <nav class='mt-4'>
                    <ul class='space-y-2 text-sm'>
                      <li>
                        <a
                          class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                          href='/'
                        >
                          Offers
                        </a>
                      </li>

                      <li>
                        <a
                          class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                          href='/'
                        >
                          Visit
                        </a>
                      </li>

                      <li>
                        <a
                          class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                          href='/'
                        >
                          Information
                        </a>
                      </li>

                      <li>
                        <a
                          class='text-gray-700 transition hover:text-gray-700/75 text-lg'
                          href='/'
                        >
                          Organisation
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div class='mt-16 border-t border-gray-800 pt-8 text-sm text-black lg:mt-24'>
                <p class='text-center lg:text-left'>
                  <a
                    class='inline-block text-black underline transition hover:text-white/75'
                    href='/'
                  >
                    Privacy Policy
                  </a>

                  <span>&middot;</span>

                  <a
                    class='inline-block text-black underline transition hover:text-black/75'
                    href='/'
                  >
                    Terms & Conditions
                  </a>

                  <span>&middot;</span>

                  <a
                    class='inline-block text-black underline transition hover:text-black/75'
                    href='/'
                  >
                    Cookies
                  </a>
                </p>

                <p class='mt-4 text-center lg:text-left'>
                  &copy; 2022 Company Name. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

 
