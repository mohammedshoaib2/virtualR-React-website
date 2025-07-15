import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants/index.jsx";
const Footer = () => {
  const footerLinks = [resourcesLinks, platformLinks, communityLinks];
  return (
    <div className="mx-[20px] lg:mx-auto flex flex-col  mt-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
        {footerLinks.map((footer, index) => {
          return (
            <div key={index} className="flex flex-col">
              <h2 className="mb-5 font-medium text-md">
                {index === 0
                  ? "Resources"
                  : index === 1
                  ? "Platform"
                  : index === 2
                  ? "Community"
                  : null}
              </h2>
              <ul className="flex flex-col gap-3">
                {footer.map((item, index) => {
                  return (
                    <a
                      className="text-neutral-500"
                      href={item.href}
                      key={index}
                    >
                      {item.text}
                    </a>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
