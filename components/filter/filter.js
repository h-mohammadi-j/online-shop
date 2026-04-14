const filter = () => {
  return ` <div class="w-full bg-gray-300 flex  flex-col md:flex-row items-center justify-center gap-2.5 py-4 px-12">
            <input class="bg-gray-100 py-2 px-4 border rounded-md w-full " type="text" placeholder="Search product..." />

            <div class="w-full flex justify-center gap-4  ">
                <select name="" id="" class="border rounded-md w-full py-2 bg-gray-100">
                    <option value="">Select Category</option>
                    <option value="all">All Category</option>
                    <option value="furniture">Furniture</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                </select>
                <select name="" id="" class="border rounded-md w-full py-2 bg-gray-100">
                    <option value="">Select Prices</option>
                    <option value="all">All Price</option>
                    <option value="low">TO 250$</option>
                    <option value="medium">251$ To 750$</option>
                    <option value="heighest">751$ To Up</option>
                </select>
            </div>
        </div>`;
};

export default filter;
