import { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import bg1 from "/v3.jpg";

const StyledContact = styled.div`
  position: relative;
  background: url(${bg1});
  background-size: 100%;
  min-height: 100vh;
  padding: 100px 20px 40px;

  .contact-submit {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    width: 70%;
    border-radius: 10px;
    text-align: center;
  }
`;

const StyledForm = styled.form`
  padding: 20px;
  max-width: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  .contact {
    font-size: 25px;
    text-align: center;
  }

  .contact-image {
    width: 100%;
  }

  label {
    margin-bottom: 3px;
    display: inline-block;
    font-size: 20px;
  }

  input,
  textarea {
    width: 100%;
    padding: 7px 10px;
    font-size: 18px;
    outline: none;
    margin-bottom: 10px;
    background-color: var(--black);
    border: 1px solid var(--white);
    color: var(--white);
    border-radius: 10px;
    padding: 10px 13px;
  }

  @media (min-width: 768px) {
    max-width: 500px;
    padding: 40px 30px;
    margin: auto;
  }
`;

export default function Contact() {
  const [submit, setSubmitStatus] = useState(false);

  const handleFormSubmit = () => {
    setSubmitStatus(true);
  };

  return (
    <StyledContact>
      {!submit ? (
        <StyledForm action="" onSubmit={handleFormSubmit}>
          <div className="contact">Login</div>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div className="mb-3">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <Button className="w-100">Login</Button>
        </StyledForm>
      ) : (
        <div className="contact-submit">Login Successful</div>
      )}
    </StyledContact>
  );
}
