import React from 'react';

const PageHeader = ({ title, description, backgroundImage, isPattern = false }) => {
  
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    opacity: '0.9' 

  };

  if (isPattern) {
    backgroundStyles.backgroundRepeat = 'repeat';
    backgroundStyles.backgroundSize = 'auto';
  } else {
    backgroundStyles.backgroundRepeat = 'no-repeat'; 
    backgroundStyles.backgroundSize = 'cover';
  }

  return (
    <div className="relative bg-gray-900">
      <div
        className="absolute inset-0 z-0"
        style={backgroundStyles} 
      ></div>
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
          {description && (
            <p className="text-xl text-white opacity-90">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
