import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="pt-12 ">
      <footer id="footer" className="relative z-50 dark:bg-gray-900 pt-5">
        <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16 bg-gray-50">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link
                        className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="./"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link
                        className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="/about"
                      >
                        Our Team
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link
                        className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="/support"
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li className="mt-6">
                      <Link
                        className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="javascript:void(0)"
                      >
                        Terms of service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <div className="w-full lg:w-1/2 px-6">
                <Link href ='/'>
                <Image 
                 src="/images/FortBalance.png"
                 width={350}
                 height={0}
                 alt="logo"
                 priority
                 />
            </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
