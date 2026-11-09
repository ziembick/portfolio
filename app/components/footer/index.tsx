import { IoMdHeart } from 'react-icons/io'

// Razão social e CNPJ visíveis no rodapé: a Meta usa isso para a verificação da empresa
export const Footer = () => {
  return (
    <footer className="w-full bg-gray-950  px-4 py-4">
      <div className="flex flex-col items-center gap-1.5 text-center font-mono">
        <span className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400">
          Made with <IoMdHeart className='text-customPurple' size={13}/> by
          <strong className="font-medium"> Paulo Ziembick</strong>
        </span>
        <p className="text-[11px] sm:text-xs text-gray-500">
          PAULO HENRIQUE ZIEMBICK MIRANDA DESENVOLVIMENTO DE SOFTWARE LTDA · CNPJ 66.767.284/0001-54 · contato@ziembick.com
        </p>
      </div>
    </footer>
  );
};