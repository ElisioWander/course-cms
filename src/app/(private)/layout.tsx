import { ReactNode } from "react";
import { BottomNavigation } from "@/components/bottomNavigation";
import { Appbar } from "@/components/appbar";
import { Navbar } from "@/components/navbar";
import { Avatar } from "@/components/avatar";
import { Logo } from "@/components/logo";
import Icon from "@/components/Icon";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen font-default">
      <Appbar.Root>
        <Appbar.Content>
          <Logo />
          <div className="flex items-center gap-6">
            <Navbar.Root>
              <Navbar.Item label="Cursos" href="/courses" />
              <Navbar.Item label="Estatisticas" href="/analytics" />
              <Navbar.Item label="Sessões" href="/sections" />
            </Navbar.Root>

            <div className="w-[1px] h-8 bg-gray-200" />

            <Avatar />
          </div>
        </Appbar.Content>
      </Appbar.Root>

      <div className="flex flex-1 overflow-hidden">{children}</div>

      <BottomNavigation.Root>
        <BottomNavigation.Item
          label="Dashboard"
          href="/dashboard"
          icon={<Icon.LayoutDashboard />}
        />
        <BottomNavigation.Item
          label="Cursos"
          href="/courses"
          icon={<Icon.BookOpen />}
        />
        <BottomNavigation.Item
          label="Aprendizado"
          href="learning"
          icon={<Icon.Route />}
        />
        <BottomNavigation.Item href="" label="Todos" icon={<Icon.Ellipsis />} />
      </BottomNavigation.Root>
    </div>
  );
}
