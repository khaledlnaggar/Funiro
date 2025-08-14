import Link from "next/link";

const Footer = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const helpLinks = [
    { label: "Payment Options", href: "/payment-options" },
    { label: "Returns", href: "/returns" },
    { label: "Privacy Policies", href: "/privacy-policy" },
  ];

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="flex flex-col gap-12">
            <span className="font-bold text-xl text-black">Funiro.</span>

            <p className="text-neutral-400 text-sm leading-relaxed">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-12">
            <h3 className="font-medium text-neutral-400">Links</h3>
            <nav className="flex flex-col gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-black hover:text-primary text-sm transition-colors font-semibold "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Help */}
          <div className="flex flex-col gap-12">
            <h3 className="font-medium text-neutral-400">Help</h3>
            <nav className="flex flex-col gap-8">
              {helpLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-black hover:text-primary text-sm transition-colors font-semibold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-12">
            <h3 className="font-medium text-neutral-400">Newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 pr-4 py-2 text-sm border-b-2 bg-transparent border-black   focus:outline-none "
              />
              <button className="text-sm border-b-2 bg-transparent border-black uppercase">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200">
          <p className="text-black text-sm ">
            2023 Funiro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
