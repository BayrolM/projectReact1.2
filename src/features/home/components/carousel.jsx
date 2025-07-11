import React from 'react';
import image1 from '../../../assets/images/imagen.jpg';
import image2 from '../../../assets/images/imagen2.jpg';
import image3 from '../../../assets/images/imagen3.jpg';

export const Carousel = () => (
  <div
    id='carouselExampleIndicators'
    className='carousel slide'
    data-bs-ride='carousel'
  >
    <div className='carousel-indicators'>
      <button
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide-to='0'
        className='active'
        aria-current='true'
        aria-label='Slide 1'
      ></button>
      <button
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide-to='1'
        aria-label='Slide 2'
      ></button>
      <button
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide-to='2'
        aria-label='Slide 3'
      ></button>
    </div>
    <div className='carousel-inner' style={{ height: '700px' }}>
      <div className='carousel-item active'>
        <img src={image1} className='d-block w-100' alt='First slide' />
        <div
          className='carousel-caption d-none d-md-block text-start'
          style={{ left: 0, right: 'auto' }}
        >
          <h5>¡Bienvenido a StockStore!</h5>
          <p>
            Descubre los mejores productos al mejor precio, con envío rápido y
            seguro.
          </p>
        </div>
      </div>
      <div className='carousel-item'>
        <img src={image2} className='d-block w-100' alt='Second slide' />
        <div
          className='carousel-caption d-none d-md-block text-start'
          style={{ left: 0, right: 'auto' }}
        >
          <h5> Novedades de la temporada</h5>
          <p>
            Explora nuestra nueva colección y encuentra lo último en tendencias.
          </p>
        </div>
      </div>
      <div className='carousel-item'>
        <img src={image3} className='d-block w-100' alt='Third slide' />
        <div
          className='carousel-caption d-none d-md-block text-start'
          style={{ left: 0, right: 'auto' }}
        >
          <h5>Ofertas exclusivas</h5>
          <p>
            Aprovecha descuentos especiales y promociones por tiempo limitado.
          </p>
        </div>
      </div>
    </div>
    <button
      className='carousel-control-prev'
      type='button'
      data-bs-target='#carouselExampleIndicators'
      data-bs-slide='prev'
    >
      <span className='carousel-control-prev-icon' aria-hidden='true'></span>
      <span className='visually-hidden'>Previous</span>
    </button>
    <button
      className='carousel-control-next'
      type='button'
      data-bs-target='#carouselExampleIndicators'
      data-bs-slide='next'
    >
      <span className='carousel-control-next-icon' aria-hidden='true'></span>
      <span className='visually-hidden'>Next</span>
    </button>
  </div>
);
