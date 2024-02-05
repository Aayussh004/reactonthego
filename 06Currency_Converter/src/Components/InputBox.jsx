
import React, {useId,useRef,useCallback} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",

}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => { return onCurrencyChange && onCurrencyChange(e.target.value)} } 
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency} >
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

// import React,{useId} from 'react'

// function InputBox({
//   label,
//   amount,
//   onAmountChange,
//   onCurrencyChange,
//   currencyOptions=[],
//   selectCurrency = "usd",
//   amountDisable = false,
//   currencyDisable = false,
//   className = ""
// }) 

// {
//   const amountInputId = useId();
//   return (
//       <div className={`bg-white  p-3 rounded-lg text-sm flex ${className}`}>
//           <div className="w-1/2">
//             {/* label means "From" ya "to" ky lagaye uska variable */}
//               <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
//                   {label}
//               </label>

//               <input 
//                   id={amountInputId}
//                   className="outline-none w-full bg-transparent py-1.5"
//                   type="number"
//                   placeholder="Amount"

//                   disabled = {amountDisable}//it is just used for the productiongrad apps jst a standard
//                   value={amount}//amount ki value jo user dega
//                   onChange={(e)=>{return onAmountChange && onAmountChange(Number(e.target.value))}}
                  
//                   //yha onAmountChange phli baar isilye use hua hai, jb ye exist krta hai tb hi uska method lagao wrna aapka onAmountCHnge() method phatega
                  
//                   //aur event ko Number me lena hai kyuki js usko string me deta hai by default
//                   />
//           </div>

//           <div className="w-1/2 flex flex-wrap justify-end text-right">
//               <p className="text-black/40 mb-2 w-full">Currency Type</p>
//               <select
//                   className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
//                   value = {selectCurrency}
//                   onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
//                   disabled = {currencyDisable}
                      
//                       {/* ab mujhe select option ke andar ek long list chahiye set of currency ki jise me select kr sku to wo aayengi array[] se */}
//                       {currencyOptions.map((currency)=>(//here currencyOptions[] is an array to uski values fetch krne ke liye map loop ka use kiya hai
//                        <option key={currency} value={currency}>
//                        {currency}
//                        </option>//whenever using loops in jsx always use keys for optimizing performance 
//                       ))} 
              
//               </select>
//           </div>
//       </div>
//   );
// }

// export default InputBox;
