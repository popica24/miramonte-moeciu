const Rules = () => {
  return (
    <section className='relative px-4 py-16 sm:px-8 lg:px-16 lg:py-32 xl:px-40 2xl:px-64' id='rules'>
      <span className='mb-6 w-full text-center text-3xl font-bold leading-tight'>Regulament de ordine interioara</span>
      <div className='mt-6 flex flex-wrap justify-center gap-4 font-serif text-lg'>
        <span
          data-aos='fade-right'
          className='w-full flex-grow rounded-md border-l-8 border-red-600 bg-gray-100 px-3 py-2 text-black md:w-5/12 lg:w-3/12'
        >
          Nu se fumează în afara zonei special amenajate.
        </span>
        <span
          data-aos='fade-right'
          data-aos-delay='100'
          className='w-full flex-grow rounded-md border-l-8 border-red-600 bg-gray-100 px-3 py-2 text-black md:w-5/12 lg:w-3/12'
        >
          Nu se intră încălțat, vă rugăm să folosiți papuci.
        </span>
        <span
          data-aos='fade-right'
          data-aos-delay='300'
          className='w-full flex-grow rounded-md border-l-8 border-red-600 bg-gray-100 px-3 py-2 text-black md:w-5/12 lg:w-3/12'
        >
          Nu acceptăm animale de companie.
        </span>
        <span
          data-aos='fade-right'
          data-aos-delay='500'
          className='w-full flex-grow rounded-md border-l-8 border-red-600 bg-gray-100 px-3 py-2 text-black md:w-5/12 lg:w-3/12'
        >
          Evitați să deranjați fauna și flora din jurul cabanei.
        </span>
        <span
          data-aos='fade-right'
          data-aos-delay='700'
          className='w-full flex-grow rounded-md border-l-8 border-red-600 bg-gray-100 px-3 py-2 text-black md:w-5/12 lg:w-3/12'
        >
          Folosiți facilitățile conform instrucțiunilor oferite de gazdă.
        </span>
      </div>
    </section>
  );
};

export default Rules;
