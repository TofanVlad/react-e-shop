import { Link } from "react-router";
import { Icon } from "@iconify/react";

interface Props {
  text: string;
  link: string;
}

export default function AppBreadcrumbs(props: Props) {
  return (
    <div className="flex items-center gap-1 py-4 container">
      <Link to="/" className="font-medium text-neutral-500">
        Ecommerce
      </Link>
      <Icon icon="lucide:chevron-right" className="text-neutral-400 size-6" />
      <Link to={props.link} className="font-medium text-neutral-900">
        {props.text}
      </Link>
    </div>
  );
}
