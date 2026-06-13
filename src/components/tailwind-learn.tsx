import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const TailwindLearn = () => {
  return (
    <div className="h-screen mx-auto max-w-4xl w-full pt-20 pb-10">
      <Header />
      <div className="grid grid-cols-4 gap-2 p-1 mask-b-from-50% my-10 border  border-neutral-200 rounded-3xl ">
        <Column>
          <Card
            href="https://posthog1.com"
            src="/images/1.png"
            alt="saas"
            className="rounded-tl-[calc(24px-4px)]"
          />
          <Card
            href="https://posthog2.com"
            src="/images/2.png"
            alt="linear2"
            className=""
          />
          <Card
            href="https://posthog3.com"
            src="/images/3.png"
            alt="landing3"
            className=""
          />
        </Column>
        <Column>
          <Card
            href="https://posthog4.com"
            src="/images/4.png"
            alt="vercel"
            className=""
          />
          <Card
            href="https://posthog5.com"
            src="/images/5.png"
            alt="linear"
            className=""
          />
          <Card
            href="https://posthog6.com"
            src="/images/6.png"
            alt="landing"
            className=""
          />
          <Card
            href="https://posthog7.com"
            src="/images/2.png"
            alt="landing2"
            className=""
          />
        </Column>
        <Column>
          <Card
            href="https://posthog8.com"
            src="/images/3.png"
            alt="verc2el"
            className=""
          />
          <Card
            href="https://posthog9.com"
            src="/images/4.png"
            alt="line2ar"
            className=""
          />
          <Card
            href="https://posthog0.com"
            src="/images/7.png"
            alt="verceql"
            className=""
          />
        </Column>
        <Column>
          <Card
            href="https://posthog1.com"
            src="/images/1.png"
            alt="verdcel"
            className="rounded-tr-[calc(24px-4px)]"
          />
          <Card
            href="https://posthog3.com"
            src="/images/2.png"
            alt="linesar"
            className=""
          />
          <Card
            href="https://posthog2.com"
            src="/images/5.png"
            alt="vercael"
            className=""
          />
          <Card
            href="https://posthog4.com"
            src="/images/6.png"
            alt="linefar"
            className=""
          />
        </Column>
      </div>
    </div>
  );
};

export const Card = ({
  src,
  alt,
  className,
  href,
}: {
  src: string;
  alt: string;
  className: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn("card overlay group rounded-md", className)}
    >
      <Image src={src} alt={alt} height={500} width={500} />
      <p className="absolute z-20 opacity-0 group-hover:opacity-100 transition-all duration-200 inset-0 text-white font-medium text-sm m-auto flex items-center justify-center">
        {href.split("https://")}
      </p>
    </Link>
  );
};

const Column = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Header = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold tracking-tighter text-neutral-700">
        Bento grids are cool you should use it sometimes
      </h1>
      <p className="text-base max-w-xl text-neutral-500 mt-4">
        Bento grids are awesome to use when you are building landing pages.They
        are really useful for those kind of things its not good for portfolio or
        something like this but they look really good in landing pages .
      </p>
    </>
  );
};
