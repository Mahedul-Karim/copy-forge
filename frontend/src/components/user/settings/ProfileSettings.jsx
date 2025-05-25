
import React from "react";
import ProfileForm from "./ProfileForm";
import UpdatePassword from "./UpdatePassword";

const ProfileSetting = () => {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-4">Update Profile</h2>
      <ProfileForm />
      <hr className="my-6 border-border" />
      <UpdatePassword />
    </section>
  );
};

export default ProfileSetting;
