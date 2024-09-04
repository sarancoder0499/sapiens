import { ChildrenType } from "../types/CoreTypes";

export default function UserLayout({ children }: ChildrenType) {
  return (
    <>
      <main className="bg-slate-100 min-h-screen flex justify-center items-start pt-6 pb-6">
        {children}
      </main>
    </>
  );
}
