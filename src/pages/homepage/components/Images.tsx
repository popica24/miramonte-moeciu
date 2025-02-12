const Images = () => {
  return (
    <section className='relative px-4 py-16 sm:px-8 lg:px-16 lg:py-32 xl:px-40 2xl:px-64' id='gallery'>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        <div className='grid gap-4'>
          <div>
            <img className='h-auto max-w-full rounded-lg' src='static/gallery/portret-entry.jpg' alt='' />
          </div>
          <div>
            <img className='h-auto max-w-full rounded-lg' src='static/gallery/square8.jpg' alt='' />
          </div>
          <div>
            <img className='h-auto max-w-full rounded-lg' src='static/gallery/square3.jpg' alt='' />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img className='h-auto max-w-full rounded-lg' src='static/gallery/square1.jpg' alt='' />
          </div>
          <div>
            <img className='h-auto max-w-full rounded-lg' src='static/gallery/portret3.jpg' alt='' />
          </div>
          <div>
            <img className='h-auto max-w-full rounded-lg' src='static/gallery/square5.jpg' alt='' />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img className='h-auto max-w-full rounded-lg' src='static/gallery/portret1.jpg' alt='' />
          </div>
          <div>
            <img className='h-auto max-w-full rounded-lg' src='static/gallery/square7.jpg' alt='' />
          </div>
          <div>
            <img className='h-auto max-w-full rounded-lg' src='static/gallery/square2.jpg' alt='' />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img className='h-auto max-w-full rounded-lg' src='static/gallery/square6.jpg' alt='' />
          </div>
          <div>
            <img className='h-auto max-w-full rounded-lg' src='static/gallery/portret2.jpg' alt='' />
          </div>
          <div>
            <img className='h-auto max-w-full rounded-lg' src='static/gallery/square4.jpg' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Images;
