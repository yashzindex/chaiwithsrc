import React from "react";
import Image from "next/image";
import C1 from "../../../../public/images/C1.png";
import C2 from "../../../../public/images/C2.png";
import C3 from "../../../../public/images/C3.png";
import C4 from "../../../../public/images/C4.png";
import C5 from "../../../../public/images/C5.png";
import C6 from "../../../../public/images/C6.svg";
import C7 from "../../../../public/images/C7.png";
import C8 from "../../../../public/images/C8.svg";
import C9 from "../../../../public/images/C9.svg";
import C10 from "../../../../public/images/C10.png";
const page = () => {
  const imageSources = [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10];

  return (
    <>
      <div
        id="client"
        className="relative my-10 sm:my-12 lg:my-14 xl:my-16 xxl:my-20 2xl:my-[120px]"
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-[1400px] mx-auto">
            <div className="reguler-title mb-6 lg:mb-10 2xl:mb-12 text-center lg:enter">
              <h2>Client</h2>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-between items-center">
              {imageSources.map((src, index) => (
                <>
                  <div
                    key={index}
                    className="flex items-center justify-center h-auto w-full max-w-[264px] sm:basis-1/2 lg:basis-1/3 xl:basis-1/3 xxl:basis-1/4 2xl:basis-1/5 py-6 sm:py-8 lg:py-6 xxl:py-6"
                  >
                    <Image
                      loading="lazy"
                      src={src}
                      alt={`c${index + 1}`}
                      className="h-fit w-fit max-w-full block text-center max-h-[50px] xxl:max-h-[80px]"
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
