import React, { useEffect, useState } from "react";
// import "./css/style.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Bangalore");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=10e363befb2d4920960192ff1bd5fe0e&units=metric`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson);
      console.log(resJson.name);
    };

    fetchApi();
  }, [search]);
  console.log(city);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="h-96 w-72 rounded-lg shadow-md bg-[#a5bbdd] relative overflow-hidden flex-wrap transform:translate3d(0,0,0) ">
          <div className="inputData mt-3">
            <h1 className="text-2xl font-bold mb-5">Wather Prediction</h1>
            <input
              type="search"
              className="text-center rounded-2xl p-1 "
              placeholder="Search"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          {!city ? (
            <>
              <p className="no_data"> Please Enter The Valid City Name</p>
              <div className="opacity-30 absolute top-[120%] left-[50%] bg-white size-[50rem] ml-[-25rem] mt-[-20rem] rounded-[43%] z-10"></div>
            </>
          ) : (
            <>
              {city.main && (
                <div className="absolute bottom-24 w-full h-[45%] z-40">
                  <h2 className="m-6 text-center text-5xl font-normal">
                    <i className="fa-solid fa-street-view"></i>
                    {search.charAt(0).toUpperCase() + search.slice(1)}
                  </h2>
                  <h4 className="mt-1 text-xl mb-5">{city.main.feels_like}℃</h4>
                  <p className="mt-1 text-xl">
                    Min:{city.main.temp_min} ℃el || Max:{city.main.temp_max}
                    ℃el
                  </p>
                </div>
              )}

              <div className="opacity-30 absolute top-[120%] left-[50%] bg-white size-[50rem] ml-[-25rem] mt-[-20rem] rounded-[43%] z-10"></div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
