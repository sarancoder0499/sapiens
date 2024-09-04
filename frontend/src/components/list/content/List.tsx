import { ChildrenType } from "../../../types/CoreTypes";

export default function List({ children }: ChildrenType) {
  return (
    <section className="grid grid-rows-1 grid-cols-2 lg:grid-cols-3 items-center justify-center">
      {children}
    </section>
  );
}
