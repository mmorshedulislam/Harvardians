import Link from "next/link";

const UsefulLinks = () => {
  const links = [
    { title: "Bangladesh", link: "http://www.bangladesh.gov.bd/" },
    { title: "NCTB", link: "http://www.nctb.gov.bd/" },
    { title: "Chittagong Board", link: "https://bise-ctg.portal.gov.bd/" },
    { title: "myGov", link: "https://www.mygov.bd/" },
  ];
  return (
    <>
      <h3 className="text-xl font-semibold">Useful links</h3>
      <ul>
        {links.map((link) => (
          <li className="my-2 hover:underline text-sm">
            <Link href={link?.link}>{link?.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsefulLinks;
