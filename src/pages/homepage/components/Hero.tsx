const Hero = () => {
  return (
    <div className='bg-gray-100'>
      <section
        className='cover bg-blue-teal-gradient relative flex min-h-screen items-center overflow-hidden bg-blue-600 px-4 py-48 sm:px-8 lg:px-16
      xl:px-40 2xl:px-64'
      >
        <div className='absolute left-0 top-0 z-0 h-full'>
          <img src='static/hero.jpg' alt='' className='h-full w-full object-cover opacity-20' />
        </div>

        <div className='h-100 relative z-10 lg:mt-16 lg:w-3/4 xl:w-2/4'>
          <div>
            <h1 className='text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl'>
              Visul nostru împărtășit cu voi.
            </h1>
            <p className='mt-4 text-xl leading-snug text-blue-100 md:text-2xl'>
              Ești la un click distanță de un refugiu de vis.
            </p>
            <a href='#' className='mt-8 inline-block rounded bg-[#535353] px-8 py-4 font-semibold text-white'>
              Rezerva !
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
