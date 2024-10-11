import { Link } from "@nextui-org/react";

export function Footer() {
  const ContactLink = import.meta.env.VITE_AURA_MOROCHO;

  return (
    <footer
      aria-label="Footer section"
      className="p-4 m-auto w-full flex flex-col items-center justify-center relative z-20 bg-black text-white"
    >
      <p className="text-center text-sm">
        Copyright © 2024 Aura. Todos los derechos reservados.
      </p>
      <Link href={ContactLink}>
        <p className="text-center text-sm underline">
          Contacto
        </p>
      </Link>
    </footer>
  );
}