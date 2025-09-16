import { useState } from "react";

import { useAuthStore } from "../../../features/auth/useAuthStore";

import Modal from "../Modal/Modal";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";

import "./AuthModal.scss";

export default function AuthModal({ isOpen, onClose }) {
  const { register, login, errorLog, errorReg } = useAuthStore();

  const [activeTab, setActiveTab] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const tabs = ["Вход", "Регистрация"];
  const currentIndex = hoverIndex !== null ? hoverIndex : activeTab;

  const [loginForm, setLoginForm] = useState({
    logEmail: "",
    logPassword: "",
  });

  const [registerForm, setRegisterForm] = useState({
    regName: "",
    regEmail: "",
    regPassword: "",
    regPasswordRepeat: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(loginForm.email, loginForm.password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.passwordRepeat) {
      alert("Пароли не совпадают");
      return;
    }
    register(registerForm.name, registerForm.email, registerForm.password);
  };

  return (
    <Modal className="modal-auth" isOpen={isOpen} onClose={onClose}>
      <div className="modal-auth__tabs">
        <div
          className="modal-auth__tabs-highlight"
          style={{
            transform: `translateX(${currentIndex * 100}%)`,
          }}
        ></div>
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`modal-auth__tab ${activeTab === i ? "is-active" : ""}`}
            onClick={() => setActiveTab(i)}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="modal-auth__blocks">
        <div className={`modal-auth__block ${activeTab == 0 ? "active" : ""}`}>
          <form onSubmit={handleLogin} action="post" className="modal-auth__form">
            <Input
              className="modal-auth__input"
              type="email"
              name="logEmail"
              id="logEmail"
              placeholder="Email"
              value={loginForm.email}
              onChange={handleLoginChange}
              required={true}
            />
            <Input
              className="modal-auth__input"
              type="password"
              name="logPassword"
              id="logPassword"
              placeholder="Пароль"
              value={loginForm.password}
              onChange={handleLoginChange}
              required={true}
            />
            {errorLog && <p className="modal-auth__error">{errorLog}</p>}
            <Button className="modal-auth__form-btn" type="submit">
              Войти
            </Button>
          </form>
          <button
            className="modal-auth__link-reg"
            onClick={() => setActiveTab(1)}
          >
            Еще не зарегистрированы?
          </button>
        </div>
        <div className={`modal-auth__block ${activeTab == 1 ? "active" : ""}`}>
          <form onSubmit={handleRegister} action="post" className="modal-auth__form">
            <Input
              className="modal-auth__input"
              type="text"
              name="regName"
              id="regName"
              placeholder="Ваше имя"
              value={registerForm.name}
              onChange={handleRegisterChange}
              required={true}
            />
            <Input
              className="modal-auth__input"
              type="email"
              name="regEmail"
              id="regEmail"
              placeholder="Email"
              value={registerForm.email}
              onChange={handleRegisterChange}
              required={true}
            />
            <Input
              className="modal-auth__input"
              type="password"
              name="regPassword"
              id="regPassword"
              placeholder="Пароль"
              value={registerForm.password}
              onChange={handleRegisterChange}
              required={true}
            />
            <Input
              className="modal-auth__input"
              type="password"
              name="regPasswordRepeat"
              id="regPasswordRepeat"
              placeholder="Повтор пароля"
              value={registerForm.passwordRepeat}
              onChange={handleRegisterChange}
              required={true}
            />
            {errorReg && <p className="modal-auth__error">{errorReg}</p>}
            <Button
              className="modal-auth__form-btn"
              type="submit"
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
}
