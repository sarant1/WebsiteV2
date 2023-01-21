export const Footer = () => {
  return (
    <div className="h-40">
        <div className="flex flex-col h-full justify-center items-center bg-pink-200">
            <div className="flex justify-center items-center">
                <button>
                    <img className="hover:bg-gray-200 p-1 rounded-3xl duration-500 m-4" src={require('../icons/linkedin30.png')} alt=""/>
                </button>
                <button>
                    <img className="hover:bg-gray-200 p-1 rounded-3xl duration-500 m-4" src={require('../icons/github30.png')} alt=""/>
                </button>
            </div>
            <div className="">
                @2023 HandCrafted by the Best
            </div>
        </div>
    </div>
  );  
};