export const Articles = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-5xl px-4">
        <h1 className="text-center text-2xl py-4 sm:py-8 sm:text-3xl">
          Articles
        </h1>

        <div>
          <div className="p-4 rounded-xl bg-cloud-blue-100">
            <a href="/articles/react-leaflet-typescript">
              <h3 className="text-lg font-bold">
                How To Color Individual Countries Using React Leaflet With
                TypeScript
              </h3>
              <br />
              <p>
                I couldn't find any tutorials on how to create a map that colors
                in countries based on a custom list, so today I will be showing
                you how you can make your own map
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
