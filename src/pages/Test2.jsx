// import Axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';

// const Test2 = () => {

//     const [data, setData] = useState()
//     const [count, setCount] = useState(0)

//     useEffect(() => {
            
//         (async () => {
//             const response = await Axios.get('https://api.kanye.rest')
//             setData(response?.data)
//             // console.log(response?.data)

//         })()
        
//     }, [count])

//     const handleClick = () => {
//         setCount(count + 1)
//     }

//     // console.log(data?.quote)

//     return (
//         <div>
//             <p className='text-3xl text-slate-600'>Quote : 
//             <span className='text-orange-500 mx-8'>{`" ${data?.quote} "`}</span>
//             </p>
//             <button className='mt-5 px-2.5 py-1.5 bg-blue-500 text-white rounded-md' onClick={handleClick}>Change Quote</button>
//         </div>
//     );
// };

// export default Test2;


import { useState, useEffect } from 'react';
import Axios from 'axios';

const Test2 = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await Axios.get('https://api.kanye.rest');
      setQuote(response?.data?.quote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div>
      <p className='text-3xl text-slate-600'>
        Quote: <span className='text-orange-500 mx-8'>{`"${quote}"`}</span>
      </p>
      <button className='mt-5 px-2.5 py-1.5 bg-blue-500 text-white rounded-md' onClick={fetchQuote}>
        Change Quote
      </button>
    </div>
  );
};

export default Test2;
