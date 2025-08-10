import React from "react";

type BackgroundGradientProps = {
  className?: string;
};

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({ className }) => {
  return (
    <div
      className={`fixed inset-0 -z-50 pointer-events-none ${className}`}
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(13, 15, 255, 0.8), transparent 30%),
          radial-gradient(circle at 80% 20%, rgba(13, 15, 240, 0.7), transparent 35%),
          linear-gradient(120deg, #0D0F42, #0D0F42)
        `,
      }}
    />
  );
};

export default BackgroundGradient;
