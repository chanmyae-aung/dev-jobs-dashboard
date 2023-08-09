import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showApps, setShowApps] = useState(false);
  const [image, setImage] = useState();
  const [showNoti, setShowNoti] = useState(false);
  const [showSetting, setShowSetting] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showStatus, setShowStatus] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [showPassConfirm, setShowPassConfirm] = useState(false)
  const [token, setToken] = useState(false)
  const nav = useNavigate()

  const submitHandler = () => {
    setToken(!token)
    if (token === true) nav("/crm")
  }

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleLanguage = () => {
    setShowLanguage(!showLanguage);
  };

  const toggleApps = () => {
    setShowApps(!showApps);
  };

  const toggleNoti = () => {
    setShowNoti(!showNoti);
  };

  const toggleSetting = () => {
    setShowSetting(!showSetting)
  }
  const toggleProfile = () => {
    setShowProfile(!showProfile)
    setShowStatus(false)
  }
  const toggleStatus = () => {
    setShowStatus(!showStatus)
  }
  const toggleShowPass = () => {
    setShowPass(!showPass)
  }
  const toggleShowPassConfirm = () => {
    setShowPassConfirm(!showPassConfirm)
  }

  const hide = () => {
    show === true && setShow(false);
    showLanguage === true && setShowLanguage(false);
    showApps === true && setShowApps(false);
  };

  const data = {
    show,
    setShow,
    toggleShow,
    showLanguage,
    toggleLanguage,
    image,
    setImage,
    showApps,
    toggleApps,
    showNoti,
    toggleNoti,
    showSetting,
    toggleSetting,
    showProfile,
    toggleProfile,
    showStatus,
    toggleStatus,
    showPass,
    toggleShowPass,
    showPassConfirm,
    toggleShowPassConfirm,
    token,
    submitHandler,
    hide,
  };
  return <stateContext.Provider value={data}>{children}</stateContext.Provider>;
};

export const stateContextCustom = () => useContext(stateContext);
