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

const lights = ["green", "yellow", "red"];
const N = 2;

export default function TrafficLight() {
  const [state, setState] = useState("green");

  useEffect(() => {
    const t = setInterval(() => {
      setState((prevState) => {
        const index = lights.findIndex((l) => {
          return l === prevState;
        });
        return lights[index === N ? 0 : index + 1];
      });
    }, 20000 / 3);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={config[state].container} className={styles.container}>
      <div style={config[state].border} className={styles.light}>
        {config[state].light.map((style, index) => (
          <div key={index} style={style}></div>
        ))}
      </div>
      <h1 style={config[state].text}> The light is {state} </h1>
    </div>
  );
}
