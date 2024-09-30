import HopitalMenu from "@/components/Menus/HopitalMenu";
import Logo from "@/components/Logo";
import UserInfo from "@/components/UserInfo";

export default function HopitalLayout({ children }) {
  return (
    <div className="h-screen flex p-2">
      {/* Partie gauche */}
      <div className="w-[20%] p-3 pt-8 bg-vert rounded-2xl">
        <Logo/>
        <div className="mt-8 p-2">
          <HopitalMenu/>
        </div>
      </div>
      {/* Partie droite */}
      <div className="w-[80%] ml-7">
      <div className="h-[8%] items-center p-4 flex justify-between">
          {/* TITRE */}
          <div className="hidden sm:flex w-full text-xl">
            <h1>Hôpital CHU Tambohobe</h1>
          </div>
          {/* UTILISATEUR */}
          <UserInfo/>
        </div>
        <div className="h-[92%] bg-gray-100 p-3 rounded-xl">
          {children}
        </div>
      </div>
    </div>
  );
}