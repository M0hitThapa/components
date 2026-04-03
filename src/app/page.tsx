import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { ProfileCard } from "@/components/profile-card";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { readFileSync } from "node:fs";
import { join } from "node:path";

type HomeProps = {
  searchParams?: Promise<{
    file?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const selectedFile = params?.file === "page.tsx" ? "page.tsx" : "profile-card.tsx";
  const profileCardSource = readFileSync(
    join(process.cwd(), "src/components/profile-card.tsx"),
    "utf8"
  );
  const pageSource = readFileSync(join(process.cwd(), "src/app/page.tsx"), "utf8");
  const currentSource = selectedFile === "page.tsx" ? pageSource : profileCardSource;

  return (
    <SidebarProvider>
      <AppSidebar activeFile={selectedFile} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </header>
        <main className="flex flex-1 p-4">
          <div className="grid w-full gap-4 lg:grid-cols-2">
            <section className="overflow-auto rounded-xl border">
              <div className="h-[calc(100vh-7rem)] overflow-auto">
                <div className="block dark:hidden">
                  <SyntaxHighlighter
                    language="tsx"
                    style={oneLight}
                    showLineNumbers
                    wrapLongLines
                    customStyle={{
                      margin: 0,
                      minHeight: "100%",
                      background: "transparent",
                      fontSize: "12px",
                    }}
                  >
                    {currentSource}
                  </SyntaxHighlighter>
                </div>
                <div className="hidden dark:block">
                  <SyntaxHighlighter
                    language="tsx"
                    style={oneDark}
                    showLineNumbers
                    wrapLongLines
                    customStyle={{
                      margin: 0,
                      minHeight: "100%",
                      background: "transparent",
                      fontSize: "12px",
                    }}
                  >
                    {currentSource}
                  </SyntaxHighlighter>
                </div>
              </div>
            </section>

            <section className="overflow-auto rounded-xl border">
              <div className="flex min-h-[calc(100vh-7rem)] items-center justify-center p-4">
                <ProfileCard />
              </div>
            </section>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

