const loginForm = () => {
  return `
    <div class="w-full h-screen flex items-center justify-center min-h-screen bg-linear-to-b from-amber-800 via-amber-600 via-amber-500 to-amber-200 overflow-hidden relative font-[Segoe UI,Tahoma,Geneva,Verdana,sans-serif]">

        <a class="fixed top-6 left-6 text-[rgba(255,255,255,0.5)] hover:text-white tranition-all duration-300 font-bold text-md cursor-pointer z-[100] " href="/">Back Home</a>

        <div class="relative w-full h-screen flex items-center justify-center p-6">

            

            <!-- Background Elements -->

            <div class="absolute bottom-0 z-[1] left-[5%] h-[300px] animation-sway ">
                <div class="absolute bottom-0 w-[20px] bg-amber-800 rounded-0 rounded-tl-[10px] rounded-tr-[10px] h-[80px] left-40px "></div>
                <div class="absolute bottom-[60px] w-[100px] h-[120px] bg-linear-[45deg] from-amber-800 via-amber-700 via-amber-600 to-amber-400 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-[0_0_20px_rgba(139,69,19,0.5)] bottom-[80px] left-[-40px] "></div>
            </div>
            <div class="absolute bottom-0 z-[1] right-[10%] h-[350px] animation-sway ">
                <div class="absolute bottom-0 w-[20px] bg-amber-800 rounded-0 rounded-tl-[10px] rounded-tr-[10px] h-[100px] left-[45px]"></div>
                <div class="absolute bottom-[60px] w-[100px] h-[120px] bg-linear-[45deg] from-amber-800 via-amber-700 via-amber-600 to-amber-400 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-[0_0_20px_rgba(139,69,19,0.5)] bottom-[100px] w-[120px] h-[140px] left-[-10px] "></div>
            </div>
            <div class="absolute bottom-0 z-[1] left-[15%] h-[250px] animation-sway ">
                <div class="absolute bottom-0 w-[20px] bg-amber-800 rounded-0 rounded-tl-[10px] rounded-tr-[10px] h-[70px] left-35px "></div>
                <div class="absolute bottom-[60px] w-[100px] h-[120px] bg-linear-[45deg] from-amber-800 via-amber-700 via-amber-600 to-amber-400 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-[0_0_20px_rgba(139,69,19,0.5)] bottom-[70px] w-[90px] h-[110px] left-[-35px]"></div>
            </div>
            <div class="absolute bottom-0 z-[1] right-[20%] h-[320px] animation-sway ">
                <div class="absolute bottom-0 w-[20px] bg-amber-800 rounded-0 rounded-tl-[10px] rounded-tr-[10px] h-[90px] left-40px "></div>
                <div class="absolute bottom-[60px] w-[100px] h-[120px] bg-linear-[45deg] from-amber-800 via-amber-700 via-amber-600 to-amber-400 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-[0_0_20px_rgba(139,69,19,0.5)] bottom-[90px] w-[110px] h-[130px] left-[-40px] "></div>
            </div>

            <div class="absolute bottom-0 left-0 w-full h-[100px] bg-linear-to-t from-amber-800 to-amber-700 clip-path-style z-[2] "></div>

            <div class="absolute bottom-[100px] z-[3] left-[30%] transform rotate-[-10deg] animation-chairMove">

                <div class="w-[60px] h-[40px] bg-amber-700 rounded-[5px_5px_0_0] absolute top-[-40px] "></div>

                <div class="w-[60px] h-[60px] bg-amber-800 rounded-[5px] relative"></div>
                </div>

            <div class="absolute bottom-[100px] z-[3] right-[35%] transform rotate-[-10deg] animation-chairMove">
                <div class="w-[60px] h-[40px] bg-amber-700 rounded-[5px_5px_0_0] absolute top-[-40px] "></div>

                <div class="w-[60px] h-[60px] bg-amber-800 rounded-[5px] relative"></div>
            </div>

            <div class="absolute top-0 left-0 w-full h-full pointer-events-none z-[1] " id="leaves-container"></div>

            <!-- Login Form -->

            <div class="relative w-full sm:w-[600px] p-[40px] bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-[20px] shadow-[0_15px_35px_rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.1)] border z-[10] animation-fadeIn  ">

                <h2 class="text-white text-3xl text-center mb-[30px] font-bold shadow-[0_2px_5px_rgba(0,0,0,0.2]">Login</h2>

                <form id="loginForm">

                    <div class="relative mb-[30px]">
                        <input class="w-full px-4 py-6 bg-[rgba(255,255,255,0.1)] border-none outline-none rounded-full text-white tracking-[1px] shadow-[0_5px_15px_rgba(0,0,0,0.05) transition-all duration-300 placeholder:text-[rgba(255,255,255,0.7)] focus:bg-[rgba(255,255,255,0.2)] transform focus:translate-y-[-5px] " type="text" placeholder="Username" required>
                        <i class="absolute right-[20px] top-[50%] transform translate-y-[-50%] text-white fas fa-user"></i>
                    </div>
                    <div class="relative mb-[30px]">
                        <input class="w-full px-4 py-6 bg-[rgba(255,255,255,0.1)] border-none outline-none rounded-full text-white tracking-[1px] shadow-[0_5px_15px_rgba(0,0,0,0.05) transition-all duration-300 placeholder:text-[rgba(255,255,255,0.7)] focus:bg-[rgba(255,255,255,0.2)] transform focus:translate-y-[-5px] " type="password" placeholder="Password" required>
                        <i class="absolute right-[20px] top-[50%] transform translate-y-[-50%] text-white fas fa-lock"></i>
                    </div>
                    <button type="submit" class="w-full p-4 bg-amber-800 border-none rounded-full text-white text-lg font-bold transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.2] hover:bg-amber-700 transorm hover:translate-y-[-5px] ">Sign In</button>
                    <div class="mt-[20px] text-center text-white ">
                        <p class="text-sm text-[rgba(255,255,255,0.8)]">Don't have an account? <a class="text-white text-lg decoration-0 transition-all duration-300 hover:underline hover:decoration-white hover:decoration-solid " href="../registrationForm/registrationForm.html">Sign Up</a></p>
                        <p><a href="#">Forgot Password?</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>    
    `;
};

