import React, { useState, useEffect, useDeferredValue } from "react";
import { URL } from "../utils";
import Card from "./Card";
import lens from "../assets/lens.png";
export default function Cards() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const deferredName = useDeferredValue(name);
  const handlechange = (event) => {
    setName(event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetch(URL + deferredName)
        .then((res) => res.json())
        .then(
          (result) => {
            setItems(result);
            setIsLoaded(true);
          },
          (error) => {
            setError(error);
            setIsLoaded(true);
          }
        );
    };
    fetchData();
  }, [deferredName]);

  if (error) {
    return <div>error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="wrapper">
          <input className="wrapper_input" onChange={handlechange} type="text"></input>
          <img src={lens} className="icon" />
        </div>
        <div className="cols">
          {items.map((item) => (
            <div className="cols-item" key={item.name}>
              <Card key={item.name} item={item} />
            </div>
          ))}
        </div>
      </>
    );
  }
}
