import React from "react";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
export default () => {
    const override = css`
    display: block;
    margin: 0 auto;
`;
    return(<section className="sm-loader">
        <FadeLoader
        css={override}
        />
        
    </section>)
};
