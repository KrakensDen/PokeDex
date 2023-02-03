import * as S from "./Button.styles";
import React, { useEffect, useState } from "react";

/**
 Props:
 - color = any built in html color will work and will change the background color of the main element * also will
 automatically change the foreground color to the respective contrasted color.
 (i.e. color={'white'} means the foreground will be black to allow for easy reading)
 - glow = Turns the button into a neon sign version of the button with hover effects.
 - activated = turns the button into one that keeps a bottom border when clicked on, but it doesn't keep it when
 clicked off if you want it to keep the border persistent then the href value of the button will tell it to
 keep the border when it's on that route.
 **/

const toggleCurrentActiveButton = () => {
  // * Get the Element that has the active attribute
  const activeButton = document?.querySelector("[active]");

  // * if there is an active button then toggle the active attribute off
  if (activeButton) {
    activeButton.toggleAttribute("active", false);
  }
};

const rippleEffect = (btn, event) => {
  // * grab the x and y position of the mouse click for the ripple effect
  let x = event.clientX - event.target.offsetLeft;
  let y = event.clientY - event.target.offsetTop;

  let ripples = document?.createElement("span");

  ripples.style.left = x + "px";
  ripples.style.top = y + "px";

  if (!btn.querySelector("span")) {
    btn.appendChild(ripples);
  }

  // * setting the timeout for the ripple
  setTimeout(() => {
    ripples.remove();
  }, 700);
};

function Button({ color, children, ...props }) {
  //? Setting the default colors for the button before page hydration
  const [pageURL, setPageURL] = useState("");

  //? Once the Page Loads The colors are set correctly
  useEffect(() => {
    setPageURL(window.location.pathname);
    const buttons = document?.querySelectorAll(".btn-default");
    buttons.forEach((btn) => {
      if (btn.attributes["href"]?.value === pageURL) {
        btn.setAttribute("active", "true");
      }
      // * Adding an event listener on click to add a span that expands and removes
      btn.addEventListener("click", (e) => {
        // * Toggle the current active button to off
        toggleCurrentActiveButton();

        // * Add the active Attribute to the currently clicked button
        btn.toggleAttribute("active", true);

        // * Add the Ripple Effect to the button
        rippleEffect(btn, e);
      });
    });
  }, []);

  if (typeof window !== "undefined") {
    return (
      <S.Button route={pageURL} color={color ?? "#23a9f2"} {...props}>
        <p>{children}</p>
      </S.Button>
    );
  } else {
    return null;
  }
}

export default Button;
