export default function Hero()
{
    return(
        <div className="flex flex-col items-center mb-4">
          <div className="md:block sm:justify-center mx-2 mt-2 sm:pb-96 sm:pt-2 sm:px-12 lg:mx-12 sm:max-w-xl md:max-w-3xl lg:max-w-6xl lg:max-h-xl max-h-64 items-center">
            <img className="justify-center lg:max-h-lg shadow-2xl rounded-md" alt="" aria-hidden="true" src="/Mua_Phuc_Sinh.jpg"/>
          </div>
          <img className="-mt-12 w-32 h-32 md:-mt-32 md:w-64 md:h-64 lg:mt-12 lg:w-96 lg:h-96 justify-center" alt="" aria-hidden="true" src="/viet-catholicjp-312.svg"/>
        </div>
    )
}