import { ChildrenType } from "../types/CoreTypes";

export default function HomeLayout({ children }: ChildrenType) {
  return (
    <>
      <main className="bg-slate-50 min-h-screen flex justify-center items-start lg:items-center">
        {children}
      </main>
    </>
  );
}
