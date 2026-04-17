const loading = () => {

    
    return ( 
        `
            <div id="loading" class="w-full h-screen bg-radial from-amber-200 via-amber-300 via-amber-500 via-amber-700 to-amber-800 grid place-items-center overflow-hidden">
                <div class="w-[300px] h-[300px] flex items-center justify-center gap-2 loading-container">
                    <div class="w-[10px] h-[50px] bg-linear-to-t from-amber-800 via-amber-700 via-amber-600 to-amber-400 rounded-[4px] realtive origin-center-center  "></div>
                    <div class="w-[10px] h-[50px] bg-linear-to-t from-amber-800 via-amber-700 via-amber-600 to-amber-400 rounded-[4px] realtive origin-center-center  "></div>
                    <div class="w-[10px] h-[50px] bg-linear-to-t from-amber-800 via-amber-700 via-amber-600 to-amber-400 rounded-[4px] realtive origin-center-center  "></div>
                    <div class="w-[10px] h-[50px] bg-linear-to-t from-amber-800 via-amber-700 via-amber-600 to-amber-400 rounded-[4px] realtive origin-center-center  "></div>
                </div>
            </div> 
        `
        
     );
}
 
export default loading;