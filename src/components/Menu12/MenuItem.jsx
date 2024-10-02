import Link from "next/link"

const MenuItem = ({lien, titre}) => {
  return (
      <Link href={lien} className="menu">{titre}</Link>
  )
}

export default MenuItem