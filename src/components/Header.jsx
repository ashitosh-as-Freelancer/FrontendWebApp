import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Close from "../ui/Close";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { miniCartStatus } from "../slices/basketSlice";
import {useDispatch} from 'react-redux';

const StyledHeader = styled.header`
  position: fixed;
  color: var(--white);
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;

  @keyframes move {
    0% {
      left: -100%;
    }

    100% {
      left: 0;
    }
  }

  .navbar {
    position: relative;
    width: 80%;
    min-height: 100vh;
    z-index: 4;
    padding: 10px 20px;
    flex-direction: column;

    .logo {
      font-size: 1.5rem;
      padding: 10px;
      cursor: pointer;

      a {
        text-decoration: none;
        color: var(--white);
      }
    }

    nav {
      width: 100%;
    }

    ul {
      list-style: none;
      display: flex;

      li {
        width: 100%;
        padding-bottom: 10px;
        font-size: 1.3rem;

        a {
          cursor: pointer;
          padding: 5px 9px;
          display: inline-block;
          color: var(--white);
          text-decoration: none;
          border-radius: 5px;

          &:hover {
            color: var(--black);
            background-color: var(--white);
          }
        }
      }
    }

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: var(--black);
      opacity: 0.6;
      z-index: -1;
      left: 0;
      top: 0;
    }

    .burger {
      margin-right: 5px;
      padding-top: 4px;
    }

    &.animate {
      animation: move 0.4s;
    }

    &.hidden-navbar {
      min-height: unset;
      width: 100%;

      &::before,
      nav {
        display: none;
      }
    }

    @media screen and (min-width: 992px) {
      &.animate {
        animation: unset;
      }

      &.hidden-navbar {
        &::before,
        nav {
          display: block;
        }
      }
    }
  }

  @media screen and (min-width: 992px) {
    width: 100%;

    .navbar {
      padding: 0 20px;
      min-height: unset;
      width: 100%;
      justify-content: space-between;
      flex-direction: row;

      .burger {
        display: none;
      }

      nav,
      ul li {
        width: auto;
      }

      ul {
        gap: 10px;

        li {
          padding-top: 10px;
        }
      }
    }
  }
`;

export default function Header() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setHeaderOpen((prevState) => !prevState);
  };

  const handleLink = () => {
    if (window.innerWidth < 992) {
      handleClose();
    }
  };

  return (
    <StyledHeader>
      <div
        className={`navbar d-flex ${!headerOpen ? "hidden-navbar" : "animate"}`}
      >
        {headerOpen && (
          <Close onClick={handleClose}>
            <IoMdClose />
          </Close>
        )}
        <h1 className="logo">
          {!headerOpen && (
            <FaHamburger className="burger" onClick={handleClose} />
          )}
          <NavLink to="/">PizzaStore</NavLink>
        </h1>
        <nav>
          <ul className="d-flex flex-wrap">
            <li className="nav-item">
              <NavLink onClick={handleLink} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleLink} to="/todays">
                Todays Special
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleLink} to="/pizzas">
                Pizzas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleLink} to="/offers">
                Offers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleLink} to="/new">
                New
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleLink} to="/contact">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <a onClick={()=> {dispatch(miniCartStatus(true))}}>
                Cart
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
}
