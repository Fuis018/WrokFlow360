import Link from 'next/link'
export default function Pages({ ref,name }) {
  return (
    <Link alt={name} href={`/${ref}`}>{name}</Link>
  );
}