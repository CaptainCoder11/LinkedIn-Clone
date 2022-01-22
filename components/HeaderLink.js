function HeaderLink({Icon,title,isavatar,feed}){
    return(
        <div className={`cursor-pointer flex flex-col justify-center items-center
        ${feed ? 'text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white hover:lg:-mb-1.5 space-y-1' : 
        "text-gray-500 hover:text-gray-700" }
        `}>
            { isavatar ? <Icon className="!h-7 !w-7 lg:!-mb-1" /> : <Icon/>}
        <h1 className="text-sm">{title}</h1>
        </div>

    )
}
export default HeaderLink