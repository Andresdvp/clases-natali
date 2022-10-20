import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData';
import {useDispatch} from 'react-redux'
import { getProducts } from '../actions/productActions';

export const Home = () => {
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])



    return (
        <Fragment>
            <MetaData title="probando"></MetaData>
            <h1 id="encabezado_productos">Ultimos productos</h1>

            <section id='productos' className='container mt-5 '>
                <div className='row'>
                    
                   {/*producto 1 */}
                    <div className=' col-sm-12 col-md-6 col-lg-3 my'>

                        <div className='card p-3 rounded'>

                            <img className='card-img-top mx=auto' src='./images/batido_verde.png' alt='Batido_verde'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_product'><a href='http://localhost:3000/'>Batido_verde</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 reviews</span>

                                </div>
                                <p className='card-text'>$72.000</p>
                                <a href="http://localhost:3000/" id='view_btn' className='btn btn-block'>ver_detalles</a>

                            </div>

                        </div>


                    </div>

                    {/*producto 2 */}
                    <div className=' col-sm-12 col-md-6 col-lg-3 my'>

                        <div className='card p-3 rounded'>

                            <img className='card-img-top mx=auto' src='./images/colageno_biotina.png' alt='Batido_verde'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_product'><a href='http://localhost:3000/'>colageno_biotina</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 15 reviews</span>

                                </div>
                                <p className='card-text'>$60.000</p>
                                <a href="http://localhost:3000/" id='view_btn' className='btn btn-block'>ver_detalles</a>

                            </div>

                        </div>


                    </div>


                    {/*producto 3 */}

                    <div className=' col-sm-12 col-md-6 col-lg-3 my'>

                        <div className='card p-3 rounded'>

                            <img className='card-img-top mx=auto' src='./images/vinagre.png' alt='Batido_verde'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_product'><a href='http://localhost:3000/'>vinagre</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 25 reviews</span>

                                </div>
                                <p className='card-text'>$42.000</p>
                                <a href="http://localhost:3000/" id='view_btn' className='btn btn-block'>ver_detalles</a>

                            </div>

                        </div>


                    </div>



                    {/*producto 4 */}

                    <div className=' col-sm-12 col-md-6 col-lg-3 my'>

                        <div className='card p-3 rounded'>

                            <img className='card-img-top mx=auto' src='./images/3_max.png' alt='Batido_verde'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_product'><a href='http://localhost:3000/'>3_max</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 16 reviews</span>

                                </div>
                                <p className='card-text'>$90.000</p>
                                <a href="http://localhost:3000/" id='view_btn' className='btn btn-block'>ver_detalles</a>

                            </div>

                        </div>


                    </div>


                </div>
            </section>

        </Fragment >
    )
}

export default Home;