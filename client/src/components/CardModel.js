import React from "react";

const CardModel = ({ show, onHide, item }) => {
  if (!show) return null;
  return (
    <div onClick={onHide} className="modal">
      <div className="modal_Container">
        <button type="button" className="btn-close" onClick={onHide}>
            <span className="icon-cross"/>
            <span className="visually-hidden">Close</span>
        </button>
        <h1 className="modal_title">{item.name}</h1>
        <div className="modal_row">
          <div className="modal_column">
            <h3>Телефон:</h3>
            <h3>Почта:</h3>
            <h3>Дата приема:</h3>
            <h3>Должность:</h3>
            <h3>Подразделение:</h3>
          </div>
          <div className="modal_column right">
            <h3>{item.phone}</h3>
            <h3>{item.email}</h3>
            <h3>{item.hire_date}</h3>
            <h3>{item.position_name}</h3>
            <h3>{item.department}</h3>
          </div>
        </div>
        <div className="modal_footer">
            <h1>Дополнительная информация:</h1>
            <h3>Разработчики используют текст Lorem ipsum в качестве заполнителя макета страницы. Так как дополнительной информации в JSON нет,а адрес нигде не используется закинул его сюда: {item.address}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardModel;
