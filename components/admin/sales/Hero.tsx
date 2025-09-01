const Hero = () => {
  return (
    <section
      className="
        flex justify-center items-center
        relative min-h-full
        bg-cover bg-center bg-no-repeat
        before:content-[''] before:absolute before:inset-0 
        before:bg-gradient-to-r before:from-black/60 before:to-black/20 before:z-0
        px-4 sm:px-6 lg:px-8
        pt-32 pb-20
        w-full
      "
      style={{
        backgroundImage: "url('/images/hero/background-02.png')",
      }}
    >
      {/* Left Column */}
      <div className="relative z-10">
        <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold text-white leading-none tracking-wide sm:text-6xl">
          We love
          <span className="bg-primary py-2 px-4 rounded-lg tracking-widest">
            Shopping
          </span>
        </h1>

        <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          temporibus dolores nihil facere ducimus officia aspernatur dolore
          totam quisquam iste nobis velit reiciendis suscipit eveniet maiores
          enim, rerum obcaecati eius.
        </p>
      </div>
    </section>
  );
};

export default Hero;
