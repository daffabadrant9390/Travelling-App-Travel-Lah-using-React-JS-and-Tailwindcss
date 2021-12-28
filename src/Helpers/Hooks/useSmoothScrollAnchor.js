import { useLayoutEffect } from "react";

const useSmoothScrollAnchor = () => {
  useLayoutEffect(() => {
    const anchorBtns = document.querySelectorAll("a[href^='#']");

    anchorBtns.forEach((anchorBtn) => {
      anchorBtn.addEventListener("click", function (btn) {
        btn.preventDefault();

        // If the browse-the-room section is exist in the page, change scrollView behaviour to smooth
        if (
          document.getElementById(this.getAttribute("href").replace("#", ""))
        ) {
          document
            .getElementById(this.getAttribute("href").replace("#", ""))
            .scrollIntoView({
              behavior: "smooth",
            });
        }
      });
    });

    return () => {};
  });
};

export default useSmoothScrollAnchor;
