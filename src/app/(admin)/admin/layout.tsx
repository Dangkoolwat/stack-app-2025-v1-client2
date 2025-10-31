import "../../globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>
        <ThemeProvider>
            <div className="flex min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
                <aside className="w-60 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 p-4">
                    <h2 className="text-lg font-semibold mb-4">Admin Menu</h2>
                    <ThemeToggle />
                </aside>
                <main className="flex-1 p-6">{children}</main>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
