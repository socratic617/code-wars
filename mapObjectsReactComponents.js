{
  allFridges.fridges.map((item, index) => (
    <Card className="max-w-sm m-10" imgSrc={item.fridgeIMG ? item.fridgeIMG : item.pantryIMG} horizontal>
      <h2 className="text-2xl font-bold  text-gray-900 dark:text-white">
        {item.name}
      </h2>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <i className="fas fa-map-marker-alt pr-2" style={{ color: "#f17eb8" }}></i>
        {item.location.address}, { }
        {item.location.cityState}
      </p>
      <Button href={item.location.directionsURL} size="sm" style={{ width: "100%" }} className="bg-pink-400 hover:bg-pink-500">
        Directions
      </Button>
      <Button href={`/fridgeprofile/${item._id}`} size="sm" style={{ width: "100%" }} className="bg-pink-400 hover:bg-pink-500">
        Learn More
      </Button>
    </Card>
  ))
}