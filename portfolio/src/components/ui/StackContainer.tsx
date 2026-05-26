import React from 'react';

interface StackImage {
  name: string;
  icon: React.ReactNode;
}

interface StackContainerProps {
  icons: StackImage[];
}

const StackContainer: React.FC<StackContainerProps> = ({ icons }) => {
  const loopIcons = [...icons, ...icons];

  return (
    <div className="stack-container">
      <div className="stack-track">
        {loopIcons.map((icon, index) => (
          <div key={`${icon.name}-${index}`} className="stack-item">
            {icon.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackContainer;