import images from '@data/gallery-images.json';

const ImageGallery = () => {
  if (!images) return null;

  return (
    <div className="flex overflow-x-hidden">
      {images.map((image, index) => (
        <div key={index} className={`w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4 ${index === 0 ? '-ml-32' : ''}`}>
          <img
            className={`block w-full h-full object-cover ${index < 2 ? 'rounded-3xl' : 'rounded-2xl'}`}
            src={image}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;