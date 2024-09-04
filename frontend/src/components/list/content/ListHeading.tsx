import { cn } from "../../../lib/utils";
import { ChildrenType } from "../../../types/CoreTypes";

export default function ListHeading({ children, className }: ChildrenType) {
  return (
    <h3 className={cn("p-4 text-sm font-semibold border-b", className)}>
      {children}
    </h3>
  );
}
