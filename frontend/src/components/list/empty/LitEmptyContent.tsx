import { ChildrenType } from "../../../types/CoreTypes";

export default function ListEmptyContent({ children }: ChildrenType) {
  return (
    <p className="text-sm text-gray-500 text-center lg:w-[50%]">{children}</p>
  );
}
