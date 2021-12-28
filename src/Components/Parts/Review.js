import React from "react";

const reviewData = [
  {
    imgurl: "./images/users-1.svg",
    name: "Abigail Anderseen",
    message:
      "It was really an unforgettale adventure. The company was just excellent, so did the guides. I met a lot of good friends there",
    location: "NUSA PENIDA, BALI",
  },
  {
    imgurl: "./images/users-2.svg",
    name: "Thomas Chuckweeze",
    message:
      "If i can turn back time when i was there, i would do it for sure. I am very grateful to this tour, and also i found my soul mate there.",
    location: "MALIOBORO STREET, YOGYAKARTA",
  },
  {
    imgurl: "./images/users-3.svg",
    name: "Lee Min Phtuong",
    message:
      "Going on this tour was my dream, and when i had such an opportunity, i was immensely happy. Can't wait for another trip...",
    location: "RAJA AMPAT, PAPUA",
  },
];

const Review = () => {
  return (
    <div className="p-20" id="review">
      {/* START: HEADING HEADING AND SUBHEADING */}
      <p className="text-sm text-gray-500">What our client say</p>
      <h2 className="text-2xl md:text-3xl text-black">Testimonials</h2>
      {/* END: TOURS HEADING AND SUBHEADING */}

      {/* START: REVIEEW CARD */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {reviewData.map((review) => {
          return (
            <div className="anim anim-left flex flex-col justify-between items-center shadow-lg md:shadow-xl rounded-lg p-4 md:p-8 text-center">
              <img
                src={review.imgurl}
                alt="user-1 data"
                className="w-24 md:w-40"
              />
              <h5 className="font-semibold md:mt-8 mt-4 mb-3">{review.name}</h5>
              <q className="border-b border-gray-400 pb-4 text-sm md:text-base">
                {review.message}
              </q>
              <p className="uppercase mt-4 text-sm md:text-base">
                Trip to {review.location}
              </p>
            </div>
          );
        })}
      </div>
      {/* END: REVIEEW CARD */}
    </div>
  );
};

export default Review;