document.getElementById("rootLoginForm").innerHTML = loginForm();
// Create falling leaves
function createLeaves() {
  const leavesContainer = document.getElementById("leaves-container");
  const leafCount = 30;

  const leafs = [
    "../../assets/1.png",
    "../../assets/2.png",
    "../../assets/3.png",
    "../../assets/4.png",
    "../../assets/5.png"
  ]

  for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");

    // Random properties for each leaf
    const size = Math.random() * 50 + 20;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 10 + 5;
    const animationDelay = Math.random() * 5;
    const hue = Math.random() * 30 + 20; // Autumn colors

    leaf.style.width = `${size}px`;
    leaf.style.height = `${size}px`;
    leaf.style.left = `${left}vw`;
    leaf.style.backgroundImage = `url(${leafs[Math.floor(Math.random() * leafs.length)]})`;
    leaf.style.animationDuration = `${animationDuration}s`;
    leaf.style.animationDelay = `${animationDelay}s`;
    
    // leaf.style.backgroundImage = `linear-gradient(45deg, hsl(${hue}, 100%, 50%), hsl(${
    //   hue - 10
    // }, 100%, 40%))`;

    leavesContainer.appendChild(leaf);
  }
}

// Form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this.querySelector('input[type="text"]').value;
  const password = this.querySelector('input[type="password"]').value;

  const defaultUserName = "Hassan";
  const defaultPassword = "Hassan123";

  // Simple validation
  if (username === defaultUserName && password === defaultPassword) {
    // alert(`Welcome ${username}! Find Awesome projects on darkcssweb`);
    window.location.href = "../dashbord/dashboard.html"
    // In a real application, you would send this data to a server
  } else {
    alert("Username or password is incorrect.");
  }
});

window.onload = function () {
  createLeaves();
};

export default loginForm;
