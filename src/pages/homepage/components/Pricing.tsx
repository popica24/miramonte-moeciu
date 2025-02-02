import { useState } from 'react';

const Pricing = () => {
  const PRICE_PER_NIGHT = 300;
  const PRICE_PER_UNIT = 1750;
  const [nights, _setNights] = useState(1);
  return (
    <div className='relative px-4 py-16 sm:px-8 lg:px-16 lg:py-32 xl:px-40 2xl:px-64' id='prices'>
      <div className='mb-6 w-full text-start text-3xl font-bold leading-tight'>
        <h2 className='mb-6 w-full text-start text-3xl font-bold leading-tight'>Tarifele noastre</h2>
      </div>

      <div className='mx-auto mt-12 max-w-7xl max-lg:max-w-2xl max-sm:max-w-sm'>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <label
            htmlFor='radio'
            className='relative cursor-pointer rounded-md border-t-4 border-orange-500 bg-white px-4 py-8 text-center shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] transition-all hover:-translate-y-1'
          >
            <div className='absolute right-2 top-2 flex items-center'>
              <input id='radio' type='radio' name='value1' className='peer hidden h-5 w-5' />
              <div className='relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-orange-500 p-1 before:absolute before:block before:h-full before:w-full before:bg-white peer-checked:before:hidden'>
                <span className='h-3 w-3 rounded-full bg-orange-500'></span>
              </div>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-orange-500'>Doi Adulti</h3>
            </div>
            <div className='mt-6'>
              <h3 className='text-4xl font-semibold text-gray-800'>RON {PRICE_PER_NIGHT * nights}</h3>
              <p className='mt-1 text-xs text-gray-500'>
                {nights} {nights > 1 ? 'Nopti' : 'Noapte'}
              </p>
            </div>
          </label>

          <label
            htmlFor='radio2'
            className='relative cursor-pointer rounded-md border-t-4 border-blue-500 bg-white px-4 py-8 text-center shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] transition-all hover:-translate-y-1'
          >
            <div className='absolute right-2 top-2 flex items-center'>
              <input id='radio2' type='radio' name='value1' className='peer hidden h-5 w-5' checked />
              <div className='relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-blue-500 p-1 before:absolute before:block before:h-full before:w-full before:bg-white peer-checked:before:hidden'>
                <span className='h-3 w-3 rounded-full bg-blue-500'></span>
              </div>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-blue-500'>Intreaga Unitate</h3>
            </div>
            <div className='mt-6'>
              <h3 className='text-4xl font-semibold text-gray-800'>RON {PRICE_PER_UNIT * nights}</h3>
              <p className='mt-1 text-xs text-gray-500'>
                {nights} {nights > 1 ? 'Nopti' : 'Noapte'}
              </p>
            </div>
          </label>
        </div>

        <div className='mt-12'>
          <h4 className='mb-4 text-xl font-bold text-gray-800'>
            <span className='text-blue-500'>Copiii</span>
          </h4>
          <ul className='space-y-4'>
            <li className='flex items-center text-sm text-gray-500'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' className='mr-4 fill-green-500' viewBox='0 0 24 24'>
                <path
                  d='M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z'
                  data-original='#000000'
                />
              </svg>
              Copiii până la vârsta de 0 an (inclusiv) care dorm în pat cu părinții beneficiază de gratuitate.
            </li>
            <li className='flex items-center text-sm text-gray-500'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' className='mr-4 fill-green-500' viewBox='0 0 24 24'>
                <path
                  d='M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z'
                  data-original='#000000'
                />
              </svg>
              Copiii între <b> 1 și 17 ani </b> (inclusiv) beneficiază de cazare în schimbul unui tarif de{' '}
              <b> 50 ron/noapte</b>.
            </li>
            <li className='flex items-center text-sm text-gray-500'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' className='mr-4 fill-green-500' viewBox='0 0 24 24'>
                <path
                  d='M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z'
                  data-original='#000000'
                />
              </svg>
              Oferim pătuțuri pentru sugari gratuit.
            </li>
          </ul>
        </div>

        <div className='mb-6 mt-6'>
          <h4 className='mb-4 text-xl font-bold text-gray-800'>
            <span className='text-blue-500'>Mesele</span>
          </h4>
          <ul className='space-y-4'>
            <li className='flex items-center text-sm text-gray-500'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' className='mr-4 fill-green-500' viewBox='0 0 24 24'>
                <path
                  d='M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z'
                  data-original='#000000'
                />
              </svg>
              Mic dejun opțional : 40 RON/persoană{' '}
            </li>
          </ul>
        </div>
        <span className='mt-16 w-full text-center text-sm text-red-700'>
          Avansul este obligatoriu pentru rezervări și este returnabil doar dacă anularea se face cu cel puțin 60 de
          zile înainte.
        </span>
      </div>
    </div>
  );
};

export default Pricing;
