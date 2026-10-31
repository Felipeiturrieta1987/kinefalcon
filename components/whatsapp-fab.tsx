import { whatsappUrl } from "@/lib/site";
import { WhatsappIcon } from "./brand-icons";

/**
 * Persistent WhatsApp entry point. WhatsApp is how most of this centre's
 * enquiries actually arrive, so it stays reachable from every scroll position.
 */
export function WhatsappFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 text-[#07351a] shadow-xl shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5 sm:bottom-8 sm:right-8"
      aria-label="Escribir por WhatsApp a KineFalcon"
    >
      <WhatsappIcon className="h-7 w-7" />
      <span className="hidden text-sm font-bold sm:inline">Agenda por WhatsApp</span>
    </a>
  );
}
