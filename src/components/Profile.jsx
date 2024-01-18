import React, { useEffect } from "react";

const Profile = ({ setActivePage }) => {
  useEffect(() => {
    setActivePage("profile");
  }, [setActivePage]);

  return (
    <section>
      <div className="contaienr-fluid">
        <div className="row mt-5 ps-3 p-5">profile</div>
      </div>
    </section>
  );
};

export default Profile;
