
import { progressItems } from "../constants";

const OurProgress: React.FC = () => {
  return (
    <section className="w-full py-15 my-7">
      <div className="mx-7 md:mx-15">
        <h1 className="font-semibold text-4xl">There is Some Title Here</h1>
        <div className="flex flex-col-reverse md:flex-row gap-x-5 mt-7">
          <div className="mr-5 px-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
            <h2 className="py-4 text-4xl font-semibold">Total BTCE on Stock</h2>
            <h1 className="text-2xl">$ 125,875,986.000</h1>
            <div className="h-[1px] bg-gray-400 rounded-2xl px-10 my-8"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 py-4">
              {progressItems.map((items) => (
                <div
                  key={items.id}
                  className={`${
                    items.isLine
                      ? "w-[1px] py-9 bg-white/30 rounded-2xl"
                      : ""
                  } mr-4`}
                >
                  {!items.isLine && (
                    <>
                      <h1 className="text-2xl text-center font-bold text-[#FE2F92]">
                        {items.title}
                      </h1>
                      <h1 className="text-center">{items.description}</h1>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 mx-5 pb-7">
            <div>
              <div>
                <p>Progress 1</p>
                <div className="px-3 py-1 rounded-2xl border border-gray-600">
                  <div className="rounded-2xl px-4 py-1 bg-red-500 w-3/5"></div>
                </div>
              </div>

              <div className="my-3">
                <p>Progress 2</p>
                <div className="px-3 py-1 rounded-2xl border border-gray-600">
                  <div className="rounded-2xl px-4 py-1 bg-green-500 w-4/5"></div>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-semibold pt-9">Pre Sales Bonuses</h1>
            <p className="text-white/60 py-5">
              Track, manage, and optimize your inventory in real-time with ease. <br />
              Stay in control of stock, sales, and growth  all in one powerful platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProgress;
