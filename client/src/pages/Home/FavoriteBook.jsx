import React from "react";
import favBook from "../../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

const FavoriteBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img src={favBook} alt="" className="rounded md:w-10/12" />
      </div>
      <div className="space-y-6 md:w-1/2">
        <h2 className="text-5xl tracking-wide my-5 font-bold md:w-3/4 leading-snug font-alata">
          Find Your Favorite{" "}
          <span className="text-logotextcolor">Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6 font-belanosima">
          More Than 10,000 plus collections of books from all over the world
          with wide spectrum of genres that denfinently has your taste.
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold ">800+</h3>
            <p className="text-base font-alata">Book Listing</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold ">550+</h3>
            <p className="text-base font-alata">Regsiter User</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold ">1200+</h3>
            <p className="text-base font-alata">Pdf Downloaded</p>
          </div>
        </div>
        <Link to="/shop" className="block mt-8 font-alata">
          <button className="hover:bg-logotextcolor tracking-wider text-white font-semibold px-5 py-2 rounded bg-black transition-all duration-300 ">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavoriteBook;
