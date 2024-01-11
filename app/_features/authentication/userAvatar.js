import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function UserAvatar() {
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    // Check if there's an avatar URL in the session storage
    const storedAvatarUrl = sessionStorage.getItem("avatarUrl");

    if (storedAvatarUrl) {
      // If there's an avatar URL in the session storage, use it
      setAvatarUrl(storedAvatarUrl);
    } else {
      // If there's no avatar URL in the session storage, generate a new one
      const randomId = Math.floor(Math.random() * 5000) + 1;
      const newAvatarUrl = `https://i.pravatar.cc/48?u=${randomId}`;

      // Store the new avatar URL in the session storage
      sessionStorage.setItem("avatarUrl", newAvatarUrl);

      // Use the new avatar URL
      setAvatarUrl(newAvatarUrl);
    }
  }, []);

  return (
    <div>
      {avatarUrl && (
        <Image
          src={avatarUrl}
          alt="User Avatar"
          width={45}
          height={45}
          className="rounded-full"
        />
      )}
    </div>
  );
}
