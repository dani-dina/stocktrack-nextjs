import { footerLinks } from "../constants";
import Link from "next/link";

const Footer : React.FC = () => {
  return (
    <section
      className='w-full bg-[#0D0F42]'
    >
      <div className='mx-7 py-10 md:mx-15 flex flex-col md:flex-row items-center justify-between'>
        {
          footerLinks.map((items) => (
            <ul className='mt-4'>
              <span className='block pb-7 font-semibold'>{items.title}</span>
              {
                items.links.map((item) => (
                  <Link
                    href={item.href}
                    className='block my-1.5 text-white/70'
                  >
                    {item.name}
                  </Link>
                ))
              }
            </ul>
          ))
        }
      </div>
    </section>
  );
}

export default Footer;