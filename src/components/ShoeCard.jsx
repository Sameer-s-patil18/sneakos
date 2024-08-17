const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl 
          ${bigShoeImg === imgURL.bigShoe
            ? 'border-coral-red'
            : 'border-transparent'
          } cursor-pointer max-sm:flex-1
          transition-transform duration-300 transform hover:scale-110
        `}
        onClick={handleClick}
        onMouseEnter={() => changeBigShoeImage(imgURL.bigShoe)} // Change image on hover
      >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
          <img
            src={imgURL.thumbnail}
            alt="shoe collection"
            width={127}
            height={103.34}
            className="object-contain"
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;
  