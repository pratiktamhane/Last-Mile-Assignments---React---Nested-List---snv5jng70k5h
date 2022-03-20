import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow"
          },
          {
            name: "Dewas"
          }
        ]
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit"
          },
          {
            name: "Berasia"
          }
        ]
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur"
          }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad"
          },
          {
            name: "Hirapur"
          }
        ]
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's"
          },
          {
            name: "Faizal khan's"
          }
        ]
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's"
          },
          {
            name: "Guddu bhaiya's"
          }
        ]
      }
    ]
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin"
          },
          {
            name: "Jalah"
          }
        ]
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati"
          },
          {
            name: "Leopard found in IIT Guwahati"
          }
        ]
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh"
          },
          {
            name: "Silchar"
          }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur"
          },
          {
            name: "Maner"
          }
        ]
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur"
          },
          {
            name: "Barachatti"
          }
        ]
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara"
          },
          {
            name: "Jale"
          }
        ]
      }
    ]
  }
];

function App() {
  const [state, setState] = useState("Madhya Pradesh");
  const [city, setcity] = useState();
  return (
    <div id="main">
      <select
        value={state}
        onChange={(e) => {
          setState(e.target.value);

          console.log(e.target.value);
        }}
      >
        {states.map((ele, index) => {
          let idn = index + 1;
          idn = `state${idn}`;
          console.log(idn);
          return <option id={idn}>{ele.name}</option>;
        })}
      </select>
      {state &&
        states.map((ele) => {
          if (ele.name === state) {
            return (
              <select
                value={city}
                onChange={(e) => {
                  setcity(e.target.value);
                }}
              >
                {ele.cities.map((ele, ind) => {
                  let idn = ind + 1;
                  idn = `city${idn}`;
                  return <option id={ind}>{ele.name}</option>;
                })}
              </select>
            );
          }
        })}
      {city &&
        states.map((ele) => {
          if (ele.name === state) {
            return ele.cities.map((ele) => {
              if (ele.name === city) {
                return (
                  <select>
                    {ele.towns.map((ele, index) => {
                      let idn = index + 1;
                      idn = `towns${idn}`;
                      return <option id={idn}>{ele.name}</option>;
                    })}
                  </select>
                );
              }
            });
          }
        })}
    </div>
  );
}

export default App;
