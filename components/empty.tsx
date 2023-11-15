import Image from "next/image";

interface IEmptyProps {
  label: string;
}
export const EmptyComponent = ({ label }: IEmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image alt="Empty" fill src="/Empty.jpg" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
