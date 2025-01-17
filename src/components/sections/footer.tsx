import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";
import WhatsappIcon from "@/components/icons/whatsapp";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex h-80 w-full flex-col items-center justify-center bg-secondary">
      <div className="text-tx-accent container">
        <div className="grid grid-cols-4">
          <div className="space-y-2">
            <h2 className="font-semibold">Company</h2>
            <ul className="text-sm">
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
            <h2 className="font-semibold">Business</h2>
            <ul className="text-sm">
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
            <h2 className="font-semibold">Careers</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#">Job Opening</a>
              </li>
              <li className="mb-2">
                <a href="#">Career Features</a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold">Resources</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#">FAQs</a>
              </li>
              <li className="mb-2">
                <a href="#">Terms and Conditions</a>
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
  );
}
