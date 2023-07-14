const Loading = () => {
    return(
        <>
            <div className="flex min-h-screen items-center justify-center bg-slate-400">
                <div className="flex flex-col items-center gap-3">
                    <div className="flex gap-1 relative">
                        <div className="flex flex-col gap-1">
                            <div className="h-2 w-2 rounded-full bg-blue-800 animate-first"></div>
                            <div className="h-2 w-2 rounded-full bg-cyan-300 animate-sec"></div>
                            <div className="h-2 w-2 rounded-full bg-blue-800 animate-third"></div>
                        </div>

                        <div className="flex flex-col gap-1 ">
                            <div className="h-2 w-2 rounded-full bg-cyan-300 animate-fourth"></div>
                            <div className="h-2 w-2 rounded-full bg-blue-800 animate-fifth"></div>
                            <div className="h-2 w-2 rounded-full bg-cyan-300 animate-sixth"></div>
                        </div>

                        <div className="flex flex-col gap-1 ">
                            <div className="h-2 w-2 rounded-full bg-blue-800 animate-seventh"></div>
                            <div className="h-2 w-2 rounded-full bg-cyan-300 animate-eight"></div>
                            <div className="h-2 w-2 rounded-full bg-blue-800 animate-ninth"></div>
                        </div>

                    </div>

                    <h1 className="text-lime-700 font-mono px-2 rounded-full animate-text">Processing</h1>
                </div>
            </div>
        </>
    )
}

export default Loading