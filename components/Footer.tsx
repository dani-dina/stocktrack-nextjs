import { footerLinks } from "../constants";
import Link from "next/link";

const Footer : React.FC = () => {
  return (
    <section
      className='w-full bg-[#0D0F42]'
    >
      <div className='mx-7 py-10 md:mx-15 flex flex-col md:flex-row items-start md:items-center justify-between'>
        {
          footerLinks.map((items,key) => (
            <ul className='mt-4' key={key}>
              <span className='block pb-7 font-semibold'>{items.title}</span>
              {
                items.links.map((item,key) => (
                  <Link
                    key={key}
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