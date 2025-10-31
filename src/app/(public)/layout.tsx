import "../globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function PublicLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>
        <ThemeProvider>
            <header className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 p-4">
                <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    User Landing
                </h1>
                <ThemeToggle />
            </header>
            <main className="container mx-auto p-6">{children}</main>
        </ThemeProvider>
        </body>
        </html>
    );
}
