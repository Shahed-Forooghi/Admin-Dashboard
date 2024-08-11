import { LineChart, Line, XAxis, Tooltip } from "recharts";
import { products, productDates } from "../../../data";
import {  useState } from "react";
import { useParams } from "react-router-dom";
import { MdPublish } from "react-icons/md";

export default function Product() {
  const [productsList] = useState(products);
  const productID = useParams();

  let filteredProduct = productsList.filter((product) => {
    return product.id === +productID.productID;
  });


  return (
    <div className="w-[80%] m-5">
      <h1 className="font-bold text-2xl">{filteredProduct[0].name} Laptop</h1>
      <div className="flex mx-5 items-center justify-between *:mt-4 *:shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)] *:p-4 *:w-[500px] *:h-[200px]">
        <div>
          <span className="mb-4 inline-block font-bold">Sale in Month</span>
          <LineChart width={450} height={100} data={productDates}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <XAxis dataKey="name" />
            <Tooltip />
          </LineChart>
        </div>
        <div className=" *:flex *:items-center *:justify-between *:font-bold *:text-sm">
          <div>
            <img src={`../${filteredProduct[0].img}`} alt="Product img" className="w-[50px] rounded-full h-[50px]" />
            <span>{filteredProduct[0].name} Laptop</span>
          </div>
          <div>
            <span>ID :</span>
            <span>{filteredProduct[0].id}</span>
          </div>
          <div>
            <span>Name</span>
            <span>{filteredProduct[0].name}</span>
          </div>
          <div>
            <span>Sales :</span>
            <span>{filteredProduct[0].price}</span>
          </div>
          <div>
            <span>Active : </span>
            <span>{filteredProduct[0].active}</span>
          </div>
          <div>
            <span>In Stock : </span>
            <span>{filteredProduct[0].inStock}</span>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-2xl mt-4">Edit Product</h1>
      <div className="shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)] mt-5 mx-5 p-5">
        <form className="flex justify-between items-center w-full" action="">
            <div className="flex flex-col items-start">
                <label className="text-sm text-gray-400 font-bold mb-2" htmlFor="">Product Name</label>
                <input className="border-gray-400 border-b text-sm outline-none" type="text" placeholder="Asus Laptop"/>

                <label className="text-sm text-gray-400 font-bold mt-2 " htmlFor="">In Stock</label>
                <select className="w-[200px] outline-none border border-gray-600 text-sm" name="" id="inStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

                <label className="text-sm text-gray-400 font-bold mt-2" htmlFor="">Active</label>
                <select className="w-[200px] outline-none border border-gray-600 text-sm" name="" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="flex flex-col items-center justify-between gap-4">
                <div className="flex items-center justify-between gap-4">
                    <img className="w-[100px]" src="../img/asus.jfif" alt="" />
                    <label htmlFor="">
                        <MdPublish className="text-2xl" />
                    </label>
                    <input type="file" className="hidden" />
                </div>
                <button className="bg-blue-900 text-white w-[120px] rounded-sm border border-black">Edit</button>
            </div>
        </form>
      </div>
    </div>
  );
}
