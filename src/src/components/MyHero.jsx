// import Navbar from "./Navbar";

const MyHero = () => {
  return (
    <>
      <div className=" text-royalblue [background:linear-gradient(107.52deg,_#fefefe,_#407bff)]  overflow-hidden self-stretch relative  min-h-[850px] w-full pt-20 pb-10 px-5 ">
        <img
          className="absolute top-0 right-0 -z-5 overflow-hidden opacity-1 mix-blend-darken"
          alt=""
          src="/image3.png"
        />
        <img
          className="absolute bottom-6 left-0 -z-5 overflow-hidden opacity-1 mix-blend-darken"
          alt=""
          src="/image2.png"
        />
        {/* Nav Container */}
        <div className="w-11/12 m-auto flex   left-0 right-0 h-[150px] bg-white z-10 absolute">
          <div className="flex px-4 flex-row items-center justify-between w-full">
            <div className="font-bold text-[35px]  font-inter">Facebook</div>
            <div className="w-1/2">
              <nav>
                <ul className="flex items-center justify-between font-inter">
                  <li>
                    <a href="#" className="text-black font-[400px] text-xl">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-darkgray font-[400px] text-xl">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-darkgray font-[400px] text-xl">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-darkgray font-[400px] text-xl">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="rounded-8xs bg-blueviolet flex flex-row items-center justify-center py-[23px] px-[61px] text-center text-white">
              <a href="#" className=" font-medium text-xl">
                Book a Demo
              </a>
            </div>
          </div>
        </div>
        {/* hero section */}
        <div className="w-11/12 m-auto flex flex-col md:flex-row  mt-60 ">
          {/* left Section */}
          <div className="md:w-1/2 flex flex-col">
            <div className="justify-center [background:linear-gradient(107.52deg,_#fefefe,_#407bff)] items-start flex w-[386px] max-w-full flex-col px-3.5 py-2.5 self-start">
              <div className="items-start self-stretch flex justify-between md:gap-4">
                <div className="bg-zinc-300 self-stretch flex w-5 h-6 flex-col grow shrink-0 basis-auto" />
                <div className="text-white md:text-xl md:leading-6 md:tracking-[5.5px] uppercase self-center md:max-w-[347px] grow shrink-0 basis-auto my-auto">
                  Leads Management
                </div>
              </div>
            </div>
            <div className="text-blue-500 md:text-[65px] md:font-bold leading-[77.025px] self-start max-md:max-w-full max-md:text-4xl">
              <span className="text-slate-700">Welcome to your </span>
              <span className="text-blue-500">Facebook.</span>
            </div>
            <div className="text-neutral-600 text-lg leading-8 md:mt-10 max-md:max-w-full">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </div>
            <div className="justify-center items-center bg-indigo-600 flex w-[185px]  flex-col mt-10 px-5 py-6 rounded-md self-start">
              <div className="items-start self-center flex w-full md:gap-2.5">
                <div className="text-white text-center text-xl font-medium md:leading-6 ">
                  Try It Now
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/92edd887-e0f7-45ad-a26a-c4543d2b28ff?"
                  className="aspect-[1.06] object-contain object-center w-[17px] fill-white overflow-hidden self-center max-w-full my-auto"
                />
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="md:w-1/2 mt-4 md:mt-0 flex justify-end">
            <img src="/image1.png" alt="" loading="lazy" />
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="bg-white md:min-h-[500px] min-h-[400px] overflow-hidden relative">
        <img
          className="absolute top-36 left-8 md:top-3 md:left-20 overflow-hidden opacity-1 "
          alt=""
          src="/vector2.svg"
        />
        <img
          className="absolute top-52 right-20 md:top-[50%] md:left-[70%] overflow-hidden opacity-1 "
          alt=""
          src="/vector2.svg"
        />
        <img
          className="absolute hidden md:top-3 md:right-20 overflow-hidden opacity-1 "
          alt=""
          src="/vector2.svg"
        />
        <img
          className="absolute bottom-10 left-9 md:bottom-28 md:right-20 overflow-hidden opacity-1 "
          alt=""
          src="/vector2.svg"
        />
        <img
          className="absolute hidden md:bottom-32 md:left-36 overflow-hidden opacity-1 "
          alt=""
          src="/vector2.svg"
        />
        <img
          className="absolute bottom-36 left-[500px] overflow-hidden opacity-1 "
          alt=""
          src="/vector2.svg"
        />
        <img
          className="absolute top-28 right-36 overflow-hidden opacity-1 "
          alt=""
          src="/vector2.svg"
        />
        <img
          className="absolute top-80 right-96 overflow-hidden opacity-1 "
          alt=""
          src="/vector2.svg"
        />
        <h1 className="text-blue-500 text-center text-[40px] mt-11 font-bold leading-[53.325px] max-md:text-4xl">
          Why Choose Our Waxy <br /> Management Software
        </h1>
      </div>

      {/* another Footer */}
      <div className="w-[80%] mx-auto flex flex-col gap-10 relative min-h-full">
        <img
          className="absolute hidden md:block m-auto left-0 top-40 right-0 -z-20 overflow-hidden opacity-1 "
          alt=""
          src="/line.png"
        />
        <img
          className="absolute left-[-300px] top-[900px] right-0 overflow-hidden opacity-1 "
          alt=""
          src="/plant1.svg"
        />
        <img
          className="absolute left-[-350px] top-[1850px] right-0 overflow-hidden opacity-1 "
          alt=""
          src="/plant1.svg"
        />
        <img
          className="absolute right-[-450px] top-[2250px]  overflow-hidden opacity-1 "
          alt=""
          src="/plant2.svg"
        />
        {/* --------- */}
        <div className="flex items-center ">
          {/* left */}
          <div className="w-1/2 flex-col flex justify-start gap-3">
            <h1 className="text-blue-500 text-[40px] font-semibold ">
              Teamwork Made Easier
            </h1>
            <p className="text-black text-xl leading-7 w-[70%]">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit Neque porro quisquam est qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit
            </p>
          </div>
          {/* right */}
          <div className="w-1/2 flex justify-end">
            <img className=" " alt="" src="/mask-group.svg" />
          </div>
        </div>
        {/* ---------- */}
        <div className="flex flex-row-reverse items-center mt-10">
          {/* left */}
          <div className="w-1/2 flex-col flex justify-end gap-3">
            <h1 className="text-blue-500 text-[40px] font-semibold ">
              Budget Friendly
            </h1>
            <p className="text-black text-xl leading-7 w-[70%]">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit Neque porro quisquam est qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit
            </p>
          </div>
          {/* right */}
          <div className="w-1/2 flex justify-start">
            <img className="ml-24 " alt="" src="/icon.svg" />
          </div>
        </div>
        {/* --------- */}
        <div className="flex items-center mt-16">
          {/* left */}
          <div className="w-1/2 flex-col flex justify-start gap-3">
            <h1 className="text-blue-500 text-[40px] font-semibold ">
              Higher sales productivity from all your teams
            </h1>
            <p className="text-black text-xl leading-7 w-[70%]">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </p>
          </div>
          {/* right */}
          <div className="w-1/2 flex mr-5 justify-end">
            <img className=" " alt="" src="/group-59.svg" />
          </div>
        </div>
        {/* ------------------- */}
        <div className="flex flex-row-reverse items-center mt-24">
          {/* left */}
          <div className="w-1/2 flex-col flex justify-end gap-3">
            <h1 className="text-blue-500 text-[40px] font-semibold ">
              Grows as Your Business Grows
            </h1>
            <p className="text-black text-xl leading-7 w-[70%]">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velitNeque porro quisquam est qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit
            </p>
          </div>
          {/* right */}
          <div className="w-1/2 flex justify-start">
            <img className="ml-24 " alt="" src="/group-10.svg" />
          </div>
        </div>
        {/* ------------------ */}
        <div className="flex items-center mt-16">
          {/* left */}
          <div className="w-1/2 flex-col flex justify-start gap-3">
            <h1 className="text-blue-500 text-[40px] font-semibold ">
              From leads to successful sales{" "}
            </h1>
            <p className="text-black text-xl leading-7 w-[70%]">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </p>
          </div>
          {/* right */}
          <div className="w-1/2 flex  justify-end">
            <img className=" md:ml-12" alt="" src="/group-9.svg" />
          </div>
        </div>
        {/* ----------------------------- */}
        <div className="flex flex-row-reverse items-center mt-24">
          {/* left */}
          <div className="w-1/2 flex-col flex justify-end gap-3">
            <h1 className="text-blue-500 text-[40px] font-semibold ">
              Best Support which you desire for
            </h1>
            <p className="text-black text-xl leading-7 w-[70%]">
              If you are looking for the best support, you have come to the
              right place. We are here to provide you with the assistance you
              need
            </p>
          </div>
          {/* right */}
          <div className="w-1/2 flex justify-start">
            <img className="ml-24 " alt="" src="/frame1.svg" />
          </div>
        </div>
      </div>
      {/* Fotter Button */}
      <div>
        <div className="justify-center mx-auto items-center mt-10 bg-indigo-600 flex w-[185px]  flex-col mt-10 px-5 py-6 rounded-md self-start">
          <div className="items-start self-center flex w-full gap-2.5">
            <div className="text-white text-center text-xl font-medium leading-6 ">
              Try It Now
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92edd887-e0f7-45ad-a26a-c4543d2b28ff?"
              className="aspect-[1.06] object-contain object-center w-[17px] fill-white overflow-hidden self-center max-w-full my-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyHero;
