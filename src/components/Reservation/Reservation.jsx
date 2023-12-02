import React from "react";
import "./Reservation.css";

const Reservation = () => {
  return (
    <div className="my-28">
      <div className="md:flex items-center justify-between">
        <div className="mx-auto p-5">
          <h1 className="text-center font-lato text-5xl lg:text-7xl mb-20 text-brown font-bold ">
            Reservation
          </h1>
          <div>
            <div>
              <div>
                <input
                  type="datetime-local"
                  name=""
                  id=""
                  className="p-2 input"
                />
                <input type="time" name="" id="" className="p-2 input" />
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  className="p-2 input"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="p-2 input"
                  placeholder="Last Name"
                />
              </div>
              <div className="mt-5">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Write Your text"
                ></textarea>
              </div>
              <div className="text-center md:text-left">
                <button className="btn btn-wide bg-brown text-lg hover:bg-orange-400 ">
                  Reserve Your Desk
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 p-2 md:p-0">
          <img
            src="/images/reservation.jpg"
            className="w-full object-cover h-[700px] "
            alt="reservation.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
