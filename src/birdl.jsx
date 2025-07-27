const BirdLamps = () => {
    const birdLampImages = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      src: `/Birds/image${i + 1}.jpg`,
      title: `Bird Lamp ${i + 1}`,
      price: Math.floor(Math.random() * 20000) + 25000,
    }));
  
    return (
      <section className="mt-10 px-4">
        <h2 className="text-2xl font-bold mb-4">All Bird Lamps</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {birdLampImages.map((lamp) => (
            <div key={lamp.id} className="border rounded-lg overflow-hidden shadow-md">
              <img src={lamp.src} alt={lamp.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{lamp.title}</h3>
                <p className="text-gray-600">Rs. {lamp.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default BirdLamps;
  
  