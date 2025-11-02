"use client";

import copy from "clipboard-copy";
import { uiState } from "%/uiSlice";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Toast } from "@/app/components/Toast";
import BaseLayout from "@/app/components/BaseLayout";

export default function Contact() {
  const form = useRef();
  const timeoutRef = useRef(null);
  const phoneNumber = "+917021739604";
  const { theme } = useSelector(uiState);
  const emailAddress = "mksh400@gmail.com";
  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToastMethod = (message) => {
    setToast({ visible: true, message });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 3000);
  };

  const handleOpenDialer = () => {
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

  const handleCopyEmail = () => {
    const emailToCopy = `${emailAddress}`;
    copy(emailToCopy);
    showToastMethod("Email copied to clipboard");
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const isValid = form.current.reportValidity();
    if (isValid) {
      const nameInput = form.current.elements.from_name;
      const emailInput = form.current.elements.from_email;
      const messageInput = form.current.elements.message;
      if (nameInput.value.length <= 5) {
        showToastMethod("Please enter your full name");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        showToastMethod("Please enter a valid email address");
        return;
      }
      if (messageInput.value.trim().length <= 20) {
        showToastMethod("Message should be more than 20 characters");
        return;
      }
      emailjs
        .sendForm(
          "service_e4fjwoz",
          "template_1d6gvu8",
          form.current,
          "a185DCLwfO5fjx4m0"
        )
        .then(
          (result) => {
            showToastMethod("Your message has been sent");
            e.target.reset();
          },
          (error) => {
            showToastMethod("Oops something went wrong");
          }
        );
    } else {
      showToastMethod("Please fill out all required fields correctly");
    }
  };

  return (
    <BaseLayout>
      <ToastWrapper showToast={toast.visible}>
        <Toast message={toast.message} />
      </ToastWrapper>
      <Heading data-aos="fade-right">Contact</Heading>
      <Description data-aos="fade-right">
        Get in touch for collaborations
      </Description>
      <EmailNumberWrapper>
        <NumberWrapper>
          <Title>+91 7021739604</Title>
          <SubTitle>Phone</SubTitle>
        </NumberWrapper>
        <EmailWrapper>
          <Title>mksh400@gmail.com</Title>
          <SubTitle>Email</SubTitle>
        </EmailWrapper>
      </EmailNumberWrapper>
      <ButtonsWrapper>
        <PrimaryBtn onClick={handleOpenDialer} data-aos="zoom-in-up">
          Schedule a call
        </PrimaryBtn>
        <SecondaryBtn onClick={handleCopyEmail} data-aos="zoom-in-up">
          <i className="bi bi-copy"></i> Copy email
        </SecondaryBtn>
      </ButtonsWrapper>
      <MessageWrapper>
        <HeadingTwo>Send a message</HeadingTwo>
        <FormWrapper
          ref={form}
          onSubmit={handleSendMessage}
          data-aos="zoom-in-up"
        >
          <NameEmailWrapper>
            <TextBox type="text" placeholder="Name" name="from_name" required />
            <TextBox
              type="email"
              placeholder="Email"
              name="from_email"
              required
            />
          </NameEmailWrapper>
          <TextArea type="text" placeholder="Message" name="message" required />
          <SendBtn type="submit">Send Message</SendBtn>
        </FormWrapper>
      </MessageWrapper>
      <HeadingTwo>View on Map</HeadingTwo>
      <GoogleMaps
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24866.562752799404!2d72.98647896047301!3d19.126320510200138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0ae08fd4fcb%3A0xeb29360c730e957f!2sGhansoli%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707053510196!5m2!1sen!2sin"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        data-aos="zoom-in-up"
      ></GoogleMaps>
    </BaseLayout>
  );
}

const ToastWrapper = styled.div`
  position: fixed;
  top: ${(props) => (props.showToast ? "7%" : "-20%")};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
`;

const Heading = styled.h1`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  margin-bottom: 15px !important;
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  margin-bottom: 50px !important;
  padding-bottom: 30px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  border-bottom: 2px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;
`;

const EmailNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;
  transition: all 0.5s ease-in-out;
`;

const EmailWrapper = styled.div`
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const NumberWrapper = styled.div`
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const Title = styled.p`
  font-size: 16px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const PrimaryBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor300
      : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: background-color 0.5s ease-in-out !important;
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.globalColors.blackColor
        : theme.darkMode.blackColor202};
  }
`;

const SecondaryBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  background-color: transparent;
  border: 1.5px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201} !important;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: border 0.5s ease-in-out !important;
    border: 1.5px solid
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? theme.lightMode.greyColor100
          : theme.darkMode.greyColor100} !important;
  }
`;

const MessageWrapper = styled.div`
  margin: 50px 0px;
  transition: all 0.5s ease-in-out;
`;

const HeadingTwo = styled.h2`
  font-weight: 400;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  margin-bottom: 15px !important;
  transition: all 0.5s ease-in-out;
`;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const NameEmailWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

const TextBox = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor202
      : theme.darkMode.blackColor202};
  transition: all 0.5s ease-in-out;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor202
      : theme.darkMode.blackColor202};
  transition: all 0.5s ease-in-out;
`;

const SendBtn = styled.button`
  width: 100%;
  height: 50px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greenColor200
      : theme.darkMode.greenColor200};
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.greenColor100
        : theme.darkMode.greenColor100};
  }
`;

const GoogleMaps = styled.iframe`
  width: 100%;
  height: 350px;
  border-radius: 10px;
`;
