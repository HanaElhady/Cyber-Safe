import React from "react";

interface SocialMediaProps {
  icon: React.ReactNode; // ✅ Correct type for JSX elements
}

const SocialMedia: React.FC<SocialMediaProps> = ({ icon }) => {
  return (
    <div className="gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
  );
};

export default SocialMedia;
