interface Props {
  image: string;
  title: string;
}

export default function AppProductImage(props: Props) {
  return (
    <div className="bg-white-100 aspect-square flex items-center justify-center">
      <img
        src={props.image}
        alt={props.title}
        className="w-2/3 h-2/3 object-contain"
      />
    </div>
  );
}
