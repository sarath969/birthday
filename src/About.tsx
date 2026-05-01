
const About = () => {
  return (
    <section className="min-h-screen bg-[#f7f3ef] px-6 py-16 flex flex-col items-center">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-800">
          About Her ✨
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Not just a person… but a story still unfolding.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl items-center">
        
        {/* Left Image */}
        <div className="relative">
          <img
            src="./anjaliabout.png" // replace later
            alt="her"
            className="rounded-2xl shadow-xl"
          />
          <div className="absolute -bottom-5 -right-5 bg-white p-4 shadow-lg rounded-xl">
            <p className="text-sm text-gray-600 italic">
              "Moments that made her 💫"
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            The Girl Everyone Notices, But No One Fully Understands
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            She walks into a room quietly, but somehow leaves an impression 
            louder than words. Not because she tries… but because she simply *is*.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Strong, yet soft. Independent, yet caring. She doesn’t chase attention — 
            it naturally follows her.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Every chapter of her life has shaped her into someone rare — 
            someone who inspires without even knowing it.
          </p>

          {/* Traits */}
          <div className="mt-6 space-y-2">
            <p className="text-gray-700">💖 Caring</p>
            <p className="text-gray-700">🌱 Growing</p>
            <p className="text-gray-700">✨ Confident</p>
            <p className="text-gray-700">🔥 Unforgettable</p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="mt-16 max-w-2xl text-center">
        <p className="text-xl italic text-gray-700">
          “Not just the places she’s been…  
          but the person she’s becoming.”
        </p>
      </div>

    </section>
  );
};

export default About;