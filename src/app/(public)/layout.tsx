import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <div className="flex h-screen bg-white ">
        <div className="hidden w-full bg-gray-900 md:flex justify-center items-center">
          <div className="w-[8rem] h-[8rem] bg-white rounded-[50%] flex justify-center items-center ">
            <svg
              className="w-[6rem] h-[6rem] "
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 4.5L6 12L15 19.5"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="6"
                  y1="4.5"
                  x2="15"
                  y2="19.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7C3AED" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="w-full flex flex-col items-center m-auto p-4 max-w-[560px] overflow-auto">
          <div className="w-full my-auto max-w-[28rem]">{children}</div>
        </div>
      </div>
    </main>
  );
}
