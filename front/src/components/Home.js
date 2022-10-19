import React, { Fragment } from 'react'

export const Home = () => {
    return (
        <Fragment>
            <h1 id="encabezado_productos">Ultimos productos</h1>

            <section id='productos' className='container mt-5 '>
                <div className='row'>

                    <div className=' col-sm-12 col-md-6 col-lg-3 my'>

                        <div className='card p-3 rounded'>

                            <img className='card-img-top mx=auto' src='./images/batido_verde.png' alt='Batido_verde'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='Titulo_Product'><a href='.'>Batido_verde</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-ouder'>
                                        <div className='rating-inmer'></div>
                                    </div>
                                    <span id='No_de_opiniones'>5 reviews</span>

                                </div>
                                <p className='card-text'>72.000</p>
                                <a href="." id='ver_producto' className='btn btn-block'>ver_detalles</a>

                            </div>

                        </div>


                    </div>
                </div>

            </section>

        </Fragment >
    )
}

export default Home;