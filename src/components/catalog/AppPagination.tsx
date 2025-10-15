import AppPaginationCell from "../ui/AppPaginationCell";

interface Props {
  current: number;
  total: Array<number>;
  setCurrent: (e: number) => void;
}

export default function AppPagination({ current, total, setCurrent }: Props) {
  function incrementPage() {
    if (current >= total.length) return;

    setCurrent(current + 1);
  }

  function decrementPage() {
    if (current <= 1) return;

    setCurrent(current - 1);
  }

  function setPage(page: number) {
    setCurrent(page);
  }

  return (
    <div className="flex items-center gap-2 px-2 py-1.5 outline outline-white-200 rounded-sm w-max mx-auto">
      <AppPaginationCell
        icon="lucide:chevron-left"
        onClick={() => decrementPage()}
        disabled={current <= 1}
      />
      {total.map((item) => (
        <AppPaginationCell
          text={item}
          key={item}
          onClick={() => setPage(item)}
          active={current === item}
        />
      ))}
      <AppPaginationCell
        icon="lucide:chevron-right"
        onClick={() => incrementPage()}
        disabled={current >= total.length}
      />
    </div>
  );
}
