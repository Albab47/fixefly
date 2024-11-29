import { client1, LetsStart, videoTumb } from "../assets/images";
import { Sparkel, StartSm } from "../assets/icons";
import { clients } from "../constants";

const Overview = () => {
  return (
    <section className="container">
      {/* Grid container */}
      <div className="h-[35rem] grid grid-cols-4 gap-6 md:grid-cols-8 md:grid-rows-3 lg:grid-cols-10 lg:grid-rows-10">
        {/* Video */}
        <div className="col-span-4 md:row-span-full lg:col-span-4 lg:row-span-full">
          <img src={videoTumb} alt="" className="h-full object-cover rounded-[2.6rem]" />
        </div>

        {/* Keyword */}
        <div className="col-span-4 md:row-span-1 lg:col-span-3 lg:row-span-4">
          <div className="*:py-4 *:px-8 flex flex-col gap-3">
            <p className="text-dark text-lg font-semibold flex self-start gap-2.5 bg-white rounded-full">
              <Sparkel className="size-6 fill-primary" />
              <span>Innovative</span>
            </p>
            <p className="text-white text-lg font-semibold flex self-center gap-2.5 bg-black rounded-full">
              <Sparkel className="size-6 fill-white" />
              <span>Client Focused</span>
            </p>
            <p className="text-dark text-lg font-semibold flex self-end gap-2.5 bg-white rounded-full">
              <Sparkel className="size-6 fill-primary" />
              <span>Creative</span>
            </p>
          </div>
        </div>

        <div className="hidden col-span-4 lg:col-span-3 lg:row-span-4 lg:flex flex-col px-10 py-6 bg-white rounded-3xl">
          <p className="text-primary text-5xl font-semibold">120+</p>
          <p className="text-lg text-light">Project Done</p>

          <div className="py-3.5 flex -space-x-2">
            {clients.map((client) => (
              <div
                key={client.image}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  title={client.name}
                  width="40"
                  height="40"
                  className="max-w-full rounded-full border-2 border-white"
                />
              </div>
            ))}
          </div>

          <p className="text-light text-lg">Global reach, diverse needs</p>
        </div>

        {/* review */}
        <div className="col-span-4 md:row-start-2 md:row-span-2 max-lg:mt-6 lg:col-span-3 lg:row-span-6 bg-white rounded-3xl px-8 pt-8 space-y-10">
          <p className="text-lg font-medium text-dark">
            Amazing work, had severe speed and code issues with a particular
            site. The issue was fixed in a timely manner and the website is now
            so much faster. I will hire again. A++
          </p>

          <div className="flex gap-3 items-center">
            <img src={client1} alt="client" className="rounded-full" />
            <div>
              <p>James Corey</p>
              <span className="flex gap-1">
                <StartSm />
                <StartSm />
                <StartSm />
                <StartSm />
                <StartSm />
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden lg:block col-span-4 lg:col-span-3 row-span-6">
          <img src={LetsStart} alt="" className="h-80 object-cover rounded-3xl w-full" />
        </div>
      </div>
    </section>
  );
};

export default Overview;
