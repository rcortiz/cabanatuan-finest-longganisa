import ChevronLeftIcon from "@/component/icons/chevron-left";
import ChevronRightIcon from "@/component/icons/chevron-right";
import FacebookIcon from "@/component/icons/facebook";
import InstagramIcon from "@/component/icons/instagram";
import MailIcon from "@/component/icons/mail";
import MapIcon from "@/component/icons/map";
import PhoneIcon from "@/component/icons/phone";
import WhatsappIcon from "@/component/icons/whatsapp";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto] overflow-y-auto bg-background">
      <header className="h-30 flex items-center justify-center bg-primary p-4">
        <ul className="text-md flex items-center gap-6 text-center font-medium uppercase text-background">
          <li className="underline-offset-4 hover:underline">
            <a href="#">Home</a>
          </li>
          <li className="underline-offset-4 hover:underline">
            <a href="#">About Us</a>
          </li>
          <li className="underline-offset-4 hover:underline">
            <a href="#">Business</a>
          </li>
          <div className="relative mx-6 h-24 w-24">
            <Image
              src="/images/logo.png"
              alt="Cabanatuan Finest Longganisa"
              fill
              className="absolute object-cover"
            />
          </div>
          <li className="underline-offset-4 hover:underline">
            <a href="#">Brands</a>
          </li>
          <li className="underline-offset-4 hover:underline">
            <a href="#">Careers</a>
          </li>
          <li className="underline-offset-4 hover:underline">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </header>
      <main>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="relative h-[1100px] w-full">
              <Image
                src="/images/home-banner1.jpg"
                alt="Cabanatuan Finest Longganisa"
                fill
                className="absolute object-fill"
              />
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle btn-outline">
                <ChevronLeftIcon className="h-6 w-6" />
              </a>
              <a href="#slide2" className="btn btn-circle btn-outline">
                <ChevronRightIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex h-80 w-full flex-col items-center justify-center bg-secondary">
        <div className="container text-accent">
          <div className="grid grid-cols-[300px_300px_300px_auto]">
            <div className="space-y-2">
              <h2 className="font-bold">Company</h2>
              <ul className="text-sm font-light">
                <li className="mb-2">
                  <a href="#">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Our History</a>
                </li>
                <li className="mb-2">
                  <a href="#">Our Advocacy</a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="font-bold">Business</h2>
              <ul className="text-sm font-light">
                <li className="mb-2">
                  <a href="#">Food Store</a>
                </li>
                <li className="mb-2">
                  <a href="#">Food Service</a>
                </li>
                <li className="mb-2">
                  <a href="#">Home Delivery</a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="font-bold">Careers</h2>
              <ul className="text-sm font-light">
                <li className="mb-2">
                  <a href="#">Job Opening</a>
                </li>
                <li className="mb-2">
                  <a href="#">Career Features</a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="font-bold">Store Details</h2>
              <ul className="text-sm font-light">
                <li className="mb-2 flex">
                  <MapIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                  Cabanatuan’s Finest Longganisa, Purok 4, Kapitan Pepe,
                  Cabanatuan City, Philippines 0906 021 0044
                </li>
                <li className="mb-2 flex">
                  <PhoneIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                  0906 021 0044
                </li>
                <li className="mb-2 flex">
                  <MailIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                  cabfinest@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t-2 border-primary">
            <div className="flex items-center justify-between pt-5">
              <p className="text-xs">
                &copy; 2025 Cabanatuan Finest Longganisa. All Rights Reserved.
              </p>
              <div className="flex gap-4 opacity-80">
                <a href="" target="_blank">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a href="" target="_blank">
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a href="" target="_blank">
                  <WhatsappIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
