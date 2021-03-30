import React from "react";

const Details = (props) => {
  return (
    <React.Fragment>
      <p>
        Nike T-Shirt is the branded tshirt which gives you relax and light feeling with extra 
        premium material which makes you day awesome.
      </p>
      <details>
        <summary>Even more details</summary>
        <p>Donot dry at sun.</p>
      </details>
      <details>
        <summary>Even more details</summary>
        <p>Donot wash frequently.</p>
      </details>
      <hr />
     
    </React.Fragment>
  );
};

export default Details;
