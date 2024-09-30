import Link from "next/link"

const MenuItem = ({lien, titre}) => {
  return (
    <div className="px-4 py-2 rounded-lg text-white">
      <Link href={lien}>{titre}</Link>
    </div>
  )
}

export default MenuItem