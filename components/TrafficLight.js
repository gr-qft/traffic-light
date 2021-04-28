import { useState, useEffect } from "react";
import styles from "./TrafficLight.module.css";

const config = {
  green: {
    light: [
      {},
      {},
      { backgroundColor: "#00D12E", boxShadow: "0px 0px 10px #00D12E" },
    ],
    text: {
      color: "#005012",
    },
    border: {
      borderColor: "#005012",
    },
    container: {
      backgroundColor: "#DDFFE4",
      borderColor: "#00D12E",
    },
  },
  yellow: {
    light: [
      {},
      { backgroundColor: "#FFCD1B", boxShadow: "0px 0px 10px #FFCD1B" },
      {},
    ],
    text: {
      color: "#8E7004",
    },
    border: {
      borderColor: "#8E7004",
    },
    container: {
      backgroundColor: "#FFF2C5",
      borderColor: "#FFCD1B",
    },
  },
  red: {
    light: [
      { backgroundColor: "#FF1B1B", boxShadow: "0px 0px 10px #FF1B1B" },
      {},
      {},
    ],
    text: {
      color: "#930101",
    },
    border: {
      borderColor: "#930101",
    },
    container: {
      backgroundColor: "#FFD3D3",
      borderColor: "#FF1B1B",
    },
  },
};

// We want the order to be green -> yellow -> red
const lights = ["green", "yellow", "red"];

export default function TrafficLight({ initialState = "red" }) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const t = setInterval(() => {
      setState((prevState) => {
        const index = lights.findIndex((l) => {
          return l === prevState;
        });
        return lights[index === lights.length - 1 ? 0 : index + 1];
      });
    }, 20000 / 3);
    return () => clearInterval(t);
  }, []);

  const properties = config[state];
  return (
    <div style={properties.container} className={styles.container}>
      <div style={properties.border} className={styles.light}>
        {properties.light.map((style, index) => (
          <div key={index} style={style}></div>
        ))}
      </div>
      <h1 style={properties.text}> The light is {state} </h1>
    </div>
  );
}
