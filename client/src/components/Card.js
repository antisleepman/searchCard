import React, { useState } from "react";
import CardModel from "./CardModel";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
const Card = ({ item }) => {
  const [cardVisible, SetCardVisible] = useState(false);
  return (
    <>
      <div className="card" onClick={() => SetCardVisible(true)}>
          <h1 className="card_title">{item.name}</h1>
          <div className="card_block">
            <div className="card_block_item">
              <img src={phone} className="card_block_item_icon" />
              <h2 className="card_block_item_text">{item.phone}</h2>
            </div>
            <div className="card_block_item">
              <img src={email}  className="card_block_item_icon"/>
              <h2 className="card_block_item_text">{item.email}</h2>
            </div>
          </div>
        </div>
      <CardModel
        show={cardVisible}
        item={item}
        onHide={() => SetCardVisible(false)}
      />
    </>
  );
};

export default Card;
