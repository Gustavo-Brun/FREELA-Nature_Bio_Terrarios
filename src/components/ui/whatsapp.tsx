"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = (): React.JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-4 md:bottom-14 md:right-14 text-white animate-bounce z-50">
      {isVisible && (
        <Link
          target="_blank"
          href={
            "https://wa.me/5521996178510?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+terr%C3%A1rios."
          }
          className="active:text-color-gray md:hover:text-color-gray"
        >
          <div className="flex text-center items-center">
            <FaWhatsapp
              style={{
                background: "linear-gradient(45deg, #25D366, #128C7E)",
                borderRadius: "50%",
                fontSize: "100px",
                padding: "10px"
              }}
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export { Whatsapp };
