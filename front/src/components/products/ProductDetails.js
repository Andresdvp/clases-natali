import React, { Fragment } from 'react'
import MetaData from "../layout/MetaData"


export const ProductDetails = () => {
    return (
        <Fragment>
            {/* titulo de la pagina*/}
            <MetaData title="bingo"> </MetaData>
            <div className='row d-flex justify-content-around'>
                {/* imagen*/}
                <div className='col-12 col-lg-5 img-fluid' id='imagen_producto'>
                    <img src='../../images/productos/ginbo.png' alt='imagen ' height="450" width="450"></img>
                </div>
                {/* nombre del producto*/}
                <div className='col-12 col-lg-5 mt-5'>
                    <h3>gingo biloa</h3>
                    {/* descripcion*/}
                    <p id='product_id'>producto #4586</p>

                </div>
            </div>


        </Fragment>
    )
}

