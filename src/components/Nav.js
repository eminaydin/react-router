import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const show = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <Button icon="home" className="home"></Button>
        </Link>

        <Button icon="th list" className="hamburger" onClick={show}></Button>
      </div>
      {open ? (
        <Modal dimmer="blurring" open={open} onClose={close}>
          <Modal.Header>Select a Page to go</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <div>
                <NavLink
                  to="/about"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <li onClick={handleClose}>About</li>
                </NavLink>
                <NavLink
                  to="/projects"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <li onClick={handleClose}>Projects</li>
                </NavLink>
                <NavLink
                  to="/"
                  exact
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <li onClick={handleClose}>Home</li>
                </NavLink>
              </div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={close}>
              You can click outside to go back
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yep, that's where I wanna be"
              onClick={close}
            />
          </Modal.Actions>
        </Modal>
      ) : null}
    </div>
  );
};

export default Nav;
