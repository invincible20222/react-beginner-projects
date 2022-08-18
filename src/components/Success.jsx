import React from "react";
import successImg from "../assets/success.svg";

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src={successImg} alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Назад
      </button>
    </div>
  );
};
