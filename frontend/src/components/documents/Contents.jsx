import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import styles from "./contents.module.css";


const Contents = () => {
  const { document: aiDoc } = useSelector((state) => state.content);


  return (
    <main className="py-4 pl-1 xs:pl-4 h-[500px] overflow-auto order-1 sm:order-2">
      {!aiDoc ? (
        <section className="h-full flex flex-col items-center justify-center gap-1">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-16"
          >
            <path
              className="fill-[#FFD65A]"
              d="M13.7087 3.30729C12.6049 2.90591 11.395 2.90591 10.2913 3.30729L3.24266 5.87042C1.48732 6.50872 1.4873 8.99128 3.24266 9.62959L10.2913 12.1927C11.395 12.5941 12.6049 12.5941 13.7087 12.1927L20.7573 9.62959C22.5126 8.99128 22.5126 6.50873 20.7573 5.87042L13.7087 3.30729Z"
            />
            <path
              className="fill-[#e6bd4d]"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.05781 12.395C2.24283 11.8746 2.81467 11.6028 3.33504 11.7878L11.33 14.6304C11.7634 14.7845 12.2367 14.7845 12.67 14.6304L20.665 11.7878C21.1854 11.6028 21.7572 11.8746 21.9422 12.395C22.1273 12.9154 21.8554 13.4872 21.335 13.6722L13.3401 16.5149C12.4733 16.8231 11.5268 16.8231 10.66 16.5149L2.66502 13.6722C2.14465 13.4872 1.87279 12.9154 2.05781 12.395Z"
            />
            <path
              className="fill-[#FFD65A]"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.05781 16.645C2.24283 16.1246 2.81467 15.8528 3.33504 16.0378L11.33 18.8804C11.7634 19.0345 12.2367 19.0345 12.67 18.8804L20.665 16.0378C21.1854 15.8528 21.7572 16.1246 21.9422 16.645C22.1273 17.1654 21.8554 17.7372 21.335 17.9222L13.3401 20.7649C12.4733 21.0731 11.5268 21.0731 10.66 20.7649L2.66502 17.9222C2.14465 17.7372 1.87279 17.1654 2.05781 16.645Z"
            />
          </svg>
          <p className="font-medium text-text-secondary">
            Fill in the form and type generate
          </p>
        </section>
      ) : (
        <div
          id={styles.content}
          dangerouslySetInnerHTML={{
            __html: aiDoc,
          }}
        ></div>
      )}
    </main>
  );
};

export default Contents;
