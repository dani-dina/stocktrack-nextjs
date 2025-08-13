import Image from "next/image";
import Button from "./Button";

const Partners : React.FC = () => {
  const images : string[] = ['google.png','microsoft.png','airbnb.png','paypal.png'];

  return (
    <section className='w-full py-4'>
      <div className='mx-7 md:mx-15'>
        <h1 className='text-5xl font-semibold text-center py-5'>
          Our Partners
        </h1>
        <div className='flex items-center justify-between my-7 py-5'>
          {
            images.map((items,key) =>(
              <Image
                key={key}
                src={`/${items}`}
                width={200}
                height={100}
                alt="logo"
              />
            ))
          }
        </div>
        <div className='flex items-center justify-center py-15'>
          <div className='px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center'>
            <div className='flex items-center justify-around gap-17'>
              <div className='px-15 py-7'>
                <h1 className='text-2xl font-semibold py-7'>Let's Try Our Service Now !</h1>
                <p className='text-white/60'>
                  Everything you need to accept card payments <br /> and grow yout business anywhere on the planet
                </p>
              </div>
              <div className=''>
                <Button
                  children='Get Started'
                  className='bg-gradient-to-r from-[#FE2F92] to-[#544AA5] px-4 py-2 rounded-md'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;