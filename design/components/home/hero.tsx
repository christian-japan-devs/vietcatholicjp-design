export default function Hero()
{
    return(
        <div className="sm:flex sm:flex-col sm:items-center">
        <div className="sm:justify-center pt-96 mx-2 mt-2 sm:pb-96 sm:pt-2 sm:px-12 lg:mx-12 md:max-w-3xl lg:max-w-6xl item-center bg-hero-index bg-cover bg-center border rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="backdrop-blur-sm py-2 rounded bg-white/10 sm:backdrop-blur-sm sm:bg-white/5 sm:rounded-2xl">
              <h5 className="mb-2 mt-2 px-12 sm:px-24 text-center text-2xl md:text-5xl font-bold text-gray-100 dark:text-white">Giáo đoàn công giáo Việt Nam tại Nhật</h5>
              <h5 className="mb-2 text-xl text-center text-gray-100 sm:text-3xl dark:text-gray-400">在日ヴィエトナム人・カトリック共同体</h5>
            </div>
        </div>
      </div>
    )
}