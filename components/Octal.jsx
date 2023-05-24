const Octal = () => {
    return (
      <div className="flex flex-wrap -mx-4 my-5">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Binary</div>
              <p className="text-gray-700 text-base"></p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Decimal</div>
              <p className="text-gray-700 text-base"></p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Hexa-Decimal</div>
              <p className="text-gray-700 text-base"></p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Octal;
  