import React from "react";
import { Link } from "react-router-dom";
import { ButtonMail } from "../styles/MailTo.style";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <ButtonMail>
            <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
            </Link>
        </ButtonMail>
    );
};

export default ButtonMailto;