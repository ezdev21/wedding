// components/Container.tsx
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[420px] px-4 text-center">
      {children}
    </div>
  );
}
