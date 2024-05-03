export default function page({ params }: { params: { title: string } }) {
    return <div>Blog detail: {params.title}</div>
}
