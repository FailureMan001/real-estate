import React from 'react'
import { Link } from "react-router-dom";
import bg_1 from "../../img/img-10.jpg";
import bg_2 from "../../img/img-11.jpg";
import img_00 from "../../img/img-12.jpg";

const Blog_03 = () => {
  return (
    <div className="container mx-auto -mt-3">
      <div className="section bg-blue-100">
        <div className="section-title">MINIMAL ROOM</div>
        <div className="section-subtitle">
          Exlore our rich and diverse portfolio
        </div>
        <div className="flex items-center justify-center bg-blue-100">
          <img src={img_00} alt="" className="shadow-xl" />
        </div>

        <div className="">
          <p className="text-2xl">
            <br />
            Laboris in eiusmod non eu do irure enim adipisicing. Non in non
            nostrud do ea laboris fugiat ut proident cupidatat consectetur
            eiusmod dolor. Fugiat minim fugiat tempor ea Lorem. Irure consequat
            do labore laboris laboris minim do nulla.
          </p>
          <br />
        </div>
      </div>
      <div className="section bg-blue-200 border-t-4 border-orange-500">
        <div className="section-title">Anathor</div>
        <div className="section-subtitle">
          Exlore our rich and diverse portfolio
        </div>
        <div className="w-full bg-blue-200">
          <div className="flex flex-wrap text-center text-white">
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="rounded overflow-hidden shadow-lg">
                <Link to="/blog-01" className="card-zoom">
                  <img
                    src={bg_1}
                    alt="Home"
                    className="card-zoom-image bg-beetle"
                  />
                </Link>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 hover:text-orange-400 cursor-pointer">
                    <Link to="/blog-01">Luxury Room</Link>
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block hover:-mt-1 bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    <Link to="/blog-01">READ MORE</Link>
                  </span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="rounded overflow-hidden shadow-lg">
                <Link to="/blog-02" className="card-zoom">
                  <img
                    src={bg_2}
                    alt="Home"
                    className="card-zoom-image bg-beetle"
                  />
                </Link>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 hover:text-orange-400 cursor-pointer">
                    <Link to="/blog-02">Kitchen Room</Link>
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block hover:-mt-1 bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    <Link to="/blog-02">READ MORE</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog_03