import PropTypes from 'prop-types';
import { BASE_URL} from '../App';
const SearchResult = ({data:foods}) => {
  return (
      <div className="foodCartContainer bg-[url('/bg.png')] bg-cover bg-center m-0 min-h-[120vh] text-white filter brightness-75 contrast-90">
          <div className="foodCards grid grid-cols-3 gap-4 p-8 inset-0 max-md:grid-cols-2 max-sm:grid-cols-1">
            {foods?.map(({name,image,text,price})=>(
                <div className="foodCard  border-[0.66px] border-solid border-gradient-background bg-overlay bg-blend-overlay backdrop-blur-[8px] rounded-[20px] flex py-6 px-0 hover:border-red-400 " key={name}>
                    <div className="foodImage">
                        <img src={BASE_URL + image} alt="" className='object-cover rounded-[15px]' />
                    </div>
                    <div className="foodInfo flex flex-col items-start p-4 w-3/5">
                        <div className="info">
                            <h3 className='text-lg font-medium'>{name}</h3>
                            <p className='text-sm mt-2'>{text}</p>
                        </div>
                        <button className=' bg-red-500 px-2 rounded-[5px]  mt-4 hover:bg-red-600'>${price.toFixed(2)}</button>
                    </div>
                </div>
            ))}
          </div>
        </div>
  )
}
SearchResult.propTypes = {
    data: PropTypes.array.isRequired,  // or the correct type of your 'data' prop
  };
export default SearchResult

//     <div className="foodCartContainer bg-[url('/public/bg.png')] bg-cover bg-center m-0 h-[100vh] relative filter brightness-75 contrast-90">
//       <div className="foodCards absolute inset-0 flex flex-wrap justify-center items-center gap-4 p-8">
//         {foods?.map(({ name, image, text }) => (
//           <div className="foodCard relative w-[340px] h-[167px] border-[0.66px] border-solid border-gradient-background bg-overlay bg-blend-overlay backdrop-blur-[13px] rounded-[20px] flex p-4" key={name}>
//             <div className="foodImage w-1/2">
//               <img src={BASE_URL + image} alt={name} className="w-full h-full object-cover rounded-[15px]" />
//             </div>
//             <div className="foodInfo w-1/2 flex flex-col justify-center items-start p-4">
//               <div className="info">
//                 <h3 className="text-lg font-medium">{name}</h3>
//                 <p className="text-sm mt-2">{text}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

