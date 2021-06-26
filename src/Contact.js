import React from "react";

function Contact(props) {
  const worklocation = [
    { hours: "Morning", location: "Kandarn" },
    { hours: "Evening", location: "Seyon" }
  ];
  const work = worklocation.map((wl) => {
    return (
      <div>
        {wl.hours} :{wl.location}{" "}
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
