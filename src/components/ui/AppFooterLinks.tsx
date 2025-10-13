import { Link } from "react-router";

interface Props {
  title: string;
  items: Array<{
    text: string;
    link?: string;
  }>;
}

export default function AppFooterLinks(props: Props) {
  return (
    <div className="flex flex-col gap-4">
      <span className="mb-6 text-neutral-300">{props.title}</span>
      {props.items.map((item) =>
        item.link ? (
          <Link
            className="font-medium text-neutral-500 cursor-pointer"
            to={item.link}
            key={item.text}
          >
            {item.text}
          </Link>
        ) : (
          <span
            key={item.text}
            className="font-medium text-neutral-500 cursor-pointer"
          >
            {item.text}
          </span>
        )
      )}
    </div>
  );
}
