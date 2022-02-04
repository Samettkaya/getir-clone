function Category({ category }) {
	return (
        <a href="#" className="h-[108.8px] flex group justify-center items-center rounded transition-colors hover:bg-purple-50 flex-col md:p-4">
            <img src={category.image} className="w-12 h-12 rounded-lg border border-gray-200 object-cover" />
            <span className="h-10 tracking-[-0.28px] s:leading-4 w-full text-center break-words font-semibold text-[#525252] group-hover:text-[#5d3ebc] md:whitespace-nowrap block mt-3 text-[15px]">{category.title}</span>
        </a>
	)
}

export default Category