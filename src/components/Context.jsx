const  initialTreansections = [
    // { amount: 300, desc: "Cash" },
    // { amount: -50, desc: "Book" },
    // { amount: -200, desc: "Camera" },
  ];
  export const TransectionContext = createContext(initialTreansections)
  export const TransactionProvider=({children})=>{
      let [state, dispatch] = useReducer(TransReducer, initialTreansections);
       function addTransaction(transObj)
       {
           dispatch({
             type: "ADD",
             payload: {
               amount: transObj.amount,
               desc: transObj.desc
             },
           });
       }
       return (
         <TransectionContext.Provider
           value={{
             transactions: state,
             addTransaction: addTransaction
           }}>
           {children}
         </TransectionContext.Provider>
       );
  };