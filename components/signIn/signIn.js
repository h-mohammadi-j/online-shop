const signIn = () => {
    return ( 
        `<div class="w-full h-screen grid place-items-center p-4">

            <a class="absolute top-8 left-8 text-blue-500 font-bold" href="/" >Go Home</a>
            <form action="" class="w-full sm:w-[500px] p-6 rounded-lg shadow-[0_0_14px_rgba(0,0,0,0.5)] flex flex-col items-center ">

                <h1 class="text-3xl font-bold text-blue-500 py-8 border-gray-500 border-b-[1px] w-full text-center">Sign In</h1>
                <div class="w-full flex flex-col items-start p-4">
                    <label class="text-gray-700 font-bold" for="email">Email</label>

                    <input class="w-full border-gray-300 border-[1px] py-1.5 px-4 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.2)] mt-2.5" type="email" id="email" placeholder="Enter your email" />
            
                    <label class="text-gray-700 font-bold mt-4" for="password">Password</label>

                    <input class="w-full border-gray-500 border-[1px] py-1.5 px-4 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.2)] mt-2.5" type="password" id="password" placeholder="Enter your Password" />
                </div>
                <p class="text-gray-500 text-sm ">Don't have an account?<a class="text-blue-500 pl-1.5" href="../signUp/signUp.html">Sign Up</a></p>

                <input class="successBtn mt-4" type="submit" value="login" />
            </form>
        </div>`
     );
}
 
document.getElementById("signInRoot").innerHTML = signIn();