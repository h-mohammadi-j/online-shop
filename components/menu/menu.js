 const menu = () => {
    return ( 
        `<header class="w-full h-[60px] bg-gray-800 px-10 flex items-center justify-between text-white">
            <h1 class="font-bold text-3xl ">Brand</h1>
            <ul class="flex justify-center gap-6">
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
                <li>link 4</li>
            </ul>
            <div class="flex gap-4">
                <a href="#">Sign In</a>
                <a href="#">Sign Up</a>
            </div>
        </header>`
     );
}
 
export default menu;