import Link from "next/link";

const SiteMap = () => {
  const siteMaps = [
    { title: "Login", link: "/login" },
    { title: "Admission", link: "/admission" },
    { title: "Notices", link: "/notices" },
    { title: "Gallery", link: "/gallery" },
  ];
  return (
    <>
      <h3 className="text-xl font-semibold">Site map</h3>
      <ul>
        {siteMaps.map((link) => (
          <li className="my-2 hover:underline text-sm">
            <Link target="_blank" href={link?.link}>
              {link?.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SiteMap;
