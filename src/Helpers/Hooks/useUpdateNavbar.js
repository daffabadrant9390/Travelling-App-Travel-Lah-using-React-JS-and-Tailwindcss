import { addClass, removeClass } from "../format/classNameModifier";
import { useLayoutEffect } from "react";

const useUpdateNavbar = () => {
  useLayoutEffect(() => {
    const navbar = document.querySelector(".navbar");
    const main = document.querySelectorAll(".main");
    console.log(main);

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);

      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          removeClass(navbar, "bg-transparent");
          addClass(navbar, "bg-gray-800");
        } else {
          addClass(navbar, "bg-transparent");
          removeClass(navbar, "bg-gray-800");
        }
      });
    });

    main.forEach((data) => {
      observer.observe(data);
    });

    return () => {};
  });
};

export default useUpdateNavbar;
