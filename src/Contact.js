import React from "react";

function Contact(props) {
  const worklocation = [
    { hours: "Evening: 4.30pm - 7.30pm", location: " Clinic & Online" }
  ];
  const work = worklocation.map((wl) => {
    return (
      <div>
        {wl.hours} / {wl.location}{" "}
      </div>
    );
  });

  return (
    <div>
      {work}
      Contact Number: {props.phone}
    </div>
  );
}
export default Contact;
