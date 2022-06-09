import React ,  {createContext, useReducer} from 'react';
import transreducer from './transReducer.js';

const transactions = [

{amount: 64,desc: 'Pencil'},
{amount: -53,desc: 'Book'},
{amount: 70,desc: 'Fruit'}

]

export const transContext = createContext(transactions);

export const TransactionProvider = ({children})=> {

    let[state , dispatch] = useReducer(transreducer ,transactions);

    function addTransaction(transObj){

        dispatch({
            type : "ADD",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }
    

    return(

       <transContext.Provider value={{
           transactions: state,
           addTransaction
            }      
            
       }>
           {children}
       </transContext.Provider>
    )
}





