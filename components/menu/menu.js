 const menu = () => {
    


    return ( 
        `<header class="w-full h-[60px] bg-linear-to-tr from-amber-800 via-amber-700 via-amber-600 to-amber-400 px-10 flex  items-center justify-between text-white relative z-1 md:z-0">
            <h1 class="font-bold text-3xl">Brand</h1>
            <ul id="nav" class="flex flex-col w-full -z-30 md:bg-transparent text-center perspective-[1000px] transform translate-y-[-100%] md:flex-row md:top-0 md:translate-x-0 md:left-0 transition-all duration-300 justify-center absolute bottom-30px left-0 md:flex md:gap-4 md:translate-y-0 ">

                <li class="bg-transparent py-4 md;py-0  md:w-fit md:static md:visible md:block origin-center border-cyan-400 border-t-[1px] md:border-0  absolute w-0  opacity-0 md:opacity-100 left-0 transform transition-all duration-300 invisible cursor-pointer">Home</li>
                <li class="bg-transparent py-4 md;py-0 md:opacity-100 md:w-fit md:static md:visible md:block origin-center border-cyan-400 border-t-[1px] md:border-0  absolute w-0  opacity-0  left-0 transform transition-all duration-300 invisible cursor-pointer">Product</li>
                <li class="bg-transparent py-4 md;py-0 md:opacity-100 md:w-fit md:static md:visible md:block origin-center border-cyan-400 border-t-[1px] md:border-0  absolute w-0  opacity-0  left-0 transform transition-all duration-300 invisible cursor-pointer">About</li>
                <li class="bg-transparent py-4 md;py-0 md:opacity-100 md:w-fit md:static md:visible md:block origin-center border-cyan-400 border-t-[1px] border-b-[1px] md:border-0  absolute w-0  opacity-0  left-0 transform transition-all duration-300 invisible cursor-pointer">Contact</li>
            </ul>
            <div class="flex gap-4 z-50">
                <a class="cursor-pointer border-[1px] bg-amber-400 text-black border-amber-400 py-1.5 px-4 rounded-md hover:bg-transparent hover:text-white transition-all duration-300" href="../../components/loginForm/loginForm.html">Sign In</a>

                <a class="cursor-pointer border-[1px] hover:bg-amber-400 hover:text-black border-amber-400 py-1.5 px-4 rounded-md transition-all duration-300" href="../../components/registrationForm/registrationForm.html">Sign Up</a>
            </div>
            <div id="humburger" class="relative size-[20px] z-50 cursor-pointer md:hidden">
                <span id="upLine" class="w-[25px] h-[2px] rounded-sm bg-white absolute tabsform top-0 transition-all duration-300"></span>
                <span id="midLine" class="w-[25px] h-[2px] rounded-sm bg-white absolute tabsform top-[50%] translate-y-[-50%] transition-all duration-300"></span>
                <span id="downLine" class="w-[25px] h-[2px] rounded-sm bg-white absolute tabsform bottom-0 transition-all duration-300"></span>
            </div>
        </header>`
     );
}
 
export default menu;