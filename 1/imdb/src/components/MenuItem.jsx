import Link from "next/link";
const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl mx-4 sm:hidden " />
        <p className="hidden sm:inline my-2">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
