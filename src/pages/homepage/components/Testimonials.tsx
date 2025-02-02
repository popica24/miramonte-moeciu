const Testimonials = () => {
  return (
    <section className='relative bg-white px-4 py-16 sm:px-8 lg:px-16 lg:py-32 xl:px-40 2xl:px-64' id='reviews'>
      <h2 className='mb-6 w-full text-start text-3xl font-bold leading-tight'>Marturiile turistilor nostri</h2>
      <div className='mx-auto mb-8 grid max-w-screen-xl lg:mb-12 lg:grid-cols-2'>
        <figure className='flex flex-col items-center justify-center border-b border-gray-200 bg-gray-50 p-8 text-center md:p-12 lg:border-r'>
          <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
            <h3 className='text-lg font-semibold text-gray-900'>O experiență de vis!</h3>
            <p className='my-4'>
              "Cabana este perfect amplasată, cu o priveliște superbă spre munți. Am găsit tot confortul necesar, iar
              serile petrecute la focul din șemineu au fost magice. Gazdele sunt foarte primitoare și ne-au oferit
              recomandări excelente pentru drumeții. Cu siguranță vom reveni!.
            </p>
          </blockquote>
          <figcaption className='flex items-center justify-center space-x-3'>
            <img
              className='h-9 w-9 rounded-full'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png'
              alt='profile picture'
            />
            <div className='space-y-0.5 text-left font-medium'>
              <div>Andrei & Maria</div>
              <div className='text-sm font-light text-gray-500 dark:text-gray-400'>București</div>
            </div>
          </figcaption>
        </figure>
        <figure className='flex flex-col items-center justify-center border-b border-gray-200 bg-gray-50 p-8 text-center md:p-12  '>
          <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
            <h3 className='text-lg font-semibold text-gray-900'>Ne-am simțit ca acasă! </h3>
            <p className='my-4'>
              "Cabana este curată, bine echipată și foarte cozy. Ne-a plăcut mult terasa spațioasă, ideală pentru micul
              dejun cu aer curat de munte. Am fost plăcut surprinși de atenția la detalii și de ospitalitatea gazdelor.
              Recomand 100%!
            </p>
          </blockquote>
          <figcaption className='flex items-center justify-center space-x-3'>
            <img
              className='h-9 w-9 rounded-full'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png'
              alt='profile picture'
            />
            <div className='space-y-0.5 text-left font-medium'>
              <div> Ioana R.</div>
              <div className='text-sm font-light text-gray-500 dark:text-gray-400'>Cluj-Napoca</div>
            </div>
          </figcaption>
        </figure>
        <figure className='flex flex-col items-center justify-center border-b border-gray-200 bg-gray-50 p-8 text-center md:p-12 lg:border-b-0 lg:border-r  '>
          <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
            <h3 className='text-lg font-semibold text-gray-900'>
              Dacă vrei liniște și relaxare, acesta este locul perfect!
            </h3>
            <p className='my-4'>
              "Cabana este superbă, cu un design rustic autentic și dotări moderne. Ne-am bucurat de fiecare moment
              petrecut aici, de peisajele spectaculoase și de aerul curat. Revenim cu drag!
            </p>
          </blockquote>
          <figcaption className='flex items-center justify-center space-x-3'>
            <img
              className='h-9 w-9 rounded-full'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
              alt='profile picture'
            />
            <div className='space-y-0.5 text-left font-medium'>
              <div>Alexandru P.</div>
              <div className='text-sm font-light text-gray-500 dark:text-gray-400'>Timișoara</div>
            </div>
          </figcaption>
        </figure>
        <figure className='flex flex-col items-center justify-center border-gray-200 bg-gray-50 p-8 text-center md:p-12  '>
          <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
            <h3 className='text-lg font-semibold text-gray-900'>O cabană de poveste!</h3>
            <p className='my-4'>
              "Atmosfera caldă, mobilierul din lemn masiv și peisajele ne-au cucerit complet. Ne-am bucurat de drumeții,
              seri liniștite la foc și de o vacanță de neuitat. Mulțumim gazdelor pentru ospitalitate și grijă la
              fiecare detaliu!
            </p>
          </blockquote>
          <figcaption className='flex items-center justify-center space-x-3'>
            <img
              className='h-9 w-9 rounded-full'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png'
              alt='profile picture'
            />
            <div className='space-y-0.5 text-left font-medium'>
              <div>Cristina & Dan</div>
              <div className='text-sm font-light text-gray-500 dark:text-gray-400'>Brașov</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
