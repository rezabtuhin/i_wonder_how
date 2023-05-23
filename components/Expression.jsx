import Link from 'next/link'
import React from 'react'

const Expression = () => {
  return (
    // <div className=' w-full flex justify-between'>
    //     <Link href="/">
    //     <div class="max-w-sm rounded overflow-hidden shadow-lg">
    //         <div class="px-6 py-4">
    //             <div class="font-bold text-xl mb-2">Card Title</div>
    //             <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, maiores!</p>
    //         </div>
    //         <div class="px-6 py-4">
    //             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
    //             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag2</span>
    //         </div>
    //     </div>

    //     </Link>
        
    // </div>

    <div class="flex flex-wrap -mx-4">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Infix to Postfix</div>
                    <p class="text-gray-700 text-base">Convert infix expression into postfix expression</p>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Infix to Prefix</div>
                    <p class="text-gray-700 text-base">Convert infix expression into prefix expression</p>
                </div>
            </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Postfix to Infix</div>
                    <p class="text-gray-700 text-base">Convert postfix expression into infix expression</p>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Prefix to Infix</div>
                    <p class="text-gray-700 text-base">Convert Prefix expression into infix expression</p>
                </div>
            </div>
        </div>
        
  
    </div>

  )
}

export default Expression