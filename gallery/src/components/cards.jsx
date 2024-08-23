function Cards({ name, image ,onpress}) {
  return (
    <>
      <div onClick={onpress} className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {name}
          </h2>
        </div>
      </div>
    </>
  );
}

export default Cards;
