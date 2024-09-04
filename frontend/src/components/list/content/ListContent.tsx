import { cn } from "../../../lib/utils";
import { ChildrenType } from "../../../types/CoreTypes";

export default function ListContent({ children, className }: ChildrenType) {
  return (
    <p className={cn("p-4 text-sm border-b text-gray-600", className)}>
      {children}
    </p>
  );
}
