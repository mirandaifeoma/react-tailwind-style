import React from 'react';


export const Offer = () => {
  return (
    <div className='max-w-screen-xl px-4 mt-28 mobile:mt-14 lg:mt-28'>
      <div className='text-center mobile:mb-8'>
        <h1 className='text-5xl'>
          <span className='text-5xl font-semibold font-sans'>Features </span>
          ours users love
        </h1>
      </div>

      <div className=' gap-6 mobile:columns-1 mobile:mx-4 md:columns-2 lg:columns-3 ml-28 lg:mt-20 lg:mx-20'>
        <div className='relative block rounded-3xl border border-gray-100 p-8 shadow-xl'>
          <div className='w-20 h-20 bg-gradient-to-b from-gray-50 to-indigo-100 text-center rounded-full p-5'>
            <i class='bi bi-back text-indigo-600 text-4xl'></i>
          </div>
          <div className='mt-8 text-gray-500 sm:pr-8'>
            <h5 className='mt-4 text-xl font-bold text-gray-900'>
              Track your Transactions
            </h5>

            <p className='mt-2 hidden text-md sm:block'>
              Quick and easy way to keep track of your transaction
            </p>
          </div>
        </div>
        <div className='relative block rounded-3xl border border-gray-100 p-8 shadow-xl my-8'>
          <div className='w-20 h-20 bg-gradient-to-b from-gray-50 to-indigo-100 text-center rounded-full p-5'>
            <i class='bi bi-file-ruled-fill text-indigo-600 text-4xl'></i>
          </div>
          <div className='mt-8 text-gray-500 sm:pr-8'>
            <h5 className='mt-4 text-xl font-bold text-gray-900'>
              Custom categories
            </h5>

            <p className='mt-2 hidden text-md sm:block'>
              Quick and easy way to keep track of your transaction
            </p>
          </div>
        </div>
        <div className='relative block rounded-3xl border border-gray-100 p-8 shadow-xl my-8'>
          <div className='w-20 h-20 bg-gradient-to-b from-gray-50 to-indigo-100 text-center rounded-full p-5'>
            <i class='bi bi-credit-card-fill text-indigo-600 text-4xl'></i>
          </div>
          <div className='mt-8 text-gray-500 sm:pr-8'>
            <h5 className='mt-4 text-xl font-bold text-gray-900'>
              Split transactions
            </h5>

            <p className='mt-2 hidden text-md sm:block'>
              Organise your transaction they way you want to.
            </p>
          </div>
        </div>
        <div className='relative block rounded-3xl border border-gray-100 p-8 shadow-xl my-8'>
          <div className='w-20 h-20 bg-gradient-to-b from-gray-50 to-indigo-100 text-center rounded-full p-5'>
            <i class='bi bi-twitch text-indigo-600 text-4xl'></i>
          </div>
          <div className='mt-8 text-gray-500 sm:pr-8'>
            <h5 className='mt-4 text-xl font-bold text-gray-900'>
              Balance warnings
            </h5>

            <p className='mt-2 hidden text-md sm:block'>
              Get notified when your balance is looking low and bills still due.
            </p>
          </div>
        </div>
        <div className='relative block rounded-3xl border border-gray-100 p-8 shadow-xl my-8'>
          <div className='w-20 h-20 bg-gradient-to-b from-gray-50 to-indigo-100 text-center rounded-full p-5'>
            <i class='bi bi-ui-radios-grid text-indigo-600 text-4xl'></i>
          </div>
          <div className='mt-8 text-gray-500 sm:pr-8'>
            <h5 className='mt-4 text-xl font-bold text-gray-900'>
              Account transafers
            </h5>

            <p className='mt-2 hidden text-md sm:block'>
              Transfer money between all your bank accounts in one app.
            </p>
          </div>
        </div>
        <div className='relative block rounded-3xl border border-gray-100 p-8 shadow-xl my-8'>
          <div className='w-20 h-20 bg-gradient-to-b from-gray-50 to-indigo-100 text-center rounded-full p-5'>
            <i class='bi bi-wallet text-indigo-600 text-4xl'></i>
          </div>
          <div className='mt-8 text-gray-500 sm:pr-8'>
            <h5 className='mt-4 text-xl font-bold text-gray-900'>
              Spending history
            </h5>

            <p className='mt-2 hidden text-md sm:block'>
              Review how your spending habbits have changed over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

