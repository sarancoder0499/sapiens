import { ChildrenType } from "../../../types/CoreTypes";

export default function ListEmptyTitle({ children }: ChildrenType) {
  return <h2 className="text-base font-semibold text-gray-600">{children}</h2>;
}
