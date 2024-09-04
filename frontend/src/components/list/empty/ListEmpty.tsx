import { ChildrenType } from "../../../types/CoreTypes";

export default function ListEmpty({ children }: ChildrenType) {
  return (
    <article className="grow flex flex-col justify-center items-center p-5 mt-10 mb-10 gap-2">
      {children}
    </article>
  );
}
