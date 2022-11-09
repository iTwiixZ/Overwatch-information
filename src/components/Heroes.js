import axios from "axios";
import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Iframe from "react-iframe";

function Heroes({ heroes }) {
  // eslint-disable-next-line no-empty-pattern
  const [info, setInfo] = useState({});

  const [medias, setMedia] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const source = medias?.link;

  const getHeroDetail = () => {
    axios.get(`/heroes/${heroes.key}`).then((res) => setInfo(res.data));
    axios.get(`/heroes/${heroes.key}`).then((res) => setMedia(res.data.media));
  };
  const wrapperFunction = () => {
    handleOpen();
    getHeroDetail();
  };

  return (
    <div>
      <div
        className="hero_profile"
        onClick={wrapperFunction}
        heroes={heroes}
        key={heroes.key}
      >
        <img src={heroes.portrait} alt={heroes.name} />
        <p>{heroes.name}</p>
      </div>
      <div className="modal_container">
        <Modal
          className="modal"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal_info">
            <div className="hero_info">
              <div className="modal_picture">
                <img src={heroes.portrait} alt={heroes.name} />
                <p>Rôle : {info.role}</p>
                <p>Localisation : {info.location}</p>
              </div>

              <div className="modal_hero_info">
                <p>Description : {info.description}</p>
                <p>Histoire : {info.story}</p>
              </div>

              <div className="video_wrapper">
                {medias?.link ? (
                  <Iframe
                    url={source}
                    frameBorder="2"
                    title={heroes.name + "média"}
                    allow="fullScreen"
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <p>Pas de média...</p>
                )}
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Heroes;
