import { ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS ,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS
  } from "../constants/productConstants";

  //estados de la pagina 

  export const productReducer =(state={products : []},action)=>{
    switch(action.type){
        //caso requerido
        case ALL_PRODUCTS_REQUEST:
            return{
                loading: true,
                productos:[]
            }
        //caso con exito
        case ALL_PRODUCTS_SUCCESS:
            return{
                loading: false,
                productos:action.payload.productos,
                cantidad:action.payload.cantidad
            }
        
            //caso fallido
        case ALL_PRODUCTS_FAIL:
            return{
                loading:false,
                error: action.payload
            }

            //eliminacion de errores
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }         
            //captuarar errores por defauld
        default:
            return state;

    }

  }