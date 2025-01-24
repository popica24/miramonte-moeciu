const About = () => {
  return (
    <section className='relative px-4 py-16 sm:px-8 lg:px-16 lg:py-32 xl:px-40 2xl:px-64'>
      <div className='mb-12 flex flex-col lg:-mx-8 lg:flex-row'>
        <div data-aos='fade-right' className='w-full lg:w-1/2 lg:px-8'>
          <h2 className='mt-4 text-3xl font-bold leading-tight'>Casa MiraMonte</h2>
          <blockquote className='relative mt-4'>
            <svg
              className='absolute -start-3 -top-2 size-4'
              width='4'
              height='4'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path
                d='M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z'
                fill='currentColor'
              ></path>
            </svg>

            <div className='relative z-10'>
              <p className='text-xl'>
                <em>Acolo unde muntele întâlnește liniștea.</em>
              </p>
            </div>
          </blockquote>
          <p className='mt-2 leading-relaxed'>
            Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in enim.
            Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus mi.
          </p>
        </div>

        <div data-aos='fade-left' className='mt-12 w-full lg:mt-0 lg:w-1/2 lg:px-8'>
          <div className='md:flex'>
            <div>
              <div className='relative h-16 w-16 rounded-full bg-blue-600'>
                <img
                  src='svg/landscape.svg'
                  className='absolute left-1/2 top-1/2 w-10 -translate-x-1/2 -translate-y-1/2'
                />
              </div>
            </div>
            <div className='mt-4 md:ml-8 md:mt-0'>
              <h4 className='text-xl font-bold leading-tight'>Priveliște superbă</h4>
              <p className='mt-2 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, quidem! Quas nobis ab temporibus vero
                molestiae perspiciatis mollitia, adipisci necessitatibus minus quos doloribus ex quae repellat sapiente
                iusto, quaerat illo.
              </p>
            </div>
          </div>

          <div className='mt-8 md:flex'>
            <div>
              <div className='relative h-16 w-16 rounded-full bg-blue-600'>
                <img
                  src='svg/tourism.svg'
                  className='absolute left-1/2 top-1/2 w-10 -translate-x-1/2 -translate-y-1/2'
                />
              </div>
            </div>
            <div className='mt-4 md:ml-8 md:mt-0'>
              <h4 className='text-xl font-bold leading-tight'>Atracții în apropiere</h4>
              <p className='mt-2 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta delectus expedita placeat eum dolorem
                sapiente, ea, sunt labore tenetur ipsam quam dolor minima excepturi perferendis natus nostrum rem sint
                repellat!
              </p>
            </div>
          </div>
        </div>
      </div>

      <span className='mt-6 text-3xl font-bold leading-tight' data-aos='fade-right'>
        Dar nu doar atat
      </span>

      <div className='my-24 text-center md:-mx-4'>
        <div className='grid grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-6'>
          <div className='col-span-1' data-aos='fade-right' data-aos-delay='100'>
            <Card url='svg/hairdry.svg' text='Feon' />
            <Card url='svg/iron.svg' text='Fier de calcat' />
          </div>
          <div className='col-span-1' data-aos='fade-right' data-aos-delay='300'>
            <Card url='svg/fridge.svg' text='Frigider in camera' />
            <Card url='svg/parking.svg' text='Parcare gratis' />
          </div>
          <div className='col-span-1' data-aos='fade-right' data-aos-delay='500'>
            <Card url='svg/wifi.svg' text='WiFi gratis' />
            <Card url='svg/cig.svg' text='Zona fumatori' />
          </div>
          <div className='col-span-1' data-aos='fade-right' data-aos-delay='700'>
            <Card url='svg/games.svg' text='Jocuri' />
            <Card url='svg/playground.svg' text='Loc pentru copii' />
          </div>
          <div className='col-span-1' data-aos='fade-right' data-aos-delay='900'>
            <Card url='svg/grill.svg' text='Gratar' />
            <Card url='svg/turret.svg' text='Foisor' />
          </div>
          <div className='col-span-1' data-aos='fade-right' data-aos-delay='1100'>
            <Card url='svg/jacuzzi.svg' text='Ciubar' />
            <Card url='svg/bed.svg' text='Paturi Suplimentare' />
          </div>
        </div>
      </div>

      <span className='text-3xl font-bold leading-tight' data-aos='fade-right'>
        Si multe altele...
      </span>

      <div className='mt-8 grid w-full grid-cols-1 items-end border-b text-sm sm:grid-cols-4 md:w-fit lg:grid-cols-6'>
        <div className='col-span-1 mb-2'>
          <span className='text-xl font-bold leading-tight'>Bucătărie</span>
          <ul>
            <li>Aragaz</li>
            <li>Espressor cafea</li>
            <li>Plită electrică</li>
          </ul>
        </div>
        <div className='col-span-1 mb-2'>
          <ul>
            <li>Cană electrică</li>
            <li>Filtru de cafea</li>
            <li>Scaun pentru copii</li>
          </ul>
        </div>
        <div className='col-span-1 mb-2'>
          <ul>
            <li>Cuptor cu microunde</li>
            <li>Mașină de spălat vase</li>
            <li>Veselă și tacâmuri</li>
          </ul>
        </div>
      </div>

      <div className='mt-8 grid w-full grid-cols-2 items-end border-b text-sm sm:grid-cols-4 md:w-fit lg:grid-cols-6'>
        <div className='col-span-1'>
          <span className='text-xl font-bold leading-tight'>În curte</span>
          <ul>
            <li>Ceaun</li>
            <li>Pomi fructiferi</li>
          </ul>
        </div>
        <div className='col-span-1 mb-2'>
          <ul>
            <li>Loc de joacă amenajat</li>
            <li>Terasă la soare</li>
          </ul>
        </div>
        <div className='col-span-1 mb-2'></div>
      </div>

      
    </section>
  );
};

export default About;

const Card = ({ url, text }: { url: string; text: string }) => {
  return (
    <div className='p-4'>
      <div className='flex aspect-square w-32 flex-col items-center justify-center rounded-full border border-gray-300 bg-white'>
        <img src={url} alt='' className='aspect-square w-12' />

        <h4 className='mt-4 text-[11px] font-light'>{text}</h4>
      </div>
    </div>
  );
};
