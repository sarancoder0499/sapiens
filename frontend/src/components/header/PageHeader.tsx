import { ChildrenType } from "../../types/CoreTypes";

export default function PageHeader({ children }: ChildrenType) {
  return (
    <article className="flex justify-between items-center p-4 border-b">
      {children}
    </article>
  );
}
