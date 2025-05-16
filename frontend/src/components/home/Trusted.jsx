import React from "react";
import Container from "../common/Container";
import { TOTAL_SUMMARY, TRUSTED_DATA } from "@/lib/utils/data";
import RevealWrapper from "../common/RevealWrapper";

const Trusted = ({ className = "" }) => {
  return (
    <div className={`py-[45px] md:py-16 bg-paper ${className}`}>
      <Container>
        <RevealWrapper>
          <h2 className="text-center text-base xs:text-lg font-medium text-text-secondary relative after:absolute after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-[#FFD65A] after:from-30% after:to-[#FFB84C] after:-bottom-[12px] after:left-[50%] after:-translate-x-[50%]">
            Trusted By Industry leaders
          </h2>
          <div className="mt-10 max-w-[600px] mx-auto">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {TRUSTED_DATA.map((data, i) => (
                <div
                  key={i}
                  className="bg-white size-[70px] xs:size-20 rounded-full border border-solid border-border flex items-center justify-center"
                >
                  <img
                    src={data.src}
                    className="object-contain size-[35px] xs:size-10"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <div className="flex  justify-center flex-wrap gap-8">
              {TOTAL_SUMMARY.map((sum, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 justify-between h-full"
                >
                  <h3 className="text-lg xs:text-xl font-bold text-text-primary">
                    {sum.title}
                  </h3>
                  <p className="text-text-secondary text-center text-sm xs:text-base whitespace-pre-wrap">
                    {sum.paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </Container>
    </div>
  );
};

export default Trusted;
