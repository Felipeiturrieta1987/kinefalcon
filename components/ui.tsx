import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import {
  Bone,
  Brain,
  Droplets,
  Hand,
  Stethoscope,
  Trophy,
  Waves,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/lib/services";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export const serviceIcons: Record<IconKey, LucideIcon> = {
  bone: Bone,
  trophy: Trophy,
  wind: Wind,
  zap: Zap,
  waves: Waves,
  droplets: Droplets,
  hand: Hand,
  brain: Brain,
  stethoscope: Stethoscope,
};

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cx("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={cx(
        "text-xs font-semibold uppercase tracking-[0.18em]",
        tone === "dark" ? "text-aqua-300" : "text-aqua-700",
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  return (
    <div className={cx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cx(
          "font-display mt-3 text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl",
          tone === "dark" ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p className={cx("mt-4 text-lg leading-8", tone === "dark" ? "text-navy-100" : "text-navy-700")}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-aqua-500 text-navy-950 hover:bg-aqua-400 shadow-lg shadow-aqua-500/25 hover:shadow-aqua-400/30",
  secondary: "bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/20",
  ghost: "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
  whatsapp: "bg-[#25D366] text-[#07351a] hover:bg-[#1fbe5a] shadow-lg shadow-[#25D366]/25",
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";

export function Button({
  variant = "primary",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant }) {
  return <Link className={cx(buttonBase, buttonStyles[variant], className)} {...props} />;
}

export function ExternalButton({
  variant = "primary",
  className,
  ...props
}: ComponentProps<"a"> & { variant?: ButtonVariant }) {
  return (
    <a
      className={cx(buttonBase, buttonStyles[variant], className)}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-200",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Pill({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold",
        tone === "dark"
          ? "bg-white/10 text-aqua-100 ring-1 ring-inset ring-white/15"
          : "bg-aqua-50 text-aqua-800 ring-1 ring-inset ring-aqua-200",
      )}
    >
      {children}
    </span>
  );
}
