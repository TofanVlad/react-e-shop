import { useMemo } from "react";
import AppPaginationCell from "../ui/AppPaginationCell";

interface Props {
  current: number;
  total: Array<number>;
  setCurrent: (e: number) => void;
}

export default function AppPagination({ current, total, setCurrent }: Props) {
  const getRelativePosition = useMemo(() => {
    if (total.length === current) {
      return total.slice(current - 3, current + 1);
    }
    if (current > 1) {
      return total.slice(current - 2, current + 1);
    }
    return total.slice(current - 1, current + 2);
  }, [current]);

  function incrementPage() {
    if (current >= total.length) return;

    setCurrent(current + 1);
  }

  function decrementPage() {
    if (current <= 1) return;

    setCurrent(current - 1);
  }

  return (
    <div className="flex items-center gap-2 px-2 py-1.5 outline outline-white-200 rounded-sm w-max mx-auto desktop:mt-16 tablet:mt-8 mt-6">
      <AppPaginationCell
        icon="lucide:chevron-left"
        onClick={() => decrementPage()}
        disabled={current <= 1}
      />
      {total.length <= 5 ? (
        total.map((item) => (
          <AppPaginationCell
            text={item}
            key={item}
            onClick={() => setCurrent(item)}
            active={current === item}
          />
        ))
      ) : (
        <>
          {current > 3 && (
            <>
              <AppPaginationCell text={1} onClick={() => setCurrent(1)} />
              <AppPaginationCell text={2} onClick={() => setCurrent(2)} />
              <AppPaginationCell text="..." disabled={true} />
            </>
          )}
          {getRelativePosition.map((item) => (
            <AppPaginationCell
              text={item}
              key={item}
              onClick={() => setCurrent(item)}
              active={current === item}
            />
          ))}
          {current + 3 < total.length && (
            <>
              <AppPaginationCell text="..." disabled={true} />
              <AppPaginationCell
                text={total.length - 1}
                onClick={() => setCurrent(total.length - 1)}
              />
              <AppPaginationCell
                text={total.length}
                onClick={() => setCurrent(total.length)}
              />
            </>
          )}
        </>
      )}
      <AppPaginationCell
        icon="lucide:chevron-right"
        onClick={() => incrementPage()}
        disabled={current >= total.length}
      />
    </div>
  );
}
