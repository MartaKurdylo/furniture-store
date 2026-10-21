const INK = '#17302b';

// Flat furniture illustrations drawn as SVG, so the site needs no image files.
const SHAPES = {
  sofa: (c) => (
    <>
      <rect x="34" y="38" width="132" height="46" rx="14" fill={c} />
      <rect x="20" y="62" width="28" height="48" rx="12" fill={c} />
      <rect x="152" y="62" width="28" height="48" rx="12" fill={c} />
      <rect x="44" y="72" width="112" height="38" rx="10" fill={c} />
      <rect x="44" y="72" width="112" height="38" rx="10" fill="#fff" opacity=".18" />
      <rect x="34" y="110" width="6" height="14" rx="3" fill={INK} />
      <rect x="160" y="110" width="6" height="14" rx="3" fill={INK} />
    </>
  ),
  chair: (c) => (
    <>
      <rect x="72" y="22" width="56" height="58" rx="12" fill={c} />
      <rect x="64" y="78" width="72" height="14" rx="7" fill={c} />
      <path d="M76 92 68 130M124 92l8 38" stroke={INK} strokeWidth="6" strokeLinecap="round" />
    </>
  ),
  table: (c) => (
    <>
      <rect x="28" y="64" width="144" height="12" rx="6" fill={c} />
      <path d="M48 76v52M152 76v52" stroke={INK} strokeWidth="7" strokeLinecap="round" />
    </>
  ),
  lamp: (c) => (
    <>
      <ellipse cx="100" cy="130" rx="26" ry="5" fill={INK} />
      <path d="M100 126V58" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <path d="M72 58l10-40h36l10 40z" fill={c} />
    </>
  ),
  shelf: (c) => (
    <>
      <rect x="56" y="14" width="88" height="116" rx="5" fill="none" stroke={INK} strokeWidth="6" />
      <path d="M56 52h88M56 90h88" stroke={INK} strokeWidth="5" />
      <rect x="66" y="28" width="12" height="22" rx="2" fill={c} />
      <rect x="82" y="34" width="10" height="16" rx="2" fill={c} />
      <rect x="104" y="66" width="26" height="24" rx="3" fill={c} />
    </>
  ),
};

export default function FurnitureArt({ type, color, label, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 150"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {SHAPES[type](color)}
    </svg>
  );
}
